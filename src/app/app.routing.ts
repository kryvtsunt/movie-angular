import {Routes, RouterModule} from '@angular/router';
import {OmdbTestComponent} from './omdb-test/omdb-test.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MovieComponent} from './movie/movie.component';
import {SearchComponent} from './search/search.component';
import {NavbarComponent} from './navbar/navbar';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminComponent} from "./admin/admin.component";
import {UsersComponent} from "./users/users.component";
import {MoviesComponent} from "./movies/movies.component";
import {LogsComponent} from "./logs/logs.component";


const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', component: UsersComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'logs', component: LogsComponent}
  ]},
  // {path: 'tk', component: NavbarComponent}
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user/:username', component: ProfileComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'users', component: UsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'test', component: OmdbTestComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
