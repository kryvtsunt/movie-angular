import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user.model.client';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private route: ActivatedRoute) {
  }

  users = [];
  user: User;
  editMode = false;
  sections = [];
  admin: boolean;
  index;
  boyImg = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100'
  boyImg2 = 'http://webiconspng.com/wp-content/uploads/2016/11/avatar_business_costume_male_man_office_user_icon_403022.png'
  girlImg = 'http://www.hotellaginestra.it/wp-content/uploads/2016/06/person-girl-flat.png'
  girlImg2 = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png'
  manImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'
  womanImg = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'
  oldmanImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png'
  oldwomanImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/maturewoman-3-512.png'

  createUser() {
    console.log(this.user)
    if (this.user.username === undefined) {
      this.user.username = ('User' + this.index);
    }
    if (this.user.password === undefined) {
      this.user.password = ('User' + this.index);
    }
    console.log(this.user)
    this.userService.createUser(this.user)
      .then(() => {
        this.findAllUsers();
        this.cleanData();
      });
  }

  updateUser() {
    console.log(this.user._id);
    this.userService.updateUserById(this.user._id, this.user)
      .then(() => {
        this.findAllUsers();
        this.cleanData();
      });
  }

  deleteUser(userId) {
    this.userService.deleteUserById(userId)
      .then(() => {
        this.findAllUsers();
        this.cleanData();
      });
  }

  cleanData() {
    this.user = new User();
    this.editMode = false;
  }

  editUser(user) {
    this.editMode = true;
    this.user = Object.assign({}, user);
  }

  findAllUsers() {
    this.userService.findAllUsers()
      .then(users => {
        this.users = users
          .filter((user) => (user.role !== 'admin'));
        this.index = users.length + 1;
        console.log(users)
      });
  }

  ngOnInit() {
    this.user = new User();
    this.userService
      .profile()
      .then(user => {
        if (user.role === 'admin') {
          this.admin = true;
        } else {
          this.admin = false;
        }
      });
    this.findAllUsers();
  }

}
