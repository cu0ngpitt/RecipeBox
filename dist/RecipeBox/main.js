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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  margin: 35px 0;\r\n  padding: 0 25px;\r\n  text-align: center;\r\n  font-family: 'Do Hyeon', sans-serif;\r\n  font-size: 3.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n\r\n<app-recipe></app-recipe>\r\n"

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
        this.title = 'My Recipe Box';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/recipe/recipe.component */ "./src/app/components/recipe/recipe.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/recipe/recipe.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Image section */\r\n.recipe-image {\r\n  background: aliceblue;\r\n}\r\n.recipe-image img {\r\n  display: block;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  max-width: 768px;\r\n}\r\n/* Span class for backdrop color only */\r\n.backdrop-color {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 25vh;\r\n  background: aliceblue;\r\n  z-index: -1;\r\n}\r\n/* Header section */\r\n.header, .recipe {\r\n  padding-top: 35px;\r\n  padding: 0 15px;\r\n  max-width: 968px;\r\n  background: white;\r\n}\r\n.main-title {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 3fr 1fr;\r\n      grid-template-columns: 3fr 1fr;\r\n  padding-top: 40px;\r\n}\r\n.main-title p {\r\n  padding-top: 8px;\r\n  opacity: 0;\r\n  -ms-grid-column-align: center;\r\n      justify-self: center;\r\n  -ms-grid-column: 2;\r\n      grid-column-start: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column-end: 3;\r\n  -ms-grid-row: 2;\r\n      grid-row-start: 2;\r\n  -ms-grid-row-span: 1;\r\n  grid-row-end: 3;\r\n  transition: 1.5s;\r\n}\r\n.main-title p.love {\r\n  padding-top: 8px;\r\n  opacity: 1;\r\n  color: red;\r\n  -ms-grid-column-align: center;\r\n      justify-self: center;\r\n  -ms-grid-column: 2;\r\n      grid-column-start: 2;\r\n  -ms-grid-column-span: 1;\r\n  grid-column-end: 3;\r\n  -ms-grid-row: 2;\r\n      grid-row-start: 2;\r\n  -ms-grid-row-span: 1;\r\n  grid-row-end: 3;\r\n  transition: 1.5s;\r\n}\r\n.description {\r\n  margin: 35px 0;\r\n  padding: 35px 0;\r\n  border-top: 1px solid #e6e6e6;\r\n  border-bottom: 1px solid #e6e6e6;\r\n}\r\n/* Favorite icon */\r\n.main-title .favsIcon {\r\n  width: 50px;\r\n  height: 50px;\r\n  justify-self: center;\r\n  align-self: center;\r\n  border: 1px solid lightgrey;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  transition: .5s;\r\n}\r\n.main-title i {\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n  color: rgb(230, 249, 255);    /* fallback color */\r\n  color: rgba(0, 134, 179, .2);\r\n  transition: 1.5s;\r\n}\r\n.main-title .love i {\r\n  -webkit-animation: bounce 1.5s;\r\n          animation: bounce 1.5s;\r\n  color: red;\r\n  transition: 3s;\r\n}\r\n.main-title .favsIcon:hover {\r\n  -webkit-transform: scale(1.3);\r\n          transform: scale(1.3);\r\n  transition: .5s;\r\n}\r\n.main-title .favsIcon.love:hover {\r\n  border-color: lightgrey;\r\n  background: white;\r\n  -webkit-transform: scale(1.3);\r\n          transform: scale(1.3);\r\n  transition: .5s;\r\n}\r\n/* Checkboxes */\r\ninput {\r\n  -webkit-transform: scale(1.5);\r\n          transform: scale(1.5);\r\n}\r\n/* Ingredients section */\r\n.subTitle {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 2fr 1fr;\r\n      grid-template-columns: 2fr 1fr;\r\n}\r\n.selectAll {\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n.ingredient-list {\r\n  padding-top: 15px;\r\n}\r\n.ingredient-list li {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  -ms-grid-columns: 1fr 12fr;\r\n      grid-template-columns: 1fr 12fr;\r\n  list-style: none;\r\n  margin: 15px 0;\r\n}\r\n.ingredient-list li input {\r\n  -ms-grid-column-align: center;\r\n      justify-self: center;\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n/* Instructions section */\r\n.instructions {\r\n  margin-top: 35px;\r\n  padding-top: 25px;\r\n  border-top: 1px solid #e6e6e6;\r\n}\r\n.instruction-list li {\r\n  /* text-align: justify; */\r\n  margin: 25px;\r\n\r\n}\r\n@-webkit-keyframes bounce {\r\n\t0%, 100%, 20%, 50%, 80% {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n\t40% {\r\n\t\t-webkit-transform: scale(1.3);\r\n\t\t        transform: scale(1.3);\r\n\t}\r\n\t60% {\r\n\t\t-webkit-transform: scale(1.3);\r\n\t\t        transform: scale(1.3);\r\n\t}\r\n}\r\n@keyframes bounce {\r\n\t0%, 100%, 20%, 50%, 80% {\r\n\t\t-webkit-transform: scale(1);\r\n\t\t        transform: scale(1);\r\n\t}\r\n\t40% {\r\n\t\t-webkit-transform: scale(1.3);\r\n\t\t        transform: scale(1.3);\r\n\t}\r\n\t60% {\r\n\t\t-webkit-transform: scale(1.3);\r\n\t\t        transform: scale(1.3);\r\n\t}\r\n}\r\n/* Responsive styling */\r\n@media only screen and (min-width: 576px) {\r\n  .header {\r\n    margin: 0 auto;\r\n    padding: 55px 25px 0 25px;\r\n  }\r\n\r\n  .recipe {\r\n    margin: 0 auto;\r\n    padding: 0 25px 55px 25px;\r\n  }\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .header {\r\n    padding-top: 65px;\r\n  }\r\n\r\n  .recipe {\r\n    margin: 0 auto;\r\n    padding-bottom: 35px;\r\n  }\r\n\r\n  .ingredient-list {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .ingredient-list {\r\n    padding-top: 35px;\r\n  }\r\n}\r\n@media only screen and (min-width: 992px) {\r\n  .container {\r\n    margin: 0 auto;\r\n    max-width: 968px;\r\n    border: 1px solid black;\r\n    box-shadow: 8px 8px lightgrey;\r\n  }\r\n\r\n  .recipe{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 2fr;\r\n        grid-template-columns: 1fr 2fr;\r\n  }\r\n\r\n  .ingredient-list {\r\n    display: block;\r\n  }\r\n\r\n  .instructions {\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n    border-top: none;\r\n    padding-left: 25px;\r\n    border-left: 1px solid #e6e6e6;\r\n  }\r\n\r\n  .footer {\r\n    height: 125px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/recipe/recipe.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"recipe-image\">\n  <img src=\"./assets/images/cheesecake.jpg\" alt=\"Cheesecake picture\">\n</section>\n\n<div class=\"backdrop-color\"></div>\n\n<div class=\"container\">\n  <section class=\"header\">\n    <div class=\"main-title\">\n      <h1 class=\"recipe-title\">New York Cheesecake</h1>\n\n      <div class=\"favsIcon\" [class.love]=\"favorite\" (click)=\"toggleFavs()\">\n        <i class=\"fas fa-heart fa-2x\"></i>\n      </div>\n\n      <p [class.love]=\"favorite\">I love it!</p>\n    </div>\n\n    <p class=\"description\">Learn how to make a classical New York Style Cheesecake with this fantastic recipe.</p>\n  </section>\n\n  <section class=\"recipe\">\n    <div class=\"ingredients\">\n      <div class=\"subTitle\">\n        <h2>Ingredients</h2>\n\n        <div class=\"selectAll\">\n          <input class=\"selectAll\" type=\"checkbox\" [(ngModel)]=\"this.checked\" (click)=\"toggleAll()\">\n          Select All\n        </div>\n      </div>\n\n      <ul class=\"ingredient-list\">\n        <li *ngFor=\"let list of lists; let i = index;\"><input type=\"checkbox\"  [(ngModel)]=\"list.checked\" (click)=\"verifyAllChecked(i)\">{{list.quantity}}<br>{{list.item}}</li>\n      </ul>\n    </div>\n\n    <div class=\"instructions\">\n      <h2 class=\"subTitle\">Instuctions</h2>\n\n      <ol class=\"instruction-list\">\n        <li *ngFor=\"let step of steps\">{{step.steps}}</li>\n      </ol>\n    </div>\n\n  </section>\n</div>\n\n<div class=\"footer\"></div>\n"

/***/ }),

/***/ "./src/app/components/recipe/recipe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.ts ***!
  \*******************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Service imports

var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(recipe) {
        this.recipe = recipe;
        this.checked = false;
        this.count = 0;
        this.favorite = false; //favorite button
    }
    RecipeComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    RecipeComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipe.getRecipes()
            .subscribe(function (data) {
            _this.lists = data.ingredients;
            _this.steps = data.instructions;
        });
    };
    RecipeComponent.prototype.toggleFavs = function () {
        this.favorite = !this.favorite;
    };
    RecipeComponent.prototype.toggleAll = function () {
        var length = this.lists.length;
        var i;
        this.checked = !this.checked;
        if (this.checked === true) {
            for (i = 0; i < length; i++) {
                this.lists[i].checked = true;
            }
            this.count = length;
        }
        if (this.checked === false) {
            for (i = 0; i < length; i++) {
                this.lists[i].checked = false;
            }
            this.count = 0;
        }
    };
    RecipeComponent.prototype.verifyAllChecked = function (i) {
        var length = this.lists.length;
        if (this.lists[i].checked === undefined || this.lists[i].checked === false) {
            this.lists[i].checked = true;
            this.count++;
        }
        else if (this.lists[i].checked === true) {
            this.count--;
        }
        if (this.count === length) {
            this.checked = true;
        }
        else {
            this.checked = false;
        }
    };
    RecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/components/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.css */ "./src/app/components/recipe/recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
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


var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
        this.recipeUrl = './assets/recipes/cheesecake.json';
    }
    RecipeService.prototype.getRecipes = function () {
        return this.http.get(this.recipeUrl);
    };
    RecipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecipeService);
    return RecipeService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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

module.exports = __webpack_require__(/*! C:\Users\Cuong\Documents\GitHub\RecipeBox\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map