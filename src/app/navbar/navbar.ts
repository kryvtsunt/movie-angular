import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {SearchServiceClient} from "../services/search.service.client";
import {Movie} from "../models/movie.model.client";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})

export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  title: string;
  results: Movie[];
  searchBardMode = 0;
  img = 'htitleps://image.tmdb.org/t/p/w500/';

  constructor(private searchServie: SearchServiceClient, private route: ActivatedRoute, private userService: UserServiceClient, private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
  }

  searchMoovie() {
    console.log(this.title);
    this.searchServie.searchMovieByTitle(this.title).then((response) => {
      this.results = response.results;
      if (this.results.length > 5) {this.results.length = 5;}
    });
  }

  checkStatus() {
    this.userService.checkStatus().then(response => this.loggedIn = response);
  }

  logout() {
    this.userService.logout()
      .then(() =>
        this.router.navigate(['tk/home']));
  }

  advancedSearch(){
    this.searchBardMode = 3;
    this.title = '';
    this.results = null ;
    this.router.navigate(['search']);
  }

  navigateMovie(id){
    this.title = '';
    this.results = null ;
    this.router.navigate(['../movie/' + id]);
  }

  changeSearchMode(){
    this.searchBardMode = (this.searchBardMode + 1) % 2
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.checkStatus();
    });
  }

}
