import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar';
import {OmdbServiceClient} from './omdb-test/omdb.service.client';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {OmdbTestComponent} from './omdb-test/omdb-test.component';
import {HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {SearchServiceClient} from './home/search.service.client';
import {MovieComponent} from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OmdbTestComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MovieComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [OmdbServiceClient, SearchServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
