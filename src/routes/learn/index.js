import { h, app } from 'hyperapp';
import { Enter } from '@hyperapp/transitions';
import flipIcon from '../../../assets/images/flip.svg';
import nextIcon from '../../../assets/images/next.svg';

import './styles.css';

const Learn = (state, actions) => () => (
  <div class="card-container">
    <Enter time={500} easing="ease-in-out" css={{ opacity: "0" }}>
      <div class={`card ${state.cardFlipped ? 'flipped' : 'unflipped'}`}>
        <div class="card-front">
          <p class="card-prompt">What's This Code?</p>
          <h3 class="card-title">{state.statusCodes[state.randomIndex].code}</h3>
          <div class="icon flip" onclick={() => actions.flipCard(!state.cardFlipped)}>
            <img class="flip-icon" src={flipIcon} title="Flip" />
            Flip
          </div>
        </div>
        <div class="card-back">
          <h2 class="card-title">{state.statusCodes[state.randomIndex].code}</h2>
          <h3>{state.statusCodes[state.randomIndex].phrase}</h3>
          <p>{state.statusCodes[state.randomIndex].description}</p>
          <a class="read-more" target="_blank" href={state.statusCodes[state.randomIndex].ref}>Read More</a>
          <div class="icon-container">
            <div class="icon flip" onclick={() => actions.flipCard(!state.cardFlipped)}>
              <img class="flip-icon" src={flipIcon} title="Unflip" />
              Unflip
            </div>
            <div class="icon next" onclick={() => actions.nextCard()}>
              <img class="next-icon" src={nextIcon} title="Next" />
              Next
            </div>
          </div>
        </div>
      </div>
    </Enter>
    <button class="skip-button" onclick={actions.nextCard}>Skip</button>
  </div>
);

export default Learn;
