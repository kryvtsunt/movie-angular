import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentServiceClient {
  addComment(movieId, com, mov) {
    const comment = {comment: com, movie: mov}
    return fetch('http://localhost:4000/api/comment/movie/' + movieId + '/add', {
      body: JSON.stringify(comment),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  findAllComments(movieId) {
    return fetch('http://localhost:4000/api/comment/movie/' + movieId + '/find', {
      credentials: 'include', // include, same-origin, *omit
    }). then((response) => response.json())
  }
}
