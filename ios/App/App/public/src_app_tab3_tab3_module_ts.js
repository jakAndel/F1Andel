"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 8097:
/*!*************************************************!*\
  !*** ./src/app/api/driver-standings.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversStandings": () => (/* binding */ DriversStandings)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);



let DriversStandings = class DriversStandings {
    constructor(http) {
        this.http = http;
    }
    getDriverStandings() {
        return this.http.get('https://ergast.com/api/f1/current/driverStandings.json');
    }
};
DriversStandings.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
DriversStandings = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DriversStandings);



/***/ }),

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_driver_standings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/driver-standings.service */ 8097);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4362);






let Tab3Page = class Tab3Page {
    constructor(driversStandings, loadingController) {
        this.driversStandings = driversStandings;
        this.loadingController = loadingController;
        this.obj = null;
        this.countries = [];
        this.firstName = '';
        this.lastName = '';
        this.position = '';
        this.points = '';
        this.teamName = '';
        this.code = '';
        this.codeF = '';
        this.poleJ = [];
        this.driversStandings.getDriverStandings().subscribe((data) => {
            this.poleJ = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
            this.position = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['position'];
            this.firstName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['givenName'];
            this.lastName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['familyName'];
            this.points = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['points'];
            this.teamName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Constructors'][0]['name'];
            this.code = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['code'];
            this.codeF = "assets/fotky/" + this.code + ".png";
        });
    }
    ngOnInit() {
    }
};
Tab3Page.ctorParameters = () => [
    { type: _api_driver_standings_service__WEBPACK_IMPORTED_MODULE_2__.DriversStandings },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".grid-jezdci {\n  width: 50%;\n  float: left;\n}\n\nimg {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n\n.grid-jezdci ion-card {\n  height: 55vh;\n}\n\nion-card-content span {\n  margin-top: 5px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1qZXpkY2kge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5ncmlkLWplemRjaSBpb24tY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQgc3BhbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Šampionát jezdců\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n <ion-grid class=\"grid-jezdci\">\n  <ion-row *ngFor=\"let j of poleJ; let i = index\" >\n    <ion-col *ngIf=\"i % 2 == 0\" >\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>#{{j.position}}</ion-card-subtitle>\n          <ion-card-title>{{j.Driver.givenName}} {{j.Driver.familyName}} ({{j.Constructors[0].name}})</ion-card-title>\n          \n        </ion-card-header>\n      \n        <ion-card-content *ngIf=\"j.points > 4 || j.points == 0\">\n          {{j.points}} bodů <span><ion-icon name=\"trophy-sharp\" size=\"medium\"></ion-icon>\n            {{j.wins}} vítězství</span>\n        </ion-card-content>\n        <ion-card-content *ngIf=\"j.points === 1\">\n          {{j.points}} bod <span><ion-icon name=\"trophy-sharp\" size=\"medium\"></ion-icon>\n            {{j.wins}} vítězství</span>\n        </ion-card-content>\n        <ion-card-content *ngIf=\"j.points > 1 && j.points &lt; 5\">\n          {{j.points}} body <span><ion-icon name=\"trophy-sharp\" size=\"medium\"></ion-icon>\n            {{j.wins}} vítězství</span>\n        </ion-card-content>\n          <img src = \"assets/fotky/{{j.Driver.code}}.png\" />\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class=\"grid-jezdci\">\n  <ion-row *ngFor=\"let j of poleJ; let i = index\" >\n    <ion-col *ngIf=\"i % 2 != 0\" >\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>#{{j.position}}</ion-card-subtitle>\n          <ion-card-title>{{j.Driver.givenName}} {{j.Driver.familyName}} ({{j.Constructors[0].name}})</ion-card-title>\n          \n        </ion-card-header>\n        \n        <ion-card-content *ngIf=\"j.points > 4 || j.points == 0\">\n          {{j.points}} bodů <span><ion-icon name=\"trophy-sharp\" size=\"medium\"></ion-icon>\n            {{j.wins}} vítězství</span>\n        </ion-card-content>\n        <ion-card-content *ngIf=\"j.points === 1\">\n          {{j.points}} bod <span><ion-icon name=\"trophy-sharp\" size=\"medium\"></ion-icon>\n            {{j.wins}} vítězství</span>\n        </ion-card-content>\n        <ion-card-content *ngIf=\"j.points > 1 && j.points &lt; 5\">\n          {{j.points}} body <span><ion-icon name=\"trophy-sharp\" size=\"medium\"></ion-icon>\n            {{j.wins}} vítězství</span>\n        </ion-card-content>\n          <img src = \"assets/fotky/{{j.Driver.code}}.png\" />\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map