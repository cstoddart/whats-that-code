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
      {state.statusCodes.map((statusCode) => (
        <div className="browse-code-container">
          {!state.categoriesToRender[statusCode.code[0]] &&
            statusCode.code[1] === '0' &&
            statusCode.code[2] === '0' &&
            <h1 className="category-header">{statusCode.code[0]}00</h1>
          }
          {state.categoriesToRender[statusCode.code[0]] === statusCode.code &&
            <h1 className="category-header">{statusCode.code[0]}00</h1>
          }
          <h3>{statusCode.code} - {statusCode.phrase}</h3>
          <p>{statusCode.description}</p>
          <a className="read-more muted" target="_blank" href={statusCode.ref}>Read More</a>
        </div>
      ))}
    </div>
  </div>
);

export default Browse;
