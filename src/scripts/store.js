/**This document will handle the manipulation and store of the
 * data for our app
 */

const bookmarks = [
  {
    id: cuid(),
    title: 'Title 1',
    rating: 3,
    url: 'http://www.title1.com',
    description: 'lorem ipsum dolor sit',
    expanded: false
  },
  {
    id: cuid(),
    title: 'Title 2',
    rating: 5,
    url: 'http://www.title2.com',
    description: 'dolorum tempore deserunt',
    expanded: false
  } 
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