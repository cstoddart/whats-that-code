import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';
import Explore from './routes/explore';
import Learn from './routes/learn';

const Router = (state, actions) => (
  <div>
    <Route path="/" render={Explore(state, actions)} />
    <Route path="/explore" render={Explore(state, actions)} />
    <Route path="/learn" render={Learn(state, actions)} />
  </div>
);

export default Router;
