(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/pages/start-page/start-page.component */ "./src/app/views/pages/start-page/start-page.component.ts");
/* harmony import */ var _views_pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/pages/game-page/game-page.component */ "./src/app/views/pages/game-page/game-page.component.ts");
/* harmony import */ var _views_pages_option_page_option_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/pages/option-page/option-page.component */ "./src/app/views/pages/option-page/option-page.component.ts");
/* harmony import */ var _views_pages_end_page_end_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/pages/end-page/end-page.component */ "./src/app/views/pages/end-page/end-page.component.ts");







var routes = [
    { path: 'title', component: _views_pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__["StartPageComponent"] },
    { path: 'game/:topic/:levelId', component: _views_pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_4__["GamePageComponent"] },
    { path: 'options/:topic', component: _views_pages_option_page_option_page_component__WEBPACK_IMPORTED_MODULE_5__["OptionPageComponent"] },
    { path: 'endGame', component: _views_pages_end_page_end_page_component__WEBPACK_IMPORTED_MODULE_6__["EndPageComponent"] },
    { path: '', component: _views_pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__["StartPageComponent"], pathMatch: 'full' },
    { path: '**', component: _views_pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__["StartPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Trivia Logo\" src=\"./assets/triviaLogo2.png\">\n</div>\n<!-- <app-start-page></app-start-page> -->\n<!-- <app-game-page></app-game-page> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CodeStack Trivia Game';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/button/button.component */ "./src/app/shared/button/button.component.ts");
/* harmony import */ var _views_pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/pages/game-page/game-page.component */ "./src/app/views/pages/game-page/game-page.component.ts");
/* harmony import */ var _views_pages_option_page_option_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/pages/option-page/option-page.component */ "./src/app/views/pages/option-page/option-page.component.ts");
/* harmony import */ var _views_pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/pages/start-page/start-page.component */ "./src/app/views/pages/start-page/start-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clock/clock.component */ "./src/app/clock/clock.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_highlight_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-highlight-js */ "./node_modules/ngx-highlight-js/fesm5/ngx-highlight-js.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _views_pages_end_page_end_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/pages/end-page/end-page.component */ "./src/app/views/pages/end-page/end-page.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _shared_button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"],
                _views_pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_9__["GamePageComponent"],
                _views_pages_option_page_option_page_component__WEBPACK_IMPORTED_MODULE_10__["OptionPageComponent"],
                _views_pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_11__["StartPageComponent"],
                _clock_clock_component__WEBPACK_IMPORTED_MODULE_13__["ClockComponent"],
                _views_pages_end_page_end_page_component__WEBPACK_IMPORTED_MODULE_19__["EndPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot(),
                ngx_highlight_js__WEBPACK_IMPORTED_MODULE_17__["HighlightJsModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_4__["CountdownModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clock/clock.component.css":
/*!*******************************************!*\
  !*** ./src/app/clock/clock.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-family: Lato;\n  }\n\n.btn {\n    height: 100px;\n    width: 85px;\n    font-size: 55px;\n    text-align: center;\n}\n\n.element {\n    -webkit-animation: pulse 2s infinite;\n            animation: pulse 2s infinite;\n  }\n\n@-webkit-keyframes pulse {\n    33% {\n      background-color: #001F3F;\n    }\n    0% {\n      background-color: darkgoldenrod;\n    }\n    33% {\n        background-color: darkred;\n    }\n    }\n\n@keyframes pulse {\n    33% {\n      background-color: #001F3F;\n    }\n    0% {\n      background-color: darkgoldenrod;\n    }\n    33% {\n        background-color: darkred;\n    }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xvY2svY2xvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtFQUNuQjs7QUFFRjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7RUFDOUI7O0FBRUE7SUFDRTtNQUNFLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UsK0JBQStCO0lBQ2pDO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTs7QUFWRjtJQUNFO01BQ0UseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSwrQkFBK0I7SUFDakM7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBIiwiZmlsZSI6InNyYy9hcHAvY2xvY2svY2xvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICB9XG5cbi5idG4ge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVsZW1lbnQge1xuICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcHVsc2Uge1xuICAgIDMzJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxRjNGO1xuICAgIH1cbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xuICAgIH1cbiAgICAzMyUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xuICAgIH1cbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/clock/clock.component.html":
/*!********************************************!*\
  !*** ./src/app/clock/clock.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-left mt-5 mb-5\">\n    <countdown [config] = \"{leftTime: 45}\" (finished)=\"onFinished()\" class=\"count-down\" style=\"display: inline;\">$!s!</countdown>\n</div>"

/***/ }),

/***/ "./src/app/clock/clock.component.ts":
/*!******************************************!*\
  !*** ./src/app/clock/clock.component.ts ***!
  \******************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");



var ClockComponent = /** @class */ (function () {
    function ClockComponent() {
    }
    ClockComponent.prototype.ngOnInit = function () {
        this.config = {
            leftTime: 1000 * 10,
        };
    };
    ClockComponent.prototype.resetTimer = function () {
        this.counter.restart();
        this.counter.stop();
        this.counter.pause();
        this.counter.resume();
    };
    ClockComponent.prototype.onStart = function () {
        // Do something
    };
    ClockComponent.prototype.onNotify = function ($event) {
        // Do something
    };
    ClockComponent.prototype.repaint = function () {
        var me = this;
        var content;
        me.hands.forEach(function (hand) {
            if (hand.lastValue !== hand.value) {
                content = '';
                var cur = me.toDigitals(hand.value + 1, hand.bits).join('');
                var next = me.toDigitals(hand.value, hand.bits).join('');
                hand.node.innerHTML = "\n          <span class=\"count curr top\">" + cur + "</span>\n          <span class=\"count next top\">" + next + "</span>\n          <span class=\"count next bottom\">" + next + "</span>\n          <span class=\"count curr bottom\">" + cur + "</span>\n        ";
                hand.node.parentElement.className = 'time';
                setTimeout(function () {
                    hand.node.parentElement.className = 'time flip';
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_countdown__WEBPACK_IMPORTED_MODULE_2__["CountdownComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_countdown__WEBPACK_IMPORTED_MODULE_2__["CountdownComponent"])
    ], ClockComponent.prototype, "counter", void 0);
    ClockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./clock.component.html */ "./src/app/clock/clock.component.html"),
            styles: [__webpack_require__(/*! ./clock.component.css */ "./src/app/clock/clock.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClockComponent);
    return ClockComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getURL = function (url) {
        return this.http.get(url);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/get-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/get-data.service.ts ***!
  \**********************************************/
/*! exports provided: GetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataService", function() { return GetDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var GetDataService = /** @class */ (function () {
    function GetDataService(dataService) {
        this.dataService = dataService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.triviaQ = [];
        this.sheetQ = [];
    }
    GetDataService.prototype.getTriviaQuestions = function (topic, gameLevel) {
        var _this = this;
        var keys = [{ key: '1age3SHskms1aDJELbscpmiJ_GceFJiWVB3q4IDxFFD8/', topic: 'videoGames' },
            { key: '1F-_Tyhaew1OZLLy8A1ksj4nNtVHejCRFbUI4IJT8FEU/', topic: 'history' },
            { key: '1Pai-Dph18w2BZDhOvW1X_-q602eXiK5-JjnXIQh1lpM/', topic: 'generalKnowledge' },
            { key: '1TLvp-_Wo1N3mWwP-gIzXDoIF6j50nhzfvDFT2TKD71w/', topic: 'scienceNature' },
        ];
        var apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
        var apiURLpt2 = '/public/values?alt=json';
        console.log('Topic lm filtering by is: ', topic);
        var locatedKey = lodash__WEBPACK_IMPORTED_MODULE_4__["filter"](keys, function (o) { return o.topic == topic; });
        console.log('This is my key =====>', locatedKey);
        this.triviaQ = [];
        this.sheetQ = [];
        /* getTriviaQuestions(gameLevel: string): Observable<any> {
          return this.dataService.getURL(
            this.apiURLpt1 + this.apiKeypt2 + gameLevel + this.apiURLpt3
          ); */
        this.subscription.add(this.dataService
            .getURL(apiURLpt1 + locatedKey[0].key + gameLevel + apiURLpt2)
            .subscribe(function (x) {
            console.log('This the API call --->>>> ', x);
            for (var _i = 0, _a = x.feed.entry; _i < _a.length; _i++) {
                var q = _a[_i];
                var nfo = {
                    category: q['gsx$category']['$t'],
                    difficulty: q['gsx$difficulty']['$t'],
                    question: q['gsx$question']['$t'],
                    answer_1: q['gsx$answer1']['$t'],
                    answer_2: q['gsx$answer2']['$t'],
                    answer_3: q['gsx$answer3']['$t'],
                    answer_4: q['gsx$answer4']['$t'],
                    correct_answer: q['gsx$correctanswer']['$t']
                };
                var questions = {
                    question: q['gsx$question']['$t'],
                    a1: q['gsx$answer1']['$t'],
                    a2: q['gsx$answer2']['$t'],
                    a3: q['gsx$answer3']['$t'],
                    a4: q['gsx$answer4']['$t'],
                    correctA: q['gsx$correctanswer']['$t']
                };
                _this.triviaQ.push(nfo);
                _this.sheetQ.push(questions); // console.log('TEST LINE =======>>>>>>>>>', nfo);
            }
        }));
        return this.triviaQ;
        // return this.sheetQ;
    };
    GetDataService.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    GetDataService.prototype.shuffleArray = function (array, len) {
        var temp;
        var index;
        for (var i = 0; i < len; i++) {
            console.log('i: ', i);
            array.push(i);
        }
        console.log('After for loop this is ARRAY[] --> ', array);
        // While there are elements in the array
        while (len > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * len);
            // Decrease len by 1
            console.log('INSIDE WHILE  ---> ' + index);
            len--;
            // And swap the last element with it
            temp = array[len];
            array[len] = array[index];
            array[index] = temp;
        }
        console.log('This is the index order of the ARRAY -> ', array);
        return array;
        // var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        // console.log(shuffle(myArray));
    };
    GetDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], GetDataService);
    return GetDataService;
}());



/***/ }),

/***/ "./src/app/services/grab-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/grab-data.service.ts ***!
  \***********************************************/
/*! exports provided: GrabDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrabDataService", function() { return GrabDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var GrabDataService = /** @class */ (function () {
    function GrabDataService(dataService) {
        this.dataService = dataService;
        this.totalCorrect = 0;
        this.totalTimeOut = 0;
        this.totalQuestion = 0;
    }
    GrabDataService.prototype.getTriviaQuestions = function (topic, gameLevel) {
        var keys = [{ key: '1age3SHskms1aDJELbscpmiJ_GceFJiWVB3q4IDxFFD8/', topic: 'videoGames' },
            { key: '1F-_Tyhaew1OZLLy8A1ksj4nNtVHejCRFbUI4IJT8FEU/', topic: 'history' },
            { key: '1Pai-Dph18w2BZDhOvW1X_-q602eXiK5-JjnXIQh1lpM/', topic: 'generalKnowledge' },
            { key: '1TLvp-_Wo1N3mWwP-gIzXDoIF6j50nhzfvDFT2TKD71w/', topic: 'scienceNature' },
        ];
        var apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
        var apiURLpt2 = '/public/values?alt=json';
        // console.log('Topic lm filtering by is: ', topic);
        var locatedKey = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](keys, function (o) { return o.topic === topic; });
        // console.log('This is my key =====>', locatedKey);
        return this.dataService
            .getURL(apiURLpt1 + locatedKey[0].key + gameLevel + apiURLpt2);
    };
    GrabDataService.prototype.shuffleArray = function (array, len) {
        var temp;
        var index;
        for (var i = 0; i < len; i++) {
            console.log('i: ', i);
            array.push(i);
        }
        // console.log(
        //   'After for loop this is ARRAY[] --> ',
        //   array
        // );
        // While there are elements in the array
        while (len > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * len);
            // Decrease len by 1
            // console.log('INSIDE WHILE  ---> ' + index);
            len--;
            // And swap the last element with it
            temp = array[len];
            array[len] = array[index];
            array[index] = temp;
        }
        // console.log('This is the index order of the ARRAY -> ', array);
        return array;
        // var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        // console.log ('My triviaQ ++++++> ', this.triviaQ);
    };
    GrabDataService.prototype.setTotalCorrect = function (totalCorrect) {
        this.totalCorrect = totalCorrect;
        console.log('setting total: ' + this.totalCorrect);
    };
    GrabDataService.prototype.setTotalTimeOut = function (totalTimeOut) {
        this.totalTimeOut = totalTimeOut;
        console.log(this.totalTimeOut);
    };
    GrabDataService.prototype.setTotalQuestion = function (totalQuestion) {
        this.totalQuestion = totalQuestion;
        console.log(this.totalQuestion);
    };
    GrabDataService.prototype.getTotalCorrect = function () {
        return this.totalCorrect;
    };
    GrabDataService.prototype.getTotalTimeOut = function () {
        return this.totalTimeOut;
    };
    GrabDataService.prototype.getTotalQuestion = function () {
        return this.totalQuestion;
    };
    GrabDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], GrabDataService);
    return GrabDataService;
}());



/***/ }),

/***/ "./src/app/services/option-level.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/option-level.service.ts ***!
  \**************************************************/
/*! exports provided: OptionLevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionLevelService", function() { return OptionLevelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionLevelService = /** @class */ (function () {
    function OptionLevelService() {
        this.selectLevel = '3';
    }
    OptionLevelService.prototype.setLevel = function (value) {
        this.selectLevel = value;
    };
    OptionLevelService.prototype.getSelectLevel = function () {
        return this.selectLevel;
    };
    OptionLevelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionLevelService);
    return OptionLevelService;
}());



/***/ }),

/***/ "./src/app/shared/button/button.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/button/button.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\nwidth: 450px;\ncolor: black;\nfont-weight: bold;\n\n}\n\n/* Shutter In Horizontal */\n\n.hvr-shutter-in-horizontal {\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    position: relative;\n    background: #2098D1;\n    transition-property: color;\n    transition-duration: 0.4s;\n  }\n\n.hvr-shutter-in-horizontal:before {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: #e1e1e1;\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n    -webkit-transform-origin: 50%;\n    transform-origin: 50%;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    transition-duration: 0.4s;\n    transition-timing-function: ease-out;\n  }\n\n.hvr-shutter-in-horizontal:hover, .hvr-shutter-in-horizontal:focus, .hvr-shutter-in-horizontal:active {\n    color: white;\n  }\n\n.hvr-shutter-in-horizontal:hover:before, .hvr-shutter-in-horizontal:focus:before, .hvr-shutter-in-horizontal:active:before {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2J1dHRvbi9idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osaUJBQWlCOztBQUVqQjs7QUFFQSwwQkFBMEI7O0FBQzFCO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpREFBaUQ7SUFDakQseUNBQXlDO0lBQ3pDLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBRW5CLDBCQUEwQjtJQUUxQix5QkFBeUI7RUFDM0I7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUVyQixzQ0FBOEI7SUFBOUIsOEJBQThCO0lBQTlCLGlEQUE4QjtJQUU5Qix5QkFBeUI7SUFFekIsb0NBQW9DO0VBQ3RDOztBQUNBO0lBQ0UsWUFBWTtFQUNkOztBQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbndpZHRoOiA0NTBweDtcbmNvbG9yOiBibGFjaztcbmZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbi8qIFNodXR0ZXIgSW4gSG9yaXpvbnRhbCAqL1xuLmh2ci1zaHV0dGVyLWluLWhvcml6b250YWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMjA5OEQxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gIH1cbiAgLmh2ci1zaHV0dGVyLWluLWhvcml6b250YWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIC5odnItc2h1dHRlci1pbi1ob3Jpem9udGFsOmhvdmVyLCAuaHZyLXNodXR0ZXItaW4taG9yaXpvbnRhbDpmb2N1cywgLmh2ci1zaHV0dGVyLWluLWhvcml6b250YWw6YWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmh2ci1zaHV0dGVyLWluLWhvcml6b250YWw6aG92ZXI6YmVmb3JlLCAuaHZyLXNodXR0ZXItaW4taG9yaXpvbnRhbDpmb2N1czpiZWZvcmUsIC5odnItc2h1dHRlci1pbi1ob3Jpem9udGFsOmFjdGl2ZTpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/button/button.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/button/button.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" [valueTopic] ={{enterTopic}} [valueLevel] = {{enterLevel}}  routerLink = {{route}} routerLinkActive = \"active\" class=\"btn btn-primary hvr-shutter-in-horizontal\">{{btnName}}</button> -->\n\n<button type=\"button\" routerLinkActive=\"active\" class=\"btn btn-primary hvr-shutter-in-horizontal\">{{btnName}}</button>"

/***/ }),

/***/ "./src/app/shared/button/button.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    // @Input() route: string;
    // @Input() enterTopic: string;
    // @Input() enterLevel: string;
    // valueTopic = 'History';
    // public valueTopic: BehaviorSubject<string> = new BehaviorSubject<string>(this.enterTopic);
    // public valueLevel: BehaviorSubject<string> = new BehaviorSubject<string>(this.enterLevel);
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
        // console.log('Enter Topic Value =====>>>> ', this.enterTopic);
        // console.log('Enter Level Value =====>>>> ', this.enterLevel);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "btnName", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/shared/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.css */ "./src/app/shared/button/button.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{header}}</h1>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "header", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/end-page/end-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/pages/end-page/end-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    min-width: 400px;\n    min-height: 50px;\n    height: auto;\n}\n\n.input-group-prepend {\n  background-color: #aaa;\n  border-radius: 5px; \n  \n}\n\n.hvr-curl-top-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  position: relative;\n}\n\n.hvr-curl-top-left:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  top: 0;\n  left: 0;\n  background: white;\n  /* IE9 */\n  background: linear-gradient(135deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');\n  /*For IE7-8-9*/\n  z-index: 1000;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  transition-duration: 0.3s;\n  transition-property: width, height;\n}\n\n.hvr-curl-top-left:hover:before, .hvr-curl-top-left:focus:before, .hvr-curl-top-left:active:before {\n  width: 25px;\n  height: 25px;\n}\n\np {\n  font-family: Lato;\n}\n\n.btnClock {\n  height: 100px;\n  width: 90px;\n  font-size: 55px;\n  text-align: center;\n}\n\n.element {\n  -webkit-animation: pulse 2s infinite;\n          animation: pulse 2s infinite;\n}\n\n@-webkit-keyframes pulse {\n  33% {\n    background-color: #001F3F;\n  }\n  0% {\n    background-color: darkgoldenrod;\n  }\n  33% {\n      background-color: darkred;\n  }\n}\n\n@keyframes pulse {\n  33% {\n    background-color: #001F3F;\n  }\n  0% {\n    background-color: darkgoldenrod;\n  }\n  33% {\n      background-color: darkred;\n  }\n}\n\n.qBox {\n    \n    border-color: burlywood; \n    \n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZW5kLXBhZ2UvZW5kLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixpREFBaUQ7RUFDakQseUNBQXlDO0VBQ3pDLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLE1BQU07RUFDTixPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUiw2RUFBNkU7RUFDN0UsaUhBQWlIO0VBQ2pILGNBQWM7RUFDZCxhQUFhO0VBQ2IsMENBQTBDO0VBRTFDLHlCQUF5QjtFQUV6QixrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtNQUNJLHlCQUF5QjtFQUM3QjtBQUNGOztBQVZBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO01BQ0kseUJBQXlCO0VBQzdCO0FBQ0Y7O0FBRUU7O0lBRUUsdUJBQXVCOztFQUV6QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2VuZC1wYWdlL2VuZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgXG59XG5cbi5odnItY3VybC10b3AtbGVmdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmh2ci1jdXJsLXRvcC1sZWZ0OmJlZm9yZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvKiBJRTkgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgd2hpdGUgNDUlLCAjYWFhIDUwJSwgI2NjYyA1NiUsIHdoaXRlIDgwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KEdyYWRpZW50VHlwZT0wLHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nIzAwMDAwMCcpO1xuICAvKkZvciBJRTctOC05Ki9cbiAgei1pbmRleDogMTAwMDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGhlaWdodDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGhlaWdodDtcbn1cbi5odnItY3VybC10b3AtbGVmdDpob3ZlcjpiZWZvcmUsIC5odnItY3VybC10b3AtbGVmdDpmb2N1czpiZWZvcmUsIC5odnItY3VybC10b3AtbGVmdDphY3RpdmU6YmVmb3JlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4uYnRuQ2xvY2sge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiA1NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lbGVtZW50IHtcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDMzJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMUYzRjtcbiAgfVxuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcbiAgfVxuICAzMyUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcbiAgfVxufVxuICBcbiAgLnFCb3gge1xuICAgIFxuICAgIGJvcmRlci1jb2xvcjogYnVybHl3b29kOyBcbiAgICBcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/views/pages/end-page/end-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/end-page/end-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div id=\"background-wrap\">\n      <div class=\"bubble x1\"></div>\n      <div class=\"bubble x2\"></div>\n      <div class=\"bubble x3\"></div>\n      <div class=\"bubble x4\"></div>\n      <div class=\"bubble x5\"></div>\n      <div class=\"bubble x6\"></div>\n      <div class=\"bubble x7\"></div>\n      <div class=\"bubble x8\"></div>\n      <div class=\"bubble x9\"></div>\n      <div class=\"bubble x10\"></div>\n    </div>\n<div class=\"container-fluid mt-5\">\n  <div class=\"row\">\n    <div class=\"col-12 d-flex justify-content-center\">\n      <app-header [header]=\"'End Game'\"></app-header>\n    </div>\n  </div><div class=\"container\">\n\n  <div class=\"row my-5\">\n\n    <div class=\"col-3 text-center\"><h4>Total Questions</h4></div>\n    <div class=\"col-3 text-center\"><h4>Total Correct Answer(s)</h4> </div>\n    <div class=\"col-3 text-center\"><h4>Total Skipped Answer(s)</h4></div>\n    <div class=\"col-3 text-center\"><h4>Total Incorrect Answer(s)</h4></div>\n    <hr>\n    <div class=\"col-3 text-center\"><h5>{{totalQuestion}}</h5></div>\n    <div class=\"col-3 text-center\"><h5>{{totalCorrect}}</h5></div>\n    <div class=\"col-3 text-center\"><h5>{{totalTimeOut}}</h5> </div>\n    <div class=\"col-3 text-center\"><h5>{{totalQuestion-totalCorrect-totalTimeOut}}</h5></div>\n    <div class=\"col-12 my-5 text-center\">\n\n        <app-button [routerLink]=\"['/title']\" [btnName]=\"'Start New Game'\"></app-button>\n\n    </div>\n\n\n  </div>\n  <hr>"

/***/ }),

/***/ "./src/app/views/pages/end-page/end-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/pages/end-page/end-page.component.ts ***!
  \************************************************************/
/*! exports provided: EndPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndPageComponent", function() { return EndPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_grab_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/grab-data.service */ "./src/app/services/grab-data.service.ts");



var EndPageComponent = /** @class */ (function () {
    function EndPageComponent(grabDataServices) {
        this.grabDataServices = grabDataServices;
    }
    EndPageComponent.prototype.ngOnInit = function () {
        this.totalCorrect = this.grabDataServices.getTotalCorrect();
        this.totalTimeOut = this.grabDataServices.getTotalTimeOut();
        this.totalQuestion = this.grabDataServices.getTotalQuestion();
    };
    EndPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end-page',
            template: __webpack_require__(/*! ./end-page.component.html */ "./src/app/views/pages/end-page/end-page.component.html"),
            styles: [__webpack_require__(/*! ./end-page.component.css */ "./src/app/views/pages/end-page/end-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_grab_data_service__WEBPACK_IMPORTED_MODULE_2__["GrabDataService"]])
    ], EndPageComponent);
    return EndPageComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/game-page/game-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/pages/game-page/game-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    min-width: 400px;\n    min-height: 50px;\n    height: auto;\n}\n\n.input-group-prepend {\n  background-color: #aaa;\n  border-radius: 5px; \n  \n}\n\n.hvr-curl-top-left {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  position: relative;\n}\n\n.hvr-curl-top-left:before {\n  pointer-events: none;\n  position: absolute;\n  content: '';\n  height: 0;\n  width: 0;\n  top: 0;\n  left: 0;\n  background: white;\n  /* IE9 */\n  background: linear-gradient(135deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');\n  /*For IE7-8-9*/\n  z-index: 1000;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\n  transition-duration: 0.3s;\n  transition-property: width, height;\n}\n\n.hvr-curl-top-left:hover:before, .hvr-curl-top-left:focus:before, .hvr-curl-top-left:active:before {\n  width: 25px;\n  height: 25px;\n}\n\np {\n  font-family: Lato;\n}\n\n.btnClock {\n  height: 100px;\n  width: 90px;\n  font-size: 55px;\n  text-align: center;\n}\n\n.element {\n  -webkit-animation: pulse 2s infinite;\n          animation: pulse 2s infinite;\n}\n\n@-webkit-keyframes pulse {\n  33% {\n    background-color: #001F3F;\n  }\n  0% {\n    background-color: darkgoldenrod;\n  }\n  33% {\n      background-color: darkred;\n  }\n}\n\n@keyframes pulse {\n  33% {\n    background-color: #001F3F;\n  }\n  0% {\n    background-color: darkgoldenrod;\n  }\n  33% {\n      background-color: darkred;\n  }\n}\n\n.qBox {\n    \n    border-color: burlywood; \n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZ2FtZS1wYWdlL2dhbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlEQUFpRDtFQUNqRCx5Q0FBeUM7RUFDekMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsTUFBTTtFQUNOLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLDZFQUE2RTtFQUM3RSxpSEFBaUg7RUFDakgsY0FBYztFQUNkLGFBQWE7RUFDYiwwQ0FBMEM7RUFFMUMseUJBQXlCO0VBRXpCLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztFQUNBO01BQ0kseUJBQXlCO0VBQzdCO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7QUFDRjs7QUFFRTs7SUFFRSx1QkFBdUI7O0VBRXpCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZ2FtZS1wYWdlL2dhbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gIFxufVxuXG4uaHZyLWN1cmwtdG9wLWxlZnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxcHgpIHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5odnItY3VybC10b3AtbGVmdDpiZWZvcmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLyogSUU5ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHdoaXRlIDQ1JSwgI2FhYSA1MCUsICNjY2MgNTYlLCB3aGl0ZSA4MCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChHcmFkaWVudFR5cGU9MCxzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAnKTtcbiAgLypGb3IgSUU3LTgtOSovXG4gIHotaW5kZXg6IDEwMDA7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBoZWlnaHQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBoZWlnaHQ7XG59XG4uaHZyLWN1cmwtdG9wLWxlZnQ6aG92ZXI6YmVmb3JlLCAuaHZyLWN1cmwtdG9wLWxlZnQ6Zm9jdXM6YmVmb3JlLCAuaHZyLWN1cmwtdG9wLWxlZnQ6YWN0aXZlOmJlZm9yZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuLmJ0bkNsb2NrIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZWxlbWVudCB7XG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAzMyUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDFGM0Y7XG4gIH1cbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XG4gIH1cbiAgMzMlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG4gIH1cbn1cbiAgXG4gIC5xQm94IHtcbiAgICBcbiAgICBib3JkZXItY29sb3I6IGJ1cmx5d29vZDsgXG4gICAgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/game-page/game-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/game-page/game-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div id=\"background-wrap\">\n    <div class=\"bubble x1\"></div>\n    <div class=\"bubble x2\"></div>\n    <div class=\"bubble x3\"></div>\n    <div class=\"bubble x4\"></div>\n    <div class=\"bubble x5\"></div>\n    <div class=\"bubble x6\"></div>\n    <div class=\"bubble x7\"></div>\n    <div class=\"bubble x8\"></div>\n    <div class=\"bubble x9\"></div>\n    <div class=\"bubble x10\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 d-flex justify-content-center mt-5\">\n      <app-header [header]=\"'Game Page'\"></app-header>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center mt-5\">\n        <button class=\"btn-dark btnClock element\">\n        <countdown [config] = 'config' (finished)=\"onFinished()\" class=\"count-down\" style=\"display: inline;\">$!s!</countdown></button>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-2\">\n      <h3 class=\"text-center\">Remining questions</h3>\n      <h4 class=\"text-center\">{{totalQuestions}}</h4>\n    </div>\n    <div class=\"col-8\">\n\n      <div class=\"qBox text-center\">\n        <p>\n          <ngb-alert [dismissible]=\"false\">\n            <h4>{{q}}</h4>\n          </ngb-alert>\n        </p>\n\n      </div>\n\n    </div>\n    <div class=\"col-2\">\n      <h3 class=\"text-center\">Correct Answer</h3>\n      <h4 class=\"text-center\">{{correctCount}}</h4>\n    </div>\n    <div class=\"col-12 my-2 text-center\">\n      <h3><i> <Strong>Category : </Strong>{{cat}}</i></h3>\n    </div>\n  </div>\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <div class=\"d-flex justify-content-center mt-3\">\n        <button (click)=\"displayTriviaQ(a1)\" class=\"btn btn-primary hvr-curl-top-left\">{{a1}}</button>\n      </div>\n    </div>\n\n    <div class=\"col-6\">\n      <div class=\"d-flex justify-content-center mt-3\">\n        <button (click)=\"displayTriviaQ(a2)\" class=\"btn btn-primary hvr-curl-top-left\">{{a2}}</button>\n      </div>\n    </div>\n\n    <div class=\"col-6\">\n      <div class=\"d-flex justify-content-center mt-3\">\n        <button (click)=\"displayTriviaQ(a3)\" class=\"btn btn-primary hvr-curl-top-left\">{{a3}}</button>\n      </div>\n    </div>\n\n    <div class=\"col-6\">\n      <div class=\"d-flex justify-content-center mt-3\">\n        <button (click)=\"displayTriviaQ(a4)\" class=\"btn btn-primary hvr-curl-top-left\">{{a4}}</button>\n      </div>\n    </div>\n\n\n    <div *ngIf = 'endGame' class=\"col-12\">\n      <a [routerLink] = \"['/endGame']\" [routerLinkActive] = \"['active']\" ></a>\n    </div> \n        \n   \n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/pages/game-page/game-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/game-page/game-page.component.ts ***!
  \**************************************************************/
/*! exports provided: GamePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageComponent", function() { return GamePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/get-data.service */ "./src/app/services/get-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Subscription */ "./node_modules/rxjs/internal/Subscription.js");
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_grab_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/grab-data.service */ "./src/app/services/grab-data.service.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");







var GamePageComponent = /** @class */ (function () {
    function GamePageComponent(triviaGame, _route, _router, grabDataService) {
        this.triviaGame = triviaGame;
        this._route = _route;
        this._router = _router;
        this.grabDataService = grabDataService;
        this.config = {
            leftTime: 20,
        };
        this.subscription = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.triviaQ = [];
        this.triviaIndex = [];
        this.qOrder = [];
        this.aOrder = [];
        this.numQuestions = 10;
    }
    GamePageComponent.prototype.ngOnInit = function () {
        this.varInit();
    };
    GamePageComponent.prototype.varInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.levelId = params.levelId;
            _this.topic = params.topic;
        });
        this.triviaQ = [];
        this.qOrder = [];
        this.aOrder = [];
        this.triviaAnswers = [];
        this.qIndex = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.cat = 'Nothing To Display';
        this.q = 'Nothing To Display';
        this.a1 = 'Nothing To Display';
        this.a2 = 'Nothing To Display';
        this.a3 = 'Nothing To Display';
        this.a4 = 'Nothing To Display';
        this.userA = 'none';
        this.correctA = '';
        this.skipTotal = 0;
        this.totalQuestions = 11;
        this.endGame = false;
        this.getQuestions();
    };
    GamePageComponent.prototype.getQuestions = function () {
        var _this = this;
        this.subscription.add(this.grabDataService.getTriviaQuestions(this.topic, this.levelId).subscribe(function (x) {
            for (var _i = 0, _a = x.feed.entry; _i < _a.length; _i++) {
                var q = _a[_i];
                var nfo = {
                    category: q['gsx$category']['$t'],
                    difficulty: q['gsx$difficulty']['$t'],
                    question: q['gsx$question']['$t'],
                    answer_1: q['gsx$answer1']['$t'],
                    answer_2: q['gsx$answer2']['$t'],
                    answer_3: q['gsx$answer3']['$t'],
                    answer_4: q['gsx$answer4']['$t'],
                    correct_answer: q['gsx$correctanswer']['$t']
                };
                _this.triviaQ.push(nfo);
            }
            _this.triviaGame.shuffleArray(_this.qOrder, _this.triviaQ.length);
            _this.displayTriviaQ(_this.userA);
        }));
    };
    GamePageComponent.prototype.displayTriviaQ = function (ans) {
        if (this.qIndex < this.numQuestions) {
            this.triviaGame.shuffleArray(this.aOrder, 4);
            this.triviaAnswers[0] = this.triviaQ[this.qOrder[this.qIndex]].answer_1;
            this.triviaAnswers[1] = this.triviaQ[this.qOrder[this.qIndex]].answer_2;
            this.triviaAnswers[2] = this.triviaQ[this.qOrder[this.qIndex]].answer_3;
            this.triviaAnswers[3] = this.triviaQ[this.qOrder[this.qIndex]].answer_4;
            this.a1 = this.triviaAnswers[this.aOrder[0]];
            this.a2 = this.triviaAnswers[this.aOrder[1]];
            this.a3 = this.triviaAnswers[this.aOrder[2]];
            this.a4 = this.triviaAnswers[this.aOrder[3]];
            this.triviaAnswers[0] = this.a1;
            this.triviaAnswers[1] = this.a2;
            this.triviaAnswers[2] = this.a3;
            this.triviaAnswers[3] = this.a4;
            this.q = this.triviaQ[this.qOrder[this.qIndex]].question;
            this.cat = this.triviaQ[this.qOrder[this.qIndex]].category;
            this.correctA = this.triviaQ[this.qOrder[this.qIndex]].correct_answer;
            if (this.qIndex > 0 && ans === this.correctA) {
                this.correctCount++;
            }
            else {
                this.wrongCount++;
            }
            if (this.qIndex > 0 && ans === 'Not Answered') {
                this.skipTotal++;
            }
            this.totalQuestions--;
            this.qIndex++;
            this.aOrder = [];
            this.counter.restart();
        }
        else {
            if (this.qIndex === 10 && ans === this.correctA) {
                this.correctCount++;
            }
            else {
                this.correctCount++;
            }
            if (this.qIndex === 0 && ans === 'Not Answered') {
                this.skipTotal++;
            }
            this.totalQuestions--;
            this.endGame = true;
            this._router.navigate(['/', 'endGame']).then(function (nav) {
            }, function (err) {
            });
        }
    };
    GamePageComponent.prototype.resetTimer = function () {
        this.counter.restart();
        this.counter.stop();
        this.counter.pause();
        this.counter.resume();
    };
    GamePageComponent.prototype.onFinished = function () {
        this.displayTriviaQ('Not Answered');
    };
    GamePageComponent.prototype.ngOnDestroy = function () {
        this.setEndGameStats();
        this.subscription.unsubscribe();
    };
    GamePageComponent.prototype.setEndGameStats = function () {
        this.grabDataService.setTotalCorrect(this.correctCount);
        this.grabDataService.setTotalQuestion(this.numQuestions);
        this.grabDataService.setTotalTimeOut(this.skipTotal);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_countdown__WEBPACK_IMPORTED_MODULE_6__["CountdownComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_countdown__WEBPACK_IMPORTED_MODULE_6__["CountdownComponent"])
    ], GamePageComponent.prototype, "counter", void 0);
    GamePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-page',
            template: __webpack_require__(/*! ./game-page.component.html */ "./src/app/views/pages/game-page/game-page.component.html"),
            styles: [__webpack_require__(/*! ./game-page.component.css */ "./src/app/views/pages/game-page/game-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_grab_data_service__WEBPACK_IMPORTED_MODULE_5__["GrabDataService"]])
    ], GamePageComponent);
    return GamePageComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/option-page/option-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/option-page/option-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background: #00b4ff;\n    color: #333;\n    font: 100% Lato, Arial, Sans Serif;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n  }\n  \n  #background-wrap {\n      bottom: 0;\n    left: 0;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: -1;\n  }\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvb3B0aW9uLXBhZ2Uvb3B0aW9uLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtNQUNJLFNBQVM7SUFDWCxPQUFPO0lBQ1AsZUFBZTtJQUNmLFFBQVE7SUFDUixNQUFNO0lBQ04sV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvb3B0aW9uLXBhZ2Uvb3B0aW9uLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQ6ICMwMGI0ZmY7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udDogMTAwJSBMYXRvLCBBcmlhbCwgU2FucyBTZXJpZjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuICBcbiAgI2JhY2tncm91bmQtd3JhcCB7XG4gICAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG4gIFxuICAiXX0= */"

/***/ }),

/***/ "./src/app/views/pages/option-page/option-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/option-page/option-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-2\">\n    <div id=\"background-wrap\">\n        <div class=\"bubble x1\"></div>\n        <div class=\"bubble x2\"></div>\n        <div class=\"bubble x3\"></div>\n        <div class=\"bubble x4\"></div>\n        <div class=\"bubble x5\"></div>\n        <div class=\"bubble x6\"></div>\n        <div class=\"bubble x7\"></div>\n        <div class=\"bubble x8\"></div>\n        <div class=\"bubble x9\"></div>\n        <div class=\"bubble x10\"></div>\n    </div>\n  <div class=\"row\">\n    <div class=\"col-12 d-flex justify-content-center mt-5\">\n      <app-header [header]=\"'Levels'\"></app-header>\n    </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col-4 d-flex justify-content-center my-2\">\n      <app-button [routerLink]=\"['/game',topic,1]\" [btnName]=\"'Hard'\">\n\n      </app-button>\n    </div>\n    <div class=\"col-4 d-flex justify-content-center my-2\">\n      <app-button [routerLink]=\"['/game',topic,2]\" [btnName]=\"'Medium'\"></app-button>\n    </div>\n    <div class=\"col-4 d-flex justify-content-center my-2\">\n      <app-button [routerLink]=\"['/game',topic,3]\" [btnName]=\"'Easy'\"></app-button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/pages/option-page/option-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/option-page/option-page.component.ts ***!
  \******************************************************************/
/*! exports provided: OptionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionPageComponent", function() { return OptionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_option_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/option-level.service */ "./src/app/services/option-level.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OptionPageComponent = /** @class */ (function () {
    function OptionPageComponent(optionFromOptionPage, _route, _router) {
        this.optionFromOptionPage = optionFromOptionPage;
        this._route = _route;
        this._router = _router;
    }
    OptionPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.topic = params['topic'];
            console.log('My topic is: ', _this.topic);
        });
    };
    OptionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-option-page',
            template: __webpack_require__(/*! ./option-page.component.html */ "./src/app/views/pages/option-page/option-page.component.html"),
            styles: [__webpack_require__(/*! ./option-page.component.css */ "./src/app/views/pages/option-page/option-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_option_level_service__WEBPACK_IMPORTED_MODULE_2__["OptionLevelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OptionPageComponent);
    return OptionPageComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/start-page/start-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/start-page/start-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n\tbackground: #00b4ff;\n\tcolor: #333;\n\tfont: 100% Lato, Arial, Sans Serif;\n\theight: 100vh;\n\tmargin: 0;\n\tpadding: 0;\n\toverflow-x: hidden;\n}\n\n#background-wrap {\n    bottom: 0;\n\tleft: 0;\n\tposition: fixed;\n\tright: 0;\n\ttop: 0;\n\tz-index: -1;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLGtDQUFrQztDQUNsQyxhQUFhO0NBQ2IsU0FBUztDQUNULFVBQVU7Q0FDVixrQkFBa0I7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0NBQ1osT0FBTztDQUNQLGVBQWU7Q0FDZixRQUFRO0NBQ1IsTUFBTTtDQUNOLFdBQVc7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3N0YXJ0LXBhZ2Uvc3RhcnQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG5cdGJhY2tncm91bmQ6ICMwMGI0ZmY7XG5cdGNvbG9yOiAjMzMzO1xuXHRmb250OiAxMDAlIExhdG8sIEFyaWFsLCBTYW5zIFNlcmlmO1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuI2JhY2tncm91bmQtd3JhcCB7XG4gICAgYm90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdHotaW5kZXg6IC0xO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/start-page/start-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/start-page/start-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container body\">\n    <div id=\"background-wrap\">\n        <div class=\"bubble x1\"></div>\n        <div class=\"bubble x2\"></div>\n        <div class=\"bubble x3\"></div>\n        <div class=\"bubble x4\"></div>\n        <div class=\"bubble x5\"></div>\n        <div class=\"bubble x6\"></div>\n        <div class=\"bubble x7\"></div>\n        <div class=\"bubble x8\"></div>\n        <div class=\"bubble x9\"></div>\n        <div class=\"bubble x10\"></div>\n    </div>\n  <div class=\"row\">\n    <div class=\"col-12 mt-5\">\n      <h2 class=\"text-center\"> Instructions</h2>\n      <p class=\"text-center\"> Welcome to the CodeStack Trivia Game. In this game you have four (4) topics and three (3) level of difficulty for your selection. Each round has ten (10) questions and you have 20 seconds to answer eacg question.  Enjoy the game. Thank you.   </p>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <div class=\"container-fluid mt-2\">\n        <div class=\"row\">\n          <div class=\"col-12 d-flex justify-content-center\">\n            <app-header [header]=\"'Select a topic'\"></app-header>\n          </div>\n        </div>\n        <div class=\"row mt-2\">\n          <div class=\"col-6 d-flex justify-content-center my-2\">\n            <app-button [routerLink]=\"['/options','videoGames']\" [btnName]=\"'Video Games'\">\n            </app-button>\n          </div>\n          <div class=\"col-6 d-flex justify-content-center my-2\">\n            <app-button [routerLink]=\"['/options','generalKnowledge']\" [btnName]=\"'General Knowledge'\"></app-button>\n          </div>\n          <div class=\"col-6 d-flex justify-content-center my-2\">\n            <app-button [routerLink]=\"['/options','history']\" [btnName]=\"'History'\"></app-button>\n          </div>\n          <div class=\"col-6 d-flex justify-content-center my-2\">\n            <app-button [routerLink]=\"['/options','scienceNature']\" [btnName]=\"'Science & Nature'\"></app-button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/pages/start-page/start-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/start-page/start-page.component.ts ***!
  \****************************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StartPageComponent = /** @class */ (function () {
    function StartPageComponent() {
    }
    StartPageComponent.prototype.ngOnInit = function () {
    };
    StartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-page',
            template: __webpack_require__(/*! ./start-page.component.html */ "./src/app/views/pages/start-page/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.css */ "./src/app/views/pages/start-page/start-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/code/Desktop/Angular-Project/TriviaApplicationVersion-2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map