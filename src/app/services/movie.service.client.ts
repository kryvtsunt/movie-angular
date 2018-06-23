import {Injectable} from '@angular/core';

@Injectable()
export class MovieServiceClient {

  findMovie(movieId) {
    return fetch('http://localhost:4000/api/movie/' + movieId, {
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
    return fetch('http://localhost:4000/api/movie/' + movieId, {
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
    return fetch('http://localhost:4000/api/movie/' + movieId, {
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
    return fetch('http://localhost:4000/api/movie/')
      .then(response => {
        return response.json();
      });
  }
}
