import {Component, OnInit} from '@angular/core';
import {SearchServiceClient} from '../services/search.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../models/movie.model.client';
import {Comment} from '../models/comment.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {CommentServiceClient} from '../services/comment.service.client';
import {MovieServiceClient} from "../services/movie.service.client";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie
  com: String
  comments: [Comment];
  img = 'https://image.tmdb.org/t/p/w500/';
  loggedIn: boolean;
  liked: boolean;
  numberOfLikes: number;

  constructor(private movieService: MovieServiceClient, private commentService: CommentServiceClient, private userService: UserServiceClient, private searchService: SearchServiceClient, private route: ActivatedRoute) {
  }

  checkStatus() {
    this.userService.checkStatus().then(response => {
      this.loggedIn = response;
    });
  }

  checkLike() {
    this.userService.checkLike(this.movie.id).then((response) => {
      this.liked = response;
    })
  }

  like() {
    this.userService.like(this.movie)
      .then(() => {
        this.checkLike();
        this.countLikes();
      });
  }

  unlike() {
    this.userService.unlike(this.movie)
      .then(() => {
        this.checkLike();
        this.countLikes();
      });
  }

  findAllComments() {
    this.commentService.findAllComments(this.movie.id)
      .then((result) => {
        this.comments = result
        console.log(this.comments);
      });
  }

  countLikes() {
    this.movieService.getMovie(this.movie.id).then((ls) => {
      const movie = ls.movie;
      if (movie === null) {
        this.numberOfLikes = 0;
      } else {
        this.numberOfLikes = movie.likes;
      }
    };
  }

  addComment() {
    this.commentService.addComment(this.movie.id, this.com, this.movie)
      .then((response) => {
        this.findAllComments()
      });
  }


  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.searchService.searchMoovieById(params.id)
          .then(movie => {
            this.movie = movie;
          })
          .then(() => {
            {
              this.checkStatus();
              this.checkLike();
              this.countLikes();
              this.findAllComments();
            }
          });
      });
    // this.router.events.subscribe(() => {
    //     this.checkStatus();
    //     this.checkLike();
    //     this.findAllComments();
    //   }
    // );
  }
}
