import { Routes, RouterModule } from '@angular/router';
import {OmdbTestComponent} from './omdb-test/omdb-test.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MovieComponent} from './movie/movie.component';
import {SearchComponent} from './search/search.component';
import {NavbarComponent} from './navbar/navbar';
import {LoginComponent} from "./login/login.component";


const appRoutes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full'},
  {path: 'movie', component: NavbarComponent,
    children: [
      // {path: '', redirectTo: 'home'},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'search', component: SearchComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'test', component: OmdbTestComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
