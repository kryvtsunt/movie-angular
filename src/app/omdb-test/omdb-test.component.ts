import {Component, NgModule, OnInit} from '@angular/core';
import {OmdbServiceClient} from './omdb.service.client';


@Component({
  selector: 'app-omdb-test',
  templateUrl: './omdb-test.component.html',
  styleUrls: ['./omdb-test.component.css']
})

export class OmdbTestComponent implements OnInit {

  title: String;
  result: Object;
  result2: Object
  img = 'https://image.tmdb.org/t/p/w500/';
  constructor(private omdbService: OmdbServiceClient) { }

  searchMovie() {
    this.omdbService.searchMovieByTitle(this.title)
      .then((result) => {
       this.result = result;
    });
    this.omdbService.searchMovieByTitle2(this.title)
      .then((result) => {
      this.result2 = result;

    });
  }

  ngOnInit() {
    this.title = '';
  }

}
