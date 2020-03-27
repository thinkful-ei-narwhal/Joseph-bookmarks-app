/**This document will be resonsible for validating entries and
 * creating new a new item to be added to the list
 */
import cuid from 'cuid';

// Create Object functions

function create(id, title, url, desc, rating) {
  return {
    id,
    title,
    url,
    desc,
    rating,
    expanded: false
  }
};


// Generate HTML functions

function generateHome() {
  return `
  <button class="add-bookmark-btn">
    <span>Add Bookmark</span>
  </button>

  <form class="dropdown-menu">
    <fieldset>
        <p>
          <label>Filter</label>
          <select id = "myList">
            <option value = "1">1 Star+</option>
            <option value = "2">2 Stars+</option>
            <option value = "3">3 Stars+</option>
            <option value = "4">4 Stars+</option>
            <option value = "5">5 Stars+</option>
          </select>
        </p>
    </fieldset>
  </form>

  <ul class="bookmark-list">
    
  </ul>`
};

function generateCollapsedBookmarkItem() {
  return `
  <li>
    <h2 class="bookmark-title">Title</h2>
    <div class="bookmark-rating">
      5-star-rating soon
    </div>
    <button class="delete-bookmark-btn">
      <span>Delete</span>
    </button>
  </li>`
};

function generateExpandedBookmarkItem() {
  return `
  <li>
    <h2 class="bookmark-title">Title</h2>
    <p class="bookmark-desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
    <button class="visit-site-btn">
      <span>Visit site</span>
    </button>
    <div class="bookmark-rating">
      5-star-rating soon
    </div>
    <button class="delete-bookmark-btn">
      <span>Delete</span>
    </button>
  </li>`
};

function generateAddBookmarkForm() {
  return `
  `
};

export default {
  create,
  generateHome,
  generateCollapsedBookmarkItem,
  generateExpandedBookmarkItem
};