import { h, app } from 'hyperapp';

import './styles.css';

const Browse = (state, actions) => () => (
  <div>
    <div className="filter-container">
      Filter <input oninput={(event => actions.changeFilter(event))} autofocus />
    </div>
    <div className="browse-codes-container">
      {state.statusCodes
      .filter((statusCode) => (
        statusCode.code.startsWith(state.statusCodeFilter) ||
        statusCode.phrase.toLowerCase().includes(state.statusCodeFilter.toLowerCase())
      ))
      .map((statusCode) => (
        <div>
          <h3>{statusCode.code} - {statusCode.phrase}</h3>
          <p>{statusCode.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Browse;
