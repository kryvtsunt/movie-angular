import {Injectable} from '@angular/core';

@Injectable()
export class FollowServiceClient {


  addFollowings(userId) {
    return fetch('http://localhost:4000/api/follow/following/' + userId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
      })
      .then(response => {
        return response.json();
      });
  }

  findAllFollowings() {
    return fetch('http://localhost:4000/api/follow/following', {
      credentials: 'include', // include, same-origin, *omit
    })
      .then(response => {
        return response.json();
      });
  }

  findAllFollowers() {
    return fetch('http://localhost:4000/api/follow/follower', {
      credentials: 'include', // include, same-origin, *omit

    })
      .then(response => {
        return response.json();
      });
  }

}
