import { h, app } from 'hyperapp';

import './styles.css';

const Browse = (state, actions) => () => (
  <div>
    <div class="filter-container">
      Filter <span class="filter-input-container">
        <input oninput={(event => actions.changeFilter(event))} value={state.filter} autofocus />
      </span>
    </div>
    <div class="browse-codes-container">
      {state.filteredCodes.map((statusCode) => (
        <div class="browse-code-container">
          {!state.categoriesToRender[statusCode.code[0]] &&
            statusCode.code[1] === '0' &&
            statusCode.code[2] === '0' &&
            <h1 class="category-header">{statusCode.code[0]}00</h1>
          }
          {state.categoriesToRender[statusCode.code[0]] === statusCode.code &&
            <h1 class="category-header">{statusCode.code[0]}00</h1>
          }
          <h3>{statusCode.code} - {statusCode.phrase}</h3>
          <p>{statusCode.description}</p>
          <a class="read-more muted" target="_blank" href={statusCode.ref}>Read More</a>
        </div>
      ))}
    </div>
  </div>
);

export default Browse;
