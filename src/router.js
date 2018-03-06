import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';
import Browse from './routes/browse';
import Learn from './routes/learn';

const Router = (props) => (
  <div>
    <Route path="/" render={Browse(props.state, props.actions)} />
    <Route path="/learn" render={Learn(props.state, props.actions)} />
  </div>
);

export default Router;
