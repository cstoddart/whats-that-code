import { h } from 'hyperapp';

import paintbrushIcon from '../../assets/images/paintbrush.svg';

export default (props) => (
  <div class="theme-picker-container">
    <div class="theme-picker-dropdown">
      <div class="theme-picker-colors">
        <div class="blue" onclick={() => props.actions.setTheme("blue")} />
        <div class="green" onclick={() => props.actions.setTheme("green")} />
        <div class="yellow" onclick={() => props.actions.setTheme("yellow")} />
        <div class="orange" onclick={() => props.actions.setTheme("orange")} />
        <div class="red" onclick={() => props.actions.setTheme("red")} />
      </div>
      <div class="theme-picker-text-container">
        <span class="theme-picker-text">Theme</span>
        <img class="paintbrush-icon" src={paintbrushIcon} />
      </div>
    </div>
  </div>
);
