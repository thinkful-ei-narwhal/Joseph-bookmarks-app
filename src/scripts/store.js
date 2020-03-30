/**This document will handle the manipulation and store of the
 * data for our app
 */

const bookmarks = [
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
    expanded: false
  },
];

let addingBookmark = false;
let error = null;
let filter = 0;



export default {
  bookmarks,
  addingBookmark,
  error,
  filter
}