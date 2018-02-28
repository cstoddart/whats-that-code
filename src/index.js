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
  categoriesToRender: {},
  randomIndex: random.integer({ min: 0, max: statusCodes.length }),
  cardFlipped: false,
};

const actions = {
  location: location.actions,
  changeFilter: event => (state, actions) => {
    if (!event.target.value) return { statusCodes, categoriesToRender: {} };
    const filteredCodes = statusCodes.filter((statusCode) => (
      statusCode.code.startsWith(event.target.value) ||
      statusCode.phrase.includes(event.target.value)
    ));
    filteredCodes.forEach((statusCode) => actions.updateCategoriesToRender(statusCode));
    return { statusCodes: filteredCodes };
  },
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
    randomIndex: random.integer({ min: 0, max: statusCodes.length }),
  }),
};

const view = (state, actions) => (
  <div>
    <ul className="navigation">
      <li className={window.location.pathname === "/" && "active"}><Link to="/">Browse</Link></li>
      <li  className={window.location.pathname === "/learn" && "active"}><Link to="/learn">Learn</Link></li>
    </ul>
    {Router(state, actions)}
  </div>
);

const main = app(state, actions, view, document.body);
const unsubscribe = location.subscribe(main.location);
