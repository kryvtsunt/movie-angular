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


const appRoutes: Routes = [
  {path: '', redirectTo: 'tk', pathMatch: 'full'},
  {path: 'tk', component: NavbarComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'search', component: SearchComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'movie/:id', component: MovieComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'test', component: OmdbTestComponent}
    ]
  }
];

export const routing = RouterModule.forRoot(appRoutes);
