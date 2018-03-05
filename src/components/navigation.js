import { h } from 'hyperapp';
import { Link } from '@hyperapp/router';
import Logo from './logo';

export default () => (
  <div  class="navigation">
  <Logo />
    <ul>
      <li class={window.location.pathname === "/" && "active"}><Link to="/">Browse</Link></li>
      <li class={window.location.pathname === "/learn" && "active"}><Link to="/learn">Learn</Link></li>
    </ul>
  </div>
);