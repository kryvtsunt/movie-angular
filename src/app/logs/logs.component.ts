import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user.model.client';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-users',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserServiceClient,
              private route: ActivatedRoute) {
  }

  users = [];
  routerLink: string
  user: User;
  editMode = false;
  admin: boolean;
  index;

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
          this.routerLink = '../../user/';
        } else {
          this.admin = false;
          this.routerLink = '/../user/';
        }
      });
    this.findAllUsers();
  }

}
