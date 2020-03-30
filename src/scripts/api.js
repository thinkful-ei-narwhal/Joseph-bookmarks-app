// This document will handles all the requests made to the Bookmark API

const BASE_URL = 'https://thinkful-list-api.herokuapp.com';

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