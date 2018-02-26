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
  randomIndex: random.integer({ min: 0, max: statusCodes.length }),
  cardFlipped: 0,
};

const actions = {
  location: location.actions,
  changeFilter: event => state => ({ statusCodeFilter: event.target.value }),
  flipCard: state => ({ cardFlipped: 1 }),
  unflipCard: state => ({ cardFlipped: 0 }),
  nextRandomIndex: state => ({ randomIndex: random.integer({ min: 0, max: statusCodes.length })}),
  nextCard: state => ({
    cardFlipped: 0,
    randomIndex: random.integer({ min: 0, max: statusCodes.length }),
  }),
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
