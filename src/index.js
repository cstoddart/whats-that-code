import { h, app } from 'hyperapp';
import { Link, Route, location } from "@hyperapp/router"
import statusCodesJSON from './status-codes.json';
import Router from './router';
import Chance from 'chance';
import texasIcon from '../assets/images/texas.svg';

import './styles.css';

const random = new Chance;

const statusCodes = statusCodesJSON.sort((a, b) => parseInt(a.code) - parseInt(b.code));

const state = {
  location: location.state,
  statusCodes,
  filter: '',
  filteredCodes: statusCodes,
  categoriesToRender: {},
  randomIndex: random.integer({ min: 0, max: statusCodes.length - 1 }),
  cardFlipped: false,
};

const actions = {
  location: location.actions,
  changeFilter: event => (state, actions) => {
    const value = event.target.value;
    if (!value || value === ' ') return { filteredCodes: statusCodes, categoriesToRender: {}, filter: '' };
    const filteredCodes = statusCodes.filter((statusCode) => (
      statusCode.code.startsWith(value) ||
      statusCode.phrase.toLowerCase().includes(value.toLowerCase())
    ));
    actions.resetCategoriesToRender();
    filteredCodes.forEach(statusCode => actions.updateCategoriesToRender(statusCode));
    return { filteredCodes, filter: value };
  },
  resetCategoriesToRender: () => state => ({ categoriesToRender: {} }),
  updateCategoriesToRender: statusCode => state => {
    const categories = Object.assign({}, state.categoriesToRender);
    const categoryIndex = statusCode.code[0];
    if (!categories[categoryIndex]) {
      categories[categoryIndex] = statusCode.code;
    }
    return { categoriesToRender: categories };
  },
  flipCard: flipped => state => ({ cardFlipped: flipped }),
  nextCard: () => state => ({
    cardFlipped: false,
    randomIndex: random.integer({ min: 0, max: statusCodes.length - 1 }),
  }),
};

const view = (state, actions) => (
  <div class="main-container">
    <Link to="/"><h1 class="logo">What's That Code?</h1></Link>
    <ul class="navigation">
      <li class={window.location.pathname === "/" && "active"}><Link to="/">Browse</Link></li>
      <li class={window.location.pathname === "/learn" && "active"}><Link to="/learn">Learn</Link></li>
    </ul>
    {Router(state, actions)}
    <Link to="/"><h3 class="logo small">What's That Code?</h3></Link>
    <div class="footer">
      <span class="footer-text">Made In</span>
      <img class="texas-icon" src={texasIcon} />
    </div>
  </div>
);

const main = app(state, actions, view, document.body);
const unsubscribe = location.subscribe(main.location);
