import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../models/movie.model.client';
import {SearchServiceClient} from '../services/search.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  title = ''
  results: Movie[];
  mode: string;
  years = [];
  genres = [
    {
      'id': 28,
      'name': 'Action'
    },
    {
      'id': 12,
      'name': 'Adventure'
    },
    {
      'id': 16,
      'name': 'Animation'
    },
    {
      'id': 35,
      'name': 'Comedy'
    },
    {
      'id': 80,
      'name': 'Crime'
    },
    {
      'id': 99,
      'name': 'Documentary'
    },
    {
      'id': 18,
      'name': 'Drama'
    },
    {
      'id': 10751,
      'name': 'Family'
    },
    {
      'id': 14,
      'name': 'Fantasy'
    },
    {
      'id': 36,
      'name': 'History'
    },
    {
      'id': 27,
      'name': 'Horror'
    },
    {
      'id': 10402,
      'name': 'Music'
    },
    {
      'id': 9648,
      'name': 'Mystery'
    },
    {
      'id': 10749,
      'name': 'Romance'
    },
    {
      'id': 878,
      'name': 'Science Fiction'
    },
    {
      'id': 10770,
      'name': 'TV Movie'
    },
    {
      'id': 53,
      'name': 'Thriller'
    },
    {
      'id': 10752,
      'name': 'War'
    },
    {
      'id': 37,
      'name': 'Western'
    }
  ];
  sorts = [
    {
      'name': 'Popularity Desc',
      'value': 'popularity.desc'
    },
    {
      'name': 'Popularity Asc',
      'value': 'popularity.asc'
    },
    {
      'name': 'Rating Desc',
      'value': 'vote_average.asc'
    },
    {
      'name': 'Rating Asc',
      'value': 'vote_average.desc'
    },
    {
      'name': 'Release Date Desc',
      'value': 'release_date.desc'
    },
    {
      'name': 'Release Date Asc',
      'value': 'release_date.dsc'
    }
  ]

  img = 'https://image.tmdb.org/t/p/w500/';
  page = 1;
  year = 'None'
  genre = this.genres[0];
  sort = this.sorts[0];

  constructor(private searchServie: SearchServiceClient, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
  }

  setSort(s){
    this.sort = Object.assign({}, s)
  }

  setGenre(g){
    this.genre = Object.assign({}, g)
  }
  setPage(p){
    this.page = p;
    this.discover();
  }

  setYears() {
    let y = 2018;
    this.years.push('None');
    while (y > 1900) {
      this.years.push(y);
      y--;
    }
    console.log(this.years);
  }
  discover(){
    this.mode = 'discover'
    this.searchServie.dicover(this.genre.id, false, this.sort.value, this.page , this.year)
      .then((response) => {
      this.results = response.results;
      })
  }

  searchMoovie() {
    this.mode = 'search';
    this.searchServie.searchMovieByTitle(this.title).then((response) => {
      this.results = response.results;
    });
    // const url = 'https://api.themoviedb.org/3/search/movie?api_key=01202464e80fb52cd90af159ba329661&query=' + title
    // return this.httpClient.get<Object>(url);
  }

  ngOnInit() {
    this.setYears();
  }

}
