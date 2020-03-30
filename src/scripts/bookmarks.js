/**This document will handle all the event clicks from the DOM
 * & will also render the list
 */
import item from './item';
import views from './views';
import $ from 'jquery';
import store from './store';

const handleAddBookmarkButton = () => {
  $('main').on('click', '.add-bookmark-btn', (event) => {
    event.preventDefault();
    $('main').html(views.generateAddBookmarkForm);
  });
};

const handleAddBookmarkForm = () => {
  $('main').submit('.add-bookmark-form',(event) => {
    event.preventDefault();
    const title = $('#bookmark-title').val();
    const url = $('#bookmark-url').val();
    const desc = $('#bookmark-desc').val();
    const starRating = $("input[name='stars']:checked").val();
    alert(`${title}: @ ${url}; ${desc} & ${starRating}`);
  });
};

const getItemIdFromElement = function(item) {
  return $(item)
    .closest(".bookmark-item")
    .data("item-id");
};

const handleExpandBookmarkItem = function() {
  $('main').on('click', '.bookmark-title',  (event) => {
    let id = getItemIdFromElement(event.currentTarget);
    let selectedBookmark = store.findById(id);
    selectedBookmark.expanded = !selectedBookmark.expanded;
    render();
  });
};

const render = () => {
  let items = [...store.bookmarks];
  const bookmarkItemsString = views.generateBookmarkItemsString(items);
  $('main').html(views.generateHome(bookmarkItemsString));
};

const bindEventListeners = () => {
  handleAddBookmarkButton(),
  handleAddBookmarkForm(),
  handleExpandBookmarkItem()
};

export default {
  bindEventListeners,
  render
};