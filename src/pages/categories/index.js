import SortableList from '../../components/sortable-list';

export default class Page {
  element;

  get template() {
    return `
    <div class="categories">
      <div class="content__top-panel">
        <h1>Категории товаров</h1>
      </div>
    </div>`;
  }

  async render() {
    const element = document.createElement('div');

    element.innerHTML = this.template;

    return this.element;
  }
}
