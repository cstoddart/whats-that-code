import { h, app } from 'hyperapp';

import './styles.css';

const Browse = (state, actions) => () => (
  <div>
    <div className="filter-container">
      Filter <span className="filter-input-container">
        <input oninput={(event => actions.changeFilter(event))} autofocus />
      </span>
    </div>
    <div className="browse-codes-container">
      {state.statusCodes
      .filter((statusCode) => (
        statusCode.code.startsWith(state.statusCodeFilter) ||
        statusCode.phrase.toLowerCase().includes(state.statusCodeFilter.toLowerCase())
      ))
      .map((statusCode) => (
        <div>
          {state.filteredCodes[1] && <h1>First</h1>}
          {console.log(state.filteredCodes)}
          <div className="browse-code-container">
            <h3>{statusCode.code} - {statusCode.phrase}</h3>
            <p>{statusCode.description}</p>
          </div>
        </div>
      ))
    }
    </div>
  </div>
);

export default Browse;
