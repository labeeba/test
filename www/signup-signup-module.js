(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <!-- positions the arrow at the start -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"medium\"></ion-back-button>\n      <!-- <div text-center> -->\n      <p> Sign Up </p>\n      <!-- </div> -->\n    </ion-buttons>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card no-border>\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Name </ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Email Address</ion-label>\n        <ion-input type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\"></ion-input>\n      </ion-item>\n\n    </ion-card-content>\n    <ion-row>\n      <ion-col text-center>\n        <ion-button id=\"login\" [routerLink]=\"['/home']\"> Get Started\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  padding: 15px 15px 0px 5px; }\n\ndiv {\n  padding: 0px 50px 0px 25px; }\n\np {\n  font-family: \"Open Sans\";\n  font-weight: 700;\n  font-size: 25px;\n  line-height: none; }\n\nion-navbar {\n  display: inline-block; }\n\nion-card ion-row {\n  padding: 10px; }\n\nion-label {\n  opacity: 0.5; }\n\nion-button {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n  display: inline-block;\n  width: 250px;\n  font-size: 12px;\n  --background:  linear-gradient(to right top, #eb334f, #f56575, #fb8e99, #fcb3bc, #fad8dd); }\n\nion-card {\n  box-shadow: none !important; }\n\nion-item {\n  margin: 10px 20px 5px 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xcTGFiZWViYVxcRGVza3RvcFxcU2VuaW9yXFxBYmxlSGVhcnQvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLDBCQVA4QixFQUFBOztBQVVsQztFQUNJLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLHdCQUF3QjtFQUV4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGFBQVksRUFBQTs7QUFJaEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsWUFBVztFQUNYLGVBQWU7RUFFZix5RkFBYSxFQUFBOztBQUdqQjtFQUNJLDJCQUEyQixFQUFBOztBQUkvQjtFQUNJLDBCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLXBhZGRpbmc6IDE1cHggMTVweCAwcHggNXB4O1xyXG4vLyAkY29udGVudC1wYWRkaW5nOiAzMHB4O1xyXG4vLyAkbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiBibGFjaztcclxuLy8gJGxhYmVsLXdwLXRleHQtY29sb3ItZm9jdXNlZDogYmxhY2s7XHJcblxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIHBhZGRpbmc6ICRoZWFkZXItcGFkZGluZztcclxufVxyXG5cclxuZGl2e1xyXG4gICAgcGFkZGluZzogMHB4IDUwcHggMHB4IDI1cHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgLy8gb3BhY2l0eTogMC45O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub25lO1xyXG59XHJcblxyXG5pb24tbmF2YmFye1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24tcm93e1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgLy8gZmxvYXQ6cmlnaHQ7XHJcbiAgICBcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgXHJcbiAgICAtLWJhY2tncm91bmQ6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZWIzMzRmLCAjZjU2NTc1LCAjZmI4ZTk5LCAjZmNiM2JjLCAjZmFkOGRkKTtcclxuXHJcbiB9XHJcbmlvbi1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luOjEwcHggMjBweCA1cHggMjBweDtcclxufVxyXG4vLyAgaW9uLWl0ZW17XHJcbi8vICAgICAgbWFyZ2luOjIwcHg7XHJcbi8vICB9XHJcbi8vIGlvbi1sYWJlbCB7XHJcbi8vICAgICAtLXRleHQtY29sb3ItZm9jdXNlZDogIzIyMjtcclxuLy8gICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupPage = /** @class */ (function () {
    function SignupPage() {
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map