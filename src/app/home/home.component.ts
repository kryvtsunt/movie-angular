import { Component, OnInit } from '@angular/core';
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
  results: Movie[];
  img = 'https://image.tmdb.org/t/p/w500/';
  constructor(private searchServie: SearchServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
  }
  searchMoovie() {
    console.log(this.title);
    this.searchServie.searchMovieByTitle(this.title).then((response) => {this.results = response.results} );
  }

  ngOnInit() {
  }

}
