import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {LikeServiceClient} from "../services/like.service.client";
import {BookmarkServiceClient} from "../services/bookmark.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private service: UserServiceClient,  private likeService: LikeServiceClient,
              private bookmarkService: BookmarkServiceClient) {
  }

  user: User = new User();
  edit: boolean;
  admin = false;
  likedMovies;
  bookmarkedMovies;

  toggleEdit() {
    this.edit = !this.edit;
  }

  update(u: User) {
    this.service.updateUser(u).then((resp) => {
      this.service
        .profile()
        .then(user => {
          this.user = user;
          console.log(user);
        });
    });
  }

  logout() {
    this.service.logout()
      .then(() =>
        this.router.navigate(['home']));
  }
  findAllLikedMovies(){
    this.likeService.findAllLikedMovies()
      .then((response){
      console.log(response)
      this.likedMovies = response;
    });
  }

  findAllBookmarkedMovies(){
    this.bookmarkService.findAllBookmarkedMovies()
      .then((response){
      console.log(response)
      this.bookmarkedMovies = response;
    });
  }

  ngOnInit() {
    this.edit = false;
    this.service
      .profile()
      .then(user => {
        this.user = user;
        if (user.role === 'admin') {
          this.admin = true;
        }
        this.findAllLikedMovies();
        this.findAllBookmarkedMovies();
      });

  }

}
