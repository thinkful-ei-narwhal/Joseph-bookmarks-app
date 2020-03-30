import $ from 'jquery';
import bookmarks from './scripts/bookmarks';
import store from './scripts/store';
import api from './scripts/api';
import './styles/index.css';

function main() {
  bookmarks.bindEventListeners(),
  bookmarks.render()
};

$(main);