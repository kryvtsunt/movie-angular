import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchServiceClient {
  searchMovieByTitle(title: String, type= 'movie' ) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=01202464e80fb52cd90af159ba329661&query=' + title
    return fetch(url).then(response => response.json());
  }

  searchPopularMovies(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=01202464e80fb52cd90af159ba329661&language=en-US&page=1';
    return fetch(url).then(response => response.json());
  }

  searchMoovieById(id: String){
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=01202464e80fb52cd90af159ba329661'
    return fetch(url).then(response => response.json());
    // return this.httpClient.get<Object>(url);
  }

  constructor(private httpClient: HttpClient) {}
}
