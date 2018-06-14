import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class OmdbServiceClient {
  searchMovieByTitle(title: String) {
    const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=f880b2a7';
    return this.httpClient.get<Object>(url);
  }

  searchMovieByTitle2(title: String) {
    const url2 = 'https://api.themoviedb.org/3/home/movie?api_key=01202464e80fb52cd90af159ba329661&query=' + title
    return this.httpClient.get<Object>(url2);
  }
  constructor(private httpClient: HttpClient) {}
}
