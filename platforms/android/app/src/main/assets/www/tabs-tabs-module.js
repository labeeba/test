(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"],
        children: [
            {
                path: 'measure',
                loadChildren: '../measure/measure.module#MeasurePageModule'
            },
            {
                path: 'activity',
                loadChildren: '../activity/activity.module#ActivityPageModule'
            },
            {
                path: 'history',
                loadChildren: '../history/history.module#HistoryPageModule'
            },
            {
                path: '',
                redirectTo: '/tabs/measure',
                pathMatch: 'full'
            }
        ]
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>tabs</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-tabs>\n\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"measure\">\n        <ion-icon name=\"pulse\"></ion-icon>\n        <ion-label>Measure</ion-label>\n        <!-- <ion-badge>6</ion-badge> -->\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"activity\">\n        <ion-icon name=\"stats\"></ion-icon>\n        <ion-label>Activity</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"history\">\n        <ion-icon name=\"timer\"></ion-icon>\n        <ion-label>History</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  color: #000;\n  font-weight: 600;\n  opacity: 0.6; }\n\nion-content {\n  font-family: \"Open Sans\"; }\n\n.tab-selected ion-icon {\n  color: #eb334f;\n  opacity: 1; }\n\n.tab-selected ion-label {\n  color: #eb334f;\n  opacity: 0.8; }\n\nion-icon {\n  opacity: 0.6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXExhYmVlYmFcXERlc2t0b3BcXFNlbmlvclxcQWJsZUhlYXJ0L3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGNBQWM7RUFDZCxVQUFVLEVBQUE7O0FBRmQ7RUFJUSxjQUFlO0VBRWYsWUFBWSxFQUFBOztBQUtwQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taWNvbntcclxuLy8gICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2ViMzM0ZiwgI2Y1NjU3NSwgI2ZiOGU5OSwgI2ZjYjNiYywgI2ZhZDhkZCk7XHJcbi8vICAgICAvLyBjb2xvcjogI2U1MDAyMztcclxuLy8gICAgIC8vIGNvbG9yOiAjZjU2NTc1O1xyXG4vLyB9XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbn1cclxuXHJcbi50YWItc2VsZWN0ZWR7IGlvbi1pY29ueyBcclxuICAgIGNvbG9yOiAjZWIzMzRmO1xyXG4gICAgb3BhY2l0eTogMTt9IFxyXG4gICAgaW9uLWxhYmVseyBcclxuICAgICAgICBjb2xvcjogICNlYjMzNGY7XHJcbiAgICAgICAgLy8gY29sb3I6ICMwMDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG5cclxuICAgIH0gXHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map