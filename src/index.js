import { h, app } from 'hyperapp';
import { Link, Route, location } from "@hyperapp/router"
import statusCodesJSON from './status-codes.json';
import Router from './router';
import Chance from 'chance';
import paintbrushIcon from '../assets/images/paintbrush.svg';
import texasIcon from '../assets/images/texas.svg';
import githubIcon from '../assets/images/github.svg';

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
  <div class={`main-container ${state.theme}`}>
    <div class="theme-picker-container">
      <div class="theme-picker-dropdown">
        <div class="theme-picker-colors">
          <div class="blue" onclick={() => actions.setTheme("blue")} />
          <div class="green" onclick={() => actions.setTheme("green")} />
          <div class="yellow" onclick={() => actions.setTheme("yellow")} />
          <div class="orange" onclick={() => actions.setTheme("orange")} />
          <div class="red" onclick={() => actions.setTheme("red")} />
        </div>
        <div class="theme-picker-text-container">
          <span class="theme-picker-text">Theme</span>
          <img class="paintbrush-icon" src={paintbrushIcon} />
        </div>
      </div>
    </div>
    <Link to="/"><h1 class="logo">{`What\'s That Code?`}</h1></Link>
    <ul class="navigation">
      <li class={window.location.pathname === "/" && "active"}><Link to="/">Browse</Link></li>
      <li class={window.location.pathname === "/learn" && "active"}><Link to="/learn">Learn</Link></li>
    </ul>
    {Router(state, actions)}
    <Link to="/"><h3 class="logo small">{`What\'s That Code?`}</h3></Link>
    <div class="footer">
      <span class="footer-text">
        Made In
        <img class="texas-icon" src={texasIcon} />
        <span class="footer-text-divider">|</span>
        <a class="footer-link" href="https://github.com/cstoddart/status-codes" target="_blank">
          View Source
         <img class="github-icon" src={githubIcon} />
        </a>
      </span>
    </div>
  </div>
);

const main = app(state, actions, view, document.body);
const unsubscribe = location.subscribe(main.location);
