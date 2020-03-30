/**This document will handle the manipulation and store of the
 * data for our app
 */

let bookmarks = [
  {
    id: 101010,
    title: 'Google',
    url: 'https://www.google.com',
    desc: 'This is the front page of the web (not reddit)',
    rating: 4,
    expanded: false
  },
  {
    id: 101011,
    title: 'Yahoo',
    url: 'https://www.yahoo.com',
    desc: 'This is the former front page of the web...',
    rating: 3,
    expanded: true
  },
  {
    id: 101012,
    title: 'Bing',
    url: 'https://www.bing.com',
    desc: 'Who uses bing?',
    rating: 2,
    expanded: false
  },
];

let addingBookmark = false;
let error = null;
let filter = 0;

const findById = (id) => {
  return bookmarks.find(item => item.id === id);
};

function findAndDelete(id) {
  this.bookmarks = this.bookmarks.filter(item => item.id !== id);
}


export default {
  bookmarks,
  addingBookmark,
  error,
  filter,
  findById,
  findAndDelete
}