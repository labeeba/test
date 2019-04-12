(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-test-module"],{

/***/ "./src/app/test/test.module.ts":
/*!*************************************!*\
  !*** ./src/app/test/test.module.ts ***!
  \*************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/test/test.page.ts");







var routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]
    }
];
var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
        })
    ], TestPageModule);
    return TestPageModule;
}());



/***/ }),

/***/ "./src/app/test/test.page.html":
/*!*************************************!*\
  !*** ./src/app/test/test.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>test</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-button id=\"predict\" (click)=\"predict()\"> Login\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/test/test.page.scss":
/*!*************************************!*\
  !*** ./src/app/test/test.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/test/test.page.ts":
/*!***********************************!*\
  !*** ./src/app/test/test.page.ts ***!
  \***********************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import { SenderService } from './sender.service';
var TestPage = /** @class */ (function () {
    // audiofile: string;
    // express server this works!!!!!!
    function TestPage(httpClient) {
        this.httpClient = httpClient;
        // sound_filepath: string;
        // postUrl = 'http://127.0.0.1:5001/test_wav'; // change this to express route.
        this.fetchAudioUrl = 'http://localhost:8100/assets/sound/to_test_mono2.wav';
        this.api = this.httpClient.get('http://127.0.0.1:5001/', { responseType: 'text' });
        this.api.subscribe(function (data) {
            console.log('my data:', data);
        });
        // this.sound_filepath = 'assets/sound/to_test_mono2.wav';
    }
    TestPage.prototype.getAudio = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.api = this.httpClient.get(this.fetchAudioUrl, { responseType: 'blob' });
                this.api.subscribe(function (data) {
                    _this.file = new Blob([data], { 'type': 'audio/wav; codecs=MS_PCM' });
                    console.log('gotfile', _this.file);
                });
                return [2 /*return*/, this.file];
            });
        });
    };
    // for express
    TestPage.prototype.predict = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, file;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.test_file = '../to_test_mono2.wav';
                        _a = this;
                        return [4 /*yield*/, this.getAudio()];
                    case 1:
                        _a.audioFile = _b.sent(); // calling the function to get audio
                        this.formData = new FormData();
                        this.formData.append('file', this.test_file);
                        file = new File([this.audioFile], 'heartsoundz', { lastModified: 1534584790000 });
                        this.api = this.httpClient.post('http://localhost:5001/predict', file, { responseType: 'text' });
                        // for testing
                        // this.api = this.httpClient.get('http://localhost:8080/predict', { responseType: 'text' });
                        // this.api = this.httpClient.post(this.postUrl, { 'file': this.audioFile });
                        this.api.subscribe(function (data) {
                            console.log('prediction:', data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // for flask
    // async predict() {
    //   this.audioFile = await this.getAudio(); // calling the function to get audio
    //   const formData: FormData = new FormData();
    //   formData.append('file', this.audioFile);
    //   this.api = this.httpClient.post('http://127.0.0.1:5001/test_wav', formData, { responseType: 'text' });
    //   // this.api = this.httpClient.post(this.postUrl, { 'file': this.audioFile });
    //   this.api.subscribe(data => {
    //     console.log('my data:', data);
    //   });
    // }
    // upload_wav() {
    //   const formData = new FormData();
    //   const audioFile = 'assets/sound/to_test_mono2.wav';
    //   formData.append('myAudioFile', audioFile);
    //   this.api = this.httpClient.post('http://127.0.0.1:5001/test_wav', formData, { responseType: 'text' });
    //   this.api.subscribe(data => {
    //     console.log('my data:', data);
    //   });
    // }
    TestPage.prototype.ngOnInit = function () {
    };
    TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.page.html */ "./src/app/test/test.page.html"),
            styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/test/test.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestPage);
    return TestPage;
}());



/***/ })

}]);
//# sourceMappingURL=test-test-module.js.map