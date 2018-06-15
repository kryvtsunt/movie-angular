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

  toggleEdit(){
    this.edit = !this.edit;
  }

  update(u: User) {
    this.service.updateUser(u).then((resp) => {
      console.log('resp ' + resp.firstName);
      this.service
        .profile()
        .then(user => {
          this.user = user;
          console.log(user)
        })
    })
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
        console.log(user)
      });
    // this.service
    //   .findUserById('5b1ec6c2d06a450655254f14')
    //   .then(user => this.user = user);
  }

}
