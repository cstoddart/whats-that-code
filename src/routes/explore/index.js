import { h, app } from 'hyperapp';

import './styles.css';

const Explore = (state, actions) => () => (
  <div className="explore-container">
    <div className="filter-container">
      Filter <input oninput={(event => actions.changeFilter(event))} autofocus />
    </div>
    <div className="explore-codes-container">
      {state.statusCodes
      .filter((statusCode) => statusCode.code.startsWith(state.statusCodeFilter))
      .map((statusCode) => (
        <div>
          <h3>{statusCode.code} - {statusCode.phrase}</h3>
          <p>{statusCode.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Explore;
