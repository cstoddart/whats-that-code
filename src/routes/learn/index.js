import { h, app } from 'hyperapp';
import flipIcon from '../../../assets/images/flip.svg';
import nextIcon from '../../../assets/images/next.svg';

import './styles.css';

const Learn = (state, actions) => () => (
  <div class="card-container">
    <div class="card">
      {state.cardFlipped === false &&
        <div class="card-front">
          <h3 class="card-title">{state.statusCodes[state.randomIndex].code}</h3>
          <img class="flip-icon" onclick={() => actions.flipCard(!state.cardFlipped)} src={flipIcon} title="Flip" />
        </div>
      }
      {state.cardFlipped === true &&
        <div class="card-back">
          <h2 class="card-title">{state.statusCodes[state.randomIndex].code}</h2>
          <h3>{state.statusCodes[state.randomIndex].phrase}</h3>
          <p>{state.statusCodes[state.randomIndex].description}</p>
          <a class="read-more" target="_blank" href={state.statusCodes[state.randomIndex].ref}>Read More</a>
          <div class="icon-container">
            <img class="next-icon" onclick={() => actions.nextCard()} src={nextIcon} title="Next" />
          </div>
        </div>
      }
    </div>
    <button class="skip-button" onclick={actions.nextCard}>Skip</button>
  </div>
);

export default Learn;
