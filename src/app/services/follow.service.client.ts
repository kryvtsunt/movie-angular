import {Injectable} from '@angular/core';

const HOST = 'https://tk-movie-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

@Injectable()
export class FollowServiceClient {


  addFollowing(userId) {
    return fetch(HOST + 'api/follow/following/' + userId, {
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

  removeFollowing(userId) {
    return fetch(HOST + 'api/follow/following/' + userId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      });
  }

  checkFollowing(userId) {
    return fetch(HOST + 'api/follow/following/' + userId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
    })
      .then(response => {
        return response.json();
      });
  }

  findAllFollowings(userId) {
    return fetch(HOST + 'api/follow/user/' + userId + '/following', {
    })
      .then(response => {
        return response.json();
      });
  }

  findAllFollowers(userId) {
    return fetch(HOST + 'api/follow/user/' + userId + '/follower', {

    })
      .then(response => {
        return response.json();
      });
  }

}
