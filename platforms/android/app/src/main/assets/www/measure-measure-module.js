(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["measure-measure-module"],{

/***/ "./src/app/measure/measure.module.ts":
/*!*******************************************!*\
  !*** ./src/app/measure/measure.module.ts ***!
  \*******************************************/
/*! exports provided: MeasurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurePageModule", function() { return MeasurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _measure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./measure.page */ "./src/app/measure/measure.page.ts");







var routes = [
    {
        path: '',
        component: _measure_page__WEBPACK_IMPORTED_MODULE_6__["MeasurePage"]
    }
];
var MeasurePageModule = /** @class */ (function () {
    function MeasurePageModule() {
    }
    MeasurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_measure_page__WEBPACK_IMPORTED_MODULE_6__["MeasurePage"]]
        })
    ], MeasurePageModule);
    return MeasurePageModule;
}());



/***/ }),

/***/ "./src/app/measure/measure.page.html":
/*!*******************************************!*\
  !*** ./src/app/measure/measure.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Measure</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding fullscreen>\n\n  <ion-card [routerLink]=\"['/recording']\">\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\n      <ion-card-title>Recording</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-2></ion-col>\n        <ion-col col-8>\n          <img src=\"assets/imgs/recording.png\" style=\"height: 80px;width: 80px;\" />\n        </ion-col>\n        <ion-col col-2></ion-col>\n      </ion-row>\n      <br>\n      Record your heart sounds.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card [routerLink]=\"['/stethoscope']\">\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\n      <ion-card-title>Digital Stethoscope</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col col-2></ion-col>\n        <ion-col col-8>\n          <img src=\"assets/imgs/stethoscope.png\" style=\"height: 80px;width: 80px;\" />\n        </ion-col>\n        <ion-col col-2></ion-col>\n      </ion-row>\n      <br>\n      Connect your Thinklabs One Digital Stethoscope.\n    </ion-card-content>\n  </ion-card>\n\n  <!-- <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>ion-item in a card, icon left, button right</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n\n    <ion-card-content>\n      This is content, without any paragraph or header tags,\n      within an ion-card-content element.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item href=\"#\" class=\"activated\">\n      <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n      <ion-label>Card Link Item 1 .activated</ion-label>\n    </ion-item>\n\n    <ion-item href=\"#\">\n      <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n      <ion-label>Card Link Item 2</ion-label>\n    </ion-item>\n\n    <ion-item class=\"activated\">\n      <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n      <ion-label>Card Button Item 1 .activated</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n      <ion-label>Card Button Item 2</ion-label>\n    </ion-item>\n  </ion-card> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/measure/measure.page.scss":
/*!*******************************************!*\
  !*** ./src/app/measure/measure.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  font-family: \"Open Sans\"; }\n\nion-card-content {\n  padding: 20px;\n  font-family: \"Open Sans\"; }\n\nion-card {\n  margin: 25px;\n  font-family: \"Open Sans\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVhc3VyZS9DOlxcVXNlcnNcXExhYmVlYmFcXERlc2t0b3BcXFNlbmlvclxcQWJsZUhlYXJ0L3NyY1xcYXBwXFxtZWFzdXJlXFxtZWFzdXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGFBQWE7RUFDYix3QkFBd0IsRUFBQTs7QUFJNUI7RUFDSSxZQUFXO0VBQ1gsd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZWFzdXJlL21lYXN1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgXHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luOjI1cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/measure/measure.page.ts":
/*!*****************************************!*\
  !*** ./src/app/measure/measure.page.ts ***!
  \*****************************************/
/*! exports provided: MeasurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurePage", function() { return MeasurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MeasurePage = /** @class */ (function () {
    function MeasurePage() {
    }
    MeasurePage.prototype.ngOnInit = function () {
    };
    MeasurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-measure',
            template: __webpack_require__(/*! ./measure.page.html */ "./src/app/measure/measure.page.html"),
            styles: [__webpack_require__(/*! ./measure.page.scss */ "./src/app/measure/measure.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MeasurePage);
    return MeasurePage;
}());



/***/ })

}]);
//# sourceMappingURL=measure-measure-module.js.map