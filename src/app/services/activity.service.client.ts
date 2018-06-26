import {Injectable} from '@angular/core';

// const HOST = 'https://tk-movie-nodejs.herokuapp.com/';
const HOST = 'http://localhost:4000/';

@Injectable()
export class ActivityServiceClient {

  findAllActivities() {
    return fetch(HOST + 'api/activity/')
      .then(response => {
        return response.json();
      });
  }

}
