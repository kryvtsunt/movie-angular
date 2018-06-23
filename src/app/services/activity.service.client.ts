import {Injectable} from '@angular/core';

@Injectable()
export class ActivityServiceClient {

  findAllActivities() {
    return fetch('http://localhost:4000/api/activity/')
      .then(response => {
        return response.json();
      });
  }
}
