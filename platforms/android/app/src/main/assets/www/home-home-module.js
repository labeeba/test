(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class=\"my-tabs\">\n    <div class=\"my-tabs-inner\">\n      <!-- <ng-container *ngIf=\"tab === 'calendar'\">\n        Your calendar content\n      </ng-container>\n\n      <ng-container *ngIf=\"tab === 'speakers'\">\n        Your speakers content\n      </ng-container>\n\n      <ng-container *ngIf=\"tab === 'map'\">\n        Your map content\n      </ng-container> -->\n    </div>\n\n\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button [routerLink]=\"['/measure']\">\n        <ion-icon name=\"pulse\"></ion-icon>\n        <ion-label>Measure</ion-label>\n        <!-- <ion-badge>6</ion-badge> -->\n      </ion-tab-button>\n\n      <ion-tab-button [routerLink]=\"['/activity']\">\n        <ion-icon name=\"stats\"></ion-icon>\n        <ion-label>Activity</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button [routerLink]=\"['/history']\">\n        <ion-icon name=\"timer\"></ion-icon>\n        <ion-label>History</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n\n  </div>\n\n\n  <!-- solution for tabs: https://github.com/ionic-team/ionic/issues/16796 -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-family: \"Open Sans\"; }\n\n.my-tabs {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  contain: layout size style; }\n\n.my-tabs .my-tabs-inner {\n    position: relative;\n    flex: 1;\n    contain: layout size style; }\n\n.my-tabs ion-tab-bar {\n    width: 100%; }\n\nion-icon {\n  color: #f56575; }\n\nion-label {\n  color: #000;\n  font-weight: 600;\n  opacity: 0.8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXExhYmVlYmFcXERlc2t0b3BcXFNlbmlvclxcQWJsZUhlYXJ0L3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQVY5QjtJQWFRLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsMEJBQTBCLEVBQUE7O0FBZmxDO0lBbUJRLFdBQVcsRUFBQTs7QUFJbkI7RUFHSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG4ubXktdGFicyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xuXG4gICAgLm15LXRhYnMtaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGNvbnRhaW46IGxheW91dCBzaXplIHN0eWxlO1xuICAgIH1cblxuICAgIGlvbi10YWItYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5pb24taWNvbntcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNlYjMzNGYsICNmNTY1NzUsICNmYjhlOTksICNmY2IzYmMsICNmYWQ4ZGQpO1xuICAgIC8vIGNvbG9yOiAjZTUwMDIzO1xuICAgIGNvbG9yOiAjZjU2NTc1O1xufVxuXG5pb24tbGFiZWx7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBvcGFjaXR5OiAwLjg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
        // tab1Root: string;
        // tab2Root: string;
        // tab3Root: string;
        // constructor() {
        //   this.tab1Root = 'MeasurePage';
        //   this.tab2Root = 'ActivityPage';
        //   this.tab3Root = 'HistoryPage';
        // }
        this.tab = 'MeasurePage';
    }
    HomePage.prototype.show = function (tab) {
        this.tab = tab;
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map