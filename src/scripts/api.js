// This document will handles all the requests made to the Bookmark API

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joseph';

function listApiFetch(...args) {
  let error = false;
  return fetch(...args)
  .then(res => {
    if (!res.ok) {
      error = { code: res.status };
    }
    return res.json();
  })
  .then(data => {
    if (error) {
      error.message = data.message;
      return Promise.reject(error);
    }
    return data;
  })
}


function getItems() {
  return listApiFetch(`${BASE_URL}/bookmarks`)
};

function createItem(title, url, desc, rating, expanded=false) {
  const newBody = JSON.stringify({ title, url, desc, rating, expanded });

  let secondArg = {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: newBody
  }

  return listApiFetch(`${BASE_URL}/bookmarks`, secondArg);
};

function deleteItem(id) {
  let secondArg = {
    method: 'DELETE', 
    headers: {'Content-Type': 'application/json'},
  }

  return listApiFetch(`${BASE_URL}/bookmarks/${id}`, secondArg);
}


export default {
  getItems,
  createItem,
  deleteItem
}