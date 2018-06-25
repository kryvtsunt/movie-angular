import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class SearchServiceClient {

  searchMoovieById(id: String) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=01202464e80fb52cd90af159ba329661'
    return fetch(url).then(response => response.json());
    // return this.httpClient.get<Object>(url);
  }

  searchMovieByTitle(title: String, type = 'movie') {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=01202464e80fb52cd90af159ba329661&page=1&include_adult=false&query=' + title
    return fetch(url).then(response => response.json());
  }

  searchPopularMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=01202464e80fb52cd90af159ba329661&language=en-US&page=1';
    return fetch(url).then(response => response.json());
  }

  multiSearch(search) {
    const url = 'https://api.themoviedb.org/3/search/multi?api_key=01202464e80fb52cd90af159ba329661&language=en-US&query=' + search + '&page=1&include_adult=false'
    return fetch(url).then(response => response.json());
  }

  discoverPopularMovies() {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    return fetch(url).then(response => response.json());
  }

  discoverMostPopularKids() {
    const url = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=G&sort_by=popularity.desc&api_key=01202464e80fb52cd90af159ba329661'
    return fetch(url).then(response => response.json());
  }

  discoverHighestRatedR() {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
    return fetch(url).then(response => response.json());
  }

  discoverBestMoviesOfTheYear() {
    const url = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=2018&sort_by=vote_average.desc&api_key=01202464e80fb52cd90af159ba329661'
    return fetch(url).then(response => response.json());
  }

  discoverMostPopularComedies() {
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35"
    return fetch(url).then(response => response.json());
  }

  discoverMostPopularFamilyMovies() {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751'
    return fetch(url).then(response => response.json());
  }

  findStories() {
    const url = 'https://api.nytimes.com/svc/topstories/v2/movies.json?api_key=f88d565308f04acd905381074c76dda0'
    return fetch(url).then(response => response.json());
  }

  dicover(genre, adult, sort, page, year) {
    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=' + sort + '&include_adult=' + adult + '&include_video=false&page=' + page + '&primary_release_year=' + year + '&with_genres=' + genre
    if (year === 'None') {
      url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=' + sort + '&include_adult=' + adult + '&include_video=false&page=' + page + '&with_genres=' + genre;
    }

    return fetch(url).then(response => response.json());
  }

  constructor(private httpClient: HttpClient) {
  }
}
