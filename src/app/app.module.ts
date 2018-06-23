import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar';
import {OmdbServiceClient} from './omdb-test/omdb.service.client';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {OmdbTestComponent} from './omdb-test/omdb-test.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {SearchServiceClient} from './services/search.service.client';
import {MovieComponent} from './movie/movie.component';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import {AdminComponent} from './admin/admin.component';
import {ReviewServiceClient} from "./services/review.service.client";
import {LikeServiceClient} from "./services/like.service.client";
import {MovieServiceClient} from "./services/movie.service.client";
import {BookmarkServiceClient} from "./services/bookmark.service.client";
import {UsersComponent} from "./users/users.component";
import {MoviesComponent} from "./movies/movies.component";
import {LogsComponent} from "./logs/logs.component";
import {ActivityServiceClient} from "./services/activity.service.client";

@NgModule({
  declarations: [
    AppComponent,
    OmdbTestComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MovieComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminComponent,
    UsersComponent,
    MoviesComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [OmdbServiceClient, SearchServiceClient, UserServiceClient, MovieServiceClient, ReviewServiceClient, LikeServiceClient, BookmarkServiceClient, ActivityServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
