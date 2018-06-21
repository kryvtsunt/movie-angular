import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class LikeServiceClient {

  like(movie) {
    return fetch('http://localhost:4000/api/like/movie/add', {
      body: JSON.stringify(movie),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  unlike(movie) {
    return fetch('http://localhost:4000/api/like/movie/remove', {
      body: JSON.stringify(movie),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  checkLike(movieId) {
    return fetch('http://localhost:4000/api/like/movie/' + movieId + '/check', {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then (response => response.json());
  }

  findAllLikedMovies(userId) {
    return fetch('http://localhost:4000/api/like/user/' + userId + '/movie/', {
      method: 'get',
    })
      .then (response => response.json());
  }
}
