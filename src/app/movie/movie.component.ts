import { Component, OnInit } from '@angular/core';
import {SearchServiceClient} from '../home/search.service.client';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie
  img = 'https://image.tmdb.org/t/p/w500/';

  constructor(private searchServie: SearchServiceClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.searchServie.searchMoovieById(params.id)
          .subscribe(movie => {
            this.movie = movie
          });
      })
  }
}
