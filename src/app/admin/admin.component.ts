import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user.model.client';

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
  userName = '';
  password = '';
  userId = '';
  editMode = false;
  sections = [];
  admin: boolean;
  index;

  createUser() {
    if (this.userName === '') { this.userName = ('User' + this.index); }
    if (this.password === '') { this.password = 'password'; }
      this.userService.createUser(this.userName, this.password)
        .then(() => {
          this.findAllUsers();
          this.cleanData();
        });
  }

  updateUser() {
    const u: User = new User();
    u.username = this.userName;
    u.password = this.password;
    this.userService.updateUser(u)
      .then(() => {
        this.findAllUsers();
        this.cleanData();
      });
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .then(() => {
        this.findAllUsers();
        this.cleanData();
      });
  }

  cleanData() {
    this.userName = '';
    this.password = '';
    this.editMode = false;
  }

  editUser(name, seats, id) {
    this.editMode = true;
    this.userName = name;
    this.userId = id;
    this.password = seats;
  }

  findAllUsers() {
    this.userService.findAllUsers()
      .then(users => {this.users = users; this.index = users.length + 1;});
  }

  ngOnInit() {
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
