(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["senderservice-senderservice-module"],{

/***/ "./src/app/senderservice/senderservice.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/senderservice/senderservice.module.ts ***!
  \*******************************************************/
/*! exports provided: SenderservicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenderservicePageModule", function() { return SenderservicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _senderservice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./senderservice.page */ "./src/app/senderservice/senderservice.page.ts");







var routes = [
    {
        path: '',
        component: _senderservice_page__WEBPACK_IMPORTED_MODULE_6__["SenderservicePage"]
    }
];
var SenderservicePageModule = /** @class */ (function () {
    function SenderservicePageModule() {
    }
    SenderservicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_senderservice_page__WEBPACK_IMPORTED_MODULE_6__["SenderservicePage"]]
        })
    ], SenderservicePageModule);
    return SenderservicePageModule;
}());



/***/ }),

/***/ "./src/app/senderservice/senderservice.page.html":
/*!*******************************************************!*\
  !*** ./src/app/senderservice/senderservice.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>senderservice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/senderservice/senderservice.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/senderservice/senderservice.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbmRlcnNlcnZpY2Uvc2VuZGVyc2VydmljZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/senderservice/senderservice.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/senderservice/senderservice.page.ts ***!
  \*****************************************************/
/*! exports provided: SenderservicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenderservicePage", function() { return SenderservicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SenderservicePage = /** @class */ (function () {
    function SenderservicePage(http) {
        this.http = http;
        this.postUrl = 'http://127.0.0.1:5001/test_wav';
        this.fetchAudioUrl = 'http://localhost:8100/assets/sound/to_test_mono2.wav';
    }
    SenderservicePage.prototype.send = function (audioFile) {
        var formData = new FormData();
        formData.append('file', audioFile, audioFile.name);
        return this.http.post(this.postUrl, formData);
    };
    SenderservicePage.prototype.getAudio = function (fileName) {
        return this.http.get(this.fetchAudioUrl + fileName, { responseType: 'blob' });
    };
    SenderservicePage.prototype.ngOnInit = function () {
    };
    SenderservicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-senderservice',
            template: __webpack_require__(/*! ./senderservice.page.html */ "./src/app/senderservice/senderservice.page.html"),
            styles: [__webpack_require__(/*! ./senderservice.page.scss */ "./src/app/senderservice/senderservice.page.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SenderservicePage);
    return SenderservicePage;
}());



/***/ })

}]);
//# sourceMappingURL=senderservice-senderservice-module.js.map