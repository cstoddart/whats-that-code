import { h, app } from 'hyperapp';
import flipIcon from '../../../assets/images/flip.svg';
import nextIcon from '../../../assets/images/next.svg';

import './styles.css';

const Learn = (state, actions) => () => (
  <div className="card-container">
    <div className="card">
      {state.cardFlipped === false &&
        <div className="card-front">
          <h3 className="card-title">{state.statusCodes[state.randomIndex].code}</h3>
          <img className="flip-icon" onclick={() => actions.flipCard(!state.cardFlipped)} src={flipIcon} title="Flip" />
        </div>
      }
      {state.cardFlipped === true &&
        <div className="card-back">
          <h2 className="card-title">{state.statusCodes[state.randomIndex].code}</h2>
          <h3>{state.statusCodes[state.randomIndex].phrase}</h3>
          <p>{state.statusCodes[state.randomIndex].description}</p>
          <a className="read-more" target="_blank" href={state.statusCodes[state.randomIndex].ref}>Read More</a>
          <div className="icon-container">
            <img className="flip-icon" onclick={() => actions.flipCard(!state.cardFlipped)} src={flipIcon} title="Flip" />
            <img className="next-icon" onclick={() => actions.nextCard()} src={nextIcon} title="Next" />
          </div>
        </div>
      }
    </div>
    <button className="skip-button" onclick={actions.nextCard}>Skip</button>
  </div>
);

export default Learn;
