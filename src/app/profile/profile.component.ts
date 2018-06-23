import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {LikeServiceClient} from "../services/like.service.client";
import {BookmarkServiceClient} from "../services/bookmark.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private service: UserServiceClient, private likeService: LikeServiceClient,
              private bookmarkService: BookmarkServiceClient, private route: ActivatedRoute) {
  }

  user: User = new User();
  profile: boolean;
  edit: boolean;
  admin = false;
  likedMovies;
  bookmarkedMovies;
  boyImg = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100'
  boyImg2 = 'http://webiconspng.com/wp-content/uploads/2016/11/avatar_business_costume_male_man_office_user_icon_403022.png'
  girlImg = 'http://www.hotellaginestra.it/wp-content/uploads/2016/06/person-girl-flat.png'
  girlImg2 = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png'
  manImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'
  womanImg = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'
  oldmanImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png'
  oldwomanImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/maturewoman-3-512.png'


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

  findAllLikedMovies() {
    this.likeService.findAllLikedMovies(this.user._id)
      .then((response) => {
        // console.log(response)
        this.likedMovies = response;
      });
  }

  findAllBookmarkedMovies() {
    this.bookmarkService.findAllBookmarkedMovies(this.user._id)
      .then((response) => {
        console.log(response)
        this.bookmarkedMovies = response;
      });
  }

  ngOnInit() {
    this.edit = false;
    this.route.params.subscribe(
      params => {
        if (params.username === undefined) {
          this.profile = true;
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

        } else {
          // this.profile = false;
          this.service.findUserByUsername(params.username)
            .then(user => {
              this.user = user;
              if (user.role === 'admin') {
                this.admin = true;
              }
              this.findAllLikedMovies();
            });
        }
      });
  }
}

