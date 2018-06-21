import {Injectable} from '@angular/core';

@Injectable()
export class BookmarkServiceClient {

  bookmark(movie) {
    return fetch('http://localhost:4000/api/bookmark/movie/add', {
      body: JSON.stringify(movie),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  unbookmark(movie) {
    return fetch('http://localhost:4000/api/bookmark/movie/remove', {
      body: JSON.stringify(movie),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  checkBookmark(movieId) {
    return fetch('http://localhost:4000/api/bookmark/movie/' + movieId + '/check', {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then (response => response.json());
  }

  findAllBookmarkedMovies(userId) {
    return fetch('http://localhost:4000/api/like/movie/', {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
    })
      .then (response => response.json());
  }
}
