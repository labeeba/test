(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <!-- positions the arrow at the start -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"medium\"></ion-back-button>\n      <!-- <div text-center> -->\n      <p> Login </p>\n      <!-- </div> -->\n    </ion-buttons>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card no-border>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Username</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n\n    </ion-card-content>\n    <ion-row>\n      <ion-col text-center>\n        <ion-button id=\"login\" (click)=\"openTabs()\"> Login\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  padding: 15px 15px 0px 5px; }\n\ndiv {\n  padding: 0px 50px 0px 25px; }\n\np {\n  font-family: \"Open Sans\";\n  font-weight: 700;\n  font-size: 25px;\n  line-height: none; }\n\nion-navbar {\n  display: inline-block; }\n\nion-card ion-row {\n  padding: 10px; }\n\nion-label {\n  opacity: 0.5; }\n\nion-button {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n  display: inline-block;\n  width: 250px;\n  font-size: 12px;\n  --background:  linear-gradient(to right top, #eb334f, #f56575, #fb8e99, #fcb3bc, #fad8dd); }\n\nion-card {\n  box-shadow: none !important;\n  margin-top: 15px; }\n\nion-item {\n  margin: 10px 20px 5px 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxMYWJlZWJhXFxEZXNrdG9wXFxTZW5pb3JcXEFibGVIZWFydC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLDBCQVA4QixFQUFBOztBQVVsQztFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLHdCQUF3QjtFQUV4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGFBQVksRUFBQTs7QUFJaEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsWUFBVztFQUNYLGVBQWU7RUFFZix5RkFBYSxFQUFBOztBQUdqQjtFQUNJLDJCQUEyQjtFQUMzQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSwwQkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoZWFkZXItcGFkZGluZzogMTVweCAxNXB4IDBweCA1cHg7XHJcbi8vICRjb250ZW50LXBhZGRpbmc6IDMwcHg7XHJcbi8vICRsYWJlbC1tZC10ZXh0LWNvbG9yLWZvY3VzZWQ6IGJsYWNrO1xyXG4vLyAkbGFiZWwtd3AtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcclxuXHJcblxyXG5pb24taGVhZGVye1xyXG4gICAgcGFkZGluZzogJGhlYWRlci1wYWRkaW5nO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICBwYWRkaW5nOiAwcHggNTBweCAwcHggMjVweDtcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAvLyBvcGFjaXR5OiAwLjk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1uYXZiYXJ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGlvbi1yb3d7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAvLyBmbG9hdDpyaWdodDtcclxuICAgIFxyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBcclxuICAgIC0tYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNlYjMzNGYsICNmNTY1NzUsICNmYjhlOTksICNmY2IzYmMsICNmYWQ4ZGQpO1xyXG5cclxuIH1cclxuaW9uLWNhcmR7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICBtYXJnaW46MTBweCAyMHB4IDVweCAyMHB4O1xyXG59XHJcblxyXG5cclxuLy8gIGlvbi1pdGVte1xyXG4vLyAgICAgIG1hcmdpbjoyMHB4O1xyXG4vLyAgfVxyXG4vLyBpb24tbGFiZWwge1xyXG4vLyAgICAgLS10ZXh0LWNvbG9yLWZvY3VzZWQ6ICMyMjI7XHJcbi8vICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { NavController } from 'ionic-angular';

var LoginPage = /** @class */ (function () {
    function LoginPage(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.loginCheckURL = 'putroutehere';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.openTabs = function () {
        var data = {
            name: this.name
        };
        console.log(data);
        // this.navCtrl.push(TabsPage, data);
        this.router.navigateByUrl('tabs');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map