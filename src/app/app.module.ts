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
import {CommentServiceClient} from "./services/comment.service.client";
import {LikeServiceClient} from "./services/like.service.client";
import {MovieServiceClient} from "./services/movie.service.client";
import {BookmarkServiceClient} from "./services/bookmark.service.client";

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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [OmdbServiceClient, SearchServiceClient, UserServiceClient, MovieServiceClient, CommentServiceClient, LikeServiceClient, BookmarkServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
