import {Component, OnInit} from '@angular/core';
import {SearchServiceClient} from '../services/search.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../models/movie.model.client';
import {Review} from '../models/review.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {ReviewServiceClient} from '../services/review.service.client';
import {MovieServiceClient} from '../services/movie.service.client';
import {LikeServiceClient} from '../services/like.service.client';
import {BookmarkServiceClient} from '../services/bookmark.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie
  review: String
  user: User
  reviews: [Review];
  img = 'https://image.tmdb.org/t/p/w500/';
  loggedIn: boolean;
  liked: boolean;
  bookmarked: boolean;
  // numberOfLikes: number;
  local: boolean
  admin: boolean;
  localMovie: Movie
  likedUsers: [User]

  constructor(private bookmarkService: BookmarkServiceClient, private likeService: LikeServiceClient,
              private movieService: MovieServiceClient, private reviewService: ReviewServiceClient,
              private userService: UserServiceClient, private searchService: SearchServiceClient,
              private route: ActivatedRoute) {
  }

  checkStatus() {
    return this.userService.checkStatus().then(response => this.loggedIn = response
    );
  }

  checkLike() {
    this.likeService.checkLike(this.movie.id).then((response) => {
      this.liked = response;
    })
  }

  like() {
    this.likeService.like(this.movie)
      .then(() => {
        this.checkLike();
        this.findUsersWhoLikedMovie();
      });
  }

  unlike() {
    this.likeService.unlike(this.movie)
      .then(() => {
        this.checkLike();
        this.findUsersWhoLikedMovie();
      });
  }

  checkBookmark() {
    this.bookmarkService.checkBookmark(this.movie.id).then((response) => {
      this.bookmarked = response;
    })
  }

  bookmark() {
    this.bookmarkService.bookmark(this.movie)
      .then(() => {
        this.checkBookmark();
      });
  }

  unbookmark() {
    this.bookmarkService.unbookmark(this.movie)
      .then(() => {
        this.checkBookmark();
      });
  }

  findAllReviews() {
    this.reviewService.findAllReviews(this.movie.id)
      .then((result) => {
        this.reviews = result
        // console.log(this.reviews);
      });
  }

  findUsersWhoLikedMovie() {
    if (this.local) {
      this.likeService.findUsersWhoLikedMovie(this.localMovie._id).then((likes) => {
        this.likedUsers = likes;
      });
    }
  }

  addReview() {
    this.reviewService.addReview(this.movie.id, this.review, this.movie)
      .then(() => {
        this.review = '';
        this.findAllReviews();
      });
  }

  deleteReview(review, userId) {
    this.reviewService.deleteReview(this.movie.id, userId, review)
      .then(() => {
        this.findAllReviews();
      });
  }

  setup() {
    this.checkStatus()
      .then((res) => {
        if (res) {
          this.checkLike();
          this.checkBookmark();
          this.findUsersWhoLikedMovie();
        }
      });
    this.findAllReviews();
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.movieService.findMovie(params.id)
          .then(movie => {
            if (movie === null) {
              this.local = false;
            } else {
              this.local = true;
              this.localMovie = movie;
            }
            return this.searchService.searchMoovieById(params.id)
          })
          .then(mov => {
            this.movie = mov;
            return this.checkStatus();
          })
          .then((res) => {
              if (res) {
                return this.userService.profile();
              } else {
                return new User();
              }
            }
          )
          .then((user) => {
              this.user = user;
            if (user.role === 'admin') {
              this.admin = true;
            } else {
              this.admin = false;
            }
            }
          )
          .then(() => {
            {
              this.setup();
            }
          });

      });
    // this.router.events.subscribe(() => {
    //     this.checkStatus();
    //     this.checkLike();
    //     this.findAllReviews();
    //   }
    // );
  }
}
