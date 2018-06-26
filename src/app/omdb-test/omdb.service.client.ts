import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OmdbServiceClient {
  searchMovieByTitle(title: String) {
    const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=f880b2a7';
    return fetch(url)
      .then(response => response.json());
  }

  searchMovieByTitle2(title: String) {
    const url2 = 'https://api.themoviedb.org/3/search/movie?api_key=01202464e80fb52cd90af159ba329661&query=' + title
    return fetch(url2)
      .then(response => response.json());
  }
  constructor(private httpClient: HttpClient) {
  }
}
