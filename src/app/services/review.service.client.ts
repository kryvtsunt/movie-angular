import {Injectable} from '@angular/core';

const HOST = 'https://tk-movie-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

@Injectable()
export class ReviewServiceClient {
  addReview(movieId, com, mov) {
    const review = {review: com, movie: mov}
    return fetch(HOST + 'api/review/movie/' + movieId + '/add', {
      body: JSON.stringify(review),
      credentials: 'include',
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  findAllReviews(movieId) {
    return fetch(HOST + 'api/review/movie/' + movieId + '/find', {
      credentials: 'include',
    }). then((response) => response.json())
  }
}
