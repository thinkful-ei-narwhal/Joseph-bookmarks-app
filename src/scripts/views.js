/**This document will handle the creation of the HTML elements that
 * will be displayed to the user
 */


const generateHome = (bookmarks) => {
  return `
  <button class="add-bookmark-btn">
    <span>Add Bookmark</span>
  </button>

  <form class="dropdown-menu">
    <fieldset class="rating-filter">
        <label>Filter</label>
        <select class="rating-list">
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

const generateStarRating = [
  '<span>★</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>',
  '<span>★</span><span>★</span><span>☆</span><span>☆</span><span>☆</span>',
  '<span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>',
  '<span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>',
  '<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>',
]

const generateCollapsedBookmarkItem = (bookmark) => {
  return `
  <li class="bookmark-item collapsed-list" data-item-id="${bookmark.id}">
    <h2 class="bookmark-title">${bookmark.title}</h2>
    <div class="bookmark-rating">
      ${generateStarRating[bookmark.rating - 1]}
    </div>
    <a href="#" class="delete-bookmark-btn"><span>&#x1f5d1;</span></a>
  </li>`
};

const generateExpandedBookmarkItem = function(bookmark) {
  return `
  <li class="bookmark-item expanded-list" data-item-id="${bookmark.id}">
    <h2 class="bookmark-title">${bookmark.title}</h2>
    <p class="bookmark-desc">
      ${bookmark.desc}
    </p>
    <a href="${bookmark.url}" target="_blank" class="visit-site-btn">Visit site</a>
    <div class="bookmark-rating">
      ${generateStarRating[bookmark.rating - 1]}
    </div>
    <a href="#" class="delete-bookmark-btn"><span>&#x1f5d1;</span></a>
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
        <textarea id="bookmark-desc" cols="39" rows="5" placeholder="Enter a brief description..." style="resize:none"></textarea>
      </fieldset>
      <fieldset class="star-rating">       
        <input type="radio" id="five-stars" name="stars" value="5">
        <label for="five-stars">5</label>
        <input type="radio" id="four-stars" name="stars" value="4">
        <label for="four-stars">4</label>
        <input type="radio" id="three-stars" name="stars" value="3" checked="checked" required>
        <label for="three-stars">3</label>
        <input type="radio" id="two-stars" name="stars" value="2">
        <label for="two-stars">2</label>
        <input type="radio" id="one-star" name="stars" value="1">
        <label for="one-star">1</label>
      </fieldset>
      <button class="add-bookmark-form-btn">
        <span>Add Bookmark</span>
      </button>
    </form>`
};


const generateBookmarkItemsString = function(bookmarkList) {
  const items = bookmarkList.map(item => !item.expanded ? generateCollapsedBookmarkItem(item) : generateExpandedBookmarkItem(item));
  return items.join("");
}

export default {
  generateHome,
  generateCollapsedBookmarkItem,
  generateExpandedBookmarkItem,
  generateAddBookmarkForm,
  generateBookmarkItemsString,
};