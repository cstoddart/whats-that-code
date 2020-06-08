import { h, app } from 'hyperapp';

import { Enter, Exit, Move } from '../../hyperappTransitions';
import './styles.css';

const Browse = (state, actions) => () => (
  <div>
    <div class="filter-container">
      Filter <span class="filter-input-container">
        <input oninput={(event => actions.changeFilter(event))} value={state.filter} autofocus />
      </span>
    </div>
    <div class="browse-codes-container">
      {state.filteredCodes.length
      ? <Move time={300} easing="ease-in-out">
        {state.filteredCodes.map((statusCode) => (
          <Exit time={200} easing="ease-in-out" css={{ opacity: "0" }}>
            <Enter time={500} easing="ease-in-out" css={{ opacity: "0" }}>
              <div key={statusCode.code} class={`browse-code-container group-${statusCode.code[0]}00`}>
                <h3>{statusCode.code} - {statusCode.phrase}</h3>
                <p>{statusCode.description}</p>
                <a class="read-more muted" target="_blank" href={statusCode.ref}>Read More</a>
              </div>
            </Enter>
          </Exit>
        ))}
      </Move>
      : <Exit time={200} easing="ease-in-out" css={{ opacity: "0" }}>
        <Enter time={500} easing="ease-in-out" css={{ opacity: "0" }}>
          <p>No results found.</p>
        </Enter>
      </Exit>
      }
      
    </div>
  </div>
);

export default Browse;
