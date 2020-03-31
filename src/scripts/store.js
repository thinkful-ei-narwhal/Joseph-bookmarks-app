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
};

function findAndDelete(id) {
  this.bookmarks = this.bookmarks.filter(item => item.id !== id);
};

function filterList(rating) {
  this.filter = rating;
  let filteredItems = this.bookmarks.filter(item => item.rating >= this.filter);
  return filteredItems;
};


// const handleRatingFilter = () => {
//   $('main').on('change', 'select', () => {
//     let filterValue = $('option:selected').val();
//     store.filter = filterValue;
//     let filteredItems = store.bookmarks.filter(item => item.rating >= store.filter);
//     console.log(filteredItems);
//   });
// };

export default {
  bookmarks,
  addingBookmark,
  error,
  filter,
  findById,
  addItem,
  findAndDelete,
  filterList
}