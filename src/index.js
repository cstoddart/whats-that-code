import { h, app } from 'hyperapp';
import { Link, Route, location } from "@hyperapp/router"
import statusCodes from './status-codes.json';
import Router from './router';
import Chance from 'chance';

import './styles.css';

const random = new Chance;

statusCodes.sort((a, b) => parseInt(a.code) - parseInt(b.code));

const state = {
  location: location.state,
  statusCodes: statusCodes,
  statusCodeFilter: '',
  filteredCodes: [],
  randomIndex: random.integer({ min: 0, max: statusCodes.length }),
  cardFlipped: false,
};

const actions = {
  location: location.actions,
  changeFilter: event => state => ({ statusCodeFilter: event.target.value }),
  flipCard: flipped => state => ({ cardFlipped: flipped }),
  nextCard: () => state => ({
    cardFlipped: false,
    randomIndex: random.integer({ min: 0, max: statusCodes.length }),
  }),
  addToFiltered: codeIndex => state => ({ filteredCodes: codeIndex }),
};

const view = (state, actions) => (
  <div>
    <ul className="navigation">
      <li><Link className={window.location.pathname === "/browse" && "active"} to="/browse">Browse</Link></li>
      <li><Link className={window.location.pathname === "/learn" && "active"} to="/learn">Learn</Link></li>
    </ul>
    {Router(state, actions)}
  </div>
);

const main = app(state, actions, view, document.body);
const unsubscribe = location.subscribe(main.location);
