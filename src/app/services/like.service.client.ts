import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
// const HOST = 'https://tk-movie-nodejs.herokuapp.com/';

const HOST = 'http://localhost:4000/';

@Injectable()
export class LikeServiceClient {

  like(movie) {
    return fetch(HOST + 'api/like/movie', {
      body: JSON.stringify(movie),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  unlike(movie) {
    return fetch(HOST + 'api/like/movie', {
      body: JSON.stringify(movie),
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  checkLike(movieId) {
    return fetch(HOST + 'api/like/movie/' + movieId + '/check', {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then (response => response.json());
  }

  findAllLikedMovies(userId) {
    return fetch(HOST + 'api/like/user/' + userId + '/movie/', {
      method: 'get',
    })
      .then (response => response.json());
  }
}
