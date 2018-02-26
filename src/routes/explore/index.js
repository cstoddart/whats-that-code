import { h, app } from 'hyperapp';

const Explore = (state, actions) => () => (
  <div>
    <h1>Status Codes ({state.filter}{actions})</h1>
    <input oninput={(event => actions.changeFilter(event))} autofocus />
    {state.statusCodes
    .filter((statusCode) => statusCode.code.startsWith(state.statusCodeFilter))
    .map((statusCode) => (
      <div>
        <h3>{statusCode.code}</h3>
        <h5>{statusCode.phrase}</h5>
        <p>{statusCode.description}</p>
      </div>
    ))}
  </div>
);

export default Explore;
