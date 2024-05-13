import AbstractComponent from './abstract-component.js';

const createTaskTemplate = () => {
  return `<div class="board__tasks"></div>`;
};

export default class Tasks extends AbstractComponent {
  getTemplate() {
    return createTaskTemplate();
  }
}
