import $ from 'jquery';
import bookmarks from './scripts/bookmarks';
import store from './scripts/store';
import api from './scripts/api';
import './styles/index.css';

function main() {
  api.getItems()
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    bookmarks.render();
  });

  bookmarks.bindEventListeners(),
  bookmarks.render()
};

$(main);