import { h, app } from 'hyperapp';

import './styles.css';

const Learn = (state, actions) => () => (
  <div className="card-container">
    <div className="card">
      {state.cardFlipped === false &&
        <div class="card-front">
          <h3 class="card-title">{state.statusCodes[state.randomIndex].code}</h3>
          <button onclick={() => actions.flipCard(!state.cardFlipped)}>Flip</button>
        </div>
      }
      {state.cardFlipped === true &&
        <div class="card-back">
          <h3>{state.statusCodes[state.randomIndex].code}</h3>
          <h4>{state.statusCodes[state.randomIndex].phrase}</h4>
          <p>{state.statusCodes[state.randomIndex].description}</p>
          <button onclick={() => actions.flipCard(!state.cardFlipped)}>Back</button>
          <button onclick={() => actions.nextCard()}>Next</button>
        </div>
      }
    </div>
    <button className="skip-button" onclick={actions.nextCard}>Skip</button>
  </div>
);

export default Learn;
