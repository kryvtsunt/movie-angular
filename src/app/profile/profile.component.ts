import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private service: UserServiceClient) {
  }

  user: User = new User();
  edit: boolean;
  admin = false;

  toggleEdit() {
    this.edit = !this.edit;
  }

  update(u: User) {
    if (u.img_path === '') {
      u.img_path = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100'
    }
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
        this.router.navigate(['tk/home']));
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
      });

  }

}
