/**This document will be resonsible for validating entries and
 * creating new a new item to be added to the list
 */
import cuid from 'cuid';

// Create Object functions

const create = (id, title, url, desc, rating) => {
  return {
    id,
    title,
    url,
    desc,
    rating,
    expanded: false
  }
};

export default {
  create,
};