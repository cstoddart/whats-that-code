import { h } from 'hyperapp';
import { Route } from '@hyperapp/router';
import Browse from './routes/browse';
import Learn from './routes/learn';

const Router = () => (
  <div>
    <Route path="/" render={Browse} />
    <Route path="/learn" render={Learn} />
  </div>
);

export default Router;
