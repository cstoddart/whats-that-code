import { h, app } from 'hyperapp';
import { Link, Route, location } from "@hyperapp/router"
import statusCodesJSON from './status-codes.json';
import Router from './router';
import Chance from 'chance';

import Navigation from './components/navigation';
import ThemePicker from './components/theme-picker';
import Footer from './components/footer';

import './styles.css';

const random = new Chance;
const statusCodes = statusCodesJSON.sort((a, b) => parseInt(a.code) - parseInt(b.code));

const state = {
  location: location.state,
  theme: 'blue',
  statusCodes,
  filter: '',
  filteredCodes: statusCodes,
  randomIndex: random.integer({ min: 0, max: statusCodes.length - 1 }),
  cardFlipped: '',
};

const actions = {
  location: location.actions,
  changeFilter: event => (state, actions) => {
    const value = event.target.value;

    if (!value || value === ' ') return { filteredCodes: statusCodes, filter: '' };
    
    const filteredCodes = statusCodes.filter((statusCode) => (
      statusCode.code.startsWith(value) ||
      statusCode.phrase.toLowerCase().includes(value.toLowerCase())
    ));

    return { filteredCodes, filter: value };
  },
  resetCard: () => state => ({ cardFlipped: '' }),
  flipCard: flipped => state => ({ cardFlipped: flipped }),
  nextCard: () => state => ({
    cardFlipped: 'flipping',
    randomIndex: random.integer({ min: 0, max: statusCodes.length - 1 }),
  }),
  setTheme: theme => state => ({ theme }),
};

const view = (state, actions) => (
  <div
    class="main-container"
    oncreate={() => {document.body.className = state.theme}}
    onupdate={() => {document.body.className = state.theme}}
  >
    <ThemePicker actions={actions} />
    <Navigation />
    <Router state={state} actions={actions} />
    <Footer />
  </div>
);

const main = app(state, actions, view, document.body);
location.subscribe(main.location);
