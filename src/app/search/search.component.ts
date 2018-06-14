import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie.model.client';
import {SearchServiceClient} from '../home/search.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  title: String;
  results: Movie[]
  img = 'https://image.tmdb.org/t/p/w500/'
  constructor(private searchServie: SearchServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
  }
  searchMoovie() {
    console.log(this.title);
    this.searchServie.searchMovieByTitle(this.title).subscribe((obj) => {this.results = obj.results} );
    // const url = 'https://api.themoviedb.org/3/search/movie?api_key=01202464e80fb52cd90af159ba329661&query=' + title
    // return this.httpClient.get<Object>(url);
  }

  ngOnInit() {
  }

}
