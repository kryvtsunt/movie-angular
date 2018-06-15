import {Component, OnInit} from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;

  login(username, password) {
    console.log([username, password]);
    this.userService.login(username, password).then((response) => {
      if (response.status === 200) {
        this.router.navigate(['tk/profile']);
      } else {
        alert('Wrong Credentials');
      }
    })

  }

  constructor(private router: Router, private userService: UserServiceClient) {
  }

  ngOnInit() {
  }

}
