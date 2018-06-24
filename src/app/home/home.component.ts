import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchServiceClient} from '../services/search.service.client';
import {Movie} from '../models/movie.model.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: String;
  movies: Movie[];
  stories;
  adsOn = true;
  img = 'https://image.tmdb.org/t/p/w500/';

  constructor(private searchServie: SearchServiceClient, private route: ActivatedRoute) {
  }

  discoverPopularMoovies() {
    this.title = 'Most Popular Movies'
    this.searchServie.discoverPopularMovies().then((response) => {
      this.movies = response.results;
      this.movies.length = 8;
    });
  }

  discoverPopularKids() {
    this.title = 'Most Popular Kids\' Movies';
    this.searchServie.discoverMostPopularKids().then((response) => {
      this.movies = response.results;
      this.movies.length = 8;
    });
  }

  findStroies() {
    this.searchServie.findStories().then((response) => {
      console.log(response);
      this.stories = response.results;
      this.stories.length = 12;
    });
  }

  ngOnInit() {
    this.discoverPopularMoovies();
    this.findStroies();
  }

}
