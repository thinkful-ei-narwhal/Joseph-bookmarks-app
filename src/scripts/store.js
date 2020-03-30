/**This document will handle the manipulation and store of the
 * data for our app
 */

let bookmarks = [];

let addingBookmark = false;
let error = null;
let filter = 0;

const findById = (id) => {
  return bookmarks.find(item => item.id === id);
};

function addItem(itemName) {
  this.bookmarks.push(itemName);
}

function findAndDelete(id) {
  this.bookmarks = this.bookmarks.filter(item => item.id !== id);
}


export default {
  bookmarks,
  addingBookmark,
  error,
  filter,
  findById,
  findAndDelete,
  addItem
}