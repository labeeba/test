(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stethoscope-stethoscope-module"],{

/***/ "./src/app/stethoscope/stethoscope.module.ts":
/*!***************************************************!*\
  !*** ./src/app/stethoscope/stethoscope.module.ts ***!
  \***************************************************/
/*! exports provided: StethoscopePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StethoscopePageModule", function() { return StethoscopePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stethoscope_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stethoscope.page */ "./src/app/stethoscope/stethoscope.page.ts");







var routes = [
    {
        path: '',
        component: _stethoscope_page__WEBPACK_IMPORTED_MODULE_6__["StethoscopePage"]
    }
];
var StethoscopePageModule = /** @class */ (function () {
    function StethoscopePageModule() {
    }
    StethoscopePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_stethoscope_page__WEBPACK_IMPORTED_MODULE_6__["StethoscopePage"]]
        })
    ], StethoscopePageModule);
    return StethoscopePageModule;
}());



/***/ }),

/***/ "./src/app/stethoscope/stethoscope.page.html":
/*!***************************************************!*\
  !*** ./src/app/stethoscope/stethoscope.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>stethoscope</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/stethoscope/stethoscope.page.scss":
/*!***************************************************!*\
  !*** ./src/app/stethoscope/stethoscope.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0ZXRob3Njb3BlL3N0ZXRob3Njb3BlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/stethoscope/stethoscope.page.ts":
/*!*************************************************!*\
  !*** ./src/app/stethoscope/stethoscope.page.ts ***!
  \*************************************************/
/*! exports provided: StethoscopePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StethoscopePage", function() { return StethoscopePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StethoscopePage = /** @class */ (function () {
    function StethoscopePage() {
    }
    StethoscopePage.prototype.ngOnInit = function () {
    };
    StethoscopePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stethoscope',
            template: __webpack_require__(/*! ./stethoscope.page.html */ "./src/app/stethoscope/stethoscope.page.html"),
            styles: [__webpack_require__(/*! ./stethoscope.page.scss */ "./src/app/stethoscope/stethoscope.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StethoscopePage);
    return StethoscopePage;
}());



/***/ })

}]);
//# sourceMappingURL=stethoscope-stethoscope-module.js.map