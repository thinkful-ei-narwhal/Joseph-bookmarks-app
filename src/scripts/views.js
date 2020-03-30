/**This document will handle the creation of the HTML elements that
 * will be displayed to the user
 */

 import item from './item';
 import store from './store'; 

 const generateHome = (bookmarks) => {
  return `
  <button class="add-bookmark-btn">
    <span>Add Bookmark</span>
  </button>

  <form class="dropdown-menu">
    <fieldset>
        <label>Filter</label>
        <select id = "myList">
          <option value = "1">1 Star+</option>
          <option value = "2">2 Stars+</option>
          <option value = "3">3 Stars+</option>
          <option value = "4">4 Stars+</option>
          <option value = "5">5 Stars+</option>
        </select>
    </fieldset>
  </form>

  <ul class="bookmark-list">
    ${bookmarks}
  </ul>`
};

const generateCollapsedBookmarkItem = (bookmark) => {
  return `
  <li class="collapsed-list">
    <h2 class="bookmark-title">${bookmark.title}</h2>
    <div class="bookmark-rating">
      ${bookmark.rating}
    </div>
    <button class="delete-bookmark-btn">
      <span>Delete</span>
    </button>
  </li>`
};

const generateExpandedBookmarkItem = () => {
  return `
  <li class="expanded-list">
    <h2 class="bookmark-title">${store.bookmarks[0].title}</h2>
    <p class="bookmark-desc">
      ${store.bookmarks[0].desc}
    </p>
    <button class="visit-site-btn">
      <span>Visit site</span>
    </button>
    <div class="bookmark-rating">
      ${store.bookmarks[0].rating}
    </div>
    <button class="delete-bookmark-btn">
      <span>Delete</span>
    </button>
  </li>`
};

const generateAddBookmarkForm = () => {
  return `
  <form class="add-bookmark-form">
      <fieldset class="input-info">
        <legend>Add a Bookmark</legend>
        <label for="bookmark-title">Pick a title</label>
        <input type="text" name="bookmark-inputs" id="bookmark-title" placeholder="type here...  " required>
        <label for="bookmark-url">Enter a URL</label>
        <input type="url" name="bookmark-inputs" id="bookmark-url" placeholder="include 'https' protocol" required>
        <label for="bookmark-desc">Enter a description</label>
        <textarea id="bookmark-desc" cols="33" rows="5"></textarea>
      </fieldset>
      <fieldset class="star-rating">
        <legend>Pick a star rating</legend>
        <label for="one-star">1</label>
        <input type="radio" id="one-star" name="stars" value="1">
        <label for="two-stars">2</label>
        <input type="radio" id="two-stars" name="stars" value="2">
        <label for="three-stars">3</label>
        <input type="radio" id="three-stars" name="stars" value="3">
        <label for="four-stars">4</label>
        <input type="radio" id="four-stars" name="stars" value="4">
        <label for="five-stars">5</label>
        <input type="radio" id="five-stars" name="stars" value="5">
      </fieldset>
      <button class="add-bookmark-form-btn">
        <span>Add Bookmark</span>
      </button>
    </form>`
};

const generateBookmarkItemsString = function(bookmarkList) {
  const items = bookmarkList.map(item => generateCollapsedBookmarkItem(item));
  return items.join("");
}

export default {
  generateHome,
  generateCollapsedBookmarkItem,
  generateExpandedBookmarkItem,
  generateAddBookmarkForm,
  generateBookmarkItemsString
};