import {Component, OnInit} from '@angular/core';
import {SearchServiceClient} from '../services/search.service.client';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../models/movie.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie
  img = 'https://image.tmdb.org/t/p/w500/';
  loggedIn: boolean;
  liked: boolean;

  constructor(private userService: UserServiceClient, private searchService: SearchServiceClient, private route: ActivatedRoute) {
  }

  checkStatus() {
    this.userService.checkStatus().then(response => {this.loggedIn = response; });
  }
  checkLike() {
    this.userService.checkLike(this.movie.id).then((response) => {this.liked = response})
  }
  like() {
    this.userService.like(this.movie)
      .then(() => this.checkLike());
  }


  ngOnInit() {
    this.checkStatus();
    this.route.params.subscribe(
      params => {
        this.searchService.searchMoovieById(params.id)
          .then(movie => {
            this.movie = movie;
            this.checkStatus();
          })
          .then (() =>     { this.checkLike(); });
      });
  }
}
