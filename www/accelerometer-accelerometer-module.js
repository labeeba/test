(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accelerometer-accelerometer-module"],{

/***/ "./node_modules/@ionic-native/device-motion/ngx/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/device-motion/ngx/index.js ***!
  \***************************************************************/
/*! exports provided: DeviceMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMotion", function() { return DeviceMotion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeviceMotion = /** @class */ (function (_super) {
    __extends(DeviceMotion, _super);
    function DeviceMotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceMotion.prototype.getCurrentAcceleration = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getCurrentAcceleration", {}, arguments); };
    DeviceMotion.prototype.watchAcceleration = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "watchAcceleration", { "callbackOrder": "reverse", "observable": true, "clearFunction": "clearWatch" }, arguments); };
    DeviceMotion.pluginName = "DeviceMotion";
    DeviceMotion.plugin = "cordova-plugin-device-motion";
    DeviceMotion.pluginRef = "navigator.accelerometer";
    DeviceMotion.repo = "https://github.com/apache/cordova-plugin-device-motion";
    DeviceMotion.platforms = ["Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Tizen", "Ubuntu", "Windows", "Windows Phone 8"];
    DeviceMotion = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DeviceMotion);
    return DeviceMotion;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldmljZS1tb3Rpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFtRkEsZ0NBQWlCOzs7O0lBTWpELDZDQUFzQjtJQWN0Qix3Q0FBaUIsYUFDZixPQUEwQzs7Ozs7O0lBckJqQyxZQUFZO1FBSHhCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxZQUFZO3VCQXJGekI7RUFxRmtDLGlCQUFpQjtTQUF0QyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlTW90aW9uQWNjZWxlcmF0aW9uRGF0YSB7XG4gIC8qKlxuICAgKiBBbW91bnQgb2YgYWNjZWxlcmF0aW9uIG9uIHRoZSB4LWF4aXMuIChpbiBtL3NeMilcbiAgICovXG4gIHg6IG51bWJlcjtcblxuICAvKipcbiAgICogQW1vdW50IG9mIGFjY2VsZXJhdGlvbiBvbiB0aGUgeS1heGlzLiAoaW4gbS9zXjIpXG4gICAqL1xuICB5OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEFtb3VudCBvZiBhY2NlbGVyYXRpb24gb24gdGhlIHotYXhpcy4gKGluIG0vc14yKVxuICAgKi9cbiAgejogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDcmVhdGlvbiB0aW1lc3RhbXAgaW4gbWlsbGlzZWNvbmRzLlxuICAgKi9cbiAgdGltZXN0YW1wOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlTW90aW9uQWNjZWxlcm9tZXRlck9wdGlvbnMge1xuICAvKipcbiAgICogUmVxdWVzdGVkIHBlcmlvZCBvZiBjYWxscyB0byBhY2NlbGVyb21ldGVyU3VjY2VzcyB3aXRoIGFjY2VsZXJhdGlvbiBkYXRhIGluIE1pbGxpc2Vjb25kcy4gRGVmYXVsdDogMTAwMDBcbiAgICovXG4gIGZyZXF1ZW5jeT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBEZXZpY2UgTW90aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tZGV2aWNlLW1vdGlvbmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtEZXZpY2UgTW90aW9uIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlLW1vdGlvbikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBEZXZpY2VNb3Rpb24sIERldmljZU1vdGlvbkFjY2VsZXJhdGlvbkRhdGEgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RldmljZS1tb3Rpb24vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldmljZU1vdGlvbjogRGV2aWNlTW90aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBHZXQgdGhlIGRldmljZSBjdXJyZW50IGFjY2VsZXJhdGlvblxuICogdGhpcy5kZXZpY2VNb3Rpb24uZ2V0Q3VycmVudEFjY2VsZXJhdGlvbigpLnRoZW4oXG4gKiAgIChhY2NlbGVyYXRpb246IERldmljZU1vdGlvbkFjY2VsZXJhdGlvbkRhdGEpID0+IGNvbnNvbGUubG9nKGFjY2VsZXJhdGlvbiksXG4gKiAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAqICk7XG4gKlxuICogLy8gV2F0Y2ggZGV2aWNlIGFjY2VsZXJhdGlvblxuICogdmFyIHN1YnNjcmlwdGlvbiA9IHRoaXMuZGV2aWNlTW90aW9uLndhdGNoQWNjZWxlcmF0aW9uKCkuc3Vic2NyaWJlKChhY2NlbGVyYXRpb246IERldmljZU1vdGlvbkFjY2VsZXJhdGlvbkRhdGEpID0+IHtcbiAqICAgY29uc29sZS5sb2coYWNjZWxlcmF0aW9uKTtcbiAqIH0pO1xuICpcbiAqIC8vIFN0b3Agd2F0Y2hcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIERldmljZU1vdGlvbkFjY2VsZXJhdGlvbkRhdGFcbiAqIERldmljZU1vdGlvbkFjY2VsZXJvbWV0ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGV2aWNlTW90aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGV2aWNlLW1vdGlvbicsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5hY2NlbGVyb21ldGVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlLW1vdGlvbicsXG4gIHBsYXRmb3JtczogW1xuICAgICdBbmRyb2lkJyxcbiAgICAnQmxhY2tCZXJyeSAxMCcsXG4gICAgJ0Jyb3dzZXInLFxuICAgICdGaXJlZm94IE9TJyxcbiAgICAnaU9TJyxcbiAgICAnVGl6ZW4nLFxuICAgICdVYnVudHUnLFxuICAgICdXaW5kb3dzJyxcbiAgICAnV2luZG93cyBQaG9uZSA4J1xuICBdXG59KVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGV2aWNlTW90aW9uIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGFjY2VsZXJhdGlvbiBhbG9uZyB0aGUgeCwgeSwgYW5kIHogYXhlcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlTW90aW9uQWNjZWxlcmF0aW9uRGF0YT59IFJldHVybnMgb2JqZWN0IHdpdGggeCwgeSwgeiwgYW5kIHRpbWVzdGFtcCBwcm9wZXJ0aWVzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnRBY2NlbGVyYXRpb24oKTogUHJvbWlzZTxEZXZpY2VNb3Rpb25BY2NlbGVyYXRpb25EYXRhPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHRoZSBkZXZpY2UgYWNjZWxlcmF0aW9uLiBDbGVhciB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgKiBAcGFyYW0ge0FjY2VsZXJvbWV0ZXJPcHRpb25zfSBvcHRpb25zIGxpc3Qgb2Ygb3B0aW9ucyBmb3IgdGhlIGFjY2VsZXJvbWV0ZXIuXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPERldmljZU1vdGlvbkFjY2VsZXJhdGlvbkRhdGE+fSBPYnNlcnZhYmxlIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHlvdSBjYW4gc3Vic2NyaWJlIHRvXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2NsZWFyV2F0Y2gnXG4gIH0pXG4gIHdhdGNoQWNjZWxlcmF0aW9uKFxuICAgIG9wdGlvbnM/OiBEZXZpY2VNb3Rpb25BY2NlbGVyb21ldGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPERldmljZU1vdGlvbkFjY2VsZXJhdGlvbkRhdGE+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./src/app/accelerometer/accelerometer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/accelerometer/accelerometer.module.ts ***!
  \*******************************************************/
/*! exports provided: AccelerometerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccelerometerPageModule", function() { return AccelerometerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _accelerometer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accelerometer.page */ "./src/app/accelerometer/accelerometer.page.ts");







var routes = [
    {
        path: '',
        component: _accelerometer_page__WEBPACK_IMPORTED_MODULE_6__["AccelerometerPage"]
    }
];
var AccelerometerPageModule = /** @class */ (function () {
    function AccelerometerPageModule() {
    }
    AccelerometerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_accelerometer_page__WEBPACK_IMPORTED_MODULE_6__["AccelerometerPage"]]
        })
    ], AccelerometerPageModule);
    return AccelerometerPageModule;
}());



/***/ }),

/***/ "./src/app/accelerometer/accelerometer.page.html":
/*!*******************************************************!*\
  !*** ./src/app/accelerometer/accelerometer.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <!-- positions the arrow at the start -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"medium\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div text-left>\n    <p> Accelerometer </p>\n  </div>\n\n  <div full>\n    <h1> X: {{x}} </h1>\n  </div>\n  <div full>\n    <h1> Y: {{y}} </h1>\n  </div>\n  <div full>\n    <h1> Z: {{z}} </h1>\n  </div>\n  <div full>\n    <h1> Timestamp: {{timeStamp}} </h1>\n  </div>\n  <div id=\"button-pos\">\n    <ion-button id=\"button\" text-center (click)=\"start()\"> Start </ion-button>\n    <ion-button id=\"button\" text-center (click)=\"stop()\"> Stop </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/accelerometer/accelerometer.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/accelerometer/accelerometer.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  padding: 15px 15px 0px 5px; }\n\nh1 {\n  font-family: \"Open Sans\";\n  font-weight: 600;\n  font-size: 18px;\n  opacity: 0.4; }\n\np {\n  font-family: \"Open Sans\";\n  font-weight: 700;\n  opacity: 0.8;\n  font-size: 25px;\n  line-height: none; }\n\nion-button {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n  display: inline-block;\n  width: 250px;\n  margin: auto;\n  --background:  linear-gradient(to right top, #eb334f, #f56575, #fb8e99, #fcb3bc, #fad8dd); }\n\ndiv {\n  padding: 0px 50px 0px 35px; }\n\n#button {\n  margin: 20px 10px 10px 10px;\n  display: inline-block; }\n\n#button-pos {\n  padding: 0px 50px 0px 45px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZWxlcm9tZXRlci9DOlxcVXNlcnNcXExhYmVlYmFcXERlc2t0b3BcXFNlbmlvclxcQWJsZUhlYXJ0L3NyY1xcYXBwXFxhY2NlbGVyb21ldGVyXFxhY2NlbGVyb21ldGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDBCQUo4QixFQUFBOztBQU9sQztFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsWUFBVztFQUNYLFlBQVk7RUFHWix5RkFBYSxFQUFBOztBQUloQjtFQUNHLDBCQUEwQixFQUFBOztBQUk5QjtFQUNJLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBQTs7QUFJekI7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY2VsZXJvbWV0ZXIvYWNjZWxlcm9tZXRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaGVhZGVyLXBhZGRpbmc6IDE1cHggMTVweCAwcHggNXB4O1xyXG5cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAkaGVhZGVyLXBhZGRpbmc7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vbmU7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbiAgICBcclxuICAgIC0tYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNlYjMzNGYsICNmNTY1NzUsICNmYjhlOTksICNmY2IzYmMsICNmYWQ4ZGQpO1xyXG5cclxuIH1cclxuXHJcbiBkaXZ7XHJcbiAgICBwYWRkaW5nOiAwcHggNTBweCAwcHggMzVweDtcclxuICAgIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI2J1dHRvbntcclxuICAgIG1hcmdpbjogMjBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbiNidXR0b24tcG9ze1xyXG4gICAgcGFkZGluZzogMHB4IDUwcHggMHB4IDQ1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/accelerometer/accelerometer.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/accelerometer/accelerometer.page.ts ***!
  \*****************************************************/
/*! exports provided: AccelerometerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccelerometerPage", function() { return AccelerometerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device-motion/ngx */ "./node_modules/@ionic-native/device-motion/ngx/index.js");




var AccelerometerPage = /** @class */ (function () {
    function AccelerometerPage(navCtrl, deviceMotion) {
        this.navCtrl = navCtrl;
        this.deviceMotion = deviceMotion;
        this.x = '-';
        this.y = '-';
        this.z = '-';
        this.timeStamp = '-';
    }
    AccelerometerPage.prototype.start = function () {
        var _this = this;
        try {
            var option = {
                frequency: 200
            };
            this.id = this.deviceMotion.watchAcceleration(option).subscribe(function (acc) {
                _this.x = '' + acc.x;
                _this.y = '' + acc.y;
                _this.z = '' + acc.z;
                _this.timeStamp = '' + acc.timestamp;
            });
        }
        catch (err) {
            alert('Error' + err);
        }
    };
    AccelerometerPage.prototype.stop = function () {
        this.id.unsubscribe();
    };
    AccelerometerPage.prototype.ngOnInit = function () {
    };
    AccelerometerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accelerometer',
            template: __webpack_require__(/*! ./accelerometer.page.html */ "./src/app/accelerometer/accelerometer.page.html"),
            styles: [__webpack_require__(/*! ./accelerometer.page.scss */ "./src/app/accelerometer/accelerometer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_device_motion_ngx__WEBPACK_IMPORTED_MODULE_3__["DeviceMotion"]])
    ], AccelerometerPage);
    return AccelerometerPage;
}());



/***/ })

}]);
//# sourceMappingURL=accelerometer-accelerometer-module.js.map