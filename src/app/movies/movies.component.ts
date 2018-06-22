import {Component, OnInit} from '@angular/core';
import {movieServiceClient, MovieServiceClient} from '../services/movie.service.client';
import {ActivatedRoute} from '@angular/router';
import {movie, Movie} from '../models/movie.model.client';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieServiceClient,
              private route: ActivatedRoute) {
  }

  movies = [];
  movie: Movie;
  img = 'https://image.tmdb.org/t/p/w500/';
  editMode = false;
  admin: boolean;
  index;


  updateMovie() {
    this.movieService.updateMovie(this.movie._id, this.movie)
      .then(() => {
        this.findAllMovies();
        this.cleanData();
      });
  }

  deleteMovie(movieId) {
    this.movieService.deleteMovie(movieId)
      .then(() => {
        this.findAllMovies();
        this.cleanData();
      });
  }

  cleanData() {
    this.movie = new movie();
    this.editMode = false;
  }

  editMovie(mov) {
    this.editMode = true;
    this.movie = Object.assign({}, mov);
  }

  findAllMovies() {
    this.movieService.findAllMovies()
      .then(movies => {
        this.movies = movies;
      });
  }

  ngOnInit() {
    this.movie = new Movie();
    this.findAllMovies();
  }

}
