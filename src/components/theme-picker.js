import { h } from 'hyperapp';

import paintbrushIcon from '../../assets/images/paintbrush.svg';

export default () => (state, actions) => (
  <div class="theme-picker-container">
    <div class="theme-picker-dropdown">
      <div class="theme-picker-colors">
        <div class="blue" onclick={() => actions.setTheme("blue")} />
        <div class="green" onclick={() => actions.setTheme("green")} />
        <div class="yellow" onclick={() => actions.setTheme("yellow")} />
        <div class="orange" onclick={() => actions.setTheme("orange")} />
        <div class="red" onclick={() => actions.setTheme("red")} />
      </div>
      <div class="theme-picker-text-container">
        <span class="theme-picker-text">Theme</span>
        <img class="paintbrush-icon" src={paintbrushIcon} />
      </div>
    </div>
  </div>
);
