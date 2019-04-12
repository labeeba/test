(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");







var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/main/main.page.html":
/*!*************************************!*\
  !*** ./src/app/main/main.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div text-center class=\"heart\">\n    <p> Your Heart. <span id=\"healthier\"> Healthier. </span> <br> <span id=\"slogan\">Predict heart disease.</span> </p>\n  </div>\n  <img src=\"assets/imgs/medicine_main.png\" alt=\"heartlogo\" class=\"heartlogo\">\n  <ion-row>\n    <ion-col text-center>\n      <ion-button id=\"login\" [routerLink]=\"['/login']\"> Login\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col text-center>\n      <ion-button fill=\"clear\" id=\"signup\" [routerLink]=\"['/signup']\"> Sign up </ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/main/main.page.scss":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heart {\n  padding: 15px 25px 10px 25px; }\n\n.heartlogo {\n  margin: 0 auto;\n  display: block;\n  opacity: 0.8; }\n\np {\n  font-family: \"Open Sans\";\n  font-weight: 700;\n  opacity: 0.8;\n  font-size: 25px;\n  line-height: none; }\n\n#healthier {\n  color: #e50023; }\n\n#slogan {\n  letter-spacing: 1.5px;\n  font-family: \"Open Sans\";\n  font-weight: 600;\n  font-size: 18px;\n  opacity: 0.4; }\n\nion-button {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n  display: inline-block;\n  width: 250px; }\n\n#login {\n  margin-top: 50px;\n  font-size: 12px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  --background:  linear-gradient(to right top, #eb334f, #f56575, #fb8e99, #fcb3bc, #fad8dd);\n  border-radius: 5px;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); }\n\n#signup {\n  color: black;\n  letter-spacing: 2px;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 0.5px;\n  margin-bottom: 30px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXExhYmVlYmFcXERlc2t0b3BcXFNlbmlvclxcQWJsZUhlYXJ0L3NyY1xcYXBwXFxtYWluXFxtYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDRCQUE2QixFQUFBOztBQUdqQztFQUNJLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFJckI7RUFDSSxjQUNKLEVBQUE7O0FBRUE7RUFHSSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVcsRUFBQTs7QUFNZjtFQUNJLGdCQUFnQjtFQUVoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUd6Qix5RkFBYTtFQUViLGtCQUFrQjtFQUNsQiwwQ0FBc0MsRUFBQTs7QUFHekM7RUFDRyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMENBQXNDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFydHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxMHB4IDI1cHggO1xyXG59XHJcblxyXG4uaGVhcnRsb2dve1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub25lO1xyXG4gICAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbiNoZWFsdGhpZXJ7XHJcbiAgICBjb2xvcjogI2U1MDAyM1xyXG59XHJcblxyXG4jc2xvZ2Fue1xyXG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IDI7XHJcbiAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6MjUwcHg7XHJcbiAgICBcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcclxuXHJcbiB9XHJcblxyXG4jbG9naW57XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLy8gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YwZDEyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzNmMGQxMiAwJSwgI2E3MWQzMSA3NCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2ViMzM0ZiwgI2Y1NjU3NSwgI2ZiOGU5OSwgI2ZjYjNiYywgI2ZhZDhkZCk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZTUwMDIzLCAjZWY0ZjQwLCAjZjc3NzYwLCAjZmM5YTgyLCAjZmZiYmE4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6MXB4IDFweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcbiAgICBcclxuICNzaWdudXB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6MXB4IDFweCAycHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.page.ts":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MainPage = /** @class */ (function () {
    function MainPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MainPage.prototype.navigateToPage = function (pageName) {
        this.navCtrl.navigateForward('/' + pageName);
    };
    MainPage.prototype.ngOnInit = function () {
    };
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.page.html */ "./src/app/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map