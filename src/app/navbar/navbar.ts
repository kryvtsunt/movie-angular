import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {SearchServiceClient} from '../services/search.service.client';
import {Movie} from '../models/movie.model.client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})

export class NavbarComponent implements OnInit {
  title = ''
  loggedIn: boolean;
  results: Movie[];
  searchBardMode = 0;
  img = 'htitleps://image.tmdb.org/t/p/w500/';

  constructor(private searchServie: SearchServiceClient, private route: ActivatedRoute, private userService: UserServiceClient, private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
  }

  search() {

    if (this.title.length >= 0 && this.title[0] !== '@') {
      this.results = [];
      this.searchServie.searchMovieByTitle(this.title).then((response) => {
        this.results = response.results;
        if (this.results.length > 5) {
          this.results.length = 5;
        }
      });
    }
  }

  checkStatus() {
    this.userService.checkStatus().then(response => this.loggedIn = response);
  }

  logout() {
    this.userService.logout()
      .then(() =>
        this.router.navigate(['tk/home']));
  }

  advancedSearch() {
    if (this.title.length > 0 && this.title[0] === '@' && this.loggedIn) {
      const username = this.title.substr(1);
      this.userService.findUserByUsername(username)
        .then((user) => {if (user !== null) {
          this.router.navigate(['../user/' +  username]);
          this.title = '';
      }});
    } else {
      this.searchBardMode = 3;
      this.results = null;
      this.router.navigate(['search', {title: 'aba'}]);
      this.title = '';
    }
  }

  navigateMovie(id) {
    this.title = '';
    this.results = null;
    this.router.navigate(['../movie/' + id]);
  }

  changeSearchMode() {
    this.searchBardMode = (this.searchBardMode + 1) % 2;
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.checkStatus();
    });
  }

}
