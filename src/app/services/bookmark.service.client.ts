import {Injectable} from '@angular/core';

// const HOST = 'https://tk-movie-nodejs.herokuapp.com/';
const HOST = 'http://localhost:4000/';

@Injectable()
export class BookmarkServiceClient {

  bookmark(movie) {
    return fetch(HOST + 'api/bookmark/movie', {
      body: JSON.stringify(movie),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  unbookmark(movie) {
    return fetch(HOST + 'api/bookmark/movie', {
      body: JSON.stringify(movie),
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  checkBookmark(movieId) {
    return fetch(HOST + 'api/bookmark/movie/' + movieId + '/check', {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then (response => response.json());
  }

  findAllBookmarkedMovies(userId) {
    return fetch(HOST + 'api/bookmark/user/' + userId + '/movie/', {
      method: 'get',
    })
      .then (response => response.json());
  }
}
