import {Injectable} from '@angular/core';

const HOST = 'https://tk-movie-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

@Injectable()
export class MovieServiceClient {

  findMovie(movieId) {
    return fetch(HOST + 'api/movie/' + movieId, {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
          return response.json();
      });
  }

  deleteMovie(movieId) {
    return fetch(HOST + 'api/movie/' + movieId, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      });
  }

  updateMovie(movieId, movie) {
    return fetch(HOST + 'api/movie/' + movieId, {
      body: JSON.stringify(movie),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      });
  }

  findAllMovies() {
    return fetch(HOST + 'api/movie/')
      .then(response => {
        return response.json();
      });
  }
}
