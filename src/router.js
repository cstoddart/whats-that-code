import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';
import Browse from './routes/browse';
import Learn from './routes/learn';

const Router = (state, actions) => (
  <div>
    <Route path="/" render={Browse(state, actions)} />
    <Route path="/learn" render={Learn(state, actions)} />
  </div>
);

export default Router;
