import { h } from 'hyperapp';
import Logo from './logo';

import texasIcon from '../../assets/images/texas.svg';
import githubIcon from '../../assets/images/github.svg';

export default () => (
  <div class="footer">
    <Logo />
    <span class="footer-text">
      Made In
      <img class="texas-icon" src={texasIcon} />
      <span class="footer-text-divider">|</span>
      <a class="footer-link" href="https://github.com/cstoddart/status-codes" target="_blank">
        View Source
      <img class="github-icon" src={githubIcon} />
      </a>
    </span>
  </div>
);
