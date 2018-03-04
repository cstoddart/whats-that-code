import { h, app } from 'hyperapp';
import { Enter } from '@hyperapp/transitions';
import flipIcon from '../../../assets/images/flip.svg';
import nextIcon from '../../../assets/images/next.svg';

import './styles.css';

const Learn = (state, actions) => () => (
  <div class="card-container">
    <Enter time={500} easing="ease-in-out" css={{ opacity: "0" }}>
      <div class={`card ${state.cardFlipped ? 'flipped' : ''}`}>
        <div class="card-front">
          <p class="card-prompt">What's This Code?</p>
          <h3 class="card-title">{state.statusCodes[state.randomIndex].code}</h3>
          <img class="flip-icon" onclick={() => actions.flipCard(!state.cardFlipped)} src={flipIcon} title="Flip" />
        </div>
        <div class="card-back">
          <h2 class="card-title">{state.statusCodes[state.randomIndex].code}</h2>
          <h3>{state.statusCodes[state.randomIndex].phrase}</h3>
          <p>{state.statusCodes[state.randomIndex].description}</p>
          <a class="read-more" target="_blank" href={state.statusCodes[state.randomIndex].ref}>Read More</a>
          <div class="icon-container">
            <img class="flip-icon" onclick={() => actions.flipCard(!state.cardFlipped)} src={flipIcon} title="Unflip" />
            <img class="next-icon" onclick={() => actions.nextCard()} src={nextIcon} title="Next" />
          </div>
        </div>
      </div>
    </Enter>
    <button class="skip-button" onclick={actions.nextCard}>Skip</button>
  </div>
);

export default Learn;
