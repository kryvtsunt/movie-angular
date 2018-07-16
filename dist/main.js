(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light\">\n  <section class=\"jumbotron text-center\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading\">Welcome to MovieDB</h1>\n      <p class=\"lead text-muted\">This is a prototype of my web application. Use this app to browse new releases and find your favourite movies. </p>\n    </div>\n  </section>\n  <div class=\"container text-center\">\n    <a href=\"https://github.com/kryvtsunt/movie-angular/wiki/INSTRUCTIONS\"><h3>GITHUB WIKI</h3></a>\n  </div>\n  <br/>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    AboutComponent.prototype.setParams = function (params) {
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n  height: 100%;\r\n  width: 60px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: auto;\r\n  left: 0;\r\n  background-color: #111;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n.sidenav i {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #818181;\r\n  display: block;\r\n}\r\n\r\n.sidenav i:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.main {\r\n  margin-left: 60px; /* Same as the width of the sidenav */\r\n  font-size: 28px; /* Increased text to enable scrolling */\r\n  padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n  .sidenav i {font-size: 18px;}\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"sidenav\">-->\n<!--<i class=\" fa fa-2x fa-users\"></i>-->\n<!--<i class=\" fa fa-2x fa-user\"></i>-->\n<!--<i class=\" fa fa-2x fa-edit\"></i>-->\n<!--</div>-->\n<div *ngIf=\"admin\" class=\"container-fluid text-center\">\n  <!--<br/>-->\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item btn\" routerLink=\"./users\">\n      <a class=\"nav-link\" ><strong>Users</strong></a>\n    </li>\n    <li class=\"nav-item btn\" routerLink=\"./movies\">\n      <a class=\"nav-link\" ><strong>Movies</strong></a>\n    </li>\n    <!--<li class=\"nav-item btn\" routerLink=\"./actors\">-->\n      <!--<a class=\"nav-link\" >Actors</a>-->\n    <!--</li>-->\n    <li class=\"nav-item btn\" routerLink=\"./logs\">\n      <a class=\"nav-link\" ><strong>Logs</strong></a>\n    </li>\n  </ul>\n  <router-outlet></router-outlet>\n</div>\n\n\n<div *ngIf=\"!admin\" class=\"container-fluid text-center\" style=\"color:white; background-color:red\">\n  <br/>\n  <h4> ERROR: You are not authorized to be here !</h4>\n  <br/>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.users = [];
        this.editMode = false;
    }
    AdminComponent.prototype.createUser = function () {
        var _this = this;
        console.log(this.user);
        if (this.user.username === undefined) {
            this.user.username = ('User' + this.index);
        }
        if (this.user.password === undefined) {
            this.user.password = ('User' + this.index);
        }
        console.log(this.user);
        this.userService.createUser(this.user)
            .then(function () {
            _this.findAllUsers();
            _this.cleanData();
        });
    };
    AdminComponent.prototype.updateUser = function () {
        var _this = this;
        console.log(this.user._id);
        this.userService.updateUserById(this.user._id, this.user)
            .then(function () {
            _this.findAllUsers();
            _this.cleanData();
        });
    };
    AdminComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUserById(userId)
            .then(function () {
            _this.findAllUsers();
            _this.cleanData();
        });
    };
    AdminComponent.prototype.cleanData = function () {
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.editMode = false;
    };
    AdminComponent.prototype.editUser = function (user) {
        this.editMode = true;
        this.user = Object.assign({}, user);
    };
    AdminComponent.prototype.findAllUsers = function () {
        var _this = this;
        this.userService.findAllUsers()
            .then(function (users) {
            _this.users = users
                .filter(function (user) { return (user.role !== 'admin'); });
            _this.index = users.length + 1;
            console.log(users);
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.userService
            .profile()
            .then(function (user) {
            if (user.role === 'admin') {
                _this.admin = true;
            }
            else {
                _this.admin = false;
            }
        });
        this.findAllUsers();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n  <br/>\n  <br/>\n  <br/>\n  <br/>\n  <br/>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar */ "./src/app/navbar/navbar.ts");
/* harmony import */ var _omdb_test_omdb_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./omdb-test/omdb.service.client */ "./src/app/omdb-test/omdb.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _omdb_test_omdb_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./omdb-test/omdb-test.component */ "./src/app/omdb-test/omdb-test.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_search_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/search.service.client */ "./src/app/services/search.service.client.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _services_review_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/review.service.client */ "./src/app/services/review.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/like.service.client */ "./src/app/services/like.service.client.ts");
/* harmony import */ var _services_movie_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/movie.service.client */ "./src/app/services/movie.service.client.ts");
/* harmony import */ var _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/bookmark.service.client */ "./src/app/services/bookmark.service.client.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./logs/logs.component */ "./src/app/logs/logs.component.ts");
/* harmony import */ var _services_activity_service_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/activity.service.client */ "./src/app/services/activity.service.client.ts");
/* harmony import */ var _services_follow_service_client__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/follow.service.client */ "./src/app/services/follow.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _omdb_test_omdb_test_component__WEBPACK_IMPORTED_MODULE_8__["OmdbTestComponent"],
                _navbar_navbar__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_12__["MovieComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_23__["UsersComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_24__["MoviesComponent"],
                _logs_logs_component__WEBPACK_IMPORTED_MODULE_25__["LogsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"]
            ],
            providers: [_omdb_test_omdb_service_client__WEBPACK_IMPORTED_MODULE_4__["OmdbServiceClient"], _services_search_service_client__WEBPACK_IMPORTED_MODULE_11__["SearchServiceClient"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_17__["UserServiceClient"], _services_movie_service_client__WEBPACK_IMPORTED_MODULE_21__["MovieServiceClient"], _services_review_service_client__WEBPACK_IMPORTED_MODULE_19__["ReviewServiceClient"], _services_like_service_client__WEBPACK_IMPORTED_MODULE_20__["LikeServiceClient"], _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_22__["BookmarkServiceClient"], _services_activity_service_client__WEBPACK_IMPORTED_MODULE_26__["ActivityServiceClient"], _services_follow_service_client__WEBPACK_IMPORTED_MODULE_27__["FollowServiceClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _omdb_test_omdb_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omdb-test/omdb-test.component */ "./src/app/omdb-test/omdb-test.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logs/logs.component */ "./src/app/logs/logs.component.ts");













var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], children: [
            { path: '', redirectTo: 'users', pathMatch: 'full' },
            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"] },
            { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_11__["MoviesComponent"] },
            { path: 'logs', component: _logs_logs_component__WEBPACK_IMPORTED_MODULE_12__["LogsComponent"] }
        ] },
    // {path: 'tk', component: NavbarComponent}
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'user/:username', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'movie/:id', component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'test', component: _omdb_test_omdb_test_component__WEBPACK_IMPORTED_MODULE_1__["OmdbTestComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<br/>-->\n<!--<div class=\"container\">-->\n<!--<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">-->\n<!--<ol class=\"carousel-indicators\" >-->\n<!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>-->\n<!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>-->\n<!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>-->\n<!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>-->\n<!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"4\"></li>-->\n<!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"5\"></li>-->\n<!--</ol>-->\n<!--<div class=\"carousel-inner\" >-->\n<!--<div class=\"carousel-item active\">-->\n<!--<img class=\"d-block w-100\" src=\"http://moviehole.net/img/Blade-Runner-2049.jpeg\" alt=\"First slide\">-->\n<!--</div>-->\n<!--<div class=\"carousel-item\">-->\n<!--<img class=\"d-block w-100\" src=\"http://moviehole.net/img/Blade-Runner-2049.jpeg\" alt=\"Second slide\">-->\n<!--</div>-->\n<!--<div class=\"carousel-item\">-->\n<!--<img class=\"d-block w-100\" src=\"http://moviehole.net/img/Blade-Runner-2049.jpeg\" alt=\"Third slide\">-->\n<!--</div>-->\n<!--<div class=\"carousel-item\">-->\n<!--<img class=\"d-block w-100\" src=\"http://moviehole.net/img/Blade-Runner-2049.jpeg\" alt=\"Third slide\">-->\n<!--</div>-->\n<!--<div class=\"carousel-item\">-->\n<!--<img class=\"d-block w-100\" src=\"http://moviehole.net/img/Blade-Runner-2049.jpeg\" alt=\"Third slide\">-->\n<!--</div>-->\n<!--</div>-->\n\n<!--<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">-->\n<!--<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>-->\n<!--<span class=\"sr-only\">Previous</span>-->\n<!--</a>-->\n<!--<a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">-->\n<!--<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>-->\n<!--<span class=\"sr-only\">Next</span>-->\n<!--</a>-->\n<!--</div>-->\n<!--</div>-->\n<div class=\"bg-light\">\n  <section class=\"jumbotron text-center\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading\">Welcome to MovieDB</h1>\n      <p class=\"lead text-muted\">This is a prototype of my web application. Use this app to browse new releases and find your favourite movies. <br/>Proceed to the ABOUT tab in the navigation\n        bar to learn more</p>\n      <p>\n        <a routerLink=\"../about\" class=\"btn btn-dark\">Learn more</a>\n      </p>\n    </div>\n  </section>\n\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-3 col-sm-12\" style=\"background-color: rgb(233, 236, 239); margin-top: 20px\">\n        <div class=\"list-group\">\n          <button class=\"list-group-item list-group-item-action\" [ngClass]=\"{'bg-dark text-white': title === 'Most Popular Movies'}\"\n                  (click)=\"discoverPopularMoovies()\" style=\"margin-bottom: 30px; margin-top: 150px\"><h6>Most Popular Movies </h6>\n          </button>\n          <button class=\"list-group-item list-group-item-action\" [ngClass]=\"{'bg-dark text-white': title === 'Most Popular Kids\\' Movies'}\"\n                  (click)=\"discoverPopularKids()\" style=\"margin-bottom: 30px\"><h6> Most Popular Kids' Movies </h6>\n          </button>\n          <!--<button class=\"list-group-item list-group-item-action\" [ngClass]=\"{'bg-dark text-white': title === 'Most Popular Comedies'}\"-->\n                  <!--(click)=\"discoverComedy()\" style=\"margin-bottom: 30px\"><h6>Most Popular Comedies</h6>-->\n          <!--</button>-->\n          <button class=\"list-group-item list-group-item-action\" [ngClass]=\"{'bg-dark text-white': title === 'Most Popular Family Movies'}\"\n                  (click)=\"discoverFamily()\" style=\"margin-bottom: 30px\"><h6>Most Popular Family Movies </h6>\n          </button>\n          <button class=\"list-group-item list-group-item-action disabled\"\n                   style=\"margin-bottom: 30px\"><h6> Best Movies of the 21st century (disabled) </h6>\n          </button>\n          <button class=\"list-group-item list-group-item-action disabled\"\n                  style=\"margin-bottom: 30px\"><h6> More Options Will Be Here Soon (disabled) </h6>\n          </button>\n\n\n        </div>\n      </div><!--/span-->\n\n\n      <div class=\"col-md-9\">\n        <br/>\n        <div class=\"container text-center shadow-lg p-3 mb-5 bg-white rounded\"><h3>{{title}}</h3></div>\n        <div class=\"album \">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"card\" routerLink=\"../movie/{{res.id}}\" style=\"\" *ngFor=\"let res of movies\">\n                <img src=\"{{img}}{{res.poster_path}}\" width=\"200px\" alt=\"Card image cap\">\n                <div class=\"btn card-header text-center\">\n                  <h5 *ngIf=\"res.title.length > 18\">{{res.title.substring(0, 15)+' ...'}}</h5>\n                  <h5 *ngIf=\"res.title.length <= 18\">{{res.title.substring(0, 18)}}</h5>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div><!--/span-->\n\n\n    </div><!--/row-->\n    <br/>\n    <div *ngIf=\"adsOn\">\n    <p class=\"float-right hidden-md-up\">\n      <button type=\"button\" class=\"btn btn-dark btn-sm\" data-toggle=\"offcanvas\" (click)=\"adsOn = false\">Close</button>\n    </p>\n    <div class=\"jumbotron\">\n      <h1>Here could be your advertisement!</h1>\n      <p>Contact MovieDB administration at kryvtsun.t@husky.neu.edu to place your ads here</p>\n    </div>\n    </div>\n\n\n    <!--<div class=\"row\">-->\n    <!--<div class=\"col-6 col-lg-4\" *ngFor=\"let story of stories\">-->\n    <!--<img src=\"{{story.multimedia[3].url}}\">-->\n    <!--<h2>{{story.title}}</h2>-->\n    <!--<p>{{story.abstract}} </p>-->\n    <!--<p><a class=\"btn btn-secondary\" href=\"{{story.url}}\" role=\"button\">View details &raquo;</a></p>-->\n    <!--</div>-->\n    <!--</div>-->\n    <hr/>\n    <h3><strong>Fresh Articles of the Cinema World</strong></h3>\n    <br/>\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-4 col-sm-6 card\" *ngFor=\"let story of stories\">\n        <img class=\"card-img img-fluid\" style=\"margin-top: 15px\" src=\"{{story.multimedia[4].url}}\">\n        <div class=\"card-header\">\n          <h5>{{story.title}}</h5>\n        </div>\n        <div class=\"card-body\">\n          <p>{{story.abstract}} </p>\n          <div><a class=\"btn btn-secondary\" href=\"{{story.url}}\" role=\"button\">View details &raquo;</a></div>\n        </div>\n        <div style=\"margin-bottom: 15px\"class=\"card-footer small\">\n          <p><strong>{{story.byline}}</strong> <br/> {{story.published_date.split('T')[0]}}</p>\n        </div>\n      </div>\n    </div>\n    <br/>\n    <br/>\n    <hr/>\n    <br/>\n    <br/>\n    <br/>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service.client */ "./src/app/services/search.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(searchServie, route) {
        this.searchServie = searchServie;
        this.route = route;
        this.adsOn = true;
        this.img = 'https://image.tmdb.org/t/p/w500/';
    }
    HomeComponent.prototype.discoverPopularMoovies = function () {
        var _this = this;
        this.title = 'Most Popular Movies';
        this.searchServie.discoverPopularMovies().then(function (response) {
            _this.movies = response.results;
            _this.movies[5] = _this.movies[10];
            _this.movies.length = 8;
        });
    };
    HomeComponent.prototype.discoverPopularKids = function () {
        var _this = this;
        this.title = 'Most Popular Kids\' Movies';
        this.searchServie.discoverMostPopularKids().then(function (response) {
            _this.movies = response.results;
            _this.movies.length = 8;
        });
    };
    HomeComponent.prototype.discoverHighestRatedR = function () {
        var _this = this;
        this.title = 'Highest Rated R Movies';
        this.searchServie.discoverHighestRatedR().then(function (response) {
            _this.movies = response.results;
            _this.movies.length = 8;
        });
    };
    HomeComponent.prototype.discoverComedy = function () {
        var _this = this;
        this.title = 'Most Popular Comedies';
        this.searchServie.discoverMostPopularComedies().then(function (response) {
            _this.movies = response.results;
            _this.movies[5] = _this.movies[10];
            _this.movies.length = 8;
        });
    };
    HomeComponent.prototype.discoverFamily = function () {
        var _this = this;
        this.title = 'Most Popular Family Movies';
        this.searchServie.discoverMostPopularFamilyMovies().then(function (response) {
            _this.movies = response.results;
            _this.movies.length = 8;
        });
    };
    HomeComponent.prototype.findStroies = function () {
        var _this = this;
        this.searchServie.findStories().then(function (response) {
            console.log(response);
            _this.stories = response.results;
            _this.stories.length = 8;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.discoverPopularMoovies();
        this.findStroies();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_service_client__WEBPACK_IMPORTED_MODULE_2__["SearchServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Form */\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 400px;\r\n  margin: 0 auto 100px;\r\n  padding: 30px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  text-align: center;\r\n}\r\n\r\n.form .thumbnail {\r\n  background: #c82f2e;\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto 30px;\r\n  padding: 5px 5px;\r\n  border-top-left-radius: 100%;\r\n  border-top-right-radius: 100%;\r\n  border-bottom-left-radius: 100%;\r\n  border-bottom-right-radius: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form .thumbnail img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.form .errors {\r\n  color: white;\r\n  background: #c82f2e;\r\n}\r\n\r\n.form input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form button {\r\n  outline: 0;\r\n  background: #c82f2e;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #c82f2e;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n\r\n.container .info span .fa {\r\n  color: #c82f2e;\r\n}\r\n\r\n/* END Form */\r\n\r\n/* Demo Purposes */\r\n\r\nbody {\r\n  background: #ccc;\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nbody:before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#video {\r\n  z-index: -99;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <div class=\"thumbnail\"><img src=\"http://2jw4122p6sl31mu39k4ehzyp.wpengine.netdna-cdn.com/wp-content/uploads/video-production.png\"/></div>\n  <div class=\"errors\">\n    <div *ngIf=\"noUsernameError\">\n      <p> Username field is empty </p>\n    </div>\n    <div *ngIf=\"noPasswordError\" >\n      <p> Password field is empty </p>\n    </div>\n    <div *ngIf=\"credentialsError\">\n      <p> Wrong Credentials </p>\n    </div>\n  </div>\n  <div>\n  <div>\n    <input type=\"text\" [(ngModel)]=\"username\"\n           placeholder=\"Username\"\n           class=\"form-control\"/>\n    <input type=\"password\" [(ngModel)]=\"password\"\n           placeholder=\"Password\"\n           class=\"form-control\"/>\n    <button (click)=\"login()\">Login</button>\n    <p class=\"message\">Not registered? <a routerLink=\"/register\">Sign up</a></p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.resetErrors = function () {
        this.credentialsError = false;
        this.noUsernameError = false;
        this.noPasswordError = false;
    };
    LoginComponent.prototype.reset = function () {
        this.username = '';
        this.password = '';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.resetErrors();
        if (this.username === '') {
            this.noUsernameError = true;
        }
        else {
            if (this.password === '') {
                this.noPasswordError = true;
            }
            else {
                this.service.login(this.username, this.password)
                    .then(function (response) {
                    if (response !== null) {
                        console.log(response);
                        _this.router.navigate(['profile']);
                    }
                    else {
                        _this.credentialsError = true;
                    }
                });
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.reset();
        this.resetErrors();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logs/logs.component.css":
/*!*****************************************!*\
  !*** ./src/app/logs/logs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.table {*/\r\n  /*border-radius: 5px;*/\r\n  /*width: 50%;*/\r\n  /*margin: 0px auto;*/\r\n  /*float: none;*/\r\n  /*}*/\r\n"

/***/ }),

/***/ "./src/app/logs/logs.component.html":
/*!******************************************!*\
  !*** ./src/app/logs/logs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <br/>\r\n  <h3>List of Actions</h3>\r\n  <br/>\r\n\r\n  <table class=\"table table-responsive-md\">\r\n    <thead class=\"thead-dark\">\r\n    <tr>\r\n      <th scope=\"col\">User Icon</th>\r\n      <th scope=\"col\">User</th>\r\n      <th scope=\"col\">Action</th>\r\n      <th scope=\"col\">Action Icon</th>\r\n      <th scope=\"col\">Movie/User</th>\r\n      <th scope=\"col\">Date</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let activity of activities\">\r\n      <td><img src=\"{{activity.user.img_path}}\" width=\"50px\" ></td>\r\n      <td>@{{activity.user.username}}</td>\r\n      <td>{{activity.type}}</td>\r\n      <td *ngIf=\"activity.type === 'like'\"><i class=\"fa fa-heart fa-lg\"></i></td>\r\n      <td *ngIf=\"activity.type === 'unlike'\"><i class=\"far fa-heart fa-lg\"></i></td>\r\n      <td *ngIf=\"activity.type === 'bookmark'\"><i class=\"fa fa-bookmark fa-lg\"></i></td>\r\n      <td *ngIf=\"activity.type === 'unbookmark'\"><i class=\"far fa-bookmark fa-lg\"></i></td>\r\n      <td *ngIf=\"activity.type === 'add review'\"><i class=\"fa fa-comment fa-lg\"></i></td>\r\n      <td *ngIf=\"activity.type === 'delete review'\"><i class=\"far fa-comment fa-lg\"></i></td>\r\n      <td *ngIf=\"activity.type === 'follow'\"><i class=\"fa fa-user fa-lg\"></i></td>\r\n      <td *ngIf=\"activity.type === 'unfollow'\"><i class=\"far fa-user fa-lg\"></i></td>\r\n\r\n      <td *ngIf=\"activity.type !== 'follow' && activity.type !== 'unfollow'\">{{activity.movie.title}}</td>\r\n      <td *ngIf=\"activity.type === 'follow' || activity.type === 'unfollow'\">@{{activity.user2.username}}</td>\r\n\r\n      <td>{{activity.date.split(\"T\")[0]}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/logs/logs.component.ts":
/*!****************************************!*\
  !*** ./src/app/logs/logs.component.ts ***!
  \****************************************/
/*! exports provided: LogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsComponent", function() { return LogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_activity_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/activity.service.client */ "./src/app/services/activity.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogsComponent = /** @class */ (function () {
    function LogsComponent(logservice, route) {
        this.logservice = logservice;
        this.route = route;
        this.activities = [];
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logservice
            .findAllActivities()
            .then(function (activities) {
            _this.activities = activities;
        });
    };
    LogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logs',
            template: __webpack_require__(/*! ./logs.component.html */ "./src/app/logs/logs.component.html"),
            styles: [__webpack_require__(/*! ./logs.component.css */ "./src/app/logs/logs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_activity_service_client__WEBPACK_IMPORTED_MODULE_2__["ActivityServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "./src/app/models/movie.model.client.ts":
/*!**********************************************!*\
  !*** ./src/app/models/movie.model.client.ts ***!
  \**********************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.css":
/*!*******************************************!*\
  !*** ./src/app/movie/movie.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light\">\n  <br/>\n  <div class=\"container\" *ngIf=\"movie\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <img *ngIf=\"!local\" class=\"card-img\" style=\"border: 10px solid rgb(240, 241, 242)\"\n               src=\"{{img}}{{movie.poster_path}}\">\n          <img *ngIf=\"local\" class=\"card-img\" style=\"border: 10px solid rgb(240, 241, 242)\"\n               src=\"{{localMovie.poster_path}}\">\n          <!--<div class=\"card-body\">-->\n\n          <!--</div>-->\n\n\n          <!--<div class=\"float-right hidden-md-up\">-->\n          <!--<button type=\"button\" class=\"btn btn-dark btn-sm\" data-toggle=\"offcanvas\" (click)=\"adsOn = false\">Close</button>-->\n          <!--</div>-->\n          <!--<div class=\"float-right hidden-md-up\">-->\n          <!--<button type=\"button\" class=\"btn btn-dark btn-sm\" data-toggle=\"offcanvas\" (click)=\"adsOn = false\">Close</button>-->\n          <!--</div>-->\n          <div *ngIf=\"loggedIn\" class=\"card-img-overlay\" style=\"padding:0px;\">\n            <div class=\"float-right hidden-md-up rounded\"\n                 style=\"background-color: rgb(240, 241, 242)\">\n              <div [(ngSwitch)]=\"bookmarked\" class=\"text-center\">\n                <i *ngSwitchCase=\"true\" (click)=\"unbookmark()\" class=\"btn text-warning fa fa-bookmark fa-2x\"></i>\n                <i *ngSwitchCase=\"false\" (click)=\"bookmark()\" class=\"btn text-warning far fa-bookmark fa-2x\"></i>\n              </div>\n              <div [(ngSwitch)]=\"liked\" class=\"text-center\">\n                <i *ngSwitchCase=\"true\" (click)=\"unlike()\" class=\"btn text-danger fa fa-heart fa-2x\"></i>\n                <i *ngSwitchCase=\"false\" (click)=\"like()\" class=\"btn text-danger far fa-heart fa-2x\"></i>\n              </div>\n            </div>\n          </div>\n\n          <!--<p> Likes: {{numberOfLikes}}</p>-->\n          <!--<p> Bokmarks: {{numberOfLikes}}</p>-->\n\n          <div *ngIf=\"loggedIn && local && likedUsers && likedUsers.length > 0\" class=\"card-footer\">\n            <h5><strong><i class=\"fa fa-heart text-danger\"></i> Liked by: </strong></h5>\n            <span *ngFor=\"let likedUser of likedUsers\">\n              <span class=\"btn btn-sm\">\n              <img class=\"d-flex justify-content-start\" src=\"{{likedUser.user.img_path}}\" width=\"50px\">\n              <strong class=\"float-left\">@{{likedUser.user.username}}</strong>\n              </span>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-6 card card-header\">\n        <div>\n          <h6 class=\"float-left\"><span class=\"text-danger\">Grade: {{movie.vote_average}} </span>\n            <small>({{movie.vote_count}})</small>\n          </h6>\n          <h6 class=\"float-right\">IMDB_ID<strong class=\"text-danger\">{{' '+ movie.imdb_id}}</strong></h6>\n        </div>\n        <div class=\"text-center shadow-lg p-3 mb-5 bg-white rounded\" style=\"margin-top: 20px;\">\n          <a *ngIf=\"!local\" href=\"{{movie.homepage}}\"><h1 class=\"text-dark\">\n            {{movie.title}}\n          </h1></a>\n          <a *ngIf=\"local\" href=\"{{movie.homepage}}\"><h1 class=\"text-dark\">\n            {{localMovie.title}}\n          </h1></a>\n          <h6 class=\"text-center rounded\" style=\"background-color: rgb(233, 236, 239);\"><em>«{{movie.tagline}}»</em>\n          </h6>\n          <small class=\"text-center\"><em>{{movie.status}} <span\n            *ngIf=\"movie.release_date\"> _ {{movie.release_date}}</span></em></small>\n        </div>\n        <h5 class=\" btn-group d-flex justify-content-center\"><span class=\"btn btn-danger disabled\"\n                                                                   *ngFor=\"let genre of movie.genres\">  <strong>{{genre.name}}</strong></span>\n        </h5>\n        <br/>\n        <div class=\"row\" style=\"padding-left: 50px\">\n          <div class=\"col-4\"><strong>Revenue: </strong> <br/> {{movie.revenue}} $\n          </div>\n          <div class=\"col-4\"><strong>Budget:</strong> <br/>{{movie.budget}} $\n          </div>\n          <div class=\"col-4\"><strong>Runtime:</strong> <br/>{{movie.runtime}} min\n          </div>\n        </div>\n        <br/>\n        <div class=\"shadow-lg p-3 mb-5 rounded\" style=\"background-color: rgb(233, 236, 239);\">\n          <h4>Movie Overview: </h4>\n          <h6 *ngIf=\"!local\">\n            {{movie.overview}}\n          </h6>\n          <h6 *ngIf=\"local\">\n            {{localMovie.overview}}\n          </h6>\n        </div>\n        <span class=\"text-center\"><h5>Production Companies: </h5>\n              <span class=\"btn btn-sm btn-light disabled\" *ngFor=\"let company of movie.production_companies\"> {{company.name}} </span>\n        </span>\n\n      </div>\n    </div>\n\n\n    <!--<div> Status: {{movie.status}}-->\n    <!--</div>-->\n    <!--<div> Grade: {{movie.vote_average}} of ({{movie.vote_count}})-->\n    <!--</div>-->\n    <!--<div>-->\n    <!--IMDB_ID {{movie.imdb_id}}-->\n    <!--</div>-->\n\n    <!--<div>-->\n    <!--Release Date {{movie.release_date}}-->\n    <!--</div>-->\n    <!--<div>-->\n    <!--<a href=\"{{movie.homepage}}\"> Link</a>-->\n    <!--</div>-->\n\n    <!--<div>-->\n    <!--IMDB_ID {{movie.imdb_id}}-->\n    <!--</div>-->\n\n\n    <br/>\n    <div *ngIf=\"loggedIn\" class=\"input-group\" style=\"padding-left: 15px\">\n\n      <!--<div [(ngSwitch)]=\"liked\">-->\n      <!--<button *ngSwitchCase=\"true\" (click)=\"unlike()\" class=\"btn btn-danger fas fa-heart\"></button>-->\n      <!--<button *ngSwitchCase=\"false\" (click)=\"like()\" class=\"btn btn-outline-danger fas fa-heart\"></button>-->\n      <!--</div>-->\n      <!--<div [(ngSwitch)]=\"bookmarked\">-->\n      <!--<button *ngSwitchCase=\"true\" (click)=\"unbookmark()\" class=\"btn btn-warning fa fa-bookmark\"></button>-->\n      <!--<button *ngSwitchCase=\"false\" (click)=\"bookmark()\" class=\"btn btn-outline-warning fa fa-bookmark\"></button>-->\n      <!--</div>-->\n\n\n      <textarea rows=\"5\" [(ngModel)]=\"review\"\n                placeholder=\"Add Review\"\n                class=\"form-control\"></textarea>\n\n      <button class=\"btn btn-dark fa fa-plus\" (click)=\"addReview()\"></button>\n    </div>\n\n    <br/>\n\n    <div *ngIf=\"loggedIn && reviews && reviews.length > 0\">\n      <h2 style=\"margin-bottom: 15px\"> Reviews </h2>\n      <div *ngFor=\"let review of reviews\">\n        <div class=\"row text-center shadow-lg p-3 mb-5 bg-white rounded\" style=\"padding: 5px; margin: 5px;\">\n\n          <div class=\"col-md-2 rounded \" style=\"padding: 20px\">\n            <!--<div class=\"\">-->\n            <img src=\"{{review.user.img_path}}\" width=\"80px\">\n            <h5>{{review.user.username}}</h5>\n            <!--</div>-->\n          </div>\n          <div class=\"col-md-8 bg-light\" style=\"padding: 0px 0px;\">\n            <div *ngIf=\"admin || review.user._id === user._id\" (click)=\"deleteReview(review.review, review.user._id)\"\n                 class=\"float-right hidden-md-up rounded\"><i class=\"btn text-danger fa-lg fa fa-times\"></i></div>\n            <br/>\n            <h5 style=\"margin: 20px\"> {{review.review}} </h5>\n            <br/>\n            <br/>\n          </div>\n          <!--<div class=\"col-md-1\">-->\n          <!--<button class=\"btn btn-lg btn-block btn-danger fa fa-times fa-lg\"></button>-->\n          <!--</div>-->\n          <div class=\"col-md-2 rounded\" style=\"padding: 20px\">\n            <!--<div class=\"\">-->\n            <h6><em>{{review.date.split(\"G\")[0]}}</em></h6>\n            <br/>\n            <br/>\n            <!--</div>-->\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n    <br/>\n    <br/>\n    <br/>\n    <br/>\n    <br/>\n    <hr/>\n    <br/>\n    <br/>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search.service.client */ "./src/app/services/search.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_review_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/review.service.client */ "./src/app/services/review.service.client.ts");
/* harmony import */ var _services_movie_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/movie.service.client */ "./src/app/services/movie.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/like.service.client */ "./src/app/services/like.service.client.ts");
/* harmony import */ var _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/bookmark.service.client */ "./src/app/services/bookmark.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MovieComponent = /** @class */ (function () {
    function MovieComponent(bookmarkService, likeService, movieService, reviewService, userService, searchService, route) {
        this.bookmarkService = bookmarkService;
        this.likeService = likeService;
        this.movieService = movieService;
        this.reviewService = reviewService;
        this.userService = userService;
        this.searchService = searchService;
        this.route = route;
        this.img = 'https://image.tmdb.org/t/p/w500/';
    }
    MovieComponent.prototype.checkStatus = function () {
        var _this = this;
        return this.userService.checkStatus().then(function (response) { return _this.loggedIn = response; });
    };
    MovieComponent.prototype.checkLike = function () {
        var _this = this;
        this.likeService.checkLike(this.movie.id).then(function (response) {
            _this.liked = response;
        });
    };
    MovieComponent.prototype.like = function () {
        var _this = this;
        this.likeService.like(this.movie)
            .then(function () {
            _this.checkLike();
            _this.findUsersWhoLikedMovie();
        });
    };
    MovieComponent.prototype.unlike = function () {
        var _this = this;
        this.likeService.unlike(this.movie)
            .then(function () {
            _this.checkLike();
            _this.findUsersWhoLikedMovie();
        });
    };
    MovieComponent.prototype.checkBookmark = function () {
        var _this = this;
        this.bookmarkService.checkBookmark(this.movie.id).then(function (response) {
            _this.bookmarked = response;
        });
    };
    MovieComponent.prototype.bookmark = function () {
        var _this = this;
        this.bookmarkService.bookmark(this.movie)
            .then(function () {
            _this.checkBookmark();
        });
    };
    MovieComponent.prototype.unbookmark = function () {
        var _this = this;
        this.bookmarkService.unbookmark(this.movie)
            .then(function () {
            _this.checkBookmark();
        });
    };
    MovieComponent.prototype.findAllReviews = function () {
        var _this = this;
        this.reviewService.findAllReviews(this.movie.id)
            .then(function (result) {
            _this.reviews = result;
            // console.log(this.reviews);
        });
    };
    MovieComponent.prototype.findUsersWhoLikedMovie = function () {
        var _this = this;
        if (this.local) {
            this.likeService.findUsersWhoLikedMovie(this.localMovie._id).then(function (likes) {
                _this.likedUsers = likes;
            });
        }
    };
    MovieComponent.prototype.addReview = function () {
        var _this = this;
        this.reviewService.addReview(this.movie.id, this.review, this.movie)
            .then(function () {
            _this.review = '';
            _this.findAllReviews();
        });
    };
    MovieComponent.prototype.deleteReview = function (review, userId) {
        var _this = this;
        this.reviewService.deleteReview(this.movie.id, userId, review)
            .then(function () {
            _this.findAllReviews();
        });
    };
    MovieComponent.prototype.setup = function () {
        var _this = this;
        this.checkStatus()
            .then(function (res) {
            if (res) {
                _this.checkLike();
                _this.checkBookmark();
                _this.findUsersWhoLikedMovie();
            }
        });
        this.findAllReviews();
    };
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.movieService.findMovie(params.id)
                .then(function (movie) {
                if (movie === null) {
                    _this.local = false;
                }
                else {
                    _this.local = true;
                    _this.localMovie = movie;
                }
                return _this.searchService.searchMoovieById(params.id);
            })
                .then(function (mov) {
                _this.movie = mov;
                return _this.checkStatus();
            })
                .then(function (res) {
                if (res) {
                    return _this.userService.profile();
                }
                else {
                    return new _models_user_model_client__WEBPACK_IMPORTED_MODULE_8__["User"]();
                }
            })
                .then(function (user) {
                _this.user = user;
                if (user.role === 'admin') {
                    _this.admin = true;
                }
                else {
                    _this.admin = false;
                }
            })
                .then(function () {
                {
                    _this.setup();
                }
            });
        });
        // this.router.events.subscribe(() => {
        //     this.checkStatus();
        //     this.checkLike();
        //     this.findAllReviews();
        //   }
        // );
    };
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_7__["BookmarkServiceClient"], _services_like_service_client__WEBPACK_IMPORTED_MODULE_6__["LikeServiceClient"],
            _services_movie_service_client__WEBPACK_IMPORTED_MODULE_5__["MovieServiceClient"], _services_review_service_client__WEBPACK_IMPORTED_MODULE_4__["ReviewServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"], _services_search_service_client__WEBPACK_IMPORTED_MODULE_1__["SearchServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.wrapper:after {\r\n  content: '';\r\n  display: block;\r\n  padding-top: 100%;\r\n}\r\n\r\n.wrapper img {\r\n  width: auto;\r\n  height: 100%;\r\n  max-width: none;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 0;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <br/>\r\n  <h3>List of Movies</h3>\r\n  <br/>\r\n  <div class=\"row\">\r\n    <div class=\"card-deck d-flex justify-content-center\">\r\n      <div *ngFor=\"let mov of movies\">\r\n        <div class=\"card h-100 shadow-lg p-3 mb-5 bg-white rounded\" style=\"width: 20rem\" *ngIf=\"movie.id !== mov.id\">\r\n          <img *ngIf=\"mov.poster_path !== null\" routerLink=\"../../movie/{{mov.id}}\" class=\"card-img-top img-fluid\"\r\n               src=\"{{mov.poster_path}}\">\r\n          <img *ngIf=\"mov.poster_path === null\" routerLink=\"../../movie/{{mov.id}}\" class=\"card-img-top img-fluid \"\r\n               src=\"http://a-movies.info/public/img/no_poster.jpg\">\r\n          <div class=\"card-header btn\" routerLink=\"../../movie/{{mov.id}}\"><h4 class=\"card-title\">\r\n            {{mov.title.substring(0,16)}}</h4></div>\r\n          <div class=\"card-body\">\r\n            <p class=\"card-text\">{{mov.overview.substring(0, 100)+'..'}}</p>\r\n            <p class=\"card-text\">\r\n              <small class=\"text-muted\">This movie is in you DB now</small>\r\n            </p>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"btn-group\">\r\n              <button class=\"btn btn-sm btn-dark float-left\" (click)=\"editMovie(mov)\"> Press to edit</button>\r\n              <button class=\"btn btn-danger fa fa fa-trash float-left\" (click)=\"deleteMovie(mov._id)\"></button>\r\n            </div>\r\n            <!--<div class=\"float-right\">-->\r\n              <!--<i class=\"fa fa fa-lg fa-heart\" aria-hidden=\"true\" style=\"margin-top: 8px; margin-right: 15px;\">{{mov.likes}}</i>-->\r\n              <!--<i class=\"fa fa fa-lg fa-comment\" aria-hidden=\"true\" style=\"margin-top: 8px\">{{mov.reviews}}</i>-->\r\n            <!--</div>-->\r\n          </div>\r\n        </div>\r\n        <div class=\"card h-100\" style=\"width: 20rem;\" *ngIf=\"movie.id === mov.id\">\r\n          <img class=\"card-img-top img-fluid\" src=\"{{movie.poster_path}}\">\r\n          <div class=\"card-header\">\r\n            <label><strong> Poster:</strong> </label>\r\n            <input [(ngModel)]=\"movie.poster_path\"\r\n                   placeholder=\"Img Url\"\r\n                   class=\"form-control\"/>\r\n            <label><strong> Title:</strong> </label><input [(ngModel)]=\"movie.title\"\r\n                                                           placeholder=\"Title\"\r\n                                                           class=\"form-control\"/>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <label><strong> Overview:</strong> </label>\r\n            <textarea rows=\"10\" [(ngModel)]=\"movie.overview\"\r\n                      placeholder=\"Overview\"\r\n                      class=\"form-control\"></textarea>\r\n            <p class=\"card-text\">\r\n              <small class=\"text-muted\">This movie is in you DB now</small>\r\n            </p>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <div class=\"btn-group\">\r\n            <button class=\"btn btn-sm btn-dark float-left\" (click)=\"updateMovie(mov)\"> Save</button>\r\n            <button class=\"btn btn-sm btn-danger float-left\" (click)=\"cleanData()\"> Cancel</button>\r\n            </div>\r\n            <!--<div class=\"float-right\">-->\r\n              <!--<i class=\"fa fa fa-heart\" aria-hidden=\"true\"-->\r\n                 <!--style=\"margin-top: 5px; margin-right: 10px;\">{{mov.likes}}</i>-->\r\n              <!--<i class=\"fa fa fa-comment\" aria-hidden=\"true\" style=\"margin-top: 5px\">{{mov.likes}}</i>-->\r\n            <!--</div>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!--<div class=\"container\">-->\r\n  <!--<div class=\"row\" >-->\r\n  <!--<div class=\"col-xs-6 col-md-4\" *ngFor=\"let movie of movies\">-->\r\n  <!--<div class=\"card h-100 list-group-item-action\">-->\r\n  <!--<div class=\"wrapper\">-->\r\n  <!--&lt;!&ndash;<img class=\"card-img-top img-fluid\" src=\"//placehold.it/760x270\" alt=\"Card image cap\">&ndash;&gt;-->\r\n  <!--<img *ngIf=\"movie.poster_path !== null\" class=\"card-img-top img-fluid\" src=\"{{img}}{{movie.poster_path}}\" alt=\"Card image cap\">-->\r\n  <!--<img *ngIf=\"movie.poster_path === null\" class=\"card-img-top img-fluid\"-->\r\n  <!--src=\"http://a-movies.info/public/img/no_poster.jpg\" alt=\"Card image cap\">-->\r\n  <!--</div>-->\r\n  <!--<div class=\"card-body\">-->\r\n  <!--<h4 class=\"card-title\">{{movie.title}}</h4>-->\r\n\r\n  <!--<p class=\"card-text\">{{movie.overview.substring(0,100)+'...'}} </p>-->\r\n  <!--<p class=\"card-text\">-->\r\n  <!--<small class=\"text-muted\">Last updated 3 mins ago</small>-->\r\n  <!--</p>-->\r\n  <!--<div class=\"d-flex justify-content-end\"><i class=\"fa fa-comment\" aria-hidden=\"true\"></i>0</div>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"card-img-overlay\">-->\r\n  <!--<button class=\"btn btn-sm btn-primary float-right\"></button>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movie.service.client */ "./src/app/services/movie.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_movie_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/movie.model.client */ "./src/app/models/movie.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
        this.movies = [];
        this.img = 'https://image.tmdb.org/t/p/w500/';
        this.editMode = false;
    }
    MoviesComponent.prototype.updateMovie = function () {
        var _this = this;
        this.movieService.updateMovie(this.movie._id, this.movie)
            .then(function () {
            _this.findAllMovies();
            _this.cleanData();
        });
    };
    MoviesComponent.prototype.deleteMovie = function (movieId) {
        var _this = this;
        this.movieService.deleteMovie(movieId)
            .then(function () {
            _this.findAllMovies();
            _this.cleanData();
        });
    };
    MoviesComponent.prototype.cleanData = function () {
        this.movie = new _models_movie_model_client__WEBPACK_IMPORTED_MODULE_3__["Movie"]();
    };
    MoviesComponent.prototype.editMovie = function (mov) {
        this.movie = Object.assign({}, mov);
    };
    MoviesComponent.prototype.findAllMovies = function () {
        var _this = this;
        this.movieService.findAllMovies()
            .then(function (movies) {
            _this.movies = movies;
        });
    };
    MoviesComponent.prototype.ngOnInit = function () {
        this.movie = new _models_movie_model_client__WEBPACK_IMPORTED_MODULE_3__["Movie"]();
        this.findAllMovies();
    };
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movie_service_client__WEBPACK_IMPORTED_MODULE_1__["MovieServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.css":
/*!***********************************!*\
  !*** ./src/app/navbar/navbar.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigator {\r\n  background-color: #111;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.html":
/*!************************************!*\
  !*** ./src/app/navbar/navbar.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <nav class=\"navbar navbar-expand-md navbar-dark navigator\">\r\n    <a class=\"navbar-brand\" routerLink=\"./home\"><h3>MovieDB</h3></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\r\n            aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"./home\" routerLinkActive=\"active\"> Home </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"./about\" routerLinkActive=\"active\"> About </a>\r\n        </li>\r\n        <!--<li class=\"nav-item\">-->\r\n          <!--<a class=\"nav-link\" routerLink=\"./search\" routerLinkActive=\"active\"> Search </a>-->\r\n        <!--</li>-->\r\n      </ul>\r\n      <div class=\"mx-2 my-auto d-inline w-100\">\r\n        <div class=\"input-group\" *ngIf=\"searchBardMode===0\">\r\n          <input type=\"text\" [(ngModel)]=\"title\" (keyup)=\"search()\" class=\"form-control border border-right-0\"\r\n                 placeholder=\"Press the button to go to the Advanced Search --> \">\r\n          <span class=\"input-group-append\">\r\n                <button class=\"btn btn-light border border-left-0\" (click)=\"advancedSearch()\"\r\n                        type=\"button\">\r\n                    <i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </span>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <i class=\"btn fas fa-search-plus fa-lg\" (click)=\"this.changeSearchMode()\"></i>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav\" *ngIf=\"!loggedIn\">\r\n\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"fa fa-cog fa-lg\"></i>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right text-center\" style=\"margin-top: 15px\" >\r\n            <button class=\"dropdown-item\" routerLink=\"./login\" routerLinkActive=\"active\"><i\r\n              class=\"fas fa-sign-in-alt\"></i> Sign In\r\n            </button>\r\n            <button class=\"dropdown-item\" routerLink=\"./register\" routerLinkActive=\"active\"><i\r\n              class=\"fas fa-user-plus\"></i> Sign Up\r\n            </button>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav\" *ngIf=\"loggedIn\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"fa fa-user-circle fa-2x\"></i>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right text-center\" style=\"margin-top: 10px\">\r\n            <button class=\"dropdown-item\" routerLink=\"./profile\" routerLinkActive=\"active\"><i class=\"fas fa-user\"></i>\r\n              Profile\r\n            </button>\r\n            <button class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fas fa-door-open\"></i> Sign Out</button>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n\r\n    </div>\r\n  </nav>\r\n\r\n  <div class=\"\" *ngIf=\"searchBardMode===1\">\r\n  <div class=\"input-group container-fluid\" style=\"padding: 0px 15px\">\r\n    <input type=\"text\" [(ngModel)]=\"title\" (keyup)=\"search()\" class=\"form-control border border-right-0\"\r\n           placeholder=\"Press the button to go to Advanced Search --> \">\r\n    <span class=\"input-group-append\">\r\n                <button class=\"btn btn-light border border-left-0\" (click)=\"advancedSearch()\"\r\n                        type=\"button\">\r\n                    <i class=\"fa fa-search \"></i>\r\n                </button>\r\n              </span>\r\n  </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"results\" class=\"\">\r\n    <div class=\"container-fluid\">\r\n        <ul *ngFor=\"let res of results\" class=\"list-group list-group-dark\">\r\n          <!--<div class=\"list-group\" style=\"margin: 2px\" >-->\r\n          <li style=\"padding: 10px\" class=\"list-group-item list-group-item-light list-group-item-action\" (click)=\"navigateMovie(res.id)\">\r\n\r\n            {{res.title}}\r\n            <!--<img src=\"{{img}}{{res.poster_path}}\" width=\"100\">-->\r\n            <!--<p> {{res.overview.substring(0, 250)+'...' }} </p>-->\r\n            <!--<div>-->\r\n            <!--<strong>Genres: </strong>-->\r\n            <!--<span>Genre</span>-->\r\n            <!--</div>-->\r\n          </li>\r\n        </ul>\r\n      <br/>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.ts":
/*!**********************************!*\
  !*** ./src/app/navbar/navbar.ts ***!
  \**********************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_search_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search.service.client */ "./src/app/services/search.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(searchServie, route, userService, router) {
        var _this = this;
        this.searchServie = searchServie;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.title = '';
        this.searchBardMode = 0;
        this.img = 'htitleps://image.tmdb.org/t/p/w500/';
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    NavbarComponent.prototype.setParams = function (params) {
    };
    NavbarComponent.prototype.search = function () {
        var _this = this;
        if (this.title.length >= 0 && this.title[0] !== '@') {
            this.results = [];
            this.searchServie.searchMovieByTitle(this.title).then(function (response) {
                _this.results = response.results;
                if (_this.results.length > 5) {
                    _this.results.length = 5;
                }
            });
        }
    };
    NavbarComponent.prototype.checkStatus = function () {
        var _this = this;
        this.userService.checkStatus().then(function (response) { return _this.loggedIn = response; });
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .then(function () {
            return _this.router.navigate(['']);
        });
    };
    NavbarComponent.prototype.advancedSearch = function () {
        var _this = this;
        if (this.title.length > 0 && this.title[0] === '@' && this.loggedIn) {
            var username_1 = this.title.substr(1);
            this.userService.findUserByUsername(username_1)
                .then(function (user) {
                if (user !== null) {
                    _this.router.navigate(['../user/' + username_1]);
                    _this.title = '';
                }
            });
        }
        else {
            this.searchBardMode = 3;
            this.results = null;
            this.router.navigate(['search']);
            this.title = '';
        }
    };
    NavbarComponent.prototype.navigateMovie = function (id) {
        this.title = '';
        this.results = null;
        this.router.navigate(['../movie/' + id]);
    };
    NavbarComponent.prototype.changeSearchMode = function () {
        this.searchBardMode = (this.searchBardMode + 1) % 2;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function () {
            _this.checkStatus();
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.html */ "./src/app/navbar/navbar.html"),
            styles: [__webpack_require__(/*! ./navbar.css */ "./src/app/navbar/navbar.css")],
        }),
        __metadata("design:paramtypes", [_services_search_service_client__WEBPACK_IMPORTED_MODULE_3__["SearchServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/omdb-test/omdb-test.component.css":
/*!***************************************************!*\
  !*** ./src/app/omdb-test/omdb-test.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/omdb-test/omdb-test.component.html":
/*!****************************************************!*\
  !*** ./src/app/omdb-test/omdb-test.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<br/>\n    <input [(ngModel)]=\"title\" class=\"form-control\"/>\n    <button (click)=\"searchMovie()\" class=\"btn btn-block btn-dark\"> Search</button>\n\n  <div class=\"row\" *ngIf=\"result && result2\">\n    <div class=\"col-6\">\n      <h2 class=\"text-center\"> OMDB API</h2>\n\n      <ul class=\"list-group\" >\n        <li class=\"list-group-item\" *ngFor=\"let movie of result.Search\">\n          <div class=\"row\">\n            <div class=\"col-8\">\n             <h3> {{movie.Title}}</h3>\n            </div>\n            <div class=\"col-4\">\n              <img src={{movie.Poster}} width=\"100\">\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-6\">\n\n      <h2 class=\"text-center\"> TMDB API</h2>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let movie of result2.results\">\n          <div class=\"row\">\n            <div class=\"col-8\">\n             <h3>{{movie.title}}</h3>\n            </div>\n            <div class=\"col-4\">\n              <img src=\"{{img}}{{movie.poster_path}}\" width=\"100\">\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/omdb-test/omdb-test.component.ts":
/*!**************************************************!*\
  !*** ./src/app/omdb-test/omdb-test.component.ts ***!
  \**************************************************/
/*! exports provided: OmdbTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmdbTestComponent", function() { return OmdbTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _omdb_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omdb.service.client */ "./src/app/omdb-test/omdb.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OmdbTestComponent = /** @class */ (function () {
    function OmdbTestComponent(omdbService) {
        this.omdbService = omdbService;
        this.img = 'https://image.tmdb.org/t/p/w500/';
    }
    OmdbTestComponent.prototype.searchMovie = function () {
        var _this = this;
        this.omdbService.searchMovieByTitle(this.title)
            .then(function (result) {
            _this.result = result;
        });
        this.omdbService.searchMovieByTitle2(this.title)
            .then(function (result) {
            _this.result2 = result;
        });
    };
    OmdbTestComponent.prototype.ngOnInit = function () {
        this.title = '';
    };
    OmdbTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-omdb-test',
            template: __webpack_require__(/*! ./omdb-test.component.html */ "./src/app/omdb-test/omdb-test.component.html"),
            styles: [__webpack_require__(/*! ./omdb-test.component.css */ "./src/app/omdb-test/omdb-test.component.css")]
        }),
        __metadata("design:paramtypes", [_omdb_service_client__WEBPACK_IMPORTED_MODULE_1__["OmdbServiceClient"]])
    ], OmdbTestComponent);
    return OmdbTestComponent;
}());



/***/ }),

/***/ "./src/app/omdb-test/omdb.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/omdb-test/omdb.service.client.ts ***!
  \**************************************************/
/*! exports provided: OmdbServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmdbServiceClient", function() { return OmdbServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OmdbServiceClient = /** @class */ (function () {
    function OmdbServiceClient(httpClient) {
        this.httpClient = httpClient;
    }
    OmdbServiceClient.prototype.searchMovieByTitle = function (title) {
        var url = 'http://www.omdbapi.com/?s=' + title + '&apikey=f880b2a7';
        return fetch(url)
            .then(function (response) { return response.json(); });
    };
    OmdbServiceClient.prototype.searchMovieByTitle2 = function (title) {
        var url2 = 'https://api.themoviedb.org/3/search/movie?api_key=01202464e80fb52cd90af159ba329661&query=' + title;
        return fetch(url2)
            .then(function (response) { return response.json(); });
    };
    OmdbServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OmdbServiceClient);
    return OmdbServiceClient;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Profile</h1>\n  <i *ngIf=\"!edit && profile\" class=\"btn btn-info float-left fas fa-toggle-off\" (click)=\"toggleEdit()\"\n     style=\"margin-bottom: 10px\">\n    Edit</i>\n  <i *ngIf=\"edit\" class=\"btn btn-info float-left fas fa-toggle-on\" (click)=\"toggleEdit()\" style=\"margin-bottom: 10px\">\n    Edit</i>\n  <br/>\n\n  <div *ngIf=\"edit\" class=\"text-center container row\">\n\n    <div class=\"col-md-6 col-lg6\">\n      <div class=\"row\">\n        <div class=\"card col-3 btn btn-light\" [ngClass]=\"{'active': user.img_path === boyImg}\"\n             (click)=\"user.img_path = boyImg\">\n          <img class=\"card-img\" src=\"{{boyImg}}\" alt=\"Smiley face\" width=\"20px\"/>\n          <p class=\"card-text\"><strong> BOY </strong></p>\n        </div>\n        <div class=\"card col-3 btn btn-light\" [ngClass]=\"{'active': user.img_path === girlImg}\"\n             (click)=\"user.img_path = girlImg\">\n          <img class=\"card-img\" src=\"{{girlImg}}\" alt=\"Smiley face\" width=\"20px\"/>\n          <p class=\"card-text\"><strong>GIRL</strong></p>\n        </div>\n        <div class=\"card col-3 btn btn-light\" [ngClass]=\"{'active': user.img_path === boyImg2}\"\n             (click)=\"user.img_path = boyImg2\">\n          <img class=\"card-img\" src=\"{{boyImg2}}\" alt=\"Smiley face\" width=\"20px\"/>\n          <p class=\"card-text\"><strong>TEEN B</strong></p>\n        </div>\n        <div class=\"card col-3 btn btn-light\" [ngClass]=\"{'active': user.img_path === girlImg2}\"\n             (click)=\"user.img_path = girlImg2\">\n          <img class=\"card-img\" src=\"{{girlImg2}}\" alt=\"Smiley face\" width=\"20px\"/>\n          <p class=\"card-text\"><strong>TEEN G</strong></p>\n        </div>\n        <div class=\"card col-3 btn btn-light\" [ngClass]=\"{'active': user.img_path === manImg}\"\n             (click)=\"user.img_path = manImg\">\n          <img class=\"card-img\" src=\"{{manImg}}\" alt=\"Smiley face\" width=\"20px\"/>\n          <p class=\"card-text\"><strong>MAN</strong></p>\n        </div>\n        <div class=\"card col-3 btn btn-light\" [ngClass]=\"{'active': user.img_path === womanImg}\"\n             (click)=\"user.img_path = womanImg\">\n          <img class=\"card-img\" src=\"{{womanImg}}\" alt=\"Smiley face\" width=\"20px\"/>\n          <p class=\"card-text\"><strong>WOMAN</strong></p>\n        </div>\n        <div class=\"card col-3 btn btn-light\" [ngClass]=\"{'active': user.img_path === oldmanImg}\"\n             (click)=\"user.img_path = oldmanImg\">\n          <img class=\"card-img\" src=\"{{oldmanImg}}\" alt=\"Smiley face\" width=\"20px\"/>\n          <p class=\"card-text\"><strong>OLD M</strong></p>\n        </div>\n        <div class=\"card col-3 btn btn-light\" [ngClass]=\"{'active': user.img_path === oldwomanImg}\"\n             (click)=\"user.img_path = oldwomanImg\">\n          <img class=\"card-img\" src=\"{{oldwomanImg}}\" alt=\"Smiley face\" width=\"20px\"/>\n          <p class=\"card-text\"><strong>OLD W</strong></p>\n        </div>\n\n      </div>\n\n      <!--<img src=\"{{user.img_path}}\" alt=\"Smiley face\" width=\"100px\"-->\n      <!--class=\"btn btn-outline-dark active rounded \" style=\"border: 2px solid black\"/>-->\n      <!--<img src=\"{{user.img_path}}\" alt=\"Smiley face\" width=\"100px\"-->\n      <!--class=\"btn btn-outline-dark active rounded img-fluid mx-auto d-block\" style=\"border: 2px solid black\"/>-->\n      <!--<img src=\"{{user.img_path}}\" alt=\"Smiley face\" width=\"100px\"-->\n      <!--class=\"btn btn-outline-dark active rounded img-fluid mx-auto d-block\" style=\"border: 2px solid black\"/>-->\n      <!--<img src=\"{{user.img_path}}\" alt=\"Smiley face\" width=\"100px\"-->\n      <!--class=\"btn btn-outline-dark active rounded img-fluid mx-auto d-block\" style=\"border: 2px solid black\"/>-->\n      <!--<img src=\"{{user.img_path}}\" alt=\"Smiley face\" width=\"100px\"-->\n      <!--class=\"btn btn-outline-dark active rounded img-fluid mx-auto d-block\" style=\"border: 2px solid black\"/>-->\n      <br/>\n      <label class=\"\"><strong>Custom Image Path:</strong></label>\n      <input [(ngModel)]=\"user.img_path\"\n             placeholder=\"Image url\"\n             class=\"form-control\"/>\n    </div>\n    <div class=\"col-md-6 col-lg6\">\n      <div class=\"container bg-light\">\n        <ul class=\"list-group list-group-flush\">\n          <!--<li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Username:</strong> </h3> <div class=\"float-right \">-->\n          <!--<input [(ngModel)]=\"user.username\"-->\n          <!--placeholder=\"username\"-->\n          <!--class=\"form-control\"/>-->\n          <!--</div></li>-->\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Password:</strong></h3>\n            <div class=\"float-right \">\n              <input [(ngModel)]=\"user.password\"\n                     type=\"password\"\n                     placeholder=\"password\"\n                     class=\"form-control\"/>\n            </div>\n          </li>\n\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>First Name:</strong></h3>\n            <div class=\"float-right\">\n              <input [(ngModel)]=\"user.firstName\"\n                     placeholder=\"first name\"\n                     class=\"form-control\"/>\n            </div>\n          </li>\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Last Name:</strong></h3>\n            <div class=\"float-right\">\n              <input [(ngModel)]=\"user.lastName\"\n                     placeholder=\"last name\"\n                     class=\"form-control\"/>\n            </div>\n          </li>\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Email:</strong></h3>\n            <div class=\"float-right\">\n              <input [(ngModel)]=\"user.email\"\n                     placeholder=\"email\"\n                     class=\"form-control\"/>\n            </div>\n          </li>\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Phone:</strong></h3>\n            <div class=\"float-right\">\n              <input [(ngModel)]=\"user.phone\"\n                     placeholder=\"Phone\"\n                     class=\"form-control\"/>\n            </div>\n          </li>\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Address:</strong></h3>\n            <div class=\"float-right\">\n              <input [(ngModel)]=\"user.address\"\n                     placeholder=\"Address\"\n                     class=\"form-control\"/>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"edit\" class=\"container\">\n    <button (click)=\"update(user)\"\n            class=\"btn btn-primary btn-block \"\n            style=\"margin-top: 10px\">\n      Update\n    </button>\n    <button (click)=\"cancel()\"\n            class=\"btn btn-danger btn-block \"\n            style=\"margin-top: 10px\">\n      Cancel\n    </button>\n    <br/>\n  </div>\n\n  <div *ngIf=\"!edit\" class=\"text-center container row\">\n    <div class=\"col-md-4\">\n      <img src=\"{{user.img_path}}\" alt=\"Smiley face\" width=\"400px\" class=\"rounded img-fluid mx-auto d-block\"\n           style=\"border: 2px solid white;\"/>\n      <div style=\"margin-top: 10px\" class=\"container\">\n        <button *ngIf=\"!profile && !edit && !follow\" class=\"btn btn-block btn-primary\" (click)=\"addFollowing()\">Follow\n        </button>\n        <button *ngIf=\"!profile && !edit && follow\" class=\"btn btn-block btn-danger\" (click)=\"removeFollowing()\">\n          Unfollow\n        </button>\n        <button *ngIf=\"!admin && profile && !edit\" class=\"btn btn-block btn-secondary\" routerLink=\"\">Home</button>\n\n        <button *ngIf=\"admin && profile && !edit\" class=\"btn btn-block btn-secondary\" routerLink=\"/admin\">Administration\n        </button>\n        <button *ngIf=\"profile && !edit\" class=\"btn btn-block btn-danger\" (click)=\"logout()\">Logout</button>\n      </div>\n      <br/>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"container bg-light\">\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item bg-light\"><h6 class=\"float-left\"><strong>Username:</strong></h6>\n            <h5 class=\"float-right \"><em>{{user.username}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h6 class=\"float-left\"><strong>First Name:</strong></h6>\n            <h5 class=\"float-right\"><em>{{user.firstName}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h6 class=\"float-left\"><strong>Last Name:</strong></h6>\n            <h5 class=\"float-right\"><em>{{user.lastName}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h6 class=\"float-left\"><strong>Email:</strong></h6>\n            <h5 class=\"float-right\"><em>{{user.email}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h6 class=\"float-left\"><strong>Phone:</strong></h6>\n            <h5 class=\"float-right\"><em>{{user.phone}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h6 class=\"float-left\"><strong>Address:</strong></h6>\n            <h5 class=\"float-right\"><em>{{user.address}}</em></h5></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n\n\n    <!--<div *ngIf=\"followings && followings.length > 0\" class=\"col-md-4\">-->\n    <!--<h3 *ngIf=\"profile\">Users You follow:</h3>-->\n    <!--<h3 *ngIf=\"!profile\">User's followings</h3>-->\n    <!--<div class=\"card-deck d-flex justify-content-center\">-->\n    <!--<div *ngFor=\"let u of followings\">-->\n    <!--<div *ngIf=\"true\" class=\"card shadow-lg p-3 mb-5 bg-white rounded\" style=\"width: 14rem; margin:20px\">-->\n    <!--<div class=\"btn\" routerLink=\"{{routerLink}}../user/{{u.following.username}}\">-->\n    <!--<img class=\"card-img-top img-fluid bg-light\" src=\"{{u.following.img_path}}\" alt=\"Card image\">-->\n    <!--<h4 class=\"card-title card-header \">@<strong>{{u.following.username}}</strong></h4>-->\n    <!--</div>-->\n    <!--<div class=\"card-body\">-->\n    <!--<h6 class=\"card-text\">First Name: <em>{{u.following.firstName}}</em></h6>-->\n    <!--<h6 class=\"card-text\">Last Name: <em>{{u.following.lastName}}</em></h6>-->\n    <!--<button class=\"btn btn-block btn-sm btn-primary\"-->\n    <!--routerLink=\"{{routerLink}}../user/{{u.following.username}}\"> View Profile-->\n    <!--</button>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n    <!--</div>-->\n\n    <div class=\"col-md-4\">\n      <div *ngIf=\"(profile || admin || follow) && !edit\">\n      <h5 class=\"btn btn-block btn-lg\" routerLink=\"/users\"><strong><i class=\"fa fa-users fa-lg text-info\"></i> Followings </strong></h5>\n      <span *ngFor=\"let u of followings\">\n              <span class=\"btn btn-sm\" routerLink=\"{{routerLink}}../user/{{u.following.username}}\">\n              <img class=\"d-flex justify-content-start\" src=\"{{u.following.img_path}}\" width=\"50px\">\n              <strong class=\"float-left\">@{{u.following.username}}</strong>\n              </span>\n            </span>\n      </div>\n    </div>\n\n\n    <div class=\"col-md-8\">\n      <div *ngIf=\"likedMovies && likedMovies.length > 0 && !edit\">\n        <h3 *ngIf=\"profile\">Movies You like:</h3>\n        <h3 *ngIf=\"!profile\">Movies this User likes:</h3>\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let movie of likedMovies\">\n          <li class=\"list-group-item list-group-item-action\" routerLink=\"{{routerLink}}../movie/{{movie.movie.id}}\">\n            <h5>{{movie.movie.title}}</h5>\n          </li>\n        </ul>\n      </div>\n      <br/>\n      <div *ngIf=\"((profile || admin || follow) && bookmarkedMovies && (bookmarkedMovies.length > 0) && !edit)\">\n        <h3 *ngIf=\"profile\">Movies You bookmarked:</h3>\n        <h3 *ngIf=\"!profile\">Movies this User bookmarked:</h3>\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let movie of bookmarkedMovies\">\n          <li class=\"list-group-item list-group-item-action\" routerLink=\"{{routerLink}}../movie/{{movie.movie.id}}\">\n            <h5>{{movie.movie.title}}</h5>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/like.service.client */ "./src/app/services/like.service.client.ts");
/* harmony import */ var _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/bookmark.service.client */ "./src/app/services/bookmark.service.client.ts");
/* harmony import */ var _services_follow_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/follow.service.client */ "./src/app/services/follow.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, service, likeService, followService, bookmarkService, route) {
        this.router = router;
        this.service = service;
        this.likeService = likeService;
        this.followService = followService;
        this.bookmarkService = bookmarkService;
        this.route = route;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.originalUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.likedMovies = [];
        this.bookmarkedMovies = [];
        this.followings = [];
        this.boyImg = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100';
        this.boyImg2 = 'http://webiconspng.com/wp-content/uploads/2016/11/avatar_business_costume_male_man_office_user_icon_403022.png';
        this.girlImg = 'http://www.hotellaginestra.it/wp-content/uploads/2016/06/person-girl-flat.png';
        this.girlImg2 = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png';
        this.manImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png';
        this.womanImg = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png';
        this.oldmanImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png';
        this.oldwomanImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/maturewoman-3-512.png';
    }
    ProfileComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    ProfileComponent.prototype.update = function (u) {
        var _this = this;
        this.service.updateUser(u).then(function (resp) {
            _this.service
                .profile()
                .then(function (user) {
                _this.user = user;
                console.log(user);
                _this.edit = false;
            });
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service.logout()
            .then(function () {
            return _this.router.navigate(['home']);
        });
    };
    ProfileComponent.prototype.cancel = function () {
        this.user = Object.assign({}, this.originalUser);
        console.log(this.user);
        console.log(this.originalUser);
        this.edit = false;
    };
    ProfileComponent.prototype.findAllLikedMovies = function () {
        var _this = this;
        this.likeService.findAllLikedMovies(this.user._id)
            .then(function (response) {
            // console.log(response)
            _this.likedMovies = response;
        });
    };
    ProfileComponent.prototype.findAllBookmarkedMovies = function () {
        var _this = this;
        this.bookmarkService.findAllBookmarkedMovies(this.user._id)
            .then(function (response) {
            console.log(response);
            _this.bookmarkedMovies = response;
        });
    };
    ProfileComponent.prototype.findAllFollowings = function () {
        var _this = this;
        this.followService.findAllFollowings(this.user._id)
            .then(function (followings) {
            console.log(followings);
            _this.followings = followings;
        });
    };
    ProfileComponent.prototype.addFollowing = function () {
        var _this = this;
        this.followService.addFollowing(this.user._id)
            .then(function () { return _this.checkFollowing(); });
    };
    ProfileComponent.prototype.removeFollowing = function () {
        var _this = this;
        this.followService.removeFollowing(this.user._id)
            .then(function () { return _this.checkFollowing(); });
    };
    ProfileComponent.prototype.checkFollowing = function () {
        var _this = this;
        this.followService.checkFollowing(this.user._id)
            .then(function (follow) {
            if (follow === null) {
                _this.follow = false;
            }
            else {
                _this.follow = true;
            }
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edit = false;
        this.route.params.subscribe(function (params) {
            if (params.username === undefined) {
                _this.profile = true;
                _this.service
                    .profile()
                    .then(function (user) {
                    _this.user = Object.assign({}, user);
                    _this.originalUser = Object.assign({}, user);
                    if (user.role === 'admin') {
                        _this.admin = true;
                    }
                    else {
                        _this.admin = false;
                    }
                    _this.routerLink = '';
                    _this.findAllLikedMovies();
                    _this.findAllBookmarkedMovies();
                    _this.findAllFollowings();
                });
            }
            else {
                _this.service.profile()
                    .then(function (user) {
                    if (params.username === user.username) {
                        _this.router.navigate(['../../profile']);
                    }
                    else {
                        _this.service.findUserByUsername(params.username)
                            .then(function (u) {
                            _this.profile = false;
                            _this.user = Object.assign({}, u);
                            if (user.role === 'admin') {
                                _this.admin = true;
                            }
                            else {
                                _this.admin = false;
                            }
                            _this.routerLink = '../';
                            _this.checkFollowing();
                            _this.findAllLikedMovies();
                            _this.findAllBookmarkedMovies();
                            _this.findAllFollowings();
                        });
                    }
                });
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"], _services_like_service_client__WEBPACK_IMPORTED_MODULE_4__["LikeServiceClient"],
            _services_follow_service_client__WEBPACK_IMPORTED_MODULE_6__["FollowServiceClient"],
            _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_5__["BookmarkServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Form */\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 400px;\r\n  margin: 0 auto 100px;\r\n  padding: 30px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  text-align: center;\r\n}\r\n.form .thumbnail {\r\n  background: rgb(85, 85, 181);\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto 30px;\r\n  padding: 5px 5px;\r\n  border-top-left-radius: 100%;\r\n  border-top-right-radius: 100%;\r\n  border-bottom-left-radius: 100%;\r\n  border-bottom-right-radius: 100%;\r\n  box-sizing: border-box;\r\n}\r\n.form .thumbnail img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.form .errors {\r\n  color: white;\r\n  background: rgb(85, 85, 181);\r\n}\r\n.form input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n.form button {\r\n  outline: 0;\r\n  background: rgb(85, 85, 181);\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n.form .message a {\r\n  color: rgb(85, 85, 181);\r\n  text-decoration: none;\r\n}\r\n.form .register-form {\r\n  display: none;\r\n}\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n.container .info span .fa {\r\n  color: rgb(85, 85, 181);\r\n}\r\n/* END Form */\r\n/* Demo Purposes */\r\nbody {\r\n  background: #ccc;\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\nbody:before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#video {\r\n  z-index: -99;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<br/>-->\n<!--<div class=\"container text-center\">-->\n  <!--<h1>Register</h1>-->\n  <!--<div class=\"container\">-->\n\n  <!--</div>-->\n  <!--<br/>-->\n\n\n  <!--<button (click)=\"register(username, password, password2)\"-->\n          <!--class=\"btn btn-primary btn-block container\">-->\n    <!--Register-->\n  <!--</button>-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-md-6 \">-->\n    <!--<button class=\"btn btn-block\" routerLink=\"/home\">Home</button>-->\n    <!--</div>-->\n    <!--<div class=\"col-md-6\">-->\n    <!--<button class=\"btn btn-block\" routerLink=\"/login\">Login</button>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n<div class=\"form\">\n  <div class=\"thumbnail\"><img src=\"http://2jw4122p6sl31mu39k4ehzyp.wpengine.netdna-cdn.com/wp-content/uploads/video-production.png\"/></div>\n  <div class=\"errors\">\n    <div *ngIf=\"noUsernameError\">\n      <p> Username field is empty </p>\n    </div>\n    <div *ngIf=\"noPasswordError\" >\n      <p> Password field is empty </p>\n    </div>\n    <div *ngIf=\"noPassword2Error\">\n      <p> Verification password field is empty </p>\n    </div>\n    <div *ngIf=\"usernameError\">\n      <p> Username is already taken </p>\n    </div>\n    <div *ngIf=\"passwordError\">\n      <p> Passwords do not match </p>\n    </div>\n  </div>\n  <div>\n    <input type=\"text\" [(ngModel)]=\"username\"\n    placeholder=\"Username\"\n    class=\"form-control\"/>\n    <input type=\"password\"  [(ngModel)]=\"password\"\n    placeholder=\"Password\"\n    class=\"form-control\"/>\n    <input type=\"password\" [(ngModel)]=\"password2\"\n    placeholder=\"Verify password\"\n    class=\"form-control\"/>\n    <button (click)=\"register()\"\n    class=\"btn\">\n    Register\n    </button>\n    <p class=\"message\">Already registered? <a routerLink=\"/login\">Sign In</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    // img_path = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100';
    RegisterComponent.prototype.resetErrors = function () {
        this.usernameError = false;
        this.passwordError = false;
        this.noUsernameError = false;
        this.noPasswordError = false;
        this.noPassword2Error = false;
    };
    RegisterComponent.prototype.reset = function () {
        this.username = '';
        this.password = '';
        this.password2 = '';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.resetErrors();
        if (this.username === '') {
            this.noUsernameError = true;
        }
        else {
            if (this.password === '') {
                this.noPasswordError = true;
            }
            else {
                if (this.password2 === '') {
                    this.noPassword2Error = true;
                }
                else {
                    if (this.password === this.password2) {
                        this.service.findUserByUsername(this.username)
                            .then(function (response) {
                            console.log(response);
                            if (response === null) {
                                var user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]();
                                user.username = _this.username;
                                user.password = _this.password;
                                _this.service.register(user)
                                    .then(function () { return _this.router.navigate(['profile']); });
                            }
                            else {
                                _this.usernameError = true;
                                // alert('Username is already taken');
                            }
                        });
                    }
                    else {
                        this.passwordError = true;
                        // alert('Passwords do not match');
                    }
                }
            }
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.reset();
        this.resetErrors();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollable{\r\n  overflow: auto;\r\n  width: 70px; /* adjust this width depending to amount of text to display */\r\n  height: 110px; /* adjust height depending on number of options to display */\r\n  border: 1px silver solid;\r\n}\r\n\r\n.scrollable-lg{\r\n  overflow: auto;\r\n  width: 250px; /* adjust this width depending to amount of text to display */\r\n  height: 110px; /* adjust height depending on number of options to display */\r\n  border: 1px silver solid;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light\">\n  <div class=\"container\">\n    <br/>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\" style=\"padding-right: 50px\">\n        <h1>Search</h1>\n        <p> Use the Search bar to find a movie by name </p>\n        <br/>\n        <form>\n          <div class=\"form-group\">\n      <span class=\"input-group input-group-sm\">\n        <input type=\"text\" name=\"title\" [(ngModel)]=\"title\" (keyup)=\"searchMoovie()\" class=\"form-control\"\n               placeholder=\"Search a movie\">\n        <!--<button class=\"btn-sm btn-dark\" (click)=\"searchMoovie(title)\">Search</button>-->\n      </span>\n            <br/>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-md-6 col-sm-12\" style=\"border-left: 3px solid black; padding-left: 50px\">\n        <h1> Discover </h1>\n        <p> Don't know the exact name of the movie? <br/> Use the Dicover bar to find movies by different criterias </p>\n        <span class=\"btn-group container\" role=\"group\" aria-label=\"Basic example\">\n            <div class=\"row\">\n          <div class=\"dropdown col-md-4\">\n             <button class=\"btn btn-block btn-light disabled\"> Year </button>\n\n            <button class=\"btn btn-light dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{year}}\n            </button>\n\n            <div class=\"dropdown-menu scrollable\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item\" *ngFor=\"let y of years\">\n                 <a (click)=\"year = y\"> {{y}} </a>\n              </a>\n            </div>\n          </div>\n          <div class=\"dropdown col-md-4\">\n              <button class=\"btn btn-block btn-light disabled\"> Genre </button>\n            <button class=\"btn btn-light dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{genre.name}}\n            </button>\n            <div class=\"dropdown-menu scrollable\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item\" *ngFor=\"let g of genres\">\n               <a (click)=\"setGenre(g)\"> {{g.name}} </a>\n              </a>\n            </div>\n          </div>\n          <div class=\"dropdown col-md-4\">\n               <button class=\"btn btn-block btn-light disabled\"> Sort By </button>\n            <button class=\"btn btn-light dropdown-toggle\" style=\"padding-right: 20px\" type=\"button\"\n                    data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{sort.name}}\n            </button>\n            <div class=\"dropdown-menu scrollable-lg\" aria-labelledby=\"dropdownMenuButton\">\n              <a class=\"dropdown-item\" *ngFor=\"let s of sorts\">\n                <a (click)=\"setSort(s)\"> {{s.name}} </a>\n              </a>\n            </div>\n          </div>\n              <br/>\n               </div>\n        </span>\n        <br/>\n        <br/>\n        <button class=\"btn btn-sm btn-dark btn-block col-md-12\" (click)=\"discover()\"> Search</button>\n\n      </div>\n    </div>\n    <br/>\n    <br/>\n    <div class=\"container\" *ngIf=\"results\">\n      <div class=\"row\">\n        <div class=\"card-deck d-flex justify-content-center\">\n          <div *ngFor=\"let mov of results\">\n            <div class=\"card h-100 shadow-lg p-3 mb-5 bg-white rounded\" style=\"width: 20rem\" routerLink=\"../movie/{{mov.id}}\">\n              <img *ngIf=\"mov.poster_path !== null\" class=\"card-img-top img-fluid\" src=\"{{img}}{{mov.poster_path}}\">\n              <img *ngIf=\"mov.poster_path === null\" class=\"card-img-top img-fluid \"\n                   src=\"http://a-movies.info/public/img/no_poster.jpg\">\n              <div class=\"card-header\"><h4 class=\"card-title\">{{mov.title}}</h4></div>\n              <div class=\"card-body\">\n                <p class=\"card-text\">{{mov.overview.substring(0, 100)+'..'}}</p>\n                <p class=\"card-text\">\n                  <small>{{mov.title}}</small>\n                </p>\n              </div>\n              <div class=\"card-footer\">\n                <!--<button class=\"btn btn-sm btn-dark float-left\" (click)=\"editMovie(mov)\"> Press to edit </button>-->\n                <!--<button class=\"btn btn-danger fa fa fa-times float-left\" (click)=\"deleteMovie(mov._id)\"></button>-->\n                <!--<div class=\"float-right\">-->\n                  <!--<i class=\"fa fa fa-heart\" aria-hidden=\"true\"-->\n                     <!--style=\"margin-top: 5px; margin-right: 10px;\"></i>-->\n                  <!--<i class=\"fa fa fa-comment\" aria-hidden=\"true\" style=\"margin-top: 5px\"></i>-->\n                <!--</div>-->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--<div *ngFor=\"let res of results\">-->\n      <!--<div class=\"list-group-item list-group-item-action \" style=\"margin: 10px; border: 1px white solid\"-->\n      <!--routerLink=\"../movie/{{res.id}}\">-->\n      <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-9\">-->\n\n      <!--<h4><a routerLink=\"../movie/{{res.id}}\">{{res.title}}</a></h4>-->\n      <!--<p *ngIf=\"res.overview.length > 250\"> {{res.overview.substring(0, 250)+'...' }} </p>-->\n      <!--<p *ngIf=\"res.overview.length <= 250\"> {{res.overview }} </p>-->\n      <!--<div>-->\n      <!--<strong>Genres: </strong>-->\n      <!--<span>Genre</span>-->\n      <!--</div>-->\n\n      <!--</div>-->\n      <!--<div class=\"col-md-3\">-->\n      <!--<div *ngIf=\"res.poster_path; else poster\">-->\n      <!--<img src=\"{{img}}{{res.poster_path}}\" width=\"100\">-->\n      <!--</div>-->\n      <!--<ng-template #poster>-->\n      <!--<img src=\"http://a-movies.info/public/img/no_poster.jpg\" width=\"100\">-->\n      <!--</ng-template>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n      <!--</div>-->\n\n      <br/>\n      <br/>\n      <div *ngIf=\" mode === 'discover' \" class=\"btn-toolbar conainer d-flx justify-content-center\" role=\"toolbar\"\n           aria-label=\"Toolbar with button groups\">\n        <div class=\"btn-group \" role=\"group\">\n          <button type=\"button\" (click)=\"setPage(1)\" [ngClass]=\"{'active': page === 1}\" class=\" btn btn-outline-dark\">\n            1\n          </button>\n          <button type=\"button\" (click)=\"setPage(2)\" [ngClass]=\"{'active': page === 2}\" class=\"btn btn-outline-dark\">2\n          </button>\n          <button type=\"button\" (click)=\"setPage(3)\" [ngClass]=\"{'active': page === 3}\" class=\"btn btn-outline-dark\">3\n          </button>\n          <button type=\"button\" (click)=\"setPage(4)\" [ngClass]=\"{'active': page === 4}\" class=\"btn btn-outline-dark\">4\n          </button>\n          <button type=\"button\" (click)=\"setPage(5)\" [ngClass]=\"{'active': page === 5}\" class=\"btn btn-outline-dark\">5\n          </button>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <br/>\n  <br/>\n  <br/>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search.service.client */ "./src/app/services/search.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchServie, route, router) {
        var _this = this;
        this.searchServie = searchServie;
        this.route = route;
        this.router = router;
        this.title = '';
        this.years = [];
        this.genres = [
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
        this.sorts = [
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
        ];
        this.img = 'https://image.tmdb.org/t/p/w500/';
        this.page = 1;
        this.year = 'None';
        this.genre = this.genres[0];
        this.sort = this.sorts[0];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    SearchComponent.prototype.setParams = function (params) {
    };
    SearchComponent.prototype.setSort = function (s) {
        this.sort = Object.assign({}, s);
    };
    SearchComponent.prototype.setGenre = function (g) {
        this.genre = Object.assign({}, g);
    };
    SearchComponent.prototype.setPage = function (p) {
        this.page = p;
        this.discover();
    };
    SearchComponent.prototype.setYears = function () {
        var y = 2018;
        this.years.push('None');
        while (y > 1900) {
            this.years.push(y);
            y--;
        }
        console.log(this.years);
    };
    SearchComponent.prototype.discover = function () {
        var _this = this;
        this.mode = 'discover';
        this.searchServie.dicover(this.genre.id, false, this.sort.value, this.page, this.year)
            .then(function (response) {
            _this.results = response.results;
        });
    };
    SearchComponent.prototype.searchMoovie = function () {
        var _this = this;
        this.mode = 'search';
        this.searchServie.searchMovieByTitle(this.title).then(function (response) {
            _this.results = response.results;
        });
        // const url = 'https://api.themoviedb.org/3/search/movie?api_key=01202464e80fb52cd90af159ba329661&query=' + title
        // return this.httpClient.get<Object>(url);
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.setYears();
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_service_client__WEBPACK_IMPORTED_MODULE_1__["SearchServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/activity.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/activity.service.client.ts ***!
  \*****************************************************/
/*! exports provided: ActivityServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityServiceClient", function() { return ActivityServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://tk-movie-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var ActivityServiceClient = /** @class */ (function () {
    function ActivityServiceClient() {
    }
    ActivityServiceClient.prototype.findAllActivities = function () {
        return fetch(HOST + 'api/activity/')
            .then(function (response) {
            return response.json();
        });
    };
    ActivityServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ActivityServiceClient);
    return ActivityServiceClient;
}());



/***/ }),

/***/ "./src/app/services/bookmark.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/bookmark.service.client.ts ***!
  \*****************************************************/
/*! exports provided: BookmarkServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkServiceClient", function() { return BookmarkServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://tk-movie-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var BookmarkServiceClient = /** @class */ (function () {
    function BookmarkServiceClient() {
    }
    BookmarkServiceClient.prototype.bookmark = function (movie) {
        return fetch(HOST + 'api/bookmark/movie', {
            body: JSON.stringify(movie),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    BookmarkServiceClient.prototype.unbookmark = function (movie) {
        return fetch(HOST + 'api/bookmark/movie', {
            body: JSON.stringify(movie),
            credentials: 'include',
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    BookmarkServiceClient.prototype.checkBookmark = function (movieId) {
        return fetch(HOST + 'api/bookmark/movie/' + movieId + '/check', {
            credentials: 'include',
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) { return response.json(); });
    };
    BookmarkServiceClient.prototype.findAllBookmarkedMovies = function (userId) {
        return fetch(HOST + 'api/bookmark/user/' + userId + '/movie/', {
            method: 'get',
        })
            .then(function (response) { return response.json(); });
    };
    BookmarkServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BookmarkServiceClient);
    return BookmarkServiceClient;
}());



/***/ }),

/***/ "./src/app/services/follow.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/follow.service.client.ts ***!
  \***************************************************/
/*! exports provided: FollowServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowServiceClient", function() { return FollowServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://tk-movie-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var FollowServiceClient = /** @class */ (function () {
    function FollowServiceClient() {
    }
    FollowServiceClient.prototype.addFollowing = function (userId) {
        return fetch(HOST + 'api/follow/following/' + userId, {
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient.prototype.removeFollowing = function (userId) {
        return fetch(HOST + 'api/follow/following/' + userId, {
            credentials: 'include',
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient.prototype.checkFollowing = function (userId) {
        return fetch(HOST + 'api/follow/following/' + userId, {
            credentials: 'include',
            method: 'get',
        })
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient.prototype.findAllFollowings = function (userId) {
        return fetch(HOST + 'api/follow/user/' + userId + '/following', {})
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient.prototype.findAllFollowers = function (userId) {
        return fetch(HOST + 'api/follow/user/' + userId + '/follower', {})
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FollowServiceClient);
    return FollowServiceClient;
}());



/***/ }),

/***/ "./src/app/services/like.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/like.service.client.ts ***!
  \*************************************************/
/*! exports provided: LikeServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeServiceClient", function() { return LikeServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://tk-movie-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var LikeServiceClient = /** @class */ (function () {
    function LikeServiceClient() {
    }
    LikeServiceClient.prototype.like = function (movie) {
        return fetch(HOST + 'api/like/movie', {
            body: JSON.stringify(movie),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    LikeServiceClient.prototype.unlike = function (movie) {
        return fetch(HOST + 'api/like/movie', {
            body: JSON.stringify(movie),
            credentials: 'include',
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    LikeServiceClient.prototype.checkLike = function (movieId) {
        return fetch(HOST + 'api/like/movie/' + movieId, {
            credentials: 'include',
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) { return response.json(); });
    };
    LikeServiceClient.prototype.findAllLikedMovies = function (userId) {
        return fetch(HOST + 'api/like/user/' + userId + '/movie/', {
            method: 'get',
        })
            .then(function (response) { return response.json(); });
    };
    LikeServiceClient.prototype.findUsersWhoLikedMovie = function (movieId) {
        return fetch(HOST + 'api/like/movie/' + movieId + '/user/', {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    LikeServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LikeServiceClient);
    return LikeServiceClient;
}());



/***/ }),

/***/ "./src/app/services/movie.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/movie.service.client.ts ***!
  \**************************************************/
/*! exports provided: MovieServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieServiceClient", function() { return MovieServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://tk-movie-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var MovieServiceClient = /** @class */ (function () {
    function MovieServiceClient() {
    }
    MovieServiceClient.prototype.findMovie = function (movieId) {
        return fetch(HOST + 'api/movie/' + movieId, {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    MovieServiceClient.prototype.deleteMovie = function (movieId) {
        return fetch(HOST + 'api/movie/' + movieId, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    MovieServiceClient.prototype.updateMovie = function (movieId, movie) {
        return fetch(HOST + 'api/movie/' + movieId, {
            body: JSON.stringify(movie),
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    MovieServiceClient.prototype.findAllMovies = function () {
        return fetch(HOST + 'api/movie/')
            .then(function (response) {
            return response.json();
        });
    };
    MovieServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MovieServiceClient);
    return MovieServiceClient;
}());



/***/ }),

/***/ "./src/app/services/review.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/review.service.client.ts ***!
  \***************************************************/
/*! exports provided: ReviewServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewServiceClient", function() { return ReviewServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://tk-movie-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var ReviewServiceClient = /** @class */ (function () {
    function ReviewServiceClient() {
    }
    ReviewServiceClient.prototype.addReview = function (movieId, com, mov) {
        var review = { review: com, movie: mov };
        return fetch(HOST + 'api/review/movie/' + movieId, {
            body: JSON.stringify(review),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    ReviewServiceClient.prototype.deleteReview = function (movieId, userId, rev) {
        var review = { review: rev };
        return fetch(HOST + 'api/review/movie/' + movieId + '/user/' + userId, {
            body: JSON.stringify(review),
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    ReviewServiceClient.prototype.findAllReviews = function (movieId) {
        return fetch(HOST + 'api/review/movie/' + movieId, {
            credentials: 'include',
        }).then(function (response) { return response.json(); });
    };
    ReviewServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ReviewServiceClient);
    return ReviewServiceClient;
}());



/***/ }),

/***/ "./src/app/services/search.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search.service.client.ts ***!
  \***************************************************/
/*! exports provided: SearchServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchServiceClient", function() { return SearchServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchServiceClient = /** @class */ (function () {
    function SearchServiceClient(httpClient) {
        this.httpClient = httpClient;
    }
    SearchServiceClient.prototype.searchMoovieById = function (id) {
        var url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=01202464e80fb52cd90af159ba329661';
        return fetch(url).then(function (response) { return response.json(); });
        // return this.httpClient.get<Object>(url);
    };
    SearchServiceClient.prototype.searchMovieByTitle = function (title, type) {
        if (type === void 0) { type = 'movie'; }
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=01202464e80fb52cd90af159ba329661&page=1&include_adult=false&query=' + title;
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.searchPopularMovies = function () {
        var url = 'https://api.themoviedb.org/3/movie/popular?api_key=01202464e80fb52cd90af159ba329661&language=en-US&page=1';
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.multiSearch = function (search) {
        var url = 'https://api.themoviedb.org/3/search/multi?api_key=01202464e80fb52cd90af159ba329661&language=en-US&query=' + search + '&page=1&include_adult=false';
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.discoverPopularMovies = function () {
        var url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.discoverMostPopularKids = function () {
        var url = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=G&sort_by=popularity.desc&api_key=01202464e80fb52cd90af159ba329661';
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.discoverHighestRatedR = function () {
        var url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.discoverBestMoviesOfTheYear = function () {
        var url = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=2018&sort_by=vote_average.desc&api_key=01202464e80fb52cd90af159ba329661';
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.discoverMostPopularComedies = function () {
        var url = "https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35";
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.discoverMostPopularFamilyMovies = function () {
        var url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751';
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.findStories = function () {
        var url = 'https://api.nytimes.com/svc/topstories/v2/movies.json?api_key=f88d565308f04acd905381074c76dda0';
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient.prototype.dicover = function (genre, adult, sort, page, year) {
        var url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=' + sort + '&include_adult=' + adult + '&include_video=false&page=' + page + '&primary_release_year=' + year + '&with_genres=' + genre;
        if (year === 'None') {
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=01202464e80fb52cd90af159ba329661&language=en-US&sort_by=' + sort + '&include_adult=' + adult + '&include_video=false&page=' + page + '&with_genres=' + genre;
        }
        return fetch(url).then(function (response) { return response.json(); });
    };
    SearchServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchServiceClient);
    return SearchServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://tk-movie-nodejs.herokuapp.com/';
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findAllUsers = function () {
        return fetch(HOST + 'api/user/')
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch(HOST + 'api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.deleteUserById = function (userId) {
        return fetch(HOST + 'api/user/' + userId + '/delete', {
            method: 'delete'
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return fetch(HOST + 'api/user/username/' + username)
            .then(function (response) { return response.json(); });
    };
    // findUserByCredentials(username, password) {
    //   return fetch('http://localhost:4000/api/user/username/' + username + '/password/' + password)
    //     .then(response => response.json());
    // }
    UserServiceClient.prototype.checkStatus = function () {
        return fetch(HOST + 'api/status', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.updateUser = function (user) {
        return fetch(HOST + 'api/user/update', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.updateUserById = function (userId, user) {
        return fetch(HOST + 'api/user/' + userId + '/update', {
            body: JSON.stringify(user),
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(HOST + 'api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(HOST + 'api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(HOST + 'api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.isAdmin = function () {
        return fetch(HOST + 'api/admin/status', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.register = function (user) {
        return fetch(HOST + 'api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.createUser = function (user) {
        return fetch(HOST + 'api/user', {
            body: JSON.stringify(user),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserServiceClient);
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usertable {\r\n  border-radius: 5px;\r\n  width: 50%;\r\n  margin: 0px auto;\r\n  float: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"sidenav\">-->\r\n<!--<i class=\" fa fa-2x fa-users\"></i>-->\r\n<!--<i class=\" fa fa-2x fa-user\"></i>-->\r\n<!--<i class=\" fa fa-2x fa-edit\"></i>-->\r\n<!--</div>-->\r\n<div class=\"container-fluid text-center\">\r\n  <br/>\r\n  <button class=\"float-right btn btn-light fa-lg fa fa-th-list\" (click)=\"switchMode()\"></button>\r\n  <h3>List of Users</h3>\r\n  <br/>\r\n  <table class=\"table table-hover table-bordred table-striped table-responsive-md\" *ngIf=\"listMode\">\r\n    <thead class=\"thead-dark\">\r\n    <th>Image</th>\r\n    <th>Username</th>\r\n    <th *ngIf=\"admin\">Password</th>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th>Date of Birth</th>\r\n    <th>Address</th>\r\n    <th>Phone</th>\r\n    <th>Gender</th>\r\n    <th>Role</th>\r\n    <th *ngIf=\"admin\"></th>\r\n    <th *ngIf=\"admin\"></th>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngIf=\"admin\">\r\n      <td>\r\n        <div class=\"dropdown\">\r\n          <button class=\"btn btn-light btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\r\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <img src=\"{{user.img_path}}\" width=\"20px\"> Img\r\n          </button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n            <button (click)=\"user.img_path = boyImg\" class=\"dropdown-item\"><img src=\"{{boyImg}}\" width=\"50px\"> Boy\r\n            </button>\r\n            <button (click)=\"user.img_path = girlImg\" class=\"dropdown-item\"><img src=\"{{girlImg}}\" width=\"50px\"> Girl\r\n            </button>\r\n            <button (click)=\"user.img_path = boyImg2\" class=\"dropdown-item\"><img src=\"{{boyImg2}}\" width=\"50px\"> Teen Boy\r\n            </button>\r\n            <button (click)=\"user.img_path = girlImg2\" class=\"dropdown-item\"><img src=\"{{girlImg2}}\" width=\"50px\"> Teen Girl\r\n            </button>\r\n            <button (click)=\"user.img_path = manImg\" class=\"dropdown-item\"><img src=\"{{manImg}}\" width=\"50px\"> Man\r\n            </button>\r\n            <button (click)=\"user.img_path = womanImg\" class=\"dropdown-item\"><img src=\"{{womanImg}}\" width=\"50px\"> Woman\r\n            </button>\r\n            <button (click)=\"user.img_path = oldmanImg\" class=\"dropdown-item\"><img src=\"{{oldmanImg}}\" width=\"50px\"> Old Man\r\n            </button>\r\n            <button (click)=\"user.img_path = oldwomanImg\" class=\"dropdown-item\"><img src=\"{{oldwomanImg}}\" width=\"50px\"> Old Woman\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </td>\r\n      <td><input [(ngModel)]=\"user.username\"\r\n                 placeholder=\"Username\"\r\n                 class=\"form-control\"/></td>\r\n      <td ><input [(ngModel)]=\"user.password\"\r\n                 placeholder=\"Pssword\"\r\n                 class=\"form-control\"\r\n                 type=\"password\"/></td>\r\n      <td><input [(ngModel)]=\"user.firstName\"\r\n                 placeholder=\"First Name\"\r\n                 class=\"form-control\"/></td>\r\n      <td><input [(ngModel)]=\"user.lastName\"\r\n                 placeholder=\"Last Name\"\r\n                 class=\"form-control\"/></td>\r\n      <td><input [(ngModel)]=\"user.dateB\"\r\n                 placeholder=\"Date of Birth\"\r\n                 type=\"date\"\r\n                 class=\"form-control\"/></td>\r\n      <td><input [(ngModel)]=\"user.address\"\r\n                 placeholder=\"Address\"\r\n                 class=\"form-control\"/></td>\r\n      <td><input [(ngModel)]=\"user.phone\"\r\n                 placeholder=\"Phone\"\r\n                 class=\"form-control\"/></td>\r\n      <td>\r\n        <div class=\"form-group\">\r\n          <!--<label for=\"selectRole\">Select role:</label>-->\r\n          <select [(ngModel)]=\"user.gender\" class=\"form-control\" id=\"selectGender\">\r\n            <option value=\"male\">Male</option>\r\n            <option value=\"female\">Female</option>\r\n          </select>\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <div class=\"form-group\">\r\n          <!--<label for=\"selectRole\">Select role:</label>-->\r\n          <select [(ngModel)]=\"user.role\" class=\"form-control\" id=\"selectRole\">\r\n            <option value=\"user\">User</option>\r\n            <option value=\"admin\">Admin</option>\r\n          </select>\r\n        </div>\r\n      </td>\r\n      <td>\r\n        <p *ngIf=\"!editMode\" data-placement=\"top\" data-toggle=\"tooltip\" title=\"Add\">\r\n          <button (click)=\"createUser()\"\r\n                  class=\"btn btn-success btn-xs fa fa-plus\"></button>\r\n        </p>\r\n        <p *ngIf=\"editMode\" data-placement=\"top\" data-toggle=\"tooltip\" title=\"Update\">\r\n          <button (click)=\"updateUser()\"\r\n                  class=\"btn btn-success btn-xs fa fa-upload\"></button>\r\n        </p>\r\n      </td>\r\n      <td>\r\n        <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Clean\">\r\n          <button (click)=\"cleanData()\"\r\n                  class=\"btn btn-danger btn-xs fa fa-times\"></button>\r\n        </p>\r\n      </td>\r\n    </tr>\r\n    <tr *ngFor=\"let user of users\">\r\n      <td routerLink={{routerLink}}{{user.username}} class=\"btn\" ><img src=\"{{user.img_path}}\" width=\"50px\" ></td>\r\n      <td>@{{user.username}}</td>\r\n      <td *ngIf=\"admin\"> ********</td>\r\n      <td>{{user.firstName}}</td>\r\n      <td>{{user.lastName}}</td>\r\n      <td>{{user.dateB}}</td>\r\n      <td>{{user.address}}</td>\r\n      <td>{{user.phone}}</td>\r\n      <td>{{user.gender}}</td>\r\n      <td>{{user.role}}</td>\r\n      <td *ngIf=\"admin\">\r\n        <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\">\r\n          <button *ngIf=\"admin\" (click)=\"editUser(user)\"\r\n                  class=\"btn btn-primary btn-xs fa fa-edit\"></button>\r\n        </p>\r\n      </td>\r\n      <td *ngIf=\"admin\">\r\n        <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\">\r\n          <button *ngIf=\"admin\"\r\n            (click)=\"deleteUser(user._id)\"\r\n            class=\"btn btn-danger btn-xs fa fa-trash\"></button>\r\n        </p>\r\n      </td >\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n\r\n  <div class=\"card-deck d-flex justify-content-center\" *ngIf=\"!listMode\">\r\n    <div *ngFor=\"let u of users\">\r\n    <div *ngIf=\"true\" class=\"card shadow-lg p-3 mb-5 bg-white rounded\" style=\"width: 14rem; margin:20px\">\r\n      <div class=\"btn\" routerLink=\"{{routerLink}}{{u.username}}\">\r\n      <img class=\"card-img-top img-fluid bg-light\" src=\"{{u.img_path}}\" alt=\"Card image\">\r\n        <h4 class=\"card-title card-header \">@<strong>{{u.username}}</strong></h4>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <h6 class=\"card-text\">First Name: <em>{{u.firstName}}</em></h6>\r\n        <h6 class=\"card-text\">Last Name: <em>{{u.lastName}}</em></h6>\r\n        <button class=\"btn btn-block btn-sm btn-primary\" routerLink=\"{{routerLink}}{{u.username}}\"> View Profile</button>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_follow_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/follow.service.client */ "./src/app/services/follow.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, followService, route, router) {
        this.userService = userService;
        this.followService = followService;
        this.route = route;
        this.router = router;
        this.users = [];
        this.editMode = false;
        this.boyImg = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100';
        this.boyImg2 = 'http://webiconspng.com/wp-content/uploads/2016/11/avatar_business_costume_male_man_office_user_icon_403022.png';
        this.girlImg = 'http://www.hotellaginestra.it/wp-content/uploads/2016/06/person-girl-flat.png';
        this.girlImg2 = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/girl-512.png';
        this.manImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png';
        this.womanImg = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png';
        this.oldmanImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman2-512.png';
        this.oldwomanImg = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/maturewoman-3-512.png';
    }
    UsersComponent.prototype.createUser = function () {
        var _this = this;
        console.log(this.user);
        if (this.user.username === undefined) {
            this.user.username = ('user' + this.index);
        }
        if (this.user.password === undefined) {
            this.user.password = ('user' + this.index);
        }
        console.log(this.user);
        this.userService.createUser(this.user)
            .then(function () {
            _this.findAllUsers();
            _this.cleanData();
        });
    };
    UsersComponent.prototype.follow = function (userId) {
        this.followService.addFollowing(userId)
            .then(function (response) { return console.log(response); });
    };
    UsersComponent.prototype.updateUser = function () {
        var _this = this;
        console.log(this.user._id);
        this.userService.updateUserById(this.user._id, this.user)
            .then(function () {
            _this.findAllUsers();
            _this.cleanData();
        });
    };
    UsersComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userService.deleteUserById(userId)
            .then(function () {
            _this.findAllUsers();
            _this.cleanData();
        });
    };
    UsersComponent.prototype.cleanData = function () {
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.editMode = false;
    };
    UsersComponent.prototype.editUser = function (user) {
        this.editMode = true;
        this.user = Object.assign({}, user);
    };
    UsersComponent.prototype.findAllUsers = function () {
        var _this = this;
        this.userService.findAllUsers()
            .then(function (users) {
            _this.users = users
                .filter(function (user) { return (user.role !== 'admin'); });
            _this.index = users.length + 1;
            console.log(users);
        });
    };
    UsersComponent.prototype.switchMode = function () {
        this.listMode = !this.listMode;
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url === '/users') {
            this.listMode = false;
            this.routerLink = '../user/';
        }
        else {
            this.listMode = true;
            this.routerLink = '../../user/';
        }
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.userService
            .profile()
            .then(function (user) {
            if (user.role === 'admin') {
                _this.admin = true;
            }
            else {
                _this.admin = false;
            }
        });
        this.findAllUsers();
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_follow_service_client__WEBPACK_IMPORTED_MODULE_4__["FollowServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tim\Documents\WebDev\tk-movie-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map