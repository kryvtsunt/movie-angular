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
}
