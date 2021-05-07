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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar [user]=\"user\"></app-navbar>\r\n<router-outlet></router-outlet>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\r\n</ngx-spinner>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, authService, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.authService = authService;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listenGlobal('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.user = this.authService.currentUserValue;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "hasScrolled", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
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
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/fesm5/ngx-drag-scroll.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm5/zxing-ngx-scanner.js");
/* harmony import */ var _pages_new_homeless_new_homeless_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/new-homeless/new-homeless.component */ "./src/app/pages/new-homeless/new-homeless.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/home/home.module */ "./src/app/pages/home/home.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/edit-profile/edit-profile.component */ "./src/app/pages/edit-profile/edit-profile.component.ts");
/* harmony import */ var _pages_homeless_profile_homeless_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/homeless-profile/homeless-profile.component */ "./src/app/pages/homeless-profile/homeless-profile.component.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _pages_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/qr-reader/qr-reader.component */ "./src/app/pages/qr-reader/qr-reader.component.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @iplab/ngx-file-upload */ "./node_modules/@iplab/ngx-file-upload/fesm5/iplab-ngx-file-upload.js");
/* harmony import */ var _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @nomadreservations/ngx-stripe */ "./node_modules/@nomadreservations/ngx-stripe/fesm5/nomadreservations-ngx-stripe.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _shared_modal_imagen_modal_imagen_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/modal-imagen/modal-imagen.component */ "./src/app/shared/modal-imagen/modal-imagen.component.ts");
/* harmony import */ var _pages_food_run_list_food_run_list_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/food-run-list/food-run-list.module */ "./src/app/pages/food-run-list/food-run-list.module.ts");
/* harmony import */ var _pages_food_run_details_food_run_details_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/food-run-details/food-run-details.module */ "./src/app/pages/food-run-details/food-run-details.module.ts");
/* harmony import */ var _shared_causes_details_causes_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/causes-details/causes-details.component */ "./src/app/shared/causes-details/causes-details.component.ts");
/* harmony import */ var _shared_food_run_form_food_run_form_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/food-run-form/food-run-form.component */ "./src/app/shared/food-run-form/food-run-form.component.ts");
/* harmony import */ var _shared_donation_food_run_donation_food_run_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/donation-food-run/donation-food-run.component */ "./src/app/shared/donation-food-run/donation-food-run.component.ts");
/* harmony import */ var _shared_add_multimedia_add_multimedia_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/add-multimedia/add-multimedia.component */ "./src/app/shared/add-multimedia/add-multimedia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// tslint:disable-next-line: max-line-length







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_23__["EditProfileComponent"],
                _pages_new_homeless_new_homeless_component__WEBPACK_IMPORTED_MODULE_2__["NewHomelessComponent"],
                _pages_homeless_profile_homeless_profile_component__WEBPACK_IMPORTED_MODULE_24__["HomelessProfileComponent"],
                _pages_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_26__["QrReaderComponent"],
                _shared_modal_imagen_modal_imagen_component__WEBPACK_IMPORTED_MODULE_32__["ModalImagenComponent"],
                _shared_causes_details_causes_details_component__WEBPACK_IMPORTED_MODULE_35__["CausesDetailsComponent"],
                _shared_food_run_form_food_run_form_component__WEBPACK_IMPORTED_MODULE_36__["FoodRunFormComponent"],
                _shared_donation_food_run_donation_food_run_component__WEBPACK_IMPORTED_MODULE_37__["DonationFoodRunComponent"],
                _shared_add_multimedia_add_multimedia_component__WEBPACK_IMPORTED_MODULE_38__["AddMultimediaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_1__["ZXingScannerModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot({
                    timeOut: 10000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                _pages_home_home_module__WEBPACK_IMPORTED_MODULE_18__["HomeModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_lightbox__WEBPACK_IMPORTED_MODULE_25__["LightboxModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_27__["SidebarModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_28__["ModalModule"].forRoot(),
                _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_29__["FileUploadModule"],
                _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_30__["NgxStripeModule"].forRoot('pk_test_HvwgwPUBp4MDNtNzAblZKClz00L9KZljOT'),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_31__["BsDatepickerModule"].forRoot(),
                ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_0__["DragScrollModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_17__["ImageCropperModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarModule"].forRoot(),
                _pages_food_run_list_food_run_list_module__WEBPACK_IMPORTED_MODULE_33__["FoodRunListModule"],
                _pages_food_run_details_food_run_details_module__WEBPACK_IMPORTED_MODULE_34__["FoodRunDetailsModule"]
            ],
            providers: [],
            // tslint:disable-next-line: max-line-length
            exports: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [_shared_modal_imagen_modal_imagen_component__WEBPACK_IMPORTED_MODULE_32__["ModalImagenComponent"], _shared_causes_details_causes_details_component__WEBPACK_IMPORTED_MODULE_35__["CausesDetailsComponent"], _shared_food_run_form_food_run_form_component__WEBPACK_IMPORTED_MODULE_36__["FoodRunFormComponent"], _shared_donation_food_run_donation_food_run_component__WEBPACK_IMPORTED_MODULE_37__["DonationFoodRunComponent"], _shared_add_multimedia_add_multimedia_component__WEBPACK_IMPORTED_MODULE_38__["AddMultimediaComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _pages_new_homeless_new_homeless_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/new-homeless/new-homeless.component */ "./src/app/pages/new-homeless/new-homeless.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/edit-profile/edit-profile.component */ "./src/app/pages/edit-profile/edit-profile.component.ts");
/* harmony import */ var _pages_homeless_profile_homeless_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/homeless-profile/homeless-profile.component */ "./src/app/pages/homeless-profile/homeless-profile.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _pages_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/qr-reader/qr-reader.component */ "./src/app/pages/qr-reader/qr-reader.component.ts");
/* harmony import */ var _pages_food_run_list_food_run_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/food-run-list/food-run-list.component */ "./src/app/pages/food-run-list/food-run-list.component.ts");
/* harmony import */ var _pages_food_run_details_food_run_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/food-run-details/food-run-details.component */ "./src/app/pages/food-run-details/food-run-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'user-profile', component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'qr-reader', component: _pages_qr_reader_qr_reader_component__WEBPACK_IMPORTED_MODULE_13__["QrReaderComponent"] },
    { path: 'edit-profile', component: _pages_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'new-homeless', component: _pages_new_homeless_new_homeless_component__WEBPACK_IMPORTED_MODULE_0__["NewHomelessComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'edit-homeless/:idHomeless', component: _pages_new_homeless_new_homeless_component__WEBPACK_IMPORTED_MODULE_0__["NewHomelessComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'homeless-profile/:idHomeless', component: _pages_homeless_profile_homeless_profile_component__WEBPACK_IMPORTED_MODULE_11__["HomelessProfileComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'register', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'landing', component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'food-run', component: _pages_food_run_list_food_run_list_component__WEBPACK_IMPORTED_MODULE_14__["FoodRunListComponent"] },
    { path: 'details-food-run/:idFood', component: _pages_food_run_details_food_run_details_component__WEBPACK_IMPORTED_MODULE_15__["FoodRunDetailsComponent"] },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: false
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/sidebar.service */ "./src/app/core/services/sidebar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_request_interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/request.interceptors */ "./src/app/core/interceptors/request.interceptors.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_homeless_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/homeless.service */ "./src/app/core/services/homeless.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _services_feed_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/feed.service */ "./src/app/core/services/feed.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Configs
// Interceptors
// import { ErrorInterceptor } from './interceptors/error.interceptor';

// Guards

// Services





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_request_interceptors__WEBPACK_IMPORTED_MODULE_4__["RequestInterceptor"], multi: true },
                // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _services_homeless_service__WEBPACK_IMPORTED_MODULE_8__["HomelessService"],
                _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
                _services_sidebar_service__WEBPACK_IMPORTED_MODULE_0__["SidebarService"],
                _services_feed_service__WEBPACK_IMPORTED_MODULE_10__["FeedService"]
            ],
            entryComponents: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, lsService) {
        this.router = router;
        this.lsService = lsService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.lsService.getValue('wonderHumanUser');
        if (currentUser) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptors/request.interceptors.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/interceptors/request.interceptors.ts ***!
  \***********************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(lsService) {
        this.lsService = lsService;
    }
    RequestInterceptor.prototype.intercept = function (request, next) {
        // Get token
        var user = JSON.parse(localStorage.getItem('wonderHumanUser'));
        var token = (user) ? user['token'] : null;
        // Set Headers
        if (token) {
            request = request.clone({
                setHeaders: {
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json; charset=utf-8',
                    Authorization: "token " + token,
                },
                body: request.body
            });
        }
        else {
            request = request.clone({
                setHeaders: {
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'application/json; charset=utf-8',
                },
                body: request.body
            });
        }
        // Next interceptor
        return next.handle(request);
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('wonderHumanUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (auth) {
        var _this = this;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/login/", auth)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/create/", user);
    };
    AuthService.prototype.logout = function () {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/logout/", {});
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/feed.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/feed.service.ts ***!
  \***********************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.newFeed = function (body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/feed/create/", body);
    };
    FeedService.prototype.editFeed = function (body) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/feed/update/", body);
    };
    FeedService.prototype.deleteFeed = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/feed/delete/" + id);
    };
    FeedService.prototype.like = function (id) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/likes/feed/new/" + id, null);
    };
    FeedService.prototype.dislike = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/likes/feed/new/" + id);
    };
    FeedService.prototype.newCom = function (id, body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/comments/feed/new/" + id, body);
    };
    FeedService.prototype.getmyFeeds = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/feed/filter/" + id);
    };
    FeedService.prototype.getComments = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/comments/feed/new/" + id);
    };
    FeedService.prototype.getOnlyFeed = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/feed/get/" + id);
    };
    FeedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], FeedService);
    return FeedService;
}());



/***/ }),

/***/ "./src/app/core/services/food-run.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/food-run.service.ts ***!
  \***************************************************/
/*! exports provided: FoodRunService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRunService", function() { return FoodRunService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodRunService = /** @class */ (function () {
    function FoodRunService(http) {
        this.http = http;
    }
    FoodRunService.prototype.newFoodRund = function (body) {
        console.log(body);
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/new/", body);
    };
    FoodRunService.prototype.editFoodRund = function (body) {
        console.log(body);
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/edit/", body);
    };
    FoodRunService.prototype.deleteFoodRund = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/get/" + id);
    };
    FoodRunService.prototype.newVol = function (body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/new/volunteer/", body);
    };
    FoodRunService.prototype.getFoodRuns = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/all/");
    };
    FoodRunService.prototype.getFoodRu = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/get/" + id);
    };
    FoodRunService.prototype.getVol = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/all/volunteer/" + id);
    };
    FoodRunService.prototype.newDonation = function (body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/new/donation/", body);
    };
    FoodRunService.prototype.getDonations = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/all/donation/" + id);
    };
    FoodRunService.prototype.newMultimedia = function (body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/new/feed/", body);
    };
    FoodRunService.prototype.getMultimedia = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiRoot + "/api/food/all/feed/" + id);
    };
    FoodRunService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FoodRunService);
    return FoodRunService;
}());



/***/ }),

/***/ "./src/app/core/services/homeless.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/homeless.service.ts ***!
  \***************************************************/
/*! exports provided: HomelessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomelessService", function() { return HomelessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomelessService = /** @class */ (function () {
    function HomelessService(http) {
        this.http = http;
    }
    HomelessService.prototype.newHomeless = function (newH) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/homelessProfile/", newH);
    };
    HomelessService.prototype.editHomeless = function (homeless) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/homelessProfile/edit/", homeless);
    };
    HomelessService.prototype.getHomelessProfile = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/homelessProfile/" + id);
    };
    HomelessService.prototype.getCommentsProfile = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/comments/get/" + id);
    };
    HomelessService.prototype.getDonations = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/donations/get/" + id);
    };
    HomelessService.prototype.getEventsDonations = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/donations/cause/all/" + id);
    };
    HomelessService.prototype.getPortfolio = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/portfolio/get/" + id);
    };
    HomelessService.prototype.deletePortfolio = function (id) {
        return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/portfolio/delete/" + id);
    };
    HomelessService.prototype.editPortfolio = function (portfolio) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/portfolio/edit/", portfolio);
    };
    HomelessService.prototype.newComment = function (id, comment) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/comments/new/" + id, comment);
    };
    HomelessService.prototype.newEvent = function (id, cause) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/donations/cause/new/" + id, cause);
    };
    HomelessService.prototype.newDonation = function (body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/donations/new/", body);
    };
    HomelessService.prototype.recentDonations = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/donations/cause/get/" + id);
    };
    HomelessService.prototype.searchHomeless = function (code) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/homeless/code/" + code);
    };
    HomelessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomelessService);
    return HomelessService;
}());



/***/ }),

/***/ "./src/app/core/services/local-storage.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.getValue = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.setValue = function (key, data) {
        localStorage.setItem(key, data);
    };
    LocalStorageService.prototype.decodeToken = function () {
        var jwt = this.getValue('token');
        var jwtData = jwt.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData;
    };
    LocalStorageService.prototype.clearStorage = function () {
        localStorage.clear();
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/core/services/sidebar.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/sidebar.service.ts ***!
  \**************************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarService = /** @class */ (function () {
    function SidebarService() {
        this.toggled = false;
        // tslint:disable-next-line:variable-name
        this._hasBackgroundImage = true;
        this.menus = [{
                title: 'Menú',
                type: 'header'
            }, {
                title: 'To do',
                icon: 'fab fa-buffer',
                active: false,
                type: 'simple',
            },];
    }
    SidebarService.prototype.toggle = function () {
        this.toggled = !this.toggled;
    };
    SidebarService.prototype.getSidebarState = function () {
        return this.toggled;
    };
    SidebarService.prototype.setSidebarState = function (state) {
        this.toggled = state;
    };
    SidebarService.prototype.getMenuList = function () {
        return this.menus;
    };
    Object.defineProperty(SidebarService.prototype, "hasBackgroundImage", {
        get: function () {
            return this._hasBackgroundImage;
        },
        set: function (hasBackgroundImage) {
            this._hasBackgroundImage = hasBackgroundImage;
        },
        enumerable: true,
        configurable: true
    });
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getProfile = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/profile/");
    };
    UserService.prototype.newProfile = function (profile) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/profile/", profile);
    };
    UserService.prototype.updateProfile = function (profile) {
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/profile/", profile);
    };
    UserService.prototype.getMyHomelessProfile = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + "/api/accounts/myHomelessProfile/");
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"profile-page section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <section class=\"section-profile-cover section-shaped my-0\"></section>\r\n  <section class=\"section\">\r\n    <form *ngIf=\"profileForm\" [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"container\">\r\n        <div class=\"card card-profile shadow mt--300\">\r\n          <div class=\"px-4\">\r\n            <!-- Select File\r\n            <input\r\n              type=\"file\"\r\n              accept=\"image/*\"\r\n              (change)=\"showPreview($event)\"\r\n            />           -->\r\n\r\n            <div class=\"row justify-content-center mb-10\">\r\n              <div class=\"col-lg-3 order-lg-2\">\r\n                <div class=\"card-profile-image\">\r\n                  <ng-template #noImage>\r\n                    <div class=\"imagen-para-archivo\">\r\n                      <span>\r\n                        <label for=\"boton-archivo\">\r\n                          <img [src]=\"imageDefaul\" class=\"imageU\" /> </label>\r\n\r\n                        <input id=\"boton-archivo\" type=\"file\" accept=\"image/*\" (change)=\"showPreview($event)\" />\r\n                      </span>\r\n                    </div>\r\n                  </ng-template>\r\n                  <span *ngIf=\"imageURL && imageURL !== ''; else noImage\">\r\n                    <img [src]=\"imageURL\" class=\"imageU\" />\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Firstname</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\r\n                    </div>\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['firstName'].errors && f['firstName'].touched\r\n                      }\" formControlName=\"firstName\" class=\"form-control form-control-alternative\"\r\n                      placeholder=\"Ex: Jhon Thomas\" type=\"text\" />\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['firstName'].hasError('required') &&\r\n                    (f['firstName'].touched || f['firstName'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['firstName'].hasError('minlength') &&\r\n                    (f['firstName'].touched || f['firstName'].dirty)\r\n                  \">\r\n                  *3 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['firstName'].hasError('maxlength') &&\r\n                    (f['firstName'].touched || f['firstName'].dirty)\r\n                  \">\r\n                  *25 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Lastname</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" formControlName=\"lastName\" class=\"form-control\"\r\n                      placeholder=\"Ex: Doe Smith\" type=\"text\" [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['lastName'].errors && f['lastName'].touched\r\n                      }\" />\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['lastName'].hasError('required') &&\r\n                    (f['lastName'].touched || f['lastName'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['lastName'].hasError('minlength') &&\r\n                    (f['lastName'].touched || f['lastName'].dirty)\r\n                  \">\r\n                  *3 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['lastName'].hasError('maxlength') &&\r\n                    (f['lastName'].touched || f['lastName'].dirty)\r\n                  \">\r\n                  *25 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Birthdate</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-birthday\"></i></span>\r\n                    </div>\r\n                    <input [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['dateOfBirth'].errors && f['dateOfBirth'].touched\r\n                      }\" formControlName=\"dateOfBirth\" class=\"form-control form-control-alternative datepicker\"\r\n                      placeholder=\"Ex: 24/08/1990\" type=\"text\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" />\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['dateOfBirth'].hasError('required') &&\r\n                    (f['dateOfBirth'].touched || f['dateOfBirth'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Country</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['country'].errors && f['country'].touched\r\n                      }\" formControlName=\"country\" class=\"form-control\" placeholder=\"Ex: EEUU\" type=\"text\" />\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-world\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['country'].hasError('required') &&\r\n                    (f['country'].touched || f['country'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['country'].hasError('minlength') &&\r\n                    (f['country'].touched || f['country'].dirty)\r\n                  \">\r\n                  *4 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['country'].hasError('maxlength') &&\r\n                    (f['country'].touched || f['country'].dirty)\r\n                  \">\r\n                  *25 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">City</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid': f['city'].errors && f['city'].touched\r\n                      }\" formControlName=\"city\" class=\"form-control\" placeholder=\"Ex: Miami\" type=\"text\" />\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-compass-04\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['city'].hasError('required') &&\r\n                    (f['city'].touched || f['city'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['city'].hasError('minlength') &&\r\n                    (f['city'].touched || f['city'].dirty)\r\n                  \">\r\n                  *4 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['city'].hasError('maxlength') &&\r\n                    (f['city'].touched || f['city'].dirty)\r\n                  \">\r\n                  *15 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Email</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid': f['email'].errors && f['email'].touched\r\n                      }\" formControlName=\"email\" class=\"form-control form-control-alternative\"\r\n                      placeholder=\"Ex: Jhon@example.com\" type=\"email\" />\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['email'].hasError('required') &&\r\n                    (f['email'].touched || f['email'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['email'].hasError('email') &&\r\n                    (f['email'].touched || f['email'].dirty)\r\n                  \">\r\n                  *Invalid email\r\n                </section>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Occupation</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['occupation'].errors && f['occupation'].touched\r\n                      }\" formControlName=\"occupation\" class=\"form-control\" placeholder=\"Ex: Designer\" type=\"text\" />\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-briefcase-24\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['occupation'].hasError('required') &&\r\n                    (f['occupation'].touched || f['occupation'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['occupation'].hasError('minlength') &&\r\n                    (f['occupation'].touched || f['occupation'].dirty)\r\n                  \">\r\n                  *3 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['occupation'].hasError('maxlength') &&\r\n                    (f['occupation'].touched || f['occupation'].dirty)\r\n                  \">\r\n                  *25 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n              <div class=\"col-12\">\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input formControlName=\"show_email\" class=\"custom-control-input\" id=\"show_email\" type=\"checkbox\" />\r\n                  <label class=\"custom-control-label\" for=\"show_email\">\r\n                    <span>Show email</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <label for=\"\">About you</label>\r\n                <textarea maxlength=\"100\" (keyup)=\"onKey($event)\" (focus)=\"focus = true\" (blur)=\"focus = false\"\r\n                  [ngClass]=\"{\r\n                    'is-invalid': f['aboutYou'].errors && f['aboutYou'].touched\r\n                  }\" formControlName=\"aboutYou\" class=\"form-control form-control-alternative\" rows=\"3\"\r\n                  placeholder=\"Write something here\"></textarea>\r\n                <span *ngIf=\"contator\" style=\"float: right;font-variant: small-caps;\">{{contator}}/{{restante}}\r\n                  caracteres</span>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['aboutYou'].hasError('required') &&\r\n                    (f['aboutYou'].touched || f['aboutYou'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                f['aboutYou'].hasError('minlength') &&\r\n                (f['aboutYou'].touched || f['aboutYou'].dirty)\r\n              \">\r\n                  *3 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                f['aboutYou'].hasError('maxlength') &&\r\n                (f['aboutYou'].touched || f['aboutYou'].dirty)\r\n              \">\r\n                  *25 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5 mb-5 float-right\">\r\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"profileForm.invalid\">\r\n                Save\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mb-10 {\n  margin-bottom: 10rem; }\n\n.section-shaped .shape-style-1.shape-primary {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n.text-danger {\n  font-variant: small-caps;\n  font-size: small; }\n\n.imagen-para-archivo input {\n  display: none; }\n\n.imageU {\n  border-radius: 50% !important;\n  width: 180px !important;\n  max-width: 180px !important;\n  height: 180px !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0M6XFxVc2Vyc1xcTWlsZW5ueXNfRGV2XFxEZXNrdG9wXFxQcm95ZWN0b3NcXE51ZXZvV29uZGVyXFx3b25kZXJodW1hbnNcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcZWRpdC1wcm9maWxlXFxlZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxxRkFLWSxFQUFBOztBQUVkO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLGFBQVksRUFBQTs7QUFFaEI7RUFDSSw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsK0JBQTRCO0tBQTVCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYi0xMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcbn1cclxuLnNlY3Rpb24tc2hhcGVkIC5zaGFwZS1zdHlsZS0xLnNoYXBlLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE1MGRlZyxcclxuICAgICNjZjNhOWUgMTUlLFxyXG4gICAgI2ZmNjI0MCA3MCUsXHJcbiAgICAjZmJhYTRmIDk0JVxyXG4gICkgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1kYW5nZXIge1xyXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5pbWFnZW4tcGFyYS1hcmNoaXZvIGlucHV0IHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbi5pbWFnZVV7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(userService, formBuilder, spinner, toastr, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.contator = 0;
        this.hasProfile = false;
        this.submitted = false;
        this.profile = {};
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
        this.getProfile();
    };
    EditProfileComponent.prototype.onKey = function (event) {
        this.contator = event.target.value.length;
        if (this.contator <= 100) {
            this.restante = 100 - this.contator;
        }
    };
    EditProfileComponent.prototype.getProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.userService.getProfile().subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var d;
                    return __generator(this, function (_a) {
                        // tslint:disable-next-line: max-line-length
                        this.imageDefaul = (data.photo) ? "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiRoot + data.photo : 'https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png';
                        this.hasProfile = true;
                        d = new Date(data.dateOfBirth);
                        this.date = {
                            day: d.getDate() + 1,
                            month: d.getMonth() + 1,
                            year: d.getFullYear()
                        };
                        if (this.date) {
                            this.initForm(data);
                        }
                        return [2 /*return*/];
                    });
                }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (error.error.detail === 'User dont have profile') {
                            this.hasProfile = false;
                            this.initForm();
                            this.imageDefaul = 'https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png';
                        }
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    EditProfileComponent.prototype.initForm = function (dataUser) {
        // Build form
        this.profileForm = this.formBuilder.group({
            firstName: [(dataUser) ? dataUser.user.first_name : this.user.first_name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25),
                ]],
            lastName: [(dataUser) ? dataUser.user.last_name : this.user.last_name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25),
                ]],
            email: [(dataUser) ? dataUser.user.email : this.user.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
                ]],
            occupation: [(dataUser) ? dataUser.occupation : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25),
                ]],
            city: [(dataUser) ? dataUser.city : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15),
                ]],
            country: [(dataUser) ? dataUser.country : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25),
                ]],
            dateOfBirth: [(dataUser) ? this.date : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            aboutYou: [(dataUser) ? dataUser.aboutYou : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100),
                ]],
            show_email: [(dataUser) ? dataUser.show_email : false],
            photo: [null],
        });
    };
    Object.defineProperty(EditProfileComponent.prototype, "f", {
        get: function () { return this.profileForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditProfileComponent.prototype.calcularEdad = function (fecha) {
        var fecha_nacimiento = fecha.year + "/" + fecha.month + "/" + fecha.day;
        var hoy = new Date();
        var cumpleanos = new Date(fecha_nacimiento);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    };
    EditProfileComponent.prototype.onSubmit = function () {
        var edad = this.calcularEdad(this.profileForm.get('dateOfBirth').value);
        if (edad >= 18) {
            var show = this.profileForm.get('show_email').value;
            this.spinner.show();
            this.submitted = true;
            this.profile = {};
            this.profile.firstName = this.profileForm.get('firstName').value;
            this.profile.lastName = this.profileForm.get('lastName').value;
            this.profile.email = this.profileForm.get('email').value;
            this.profile.occupation = this.profileForm.get('occupation').value;
            this.profile.city = this.profileForm.get('city').value;
            this.profile.country = this.profileForm.get('country').value;
            this.profile.dateOfBirth = this.profileForm.get('dateOfBirth').value;
            this.profile.aboutYou = this.profileForm.get('aboutYou').value;
            this.profile.show_email = (show === true) ? 'True' : 'False';
            this.profile.photo = this.imageURL;
            if (this.hasProfile === false) {
                this.createProfile(this.profile);
            }
            else if (this.hasProfile === true) {
                this.updateProfile(this.profile);
            }
        }
        else {
            this.toastr.error('The allowed date birth is 18 years ago');
        }
    };
    EditProfileComponent.prototype.createProfile = function (profile) {
        var _this = this;
        this.userService.newProfile(profile).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spinner.hide()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.toastr.success('Success', 'New Profile')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.router.navigateByUrl('/user-profile')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            console.log(err);
            _this.toastr.error('Error', err.error.detail);
            _this.spinner.hide();
        });
    };
    EditProfileComponent.prototype.updateProfile = function (update) {
        var _this = this;
        this.userService.updateProfile(update).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spinner.hide()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.toastr.success('Success', 'Update Profile')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.router.navigateByUrl('/user-profile')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, function (err) {
            console.log(err);
            _this.toastr.error('Error', err.error.detail);
            _this.spinner.hide();
        });
    };
    EditProfileComponent.prototype.photoAdd = function (event) {
        this.showPreview(event);
    };
    // Image Preview
    EditProfileComponent.prototype.showPreview = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.profileForm.patchValue({
            photo: file
        });
        this.profileForm.get('photo').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/pages/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/pages/edit-profile/edit-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/food-run-details/food-run-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/food-run-details/food-run-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <div class=\"position-relative\">\r\n    <!-- Hero for FREE version -->\r\n    <section class=\"section section-shaped\">\r\n      <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <div class=\"container py-sm\" style=\"\r\n      padding-top: 1rem !important;\r\n      margin-top: 2rem;\r\n      background: #ffffff;border-radius: calc(0.25rem - 0.0625rem) calc(0.25rem - 0.0625rem) 0 0;\r\n      \">\r\n        <div class=\"col-lg-12\">\r\n\r\n          <h5 style=\"text-align: center;\r\n        font-variant-caps: all-small-caps;\r\n        font-size: 1.5rem;\">Our volunteering</h5>\r\n          <div class=\"row row-grid justify-content-center align-items-center\">\r\n            <div class=\"col-12\" *ngIf=\"dataVol !== null else noVol\">\r\n              <drag-scroll #nav drag-scroll-y-disabled=\"true\" [scrollbar-hidden]=\"true\">\r\n                <span *ngFor=\"let item of dataVol\">\r\n                  <img class=\"imgCover\" *ngIf=\"item.photo === null\"\r\n                    src=\"https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png\" alt=\"\">\r\n                  <img class=\"imgCover\" *ngIf=\"item.photo !== null\" drag-scroll-item\r\n                    src=\"{{environmentY}}{{item.photo}}\" />\r\n                </span>\r\n\r\n              </drag-scroll>\r\n            </div>\r\n            <ng-template #noVol>\r\n              <h4 class=\"text-center\">There are no registered volunteers</h4>\r\n            </ng-template>\r\n\r\n          </div>\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-12  align-items-center\">\r\n              <button [disabled]=\"disabledAdd === true\" class=\"btn btn-sm float-right btn-success\"\r\n                (click)=\"volunterAdd()\">I want to be a volunteer</button>\r\n\r\n              <small *ngIf=\"disabledAdd === true\" style=\"color: #dc3545;font-weight: 600;\">*Total volunteers\r\n                achieved</small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"container py-md\" style=\"background: #ffffff;\r\n      padding: 1rem;border-radius: calc(0.25rem - 0.0625rem) calc(0.25rem - 0.0625rem) 0 0;\">\r\n        <div class=\"row row-grid justify-content-between align-items-center\" *ngIf=\"dataDetails\">\r\n          <div class=\"col-lg-8\">\r\n            <span style=\"width: 100%;display: flex; justify-content: flex-end;\">\r\n              <span *ngIf=\"isOwner === true\" class=\"d-flex\">\r\n                <button class=\"btn btn-sm float-right btn-warning\" (click)=\"editFoodRun()\"><i\r\n                    class=\"fa fa-edit\"></i></button>\r\n                <button class=\"btn btn-sm float-right btn-danger\" (click)=\"deleteFoodRun()\"><i\r\n                    class=\"fa fa-trash\"></i></button>\r\n              </span>\r\n              <span *ngIf=\"isVolunter === true || isOwner === true\" style=\"margin-left: 0.5rem;\">\r\n                <button class=\"btn btn-sm float-right btn-success\" (click)=\"addMoreMulti()\"><i\r\n                    class=\"fa fa-plus\"></i></button>\r\n              </span>\r\n            </span>\r\n            <div class=\"w-100 d-flex align-items-center justify-content-center mb-2 mt-4\">\r\n              <div class=\"rounded shadow-lg overflow-hidden\">\r\n                <ngb-carousel>\r\n                  <ng-template ngbSlide>\r\n                    <img class=\"imageSlide\" src=\"{{environmentY}}{{dataDetails.image}}\" alt=\"\">\r\n                  </ng-template>\r\n                  <ng-template ngbSlide *ngFor=\"let item of multiMedia\">\r\n                    <img class=\"imageSlide\" src=\"{{environmentY}}{{item.image}}\" alt=\"Second slide\">\r\n                  </ng-template>\r\n                </ngb-carousel>\r\n              </div>\r\n\r\n            </div>\r\n            <section class=\"present\">\r\n              <div class=\"icon icon-sm icon-shape bg-gradient-pink shadow rounded-circle\">\r\n                <i class=\"fa fa-heart \" style=\"color: #dc3545 !important;\"></i>\r\n              </div>\r\n              <p>{{dataDetails.name}}</p>\r\n            </section>\r\n            <hr>\r\n            <section class=\"p-2\">\r\n              <p>\r\n                {{dataDetails.description}}\r\n              </p>\r\n            </section>\r\n            <section class=\"p-2 row\" style=\"display: flex;justify-content: center;margin-bottom: .8rem;\">\r\n              <div class=\"col-6\">\r\n                <button class=\"btn btn-success btn-block\">\r\n                  Donate\r\n                </button>\r\n\r\n              </div>\r\n              <div class=\"col-6\">\r\n\r\n                <button class=\"btn btn-light btn-block\">\r\n                  Share\r\n                </button>\r\n              </div>\r\n            </section>\r\n            <h6 class=\"p-2\">\r\n              Organizer\r\n            </h6>\r\n            <hr class=\"m-0 mb-2\">\r\n            <section class=\"p-2\" style=\"display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\">\r\n              <div style=\"display: flex;\r\n              justify-content: space-between;\r\n              align-items: baseline;\">\r\n                <div class=\"icon icon-sm icon-shape bg-gradient-pink shadow rounded-circle\">\r\n                  <i class=\"fa fa-heart \" style=\"color: #dc3545 !important;\"></i>\r\n                </div>\r\n                <span style=\"    margin-left: 0.5rem;\r\n                text-align: center;\r\n                display: flex;\r\n                flex-flow: column;\r\n                align-items: center;\">\r\n                  <p>{{dataDetails.user.first_name}} {{dataDetails.user.last_name}}</p>\r\n                  <small>{{dataDetails.user.email}}</small>\r\n                </span>\r\n              </div>\r\n              <div>\r\n                <button class=\"btn btn-success\">Contact</button>\r\n              </div>\r\n            </section>\r\n            <h6 class=\"p-2 mt-2\">\r\n              Comments\r\n            </h6>\r\n            <hr class=\"m-0 mb-2\">\r\n            <section class=\"p-2\" style=\"display: flex;\r\n            flex-direction: row;\r\n            justify-content: space-between;\">\r\n              <div style=\"display: flex;\r\n              justify-content: space-between;\r\n              align-items: baseline;\">\r\n                <div class=\"icon icon-sm icon-shape bg-gradient-pink shadow rounded-circle\">\r\n                  <i class=\"fa fa-heart \" style=\"color: #dc3545 !important;\"></i>\r\n                </div>\r\n                <span style=\"margin-left: 0.5rem;\r\n                display: flex;\r\n                flex-flow: column;\">\r\n                  <p><b>Luis Escobar donó $10</b></p>\r\n                  <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quisquam porro ab, quasi,\r\n                    tempora blanditiis laborum labori</small>\r\n                </span>\r\n              </div>\r\n\r\n            </section>\r\n          </div>\r\n          <div class=\"col-lg-4 mb-lg-auto\">\r\n            <div class=\"\">\r\n              <div class=\"card bg-secondary shadow border-0\">\r\n                <div class=\"card-header bg-white pb-5\">\r\n                  <span style=\"display: flex;flex-direction: column;\">\r\n                    <h2 class=\"name-title\">{{dataDetails.name}}</h2>\r\n                    <p class=\"text-center\">\r\n                      {{dataDetails.description}}\r\n                    </p>\r\n                    <p style=\"    font-size: small;\r\n                    text-align: center;\r\n                    font: -webkit-small-control;\r\n                    font-variant-caps: all-petite-caps;\">{{(dataDetails.total - dataDetails.rest) | currency}}\r\n                      recaudados del objetivo de {{dataDetails.total | currency}}</p>\r\n                    <progressbar style=\"height: 16px;\" [max]=\"dataDetails.total\"\r\n                      [value]=\"(dataDetails.total - dataDetails.rest)\" type=\"success\" [striped]=\"true\" [animate]=\"true\">\r\n                      <i>{{(dataDetails.total - dataDetails.rest) | currency}} / {{dataDetails.total | currency}}</i>\r\n                    </progressbar>\r\n                  </span>\r\n                  <div class=\"text-muted text-center mb-3\">\r\n                    <small>Lorem ipsum</small>\r\n                  </div>\r\n                  <div class=\"btn-wrapper text-center\">\r\n                    <a (click)=\"donationDetails(dataDetails)\" class=\"btn btn-neutral btn-icon btn-block\">\r\n                      <span class=\"btn-inner--icon\">\r\n                        <i class=\"fa fa-heart\"></i>\r\n                      </span>\r\n                      <span class=\"btn-inner--text\">Donate</span>\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon btn-block\">\r\n                      <span class=\"btn-inner--icon\">\r\n                        <i class=\"fa fa-share\"></i>\r\n                      </span>\r\n                      <span class=\"btn-inner--text\">Share</span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card-body px-lg-5 py-lg-5\">\r\n                  <div class=\"text-center text-muted mb-4\">\r\n                    <small>Latest donations</small>\r\n                  </div>\r\n                  <span *ngFor=\"let item of dataDonations | slice:0:3\"\r\n                    style=\"display: flex;flex-flow: row;align-items: baseline;\">\r\n                    <div class=\"icon icon-sm icon-shape bg-gradient-pink shadow rounded-circle\">\r\n                      <i class=\"fa fa-heart \" style=\"color: #dc3545 !important;\"></i>\r\n                    </div>\r\n                    <p style=\"display: flex;\r\n                    flex-flow: column;\r\n                    justify-content: space-between;\r\n                    align-items: baseline;\r\n                    margin-left: 5px;\">\r\n                      <b>{{item.user.first_name}} {{item.user.last_name}}</b>\r\n                      <small>Donated {{item.amount | currency}}</small>\r\n                    </p>\r\n                  </span>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/food-run-details/food-run-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/food-run-details/food-run-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-gradient-default {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n.text-danger {\n  font-variant: small-caps;\n  font-size: small; }\n\n.section-shaped {\n  position: inherit !important; }\n\n.section-shaped .shape-style-1.shape-default {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n.bg-grad {\n  background: linear-gradient(150deg, #de4583 15%, #f1884d 70%, #f1894e 94%) !important; }\n\n.top-im {\n  width: 17rem;\n  height: 17rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 20px; }\n\n.present {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0.5rem; }\n\n.present p {\n    margin-left: 15px; }\n\n.imgCover {\n  width: 150px;\n  height: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  min-height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: -webkit-grab;\n  cursor: grab;\n  border-radius: 50%;\n  margin: 0.5rem; }\n\ndrag-scroll {\n  height: 160px; }\n\n.imageSlide {\n  max-width: 38rem;\n  min-width: 38rem;\n  max-height: 38rem;\n  min-height: 38rem;\n  height: 38rem;\n  width: 38rem;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.name-title {\n  text-align: center;\n  font-variant-caps: all-petite-caps;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vZC1ydW4tZGV0YWlscy9DOlxcVXNlcnNcXE1pbGVubnlzX0RldlxcRGVza3RvcFxcUHJveWVjdG9zXFxOdWV2b1dvbmRlclxcd29uZGVyaHVtYW5zXFxmcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGZvb2QtcnVuLWRldGFpbHNcXGZvb2QtcnVuLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRkFBcUYsRUFBQTs7QUFHdkY7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UscUZBRzJCLEVBQUE7O0FBRzdCO0VBQ0UscUZBQXFGLEVBQUE7O0FBR3ZGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDJCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBSmpCO0lBT0ksaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLG9CQUFZO0VBQVosWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb29kLXJ1bi1kZXRhaWxzL2Zvb2QtcnVuLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZ3JhZGllbnQtZGVmYXVsdCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MGRlZywgI2NmM2E5ZSAxNSUsICNmZjYyNDAgNzAlLCAjZmJhYTRmIDk0JSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtZGFuZ2VyIHtcclxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLnNlY3Rpb24tc2hhcGVkIHtcclxuICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VjdGlvbi1zaGFwZWQgLnNoYXBlLXN0eWxlLTEuc2hhcGUtZGVmYXVsdCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MGRlZyxcclxuICAgICAgI2NmM2E5ZSAxNSUsXHJcbiAgICAgICNmZjYyNDAgNzAlLFxyXG4gICAgICAjZmJhYTRmIDk0JSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWdyYWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsICNkZTQ1ODMgMTUlLCAjZjE4ODRkIDcwJSwgI2YxODk0ZSA5NCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b3AtaW0ge1xyXG4gIHdpZHRoOiAxN3JlbTtcclxuICBoZWlnaHQ6IDE3cmVtO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5wcmVzZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1nQ292ZXIge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBjdXJzb3I6IGdyYWI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbjogMC41cmVtO1xyXG59XHJcblxyXG5kcmFnLXNjcm9sbCB7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLmltYWdlU2xpZGUge1xyXG4gIG1heC13aWR0aDogMzhyZW07XHJcbiAgbWluLXdpZHRoOiAzOHJlbTtcclxuICBtYXgtaGVpZ2h0OiAzOHJlbTtcclxuICBtaW4taGVpZ2h0OiAzOHJlbTtcclxuICBoZWlnaHQ6IDM4cmVtO1xyXG4gIHdpZHRoOiAzOHJlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLm5hbWUtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/food-run-details/food-run-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/food-run-details/food-run-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: FoodRunDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRunDetailsComponent", function() { return FoodRunDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/fesm5/ngx-drag-scroll.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_food_run_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/food-run.service */ "./src/app/core/services/food-run.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_food_run_form_food_run_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/food-run-form/food-run-form.component */ "./src/app/shared/food-run-form/food-run-form.component.ts");
/* harmony import */ var src_app_shared_donation_food_run_donation_food_run_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/donation-food-run/donation-food-run.component */ "./src/app/shared/donation-food-run/donation-food-run.component.ts");
/* harmony import */ var src_app_shared_add_multimedia_add_multimedia_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/add-multimedia/add-multimedia.component */ "./src/app/shared/add-multimedia/add-multimedia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var FoodRunDetailsComponent = /** @class */ (function () {
    function FoodRunDetailsComponent(route, serviceFood, spinner, toastr, modalService2, router) {
        this.route = route;
        this.serviceFood = serviceFood;
        this.spinner = spinner;
        this.toastr = toastr;
        this.modalService2 = modalService2;
        this.router = router;
        this.environmentY = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiRoot;
        this.slides = [
            { img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { img: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" },
            { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { img: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" },
            { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
            { img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
        ];
        this.isVolunter = false;
        this.isOwner = false;
        this.idFood = this.route.snapshot.paramMap.get('idFood');
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
    }
    FoodRunDetailsComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
        this.getDetails();
    };
    FoodRunDetailsComponent.prototype.getDetails = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
        this.spinner.show();
        if (this.user != null) {
            this.serviceFood.getFoodRu(this.idFood).subscribe(function (data) {
                _this.dataDetails = data;
                console.log(_this.dataDetails);
                var rest = _this.dataDetails.rest_volunteers;
                if (rest === 0) {
                    _this.disabledAdd = true;
                }
                else {
                    _this.disabledAdd = false;
                }
                _this.invitationMsg = _this.dataDetails.invitation_message;
                if (_this.dataDetails.user.id === _this.user['id']) {
                    _this.isOwner = true;
                }
                else {
                    _this.isOwner = false;
                }
                _this.donations();
            }, function (error) {
                console.log(error);
                _this.spinner.hide();
            });
        }
        else {
            this.isOwner = false;
            this.donations();
            this.spinner.hide();
        }
    };
    FoodRunDetailsComponent.prototype.addMoreMulti = function () {
        var _this = this;
        var initialState = {
            data: this.idFood
        };
        this.bsModalRef = this.modalService2.show(src_app_shared_add_multimedia_add_multimedia_component__WEBPACK_IMPORTED_MODULE_12__["AddMultimediaComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA fullscreen-modal');
        var _combine = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])(this.modalService2.onHide, this.modalService2.onHidden).subscribe(function (data) {
            if (data[0] === 'close') {
                _this.ngOnInit();
            }
        });
    };
    FoodRunDetailsComponent.prototype.getMoreMulti = function () {
        var _this = this;
        this.serviceFood.getMultimedia(this.idFood).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.multiMedia = data;
                this.spinner.hide();
                return [2 /*return*/];
            });
        }); }, function (error) {
            console.log(error);
        });
    };
    FoodRunDetailsComponent.prototype.getVol = function () {
        var _this = this;
        this.serviceFood.getVol(this.idFood).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.dataVol = (data['length'] === 0) ? null : data;
                if (this.dataVol !== null) {
                    this.dataVol.forEach(function (element) {
                        if (element.user.id === _this.user['id']) {
                            _this.isVolunter = true;
                        }
                        console.log(element.photo);
                    });
                }
                this.getMoreMulti();
                return [2 /*return*/];
            });
        }); }, function (error) {
            console.log(error);
        });
    };
    FoodRunDetailsComponent.prototype.volunterAdd = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Are you sure?',
            text: (this.invitationMsg === null ? 'Do you want to sign up as a volunteer?' : this.invitationMsg),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (!result.dismiss) {
                var body = {
                    id_food_run: _this.idFood
                };
                _this.spinner.show();
                _this.serviceFood.newVol(body).subscribe(function (data) {
                    _this.spinner.hide();
                    _this.toastr.success('You have successfully registered as a volunteer');
                    _this.ngOnInit();
                }, function (error) {
                    console.log(error);
                    _this.toastr.error(error.error.detail);
                    _this.spinner.hide();
                });
            }
        });
    };
    FoodRunDetailsComponent.prototype.toggleHideSB = function () {
        this.hideScrollbar = !this.hideScrollbar;
    };
    FoodRunDetailsComponent.prototype.toggleDisable = function () {
        this.disabled = !this.disabled;
    };
    FoodRunDetailsComponent.prototype.toggleXDisable = function () {
        this.xDisabled = !this.xDisabled;
    };
    FoodRunDetailsComponent.prototype.toggleYDisable = function () {
        this.yDisabled = !this.yDisabled;
    };
    FoodRunDetailsComponent.prototype.moveLeft = function () {
        this.ds.moveLeft();
    };
    FoodRunDetailsComponent.prototype.moveRight = function () {
        this.ds.moveRight();
    };
    FoodRunDetailsComponent.prototype.moveTo = function (idx) {
        this.ds.moveTo(idx);
    };
    FoodRunDetailsComponent.prototype.leftBoundStat = function (reachesLeftBound) {
        this.leftNavDisabled = reachesLeftBound;
    };
    FoodRunDetailsComponent.prototype.rightBoundStat = function (reachesRightBound) {
        this.rightNavDisabled = reachesRightBound;
    };
    FoodRunDetailsComponent.prototype.onSnapAnimationFinished = function () {
        console.log('snap animation finished');
    };
    FoodRunDetailsComponent.prototype.onIndexChanged = function (idx) {
        this.index = idx;
        console.log('current index: ' + idx);
    };
    FoodRunDetailsComponent.prototype.onDragScrollInitialized = function () {
        console.log('first demo drag scroll has been initialized.');
    };
    FoodRunDetailsComponent.prototype.onDragStart = function () {
        console.log('drag start');
    };
    FoodRunDetailsComponent.prototype.onDragEnd = function () {
        console.log('drag end');
    };
    FoodRunDetailsComponent.prototype.editFoodRun = function () {
        var _this = this;
        var initialState = {
            data: this.dataDetails
        };
        this.bsModalRef = this.modalService2.show(src_app_shared_food_run_form_food_run_form_component__WEBPACK_IMPORTED_MODULE_10__["FoodRunFormComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA fullscreen-modal');
        var _combine = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])(this.modalService2.onHide, this.modalService2.onHidden).subscribe(function (data) {
            if (data[0] === 'close') {
                _this.ngOnInit();
            }
        });
    };
    FoodRunDetailsComponent.prototype.deleteFoodRun = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Are you sure?',
            text: 'Do you want to remove this?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (!result.dismiss) {
                _this.spinner.show();
                _this.serviceFood.deleteFoodRund(_this.idFood).subscribe(function (data) {
                    _this.toastr.success('Successful removal');
                    _this.spinner.hide();
                    _this.router.navigateByUrl('/food-run');
                }, function (err) {
                    console.log(err);
                    _this.toastr.error('Error');
                    _this.spinner.hide();
                });
            }
        });
    };
    FoodRunDetailsComponent.prototype.donationDetails = function (data) {
        var _this = this;
        var initialState = {
            data: [
                data
            ],
        };
        this.bsModalRef = this.modalService2.show(src_app_shared_donation_food_run_donation_food_run_component__WEBPACK_IMPORTED_MODULE_11__["DonationFoodRunComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA fullscreen-modal');
        var _combine = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["combineLatest"])(this.modalService2.onHide, this.modalService2.onHidden).subscribe(function (data) {
            if (data[0] === 'close') {
                _this.ngOnInit();
            }
        });
    };
    FoodRunDetailsComponent.prototype.donations = function () {
        var _this = this;
        this.serviceFood.getDonations(this.idFood).subscribe(function (data) {
            _this.dataDonations = (data['length'] === 0) ? null : data;
            _this.spinner.hide();
            _this.getVol();
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nav', { read: ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__["DragScrollComponent"] }),
        __metadata("design:type", ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__["DragScrollComponent"])
    ], FoodRunDetailsComponent.prototype, "ds", void 0);
    FoodRunDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-run-details',
            template: __webpack_require__(/*! ./food-run-details.component.html */ "./src/app/pages/food-run-details/food-run-details.component.html"),
            styles: [__webpack_require__(/*! ./food-run-details.component.scss */ "./src/app/pages/food-run-details/food-run-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_food_run_service__WEBPACK_IMPORTED_MODULE_3__["FoodRunService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FoodRunDetailsComponent);
    return FoodRunDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/food-run-details/food-run-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/food-run-details/food-run-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: FoodRunDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRunDetailsModule", function() { return FoodRunDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_sections_sections_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sections/sections.module */ "./src/app/sections/sections.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _food_run_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-run-details.component */ "./src/app/pages/food-run-details/food-run-details.component.ts");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/fesm5/ngx-drag-scroll.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FoodRunDetailsModule = /** @class */ (function () {
    function FoodRunDetailsModule() {
    }
    FoodRunDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_sections_sections_module__WEBPACK_IMPORTED_MODULE_2__["SectionsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_7__["DragScrollModule"]
            ],
            declarations: [_food_run_details_component__WEBPACK_IMPORTED_MODULE_5__["FoodRunDetailsComponent"]],
        })
    ], FoodRunDetailsModule);
    return FoodRunDetailsModule;
}());



/***/ }),

/***/ "./src/app/pages/food-run-list/food-run-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/food-run-list/food-run-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-searchbar class=\"w-100\"></app-searchbar>\r\n\r\n<main>\r\n  <div class=\"position-relative\">\r\n    <!-- Hero for FREE version -->\r\n    <section class=\"section section-shaped\">\r\n      <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <div class=\"container py-md\">\r\n        <div class=\"row justify-content-between align-items-center\">\r\n          <div class=\"col-lg-5 mb-5 mb-lg-0\">\r\n            <h1 class=\"text-white font-weight-light\">Lorem ipsum dolor sit amet, consectetur.</h1>\r\n            <p class=\"lead text-white mt-4\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus\r\n              inventore odit vitae dolores, tempore repudiandae ducimus, officia beat.</p>\r\n            <a (click)=\"addFoodRun()\" class=\"btn btn-white mt-4\">start a food run</a>\r\n          </div>\r\n          <div class=\"col-lg-6 mb-lg-auto\">\r\n            <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\r\n              <ngb-carousel>\r\n                <ng-template ngbSlide>\r\n                  <img class=\"img-fluid\" src=\"assets/img/theme/img-1-1200x1000.jpg\" alt=\"First slide\">\r\n                </ng-template>\r\n                <ng-template ngbSlide>\r\n                  <img class=\"img-fluid\" src=\"assets/img/theme/img-2-1200x1000.jpg\" alt=\"Second slide\">\r\n                </ng-template>\r\n              </ngb-carousel>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n          xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n\r\n  </div>\r\n\r\n  <app-nucleo-section></app-nucleo-section>\r\n  <section class=\"section section-lg bg-grad\">\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-8 text-center \">\r\n          <h2 class=\"display-3 text-white\">Actual activities</h2>\r\n          <p class=\"lead text-white\">\r\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis inventore dolore laborum eveniet,\r\n            sit culpa asperiores eum rem facilis ratione totam illum similique ipsa in quis veniam itaque! Dignissimos,\r\n            rerum.\r\n          </p>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"row \" style=\"justify-content: space-between\">\r\n        <div class=\"card\" style=\" border-radius: 20px;margin:12px\" *ngFor=\"let item of foodRunsData\">\r\n          <img class=\"card-img-top top-im\" src=\"{{environmentY}}{{item.image}}\" alt=\"Card image\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">{{item.name}}</h4>\r\n            <p class=\"card-text\">Amount to raise: {{item.total | currency}}</p>\r\n            <a routerLink=\"/details-food-run/{{item.id}}\" class=\"btn btn-primary btn-block btn-sm\">See details</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/food-run-list/food-run-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/food-run-list/food-run-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-gradient-default {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n.text-danger {\n  font-variant: small-caps;\n  font-size: small; }\n\n.section-shaped {\n  position: inherit !important; }\n\n.section-shaped .shape-style-1.shape-default {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n.bg-grad {\n  background: linear-gradient(150deg, #de4583 15%, #f1884d 70%, #f1894e 94%) !important; }\n\n.top-im {\n  width: 17rem;\n  height: 17rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vZC1ydW4tbGlzdC9DOlxcVXNlcnNcXE1pbGVubnlzX0RldlxcRGVza3RvcFxcUHJveWVjdG9zXFxOdWV2b1dvbmRlclxcd29uZGVyaHVtYW5zXFxmcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGZvb2QtcnVuLWxpc3RcXGZvb2QtcnVuLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRkFBcUYsRUFBQTs7QUFHdkY7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UscUZBRzJCLEVBQUE7O0FBRzdCO0VBQ0UscUZBQXFGLEVBQUE7O0FBR3ZGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9vZC1ydW4tbGlzdC9mb29kLXJ1bi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWdyYWRpZW50LWRlZmF1bHQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsICNjZjNhOWUgMTUlLCAjZmY2MjQwIDcwJSwgI2ZiYWE0ZiA5NCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXNoYXBlZCB7XHJcbiAgcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlY3Rpb24tc2hhcGVkIC5zaGFwZS1zdHlsZS0xLnNoYXBlLWRlZmF1bHQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsXHJcbiAgICAgICNjZjNhOWUgMTUlLFxyXG4gICAgICAjZmY2MjQwIDcwJSxcclxuICAgICAgI2ZiYWE0ZiA5NCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1ncmFkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCAjZGU0NTgzIDE1JSwgI2YxODg0ZCA3MCUsICNmMTg5NGUgOTQlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udG9wLWltIHtcclxuICB3aWR0aDogMTdyZW07XHJcbiAgaGVpZ2h0OiAxN3JlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/food-run-list/food-run-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/food-run-list/food-run-list.component.ts ***!
  \****************************************************************/
/*! exports provided: FoodRunListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRunListComponent", function() { return FoodRunListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_food_run_form_food_run_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/food-run-form/food-run-form.component */ "./src/app/shared/food-run-form/food-run-form.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_food_run_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/services/food-run.service */ "./src/app/core/services/food-run.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FoodRunListComponent = /** @class */ (function () {
    function FoodRunListComponent(router, spinner, toastr, modalService2, foodService) {
        this.router = router;
        this.spinner = spinner;
        this.toastr = toastr;
        this.modalService2 = modalService2;
        this.foodService = foodService;
        this.environmentY = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiRoot;
    }
    FoodRunListComponent.prototype.ngOnInit = function () {
        this.getFoodRuns();
    };
    FoodRunListComponent.prototype.addFoodRun = function () {
        var _this = this;
        this.bsModalRef = this.modalService2.show(src_app_shared_food_run_form_food_run_form_component__WEBPACK_IMPORTED_MODULE_6__["FoodRunFormComponent"]);
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA fullscreen-modal');
        var _combine = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.modalService2.onHide, this.modalService2.onHidden).subscribe(function (data) {
            if (data[0] === 'close') {
                _this.ngOnInit();
            }
        });
    };
    FoodRunListComponent.prototype.getFoodRuns = function () {
        var _this = this;
        this.spinner.show();
        this.foodService.getFoodRuns().subscribe(function (data) {
            console.log(data);
            _this.foodRunsData = data;
            _this.spinner.hide();
        }, function (err) {
            console.log(err);
            _this.spinner.hide();
        });
    };
    FoodRunListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-run-list',
            template: __webpack_require__(/*! ./food-run-list.component.html */ "./src/app/pages/food-run-list/food-run-list.component.html"),
            styles: [__webpack_require__(/*! ./food-run-list.component.scss */ "./src/app/pages/food-run-list/food-run-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _core_services_food_run_service__WEBPACK_IMPORTED_MODULE_8__["FoodRunService"]])
    ], FoodRunListComponent);
    return FoodRunListComponent;
}());



/***/ }),

/***/ "./src/app/pages/food-run-list/food-run-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/food-run-list/food-run-list.module.ts ***!
  \*************************************************************/
/*! exports provided: FoodRunListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRunListModule", function() { return FoodRunListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _food_run_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-run-list.component */ "./src/app/pages/food-run-list/food-run-list.component.ts");
/* harmony import */ var src_app_sections_sections_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sections/sections.module */ "./src/app/sections/sections.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FoodRunListModule = /** @class */ (function () {
    function FoodRunListModule() {
    }
    FoodRunListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_sections_sections_module__WEBPACK_IMPORTED_MODULE_3__["SectionsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_food_run_list_component__WEBPACK_IMPORTED_MODULE_2__["FoodRunListComponent"]],
        })
    ], FoodRunListModule);
    return FoodRunListModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-wrapper\">\r\n  <main class=\"page-content\">\r\n    <div class=\"position-relative\">\r\n      <!-- Hero for FREE version -->\r\n      <section class=\"section section-lg section-hero section-shaped\">\r\n        <!-- Background circles -->\r\n        <div class=\"shape shape-style-1 shape-primary\">\r\n          <span class=\"span-150\"></span>\r\n          <span class=\"span-50\"></span>\r\n          <span class=\"span-50\"></span>\r\n          <span class=\"span-75\"></span>\r\n          <span class=\"span-100\"></span>\r\n          <span class=\"span-75\"></span>\r\n          <span class=\"span-50\"></span>\r\n          <span class=\"span-100\"></span>\r\n          <span class=\"span-50\"></span>\r\n          <span class=\"span-100\"></span>\r\n        </div>\r\n        <div class=\"container shape-container d-flex align-items-center py-lg\">\r\n\r\n        </div>\r\n        <!-- SVG separator -->\r\n        <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n          <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n            xmlns=\"http://www.w3.org/2000/svg\">\r\n            <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n          </svg>\r\n        </div>\r\n      </section>\r\n    </div>\r\n    <app-sections></app-sections>\r\n  </main>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pull-left-content {\n  padding-left: 0px !important; }\n\n.page-wrapper {\n  height: 100vh; }\n\n.page-wrapper .page-content {\n    display: inline-block;\n    width: 100%;\n    padding-top: 40px;\n    -webkit-transition: padding-left .3s ease;\n    transition: padding-left .3s ease;\n    padding-bottom: 90px;\n    height: 100%; }\n\n@media screen and (min-width: 768px) {\n      .page-wrapper .page-content {\n        padding-left: 300px; } }\n\n.page-wrapper .page-content .overlay {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 998;\n      background: #000;\n      opacity: .5;\n      display: none; }\n\n@media screen and (max-width: 768px) {\n        .page-wrapper .page-content .overlay.show {\n          display: block; } }\n\n.page-wrapper .sidebar {\n    left: 0px; }\n\n.page-wrapper.toggled .page-content {\n    padding-left: 0; }\n\n.page-wrapper .attribution {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    padding: 5px;\n    margin: 5px;\n    letter-spacing: 1px; }\n\n.btn-toggle {\n  position: fixed;\n  bottom: 35px;\n  right: 40px;\n  background: -webkit-gradient(linear, left top, right top, from(#dc3545), to(#ca1829));\n  background: linear-gradient(to right, #dc3545, #ca1829);\n  border: none;\n  font-size: 17px;\n  color: white !important;\n  z-index: 9999; }\n\n#btn-t:hover {\n  background: #ca1829;\n  border-bottom-right-radius: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXE1pbGVubnlzX0RldlxcRGVza3RvcFxcUHJveWVjdG9zXFxOdWV2b1dvbmRlclxcd29uZGVyaHVtYW5zXFxmcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxhQUFhLEVBQUE7O0FBRGY7SUFJSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5Q0FBaUM7SUFBakMsaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixZQUFZLEVBQUE7O0FBRVo7TUFYSjtRQVlNLG1CQUFtQixFQUFBLEVBb0J0Qjs7QUFoQ0g7TUFnQk0sZUFBZTtNQUNmLE1BQU07TUFDTixRQUFRO01BQ1IsU0FBUztNQUNULE9BQU87TUFDUCxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxhQUFhLEVBQUE7O0FBR1g7UUEzQlI7VUE0QlUsY0FBYyxFQUFBLEVBRWpCOztBQTlCUDtJQW1DSSxTQUFTLEVBQUE7O0FBbkNiO0lBd0NNLGVBQWUsRUFBQTs7QUF4Q3JCO0lBNkNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gscUZBQXVEO0VBQXZELHVEQUF1RDtFQUN2RCxZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxtQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHVsbC1sZWZ0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIFxyXG4gICAgLnBhZ2UtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLWxlZnQgLjNzIGVhc2U7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA5MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMDBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB6LWluZGV4OiA5OTg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gIFxyXG4gICAgICAgICYuc2hvdyB7XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJi50b2dnbGVkIHtcclxuICAgICAgLnBhZ2UtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXR0cmlidXRpb24ge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzVweDtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGMzNTQ1LCAjY2ExODI5KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICB9XHJcbiAgXHJcbiAgI2J0bi10OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6I2NhMTgyOTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.toggleSidebar = 'show';
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sections/sections.module */ "./src/app/sections/sections.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_6__["SectionsModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],],
            exports: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/pages/homeless-profile/homeless-profile.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/homeless-profile/homeless-profile.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"section-shaped\">\r\n  <div class=\"shape shape-style-1 bg-gradient-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <section class=\"section section-lg\">\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <span class=\"button-action\">\r\n              <button (click)=\"back()\" id=\"add-event-btn\" type=\"button\" class=\"btn btn-outline-warning btn-sm \">\r\n                <i class=\"fa fa-arrow-left\"></i> Back\r\n              </button>\r\n              <button (click)=\"openModal(template)\" id=\"add-event-btn\" type=\"button\"\r\n                class=\"btn btn-outline-success btn-sm \">\r\n                <i class=\"ni ni-fat-add\"></i> Add cause\r\n              </button>\r\n            </span>\r\n            <div class=\"card-header bg-white pb-2\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Homeless Profile</small>\r\n              </div>\r\n              <div class=\"btn-wrapper text-center\">\r\n                <img [src]=\"homelessPhoto\" alt=\"\" class=\"img-fluid rounded-circle shadow-lg\" />\r\n              </div>\r\n              <div class=\"btn-wrapper text-center mt-3\">\r\n                <button routerLink=\"/edit-homeless/{{idHomeless}}\" id=\"add-event-btn\" type=\"button\"\r\n                  class=\"btn btn-outline-warning btn-sm \">\r\n                  Homeless edit\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-2\">\r\n              <div class=\"col-12\">\r\n                <!-- Tabs with icons -->\r\n                <div class=\"mb-3\">\r\n                  <h5 class=\"text-uppercase font-weight-bold text-center\">\r\n                    {{ homelessProfile?.firstName }}\r\n                    {{ homelessProfile?.lastName }}\r\n                  </h5>\r\n                  <small *ngIf=\"homelessProfile?.code\" class=\"font-weight-bold text-center d-block\">Code:\r\n                    {{ homelessProfile?.code }}</small>\r\n                  <small *ngIf=\"homelessProfile?.email && homelessProfile?.show_email === true\"\r\n                    class=\"font-weight-bold text-center d-block\">Email: {{ homelessProfile?.email }}</small>\r\n                  <small *ngIf=\"homelessProfile?.phone\" class=\"font-weight-bold text-center d-block\">Phone Number:\r\n                    {{ homelessProfile?.phone }}</small>\r\n                  <small *ngIf=\"homelessProfile?.dateOfBirth\" class=\"font-weight-bold text-center d-block\">Date of\r\n                    Birth:\r\n                    {{ homelessProfile?.dateOfBirth | date }}</small>\r\n                  <small *ngIf=\"homelessProfile?.occupation\" class=\"font-weight-bold text-center d-block\">Occupation:\r\n                    {{ homelessProfile?.occupation }}</small>\r\n                  <small *ngIf=\"homelessProfile?.location_detail\" class=\"font-weight-bold text-center d-block\">Location:\r\n                    {{ homelessProfile?.location_detail }}</small>\r\n                </div>\r\n                <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\"\r\n                  id=\"navCustom2\">\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                      <i class=\"ni ni-books mr-2\"></i> My Story\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                      <blockquote class=\"blockquote text-center\">\r\n                        <p class=\"mb-0 description\">\"{{ homelessProfile?.aboutYou }}\"</p>\r\n                        <footer class=\"blockquote-footer\">Acerca del homeless</footer>\r\n                      </blockquote>\r\n                      <!-- comments -->\r\n                      <div class=\"review p-3\" *ngFor=\"let comment of comments\">\r\n                        <div class=\"row d-flex\">\r\n                          <div class=\"profile-pic\">\r\n                            <img src=\"https://i.imgur.com/Mcd6HIg.jpg\" width=\"60px\" height=\"60px\" />\r\n                          </div>\r\n                          <div class=\"d-flex flex-column pl-3\">\r\n                            <h4>\r\n                              {{ comment.user.first_name }}\r\n                              {{ comment.user.last_name }}\r\n                            </h4>\r\n                            <p class=\"grey-text\">\r\n                              {{ comment.created_at | date }}\r\n                            </p>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row pb-3\">\r\n                          <p>{{ comment.comment }}</p>\r\n                        </div>\r\n                      </div>\r\n                      <!-- end comments -->\r\n                      <!-- comments box -->\r\n                      <div class=\"row\">\r\n                        <div class=\"col-12\">\r\n                          <textarea minlength=\"2\" maxlength=\"255\" (keyup)=\"onKey($event)\" name=\"comentarios\"\r\n                            [(ngModel)]=\"comment\" rows=\"5\" id=\"text-comments\"\r\n                            placeholder=\"Write your comments\"></textarea>\r\n                          <section style=\"display: flex;\r\n                          flex-direction: column;\r\n                          align-items: flex-end;\">\r\n                            <span *ngIf=\"contator\"\r\n                              style=\"float: right;font-variant: small-caps;margin-bottom: 10px;\">{{contator}}/{{restante}}\r\n                              characters</span>\r\n                            <button type=\"button\" [disabled]=\"ifSendComment\" (click)=\"newComment()\"\r\n                              class=\"btn btn-success float-right\">\r\n                              Send\r\n                            </button>\r\n                          </section>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                      <i class=\"ni ni-briefcase-24 mr-2\"></i> Portfolio\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                      <div class=\"row\">\r\n                        <h3 class=\"text-center w-100\">Portfolio</h3>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm\" *ngFor=\"let item of portfolio\">\r\n                          <img style=\"box-shadow: 1px 1px 7px #808080e0;\" src=\"{{imageUrl}}{{ item.image }}\"\r\n                            (click)=\"openModal2(item.image, item.id)\" class=\"img-portfolio\" />\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                  <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                      <i class=\"ni ni-money-coins mr-2\"></i> Donations\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                      <blockquote class=\"blockquote text-center\">\r\n                        <p class=\"mb-0 description\">\"{{ homelessProfile?.aboutYou }}\"</p>\r\n                        <footer class=\"blockquote-footer\">About homeless</footer>\r\n                      </blockquote>\r\n                      <div class=\"table-responsive-sm\" *ngIf=\"dataCauses.length !== 0 else noCause\">\r\n                        <table class=\"table\">\r\n                          <caption>Cause list</caption>\r\n                          <thead>\r\n                            <tr>\r\n                              <th scope=\"col\">Event</th>\r\n                              <th scope=\"col\">Goal</th>\r\n                              <th scope=\"col\">Progress</th>\r\n                              <th class=\"text-nowrap\">Actions</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of dataCauses\">\r\n                              <td>{{item.name}}</td>\r\n                              <td>${{item.total}}</td>\r\n                              <td>\r\n                                <progressbar [max]=\"item.total\" [animate]=\"true\" [value]=\"item.acumulado\" type=\"success\"\r\n                                  style=\"height: 1rem;\r\n                                margin-top: 0.3rem;\">\r\n                                  <b style=\"color: black;\">{{item.porcentage}}%</b>\r\n                                </progressbar>\r\n                              </td>\r\n                              <td class=\"text-nowrap text-center\">\r\n                                <a style=\"color: #fb6340;cursor: pointer;\" data-toggle=\"tooltip\"\r\n                                  data-original-title=\"Ver\" (click)=\"causeDetails(item)\">Details<i\r\n                                    class=\"fa fa-eye text-inverse m-r-10\"></i> </a>\r\n\r\n                              </td>\r\n                            </tr>\r\n\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                      <ng-template #noCause>\r\n                        <h5>There are no registered causes</h5>\r\n                      </ng-template>\r\n                      <!-- <button class=\"btn btn-warning float-right\" (click)=\"open(classic)\">\r\n                        Show more\r\n                      </button> -->\r\n                    </ng-template>\r\n                  </ngb-tab>\r\n                </ngb-tabset>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--           <div class=\"row mt-3\">\r\n            <div class=\"col-6\">\r\n              <a href=\"javascript:void(0)\" class=\"white-font\">\r\n                <small>Forgot password?</small>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n              <a href=\"javascript:void(0)\" class=\"white-font\">\r\n                <small>Create new account</small>\r\n              </a>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h6 class=\"modal-title\" id=\"modal-title-default\">Donations list</h6>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <!-- <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\" id=\"navCustom\">\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <i class=\"ni ni-calendar-grid-58 mr-2\"></i> Recaudaciones\r\n            </ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table align-items-center table-flush\">\r\n                  <thead class=\"thead-light\">\r\n                    <tr>\r\n                      <th scope=\"col\">User</th>\r\n                      <th scope=\"col\">Event</th>\r\n                      <th scope=\"col\">Mount</th>\r\n                      <th scope=\"col\">Rest</th>\r\n                      <th scope=\"col\">Goal</th>\r\n                      <th scope=\"col\"></th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody *ngIf=\"donationsList\">\r\n                    <tr *ngFor=\"let item of donationsList\">\r\n                      <th scope=\"row\">\r\n                        <div class=\"media align-items-center\">\r\n                          <a href=\"#\" class=\"avatar rounded-circle mr-3\">\r\n                            <img alt=\"Image placeholder\"\r\n                              src=\"https://images.unsplash.com/photo-1519430044529-9a9a57177865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=761&q=80\" />\r\n                          </a>\r\n                          <div class=\"media-body\">\r\n                            <span class=\"mb-0 text-sm\">{{ item.user.first_name }}\r\n                              {{ item.user.last_name }}</span>\r\n                          </div>\r\n                        </div>\r\n                      </th>\r\n                      <td>\r\n                        {{ item.event.name }}\r\n                      </td>\r\n\r\n                      <td>{{ item.mount }}$</td>\r\n\r\n                      <td>{{ item.event.rest }}$</td>\r\n                      <td>{{ item.event.total }}$</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <i class=\"ni ni-credit-card mr-2\"></i> Donación\r\n            </ng-template>\r\n            <ng-template ngbTabContent *ngIf=\"eventsList\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <h3>Eventos disponibles</h3>\r\n                  <ngb-tabset type=\"pills\" id=\"pillsCustom\">\r\n                    <ngb-tab *ngFor=\"let event of eventsList\">\r\n                      <ng-template ngbTabTitle>\r\n                        <span class=\"nav-link-icon d-block\"><i class=\"ni ni-support-16\"></i>\r\n                          {{ event.name }}</span>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                  </ngb-tabset>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <h3>Formulario para donación</h3>\r\n                  <ngx-stripe-card [options]=\"cardOptions\" [elementsOptions]=\"elementsOptions\"\r\n                    (change)=\"cardUpdated($event)\" (error)=\"error = $event\"></ngx-stripe-card>\r\n                  <div class=\"error\">\r\n                    {{ error?.message }}\r\n                  </div>\r\n                  <div class=\"mt-3\">\r\n                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"getCardToken()\" [disabled]=\"!complete\">\r\n                      Get Card Token\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset> -->\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Add Cause</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"form-group\">\r\n        <label>Name of cause</label>\r\n        <input (keyup)=\"nameLength($event)\" type=\"text\" class=\"form-control\" aria-describedby=\"nameevent\"\r\n          placeholder=\"Enter name event\" [(ngModel)]=\"name\" />\r\n        <small *ngIf=\"nameNo === 'min'\" id=\"nameevent\" class=\"form-text text-muted\" style=\"color: red !important;\">*3 is\r\n          the\r\n          minimum characters allowed. </small>\r\n        <small *ngIf=\"nameNo === 'max'\" id=\"nameevent\" class=\"form-text text-muted\" style=\"color: red !important;\">*100\r\n          is the\r\n          maximum characters allowed. </small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Mount</label>\r\n        <input (keyup)=\"totalLength($event)\" type=\"number\" class=\"form-control\" placeholder=\"$ 00,00\"\r\n          [(ngModel)]=\"total\" />\r\n        <small *ngIf=\"mountNo === 'min'\" id=\"nameevent\" class=\"form-text text-muted\" style=\"color: red !important;\">*$10\r\n          is\r\n          the\r\n          minimum mount allowed. </small>\r\n        <small *ngIf=\"mountNo === 'max'\" id=\"nameevent\" class=\"form-text text-muted\"\r\n          style=\"color: red !important;\">*$9999999\r\n          is the\r\n          maximum mount allowed. </small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea (keyup)=\"descLength($event)\" name=\"\" id=\"\" cols=\"30\" rows=\"4\" class=\"form-control\"\r\n          placeholder=\"Description\" [(ngModel)]=\"description\" maxlength=\"150\" (keyup)=\"onKey($event)\"></textarea>\r\n        <small *ngIf=\"descNo === 'min'\" id=\"nameevent\" class=\"form-text text-muted\" style=\"color: red !important;\">*3 is\r\n          the\r\n          minimum characters allowed. </small>\r\n        <small *ngIf=\"descNo === 'max'\" id=\"nameevent\" class=\"form-text text-muted\" style=\"color: red !important;\">*150\r\n          is the\r\n          maximum characters allowed. </small>\r\n      </div>\r\n      <section style=\"display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-end;\">\r\n        <span *ngIf=\"contator\" style=\"float: right;font-variant: small-caps;\">{{contator}}/{{restante}}\r\n          characters</span>\r\n        <button class=\"btn btn-success float-right btn-sm\" (click)=\"newEvent()\" [disabled]=\"noValidate === true\">\r\n          Submit\r\n        </button>\r\n      </section>\r\n    </div>\r\n  </ng-template>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/homeless-profile/homeless-profile.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/homeless-profile/homeless-profile.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid {\n  max-width: 9rem;\n  width: 9rem;\n  height: 9rem;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.modal-dialog .modal-dialog-centered {\n  min-width: 58rem !important; }\n\n.bg-gradient-default {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n.sm-text {\n  font-size: 10px;\n  letter-spacing: 1px; }\n\n.sm-text-1 {\n  font-size: 14px; }\n\n.description {\n  text-align: center;\n  font-size: x-large;\n  font-weight: 600;\n  font-variant: all-small-caps;\n  font-style: italic; }\n\n.green-tab {\n  background-color: #00c853;\n  color: #fff;\n  border-radius: 5px;\n  padding: 5px 3px 5px 3px; }\n\n.btn-red {\n  background-color: #e64a19;\n  color: #fff;\n  border-radius: 20px;\n  border: none;\n  outline: none; }\n\n.btn-red:hover {\n  background-color: #bf360c; }\n\n.btn-red:focus {\n  box-shadow: none !important;\n  outline-width: 0; }\n\n.round-icon {\n  font-size: 40px;\n  padding-bottom: 10px; }\n\n.fa-circle {\n  font-size: 10px;\n  color: #eeeeef; }\n\n.green-dot {\n  color: #4caf50; }\n\n.red-dot {\n  color: #e64a19; }\n\n.yellow-dot {\n  color: #ffd54f; }\n\n.grey-text {\n  color: #bdbdbd; }\n\n.green-text {\n  color: #4caf50; }\n\n.block {\n  border-right: 1px solid #f5eeee;\n  border-top: 1px solid #f5eeee;\n  border-bottom: 1px solid #f5eeee; }\n\n.profile-pic img {\n  border-radius: 50%; }\n\n.rating-dot {\n  letter-spacing: 5px; }\n\n.via {\n  border-radius: 20px;\n  height: 28px; }\n\n.img-portfolio {\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 1rem; }\n\n#text-comments {\n  display: block;\n  width: 100%;\n  border: 2px #8080805e;\n  border-style: ridge;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding: 10px; }\n\nspan.button-action {\n  padding: 1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between; }\n\n.section-shaped {\n  position: relative !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZWxlc3MtcHJvZmlsZS9DOlxcVXNlcnNcXE1pbGVubnlzX0RldlxcRGVza3RvcFxcUHJveWVjdG9zXFxOdWV2b1dvbmRlclxcd29uZGVyaHVtYW5zXFxmcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGhvbWVsZXNzLXByb2ZpbGVcXGhvbWVsZXNzLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UscUZBRzJCLEVBQUE7O0FBRzdCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUdFLDJCQUEyQjtFQUMzQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhO0VBQ2Isb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZWxlc3MtcHJvZmlsZS9ob21lbGVzcy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1mbHVpZCB7XHJcbiAgbWF4LXdpZHRoOiA5cmVtO1xyXG4gIHdpZHRoOiA5cmVtO1xyXG4gIGhlaWdodDogOXJlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyAubW9kYWwtZGlhbG9nLWNlbnRlcmVkIHtcclxuICBtaW4td2lkdGg6IDU4cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC1kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLFxyXG4gICAgICAjY2YzYTllIDE1JSxcclxuICAgICAgI2ZmNjI0MCA3MCUsXHJcbiAgICAgICNmYmFhNGYgOTQlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc20tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5zbS10ZXh0LTEge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC12YXJpYW50OiBhbGwtc21hbGwtY2FwcztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5ncmVlbi10YWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGM4NTM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweCAzcHggNXB4IDNweDtcclxufVxyXG5cclxuLmJ0bi1yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjRhMTk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1yZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZjM2MGM7XHJcbn1cclxuXHJcbi5idG4tcmVkOmZvY3VzIHtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZS13aWR0aDogMDtcclxufVxyXG5cclxuLnJvdW5kLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZhLWNpcmNsZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAjZWVlZWVmO1xyXG59XHJcblxyXG4uZ3JlZW4tZG90IHtcclxuICBjb2xvcjogIzRjYWY1MDtcclxufVxyXG5cclxuLnJlZC1kb3Qge1xyXG4gIGNvbG9yOiAjZTY0YTE5O1xyXG59XHJcblxyXG4ueWVsbG93LWRvdCB7XHJcbiAgY29sb3I6ICNmZmQ1NGY7XHJcbn1cclxuXHJcbi5ncmV5LXRleHQge1xyXG4gIGNvbG9yOiAjYmRiZGJkO1xyXG59XHJcblxyXG4uZ3JlZW4tdGV4dCB7XHJcbiAgY29sb3I6ICM0Y2FmNTA7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y1ZWVlZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y1ZWVlZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZWVlZTtcclxufVxyXG5cclxuLnByb2ZpbGUtcGljIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucmF0aW5nLWRvdCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxufVxyXG5cclxuLnZpYSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5pbWctcG9ydGZvbGlvIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4jdGV4dC1jb21tZW50cyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAycHggIzgwODA4MDVlO1xyXG4gIGJvcmRlci1zdHlsZTogcmlkZ2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuc3Bhbi5idXR0b24tYWN0aW9uIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2VjdGlvbi1zaGFwZWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/homeless-profile/homeless-profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/homeless-profile/homeless-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomelessProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomelessProfileComponent", function() { return HomelessProfileComponent; });
/* harmony import */ var _core_services_homeless_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/services/homeless.service */ "./src/app/core/services/homeless.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nomadreservations/ngx-stripe */ "./node_modules/@nomadreservations/ngx-stripe/fesm5/nomadreservations-ngx-stripe.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_modal_imagen_modal_imagen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modal-imagen/modal-imagen.component */ "./src/app/shared/modal-imagen/modal-imagen.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_causes_details_causes_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/causes-details/causes-details.component */ "./src/app/shared/causes-details/causes-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};














var HomelessProfileComponent = /** @class */ (function () {
    function HomelessProfileComponent(modalService, homelessService, route, _lightbox, bmodalService, _stripe, router, spinner, toastr, modalService2) {
        this.modalService = modalService;
        this.homelessService = homelessService;
        this.route = route;
        this._lightbox = _lightbox;
        this.bmodalService = bmodalService;
        this._stripe = _stripe;
        this.router = router;
        this.spinner = spinner;
        this.toastr = toastr;
        this.modalService2 = modalService2;
        this.dataCauses = [];
        this.stripeKey = '';
        this.complete = false;
        this.cardOptions = {
            style: {
                base: {
                    iconColor: 'red',
                    color: 'gray',
                    lineHeight: '40px',
                    fontWeight: 500,
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSize: '18px',
                    '::placeholder': {
                        color: '#CFD7E0'
                    }
                }
            }
        };
        this.elementsOptions = {
            locale: 'en'
        };
        this.ifSendComment = false;
        this.album = [];
        this.idHomeless = this.route.snapshot.paramMap.get('idHomeless');
        this.imageUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiRoot;
    }
    HomelessProfileComponent.prototype.ngOnInit = function () {
        this.getProfile(this.idHomeless);
        this.getCommentsProfile(this.idHomeless);
        this.getDonationsList(this.idHomeless);
        this.getEventList(this.idHomeless);
        this.getPortfolioList(this.idHomeless);
    };
    HomelessProfileComponent.prototype.cardUpdated = function (result) {
        this.element = result.element;
        this.complete = result.card.complete;
        this.error = undefined;
    };
    HomelessProfileComponent.prototype.keyUpdated = function () {
        this._stripe.changeKey(this.stripeKey);
    };
    HomelessProfileComponent.prototype.getCardToken = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            input: 'number',
            title: 'Amount to donate',
            text: "Enter the amount please",
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Ok'
        }).then(function (result) {
            if (result.value) {
                var mount = result.value;
                _this._stripe.createToken(_this.element, {
                    name: 'tested_ca',
                    address_line1: '123 A Place',
                    address_line2: 'Suite 100',
                    address_city: 'Irving',
                    address_state: 'BC',
                    address_zip: 'VOE 1H0',
                    address_country: 'CA'
                }).subscribe(function (result) {
                    // Pass   token to service for purchase.
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'You have donated successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    _this.closemodal();
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error',
                });
            }
        });
    };
    HomelessProfileComponent.prototype.open = function (classic) {
        this.modalService.open(classic, { size: 'lg', centered: true });
    };
    HomelessProfileComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HomelessProfileComponent.prototype.getProfile = function (id) {
        var _this = this;
        this.homelessService.getHomelessProfile(id).subscribe(function (data) {
            _this.homelessProfile = data;
            // tslint:disable-next-line: max-line-length
            _this.homelessPhoto = (_this.homelessProfile.photo) ? "" + _this.imageUrl + _this.homelessProfile.photo : 'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_960_720.png';
        }, function (error) {
            console.log(error);
        });
    };
    HomelessProfileComponent.prototype.getCommentsProfile = function (id) {
        var _this = this;
        this.homelessService.getCommentsProfile(id).subscribe(function (data) {
            _this.comments = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomelessProfileComponent.prototype.openM = function (url) {
        this._lightbox.open(url);
    };
    HomelessProfileComponent.prototype.close = function () {
        this._lightbox.close();
    };
    HomelessProfileComponent.prototype.getDonationsList = function (id) {
        var _this = this;
        this.donationsList = null;
        this.homelessService.getDonations(id).subscribe(function (data) {
            _this.donationsList = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomelessProfileComponent.prototype.onKey = function (event) {
        this.contator = event.target.value.length;
        if (this.contator <= 150) {
            this.restante = 150 - this.contator;
        }
    };
    HomelessProfileComponent.prototype.getEventList = function (id) {
        var _this = this;
        this.dataCauses.length = 0;
        this.homelessService.getEventsDonations(id).subscribe(function (data) {
            console.log(data);
            _this.eventsList = data;
            for (var index = 0; index < _this.eventsList.length; index++) {
                var element = _this.eventsList[index];
                _this.dataCauses.push({
                    id: element.id,
                    name: element.name,
                    total: Number(element.total),
                    rest: (element.rest === '') ? Number(element.total) : Number(element.rest),
                    acumulado: (Number(element.total) - Number((element.rest === '') ? Number(element.total) : element.rest)),
                    // tslint:disable-next-line: max-line-length
                    porcentage: (Number(element.total) - Number((element.rest === '') ? Number(element.total) : element.rest)) * 100 / Number(element.total)
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomelessProfileComponent.prototype.getPortfolioList = function (id) {
        var _this = this;
        this.homelessService.getPortfolio(id).subscribe(function (data) {
            _this.portfolio = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomelessProfileComponent.prototype.openModal = function (template) {
        this.modalRef = this.bmodalService.show(template);
    };
    HomelessProfileComponent.prototype.newComment = function () {
        this.createComment(this.idHomeless);
    };
    HomelessProfileComponent.prototype.createComment = function (id) {
        var _this = this;
        this.spinner.show();
        var body = {
            comment: this.comment
        };
        this.ifSendComment = true;
        this.homelessService.newComment(id, body).subscribe(function (data) {
            _this.ifSendComment = false;
            _this.comment = '';
            _this.comments = data;
            _this.spinner.hide();
            _this.toastr.success('Comment added successfully');
        }, function (error) {
            _this.ifSendComment = false;
            console.log(error);
            _this.comment = '';
            _this.toastr.error(error);
            _this.spinner.hide();
        });
    };
    HomelessProfileComponent.prototype.nameLength = function (ev) {
        console.log(ev.target.value.length);
        var lengthName = ev.target.value.length;
        if (lengthName < 3) {
            this.noValidate = true;
            this.nameNo = 'min';
        }
        else if (lengthName > 100) {
            this.nameNo = 'max';
            this.noValidate = true;
        }
        else {
            this.noValidate = false;
            this.nameNo = null;
        }
    };
    HomelessProfileComponent.prototype.descLength = function (ev) {
        console.log(ev.target.value.length);
        var lengthDesc = ev.target.value.length;
        if (lengthDesc < 3) {
            this.noValidate = true;
            this.descNo = 'min';
        }
        else if (lengthDesc > 150) {
            this.noValidate = true;
            this.descNo = 'max';
        }
        else {
            this.noValidate = false;
            this.descNo = null;
        }
    };
    HomelessProfileComponent.prototype.totalLength = function (ev) {
        console.log(Number(ev.target.value));
        var lengthMount = Number(ev.target.value);
        if (lengthMount < 10) {
            this.noValidate = true;
            this.mountNo = 'min';
        }
        else if (lengthMount > 9999999) {
            this.noValidate = true;
            this.mountNo = 'max';
        }
        else {
            this.noValidate = false;
            this.mountNo = null;
        }
    };
    HomelessProfileComponent.prototype.newEvent = function () {
        if (this.name === undefined || this.description === undefined || this.total === undefined) {
            this.toastr.error('Empty fields');
        }
        else {
            this.createEvent(this.idHomeless);
        }
    };
    HomelessProfileComponent.prototype.createEvent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spinner.show()];
                    case 1:
                        _a.sent();
                        body = {
                            id_homeless: id,
                            name: this.name,
                            total: this.total,
                            description: this.description,
                        };
                        this.homelessService.newEvent(id, body).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.closemodal();
                                        return [4 /*yield*/, this.spinner.hide()];
                                    case 1:
                                        _a.sent();
                                        this.toastr.success('Event added successfully');
                                        this.total = '';
                                        this.description = '';
                                        this.name = '';
                                        this.getEventList(this.idHomeless);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(error);
                                        return [4 /*yield*/, this.spinner.hide()];
                                    case 1:
                                        _a.sent();
                                        this.toastr.error(error);
                                        this.total = '';
                                        this.description = '';
                                        this.name = '';
                                        this.closemodal();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomelessProfileComponent.prototype.closemodal = function () {
        this.modalRef.hide();
    };
    HomelessProfileComponent.prototype.back = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigateByUrl('/user-profile')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomelessProfileComponent.prototype.openModal2 = function (img, idPort) {
        var _this = this;
        console.log(this.portfolio);
        var initialState = {
            data: [
                {
                    img: img,
                    id: idPort
                }
            ],
            type: 'onlyView'
        };
        this.bsModalRef = this.modalService2.show(src_app_shared_modal_imagen_modal_imagen_component__WEBPACK_IMPORTED_MODULE_11__["ModalImagenComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA fullscreen-modal');
        var _combine = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["combineLatest"])(this.modalService2.onHide, this.modalService2.onHidden).subscribe(function (data) {
            if (data[0] === 'close') {
                _this.ngOnInit();
            }
        });
    };
    HomelessProfileComponent.prototype.causeDetails = function (data) {
        var _this = this;
        var initialState = {
            data: [
                data
            ],
        };
        this.bsModalRef = this.modalService2.show(src_app_shared_causes_details_causes_details_component__WEBPACK_IMPORTED_MODULE_13__["CausesDetailsComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA fullscreen-modal');
        var _combine = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["combineLatest"])(this.modalService2.onHide, this.modalService2.onHidden).subscribe(function (data) {
            if (data[0] === 'close') {
                _this.ngOnInit();
            }
        });
    };
    HomelessProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-homeless-profile',
            template: __webpack_require__(/*! ./homeless-profile.component.html */ "./src/app/pages/homeless-profile/homeless-profile.component.html"),
            styles: [__webpack_require__(/*! ./homeless-profile.component.scss */ "./src/app/pages/homeless-profile/homeless-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _core_services_homeless_service__WEBPACK_IMPORTED_MODULE_0__["HomelessService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["Lightbox"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_7__["StripeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
    ], HomelessProfileComponent);
    return HomelessProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-searchbar class=\"w-100\"></app-searchbar>\r\n<main>\r\n\r\n  <div class=\"position-relative\">\r\n    <!-- shape Hero -->\r\n    <section class=\"section section-lg section-shaped pb-250\">\r\n      <div class=\"shape shape-style-1 shape-default\">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n      </div>\r\n      <div class=\"container py-lg-md d-flex\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <h1 class=\"display-3 text-white\">\r\n                Wonder Humans\r\n                <span>WHAT?</span>\r\n              </h1>\r\n              <p class=\"lead text-white\">\r\n                WonderHumans is a Tech platform designed to provide easy access\r\n                to the homeless population within local communities. The app\r\n                allows its users to identify, interact with and offer support to\r\n                those in need. WonderHumans Tech is going to roll out in Miami\r\n                as its first market. To test and perfect; then it can easily be\r\n                duplicated in every city.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- SVG separator -->\r\n      <div class=\"separator separator-bottom separator-skew\">\r\n        <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n          xmlns=\"http://www.w3.org/2000/svg\">\r\n          <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n        </svg>\r\n      </div>\r\n    </section>\r\n    <!-- 1st Hero Variation -->\r\n  </div>\r\n  <section class=\"section section-lg pt-lg-0 mt--200\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"row row-grid\">\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                    <i class=\"ni ni-bullet-list-67\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-primary text-uppercase\">\r\n                    What can you donate?\r\n                  </h6>\r\n                  <p class=\"description mt-3\">\r\n                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.\r\n                    Cumque ex nostrum ipsum, distinctio eos provident ratione\r\n                    delectus expedita soluta.\r\n                  </p>\r\n                  <!--  <div>\r\n                    <span class=\"badge badge-pill badge-primary\">angular</span>\r\n                    <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\r\n                    <span class=\"badge badge-pill badge-primary\">creative</span>\r\n                  </div> -->\r\n                  <a [routerLink]=\"['/landing']\" class=\"btn btn-primary mt-4\">Read more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"card card-lift--hover shadow border-0\">\r\n                <div class=\"card-body py-5\">\r\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\r\n                    <i class=\"ni ni-app\"></i>\r\n                  </div>\r\n                  <h6 class=\"text-warning text-uppercase\">Sign up</h6>\r\n                  <p class=\"description mt-3\">\r\n                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.\r\n                    Cumque ex nostrum ipsum, distinctio eos provident ratione\r\n                    delectus expedita soluta.\r\n                  </p>\r\n                  <!--   <div>\r\n                    <span class=\"badge badge-pill badge-warning\">marketing</span>\r\n                    <span class=\"badge badge-pill badge-warning\">product</span>\r\n                    <span class=\"badge badge-pill badge-warning\">launch</span>\r\n                  </div> -->\r\n                  <a [routerLink]=\"['/register']\" class=\"btn btn-warning mt-4\">Sign up</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"section section-lg section-shaped\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default1\">\r\n      <span class=\"bg-shape\"></span>\r\n      <span class=\"bg-shape\"></span>\r\n      <span class=\"bg-shape\" style=\"right: 85% !important;\"></span>\r\n      <span class=\"bg-shape\"></span>\r\n      <span class=\"bg-shape\"></span>\r\n      <span class=\"bg-shape\"></span>\r\n      <span class=\"bg-shape\"></span>\r\n      <span class=\"bg-shape\"></span>\r\n    </div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 order-md-2 float-imgs\">\r\n          <img src=\"./assets/img/theme/banner1.png\" class=\"img-fluid floating\" />\r\n          <img src=\"./assets/img/theme/banner2.png\" class=\"img-fluid floating\" />\r\n        </div>\r\n        <div class=\"col-md-6 order-md-1\">\r\n          <div class=\"pr-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5\">\r\n              <i class=\"fa fa-info\"></i>\r\n            </div>\r\n            <h3>ABOUT US</h3>\r\n            <p>\r\n              WonderHumans was a project that came out from the idea of our\r\n              founder fixing an existing need. already had, we decided to put\r\n              all our tech to a Wonderful use. WonderHumans exists to reveal the\r\n              stories and needs of those (in need/homeless) we pass every day,\r\n              and provide an effective, cashless way to respond.\r\n            </p>\r\n            <ul class=\"list-unstyled mt-5\">\r\n              <li class=\"p-4\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"fa fa-check-square-o\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">\r\n                      Homeless will leverage from the power of small donations\r\n                      to provide real help to people that need it the most\r\n                    </h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"p-4\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"fa fa-check-square-o\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">\r\n                      Street homeless neighbors with (immediate short-term)\r\n                      needs and helping them re-enter society thru freelance\r\n                      jobs in their line of work/talent\r\n                    </h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"p-4\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"fa fa-check-square-o\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">\r\n                      Through the website, QR code, Beacons you can contribute\r\n                      to their basic Through Bluetooth beacons and profiles, you\r\n                      can even see if there’s anyone who is in need of something\r\n                      nearby.\r\n                    </h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"p-4\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"fa fa-check-square-o\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">\r\n                      You can view profiles, Biography / Portfolio (skills) /\r\n                      Stats (donation tracking) / List of needs.\r\n                    </h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"p-4\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"fa fa-check-square-o\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">\r\n                      Opening the website and scanning a QR code or going to\r\n                      “Around Me” screen showing any homeless nearby. Scanning\r\n                      their QR code also detects the small beacon carried by\r\n                      each Homeless client that emits a Bluetooth signal over a\r\n                      radius.\r\n                    </h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"p-4\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"fa fa-check-square-o\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">\r\n                      By donating/scanning to a specific person you can\r\n                      now view the profiles and registries of all WonderHuman\r\n                      clients, regardless of if there are any around you.\r\n                    </h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"p-4\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"fa fa-check-square-o\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">\r\n                      You can also donate/hire again to one of your past homeless\r\n                      without the need of having them in front of you.\r\n                    </h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"p-4\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div>\r\n                    <div class=\"badge badge-circle badge-success mr-3\">\r\n                      <i class=\"fa fa-check-square-o\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <h6 class=\"mb-0\">\r\n                      By scanning or Clicking on any profile it will provide\r\n                      more information about the person, including how he or she\r\n                      became homeless, their short-term/long-term employment and\r\n                      housing goals, and what they have requested from\r\n                      WonderHuman donors. Clicking on “Donate now” brings you to\r\n                      the website wallet, which allows you to donate /hire\r\n                      directly to the homeless.\r\n                    </h6>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\"></div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <div #mapContainer id=\"map\" class=\"section section-lg\"></div>\r\n  <section class=\"section bg-secondary\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card bg-default shadow border-0\">\r\n            <img\r\n              src=\"https://images.unsplash.com/photo-1519430044529-9a9a57177865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=761&q=80\"\r\n              class=\"card-img-top\" />\r\n            <blockquote class=\"card-blockquote\">\r\n              <svg preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 583 95\" class=\"svg-bg\">\r\n                <polygon points=\"0,52 583,95 0,95\" class=\"fill-default\" />\r\n                <polygon points=\"0,42 583,95 683,0 0,95\" opacity=\".2\" class=\"fill-default\" />\r\n              </svg>\r\n              <h4 class=\"display-3 font-weight-bold text-white\">Our Mission & Vision</h4>\r\n              <p class=\"lead text-italic text-white\">\r\n                To provide a technology platform that empowers WonderHumans all\r\n                over the world to help end homelessness through financial\r\n                donations and employment opportunities.\r\n              </p>\r\n            </blockquote>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <div class=\"pl-md-5\">\r\n            <div class=\"icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5\">\r\n              <i class=\"ni ni-settings\"></i>\r\n            </div>\r\n            <h3>WHY?</h3>\r\n            <p class=\"lead\">\r\n              To provide a technology platform that allows community members to\r\n              make monetary contributions as gifts or in exchange for services\r\n              rendered that meet the skill set and abilities of an individual.\r\n              By providing this platform, we can all be WonderHumans and make a\r\n              positive impact worldwide.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"section pb-0 bg-gradient-warning\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid align-items-center\">\r\n        <div class=\"col-md-6 order-lg-2 ml-lg-auto\">\r\n          <div class=\"position-relative pl-md-5\">\r\n            <img src=\"./assets/img/ill/ill-2.svg\" class=\"img-center img-fluid\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 order-lg-1\">\r\n          <div class=\"d-flex px-3\">\r\n            <div>\r\n              <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n                <i class=\"ni ni-building text-primary\"></i>\r\n              </div>\r\n            </div>\r\n            <div class=\"pl-4\">\r\n              <h4 class=\"display-3 text-white\">\r\n                Together we can all be Wonder Humans.\r\n              </h4>\r\n              <!-- <p class=\"text-white\">Totam necessitatibus incidunt ab amet odio iusto?</p> -->\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <!-- <h5 class=\"title text-success\">Lorem Ipsum</h5> -->\r\n                  <p>\r\n                    Provide support, resources and tools the homeless need in\r\n                    order to change their current situation and reach their full\r\n                    potential as they re-enter society.\r\n                  </p>\r\n                  <!-- <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <!-- <h5 class=\"title text-success\">Lorem Ipsum</h5> -->\r\n                  <p>Provide a convenient and fully transparent solution.</p>\r\n                  <!-- <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                    <i class=\"ni ni-satisfied\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <!-- <h5 class=\"title text-success\">Lorem Ipsum</h5> -->\r\n                  <p>\r\n                    Provide support, resources and tools the homeless need in\r\n                    order to change their current situation and reach their full\r\n                    potential as they re-enter society.\r\n                  </p>\r\n                  <!-- <a href=\"javascript:void(0)\" class=\"text-success\">Learn more</a> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card shadow shadow-lg--hover mt-5\">\r\n            <div class=\"card-body\">\r\n              <div class=\"d-flex px-3\">\r\n                <div>\r\n                  <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                    <i class=\"ni ni-active-40\"></i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"pl-4\">\r\n                  <h5 class=\"title text-warning\">Lorem Ipsum</h5>\r\n                  <p>Totam necessitatibus incidunt ab amet odio iusto?</p>\r\n                  <a href=\"javascript:void(0)\" class=\"text-warning\">Learn more</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- SVG separator -->\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg bg-gradient-default\">\r\n    <div class=\"container pt-lg pb-300\">\r\n      <div class=\"row text-center justify-content-center\">\r\n        <div class=\"col-lg-10\">\r\n          <h2 class=\"display-3 text-white\">HOW?</h2>\r\n          <p class=\"lead text-white\">\r\n            The social ecosystem provides its users a means to identify those in\r\n            need, as well as a way to interact daily and contribute as often as\r\n            desired. Our WonderHumans help in many ways, from helping to geo-tag\r\n            those in need, creating profiles that highlight skill sets and tell\r\n            their stories, to making financial contributions that help those in\r\n            need get back on their feet and into more stable living conditions.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col-12\">\r\n          <h2 class=\"display-3 text-white text-center\">VALUES</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-grid mt-5\">\r\n        <div class=\"col-lg-6 flex-center\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-settings text-primary\"></i>\r\n          </div>\r\n          <h4 class=\"text-white mt-3\">Responsibility</h4>\r\n          <p class=\"lead text-white\">\r\n            We create an impact and change lives by working together and\r\n            following a proven tech-driven execution strategy paired with caring\r\n            human touch.\r\n          </p>\r\n          <p class=\"text-white mt-3\"></p>\r\n        </div>\r\n        <div class=\"col-lg-6 flex-center\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h4 class=\"text-white mt-3\">Rebuild</h4>\r\n          <p class=\"lead text-white\">\r\n            We combine our energy, team effort, and resources to help homeless\r\n            members of our communities improve their situations and escape the\r\n            stigma society places on them.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-grid mt-5\">\r\n        <div class=\"col-lg-4 flex-center\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h4 class=\"text-white mt-3\">Kindness</h4>\r\n          <p class=\"lead text-white mt-3\">\r\n            We empower WonderHumans to give, impact, and change the lives of\r\n            those in need, with the only expectation being a smile in return.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-lg-4 flex-center\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\r\n          </div>\r\n          <h4 class=\"text-white mt-3\">Determination</h4>\r\n          <p class=\"lead text-white mt-3\">\r\n            We work together with all supporters and participants in order to\r\n            succeed and carry out the WonderHumans mission.\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4 flex-center\">\r\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"ni ni-atom text-primary\"></i>\r\n          </div>\r\n          <h4 class=\"text-white mt-3\">Community Involvement</h4>\r\n          <p class=\"lead text-white mt-3\">\r\n            We aim to create change in our communities through technology,\r\n            teamwork, cooperation, and social impact\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- SVG separator -->\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class=\"section section-lg pt-lg-0 section-contact-us\">\r\n    <div class=\"container\">\r\n      <div class=\"row justify-content-center mt--300\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-gradient-secondary shadow\">\r\n            <div class=\"card-body p-lg-5\">\r\n              <h4 class=\"mb-1\">Want to communicate with us?</h4>\r\n              <p class=\"mt-0\">Your project is very important to us.</p>\r\n              <div class=\"form-group mt-5\" [ngClass]=\"{ focused: focus === true }\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus = true\"\r\n                    (blur)=\"focus = false\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus1 === true }\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1 = true\"\r\n                    (blur)=\"focus1 = false\" />\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group mb-4\">\r\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\"\r\n                  placeholder=\"Type a message...\"></textarea>\r\n              </div>\r\n              <div>\r\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">\r\n                  Send Message\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!-- <section class=\"section section-lg\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-grid justify-content-center\">\r\n        <div class=\"col-lg-8 text-center\">\r\n          <h2 class=\"display-3\">\r\n            Do you love this awesome\r\n            <span class=\"text-success\">Design System for Angular?</span>\r\n          </h2>\r\n          <p class=\"lead\">\r\n            Cause if you do, it can be yours for FREE. Hit the button below to\r\n            navigate to Creative Tim where you can find the Design System in\r\n            Angular. Start a new project or give an old Angular project a new\r\n            look!\r\n          </p>\r\n          <div class=\"btn-wrapper\">\r\n            <a\r\n              href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\"\r\n              class=\"btn btn-primary mb-3 mb-sm-0\"\r\n              >Download Angular</a\r\n            >\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a\r\n                  href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\"\r\n                  target=\"_blank\"\r\n                  placement=\"top\"\r\n                  ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\"\r\n                >\r\n                  <img\r\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\"\r\n                    class=\"img-fluid\"\r\n                  />\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a\r\n                  href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\"\r\n                  target=\"_blank\"\r\n                  placement=\"top\"\r\n                  ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\"\r\n                >\r\n                  <img\r\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\"\r\n                    class=\"img-fluid\"\r\n                  />\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a\r\n                  href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\"\r\n                  target=\"_blank\"\r\n                  placement=\"top\"\r\n                  ngbTooltip=\"Vue.js - The progressive javascript framework\"\r\n                >\r\n                  <img\r\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\"\r\n                    class=\"img-fluid\"\r\n                  />\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a\r\n                  href=\"https://www.sketchapp.com/?ref=creative-tim\"\r\n                  target=\"_blank\"\r\n                  placement=\"top\"\r\n                  ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\"\r\n                >\r\n                  <img\r\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\"\r\n                    class=\"img-fluid opacity-3\"\r\n                  />\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a\r\n                  href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\"\r\n                  target=\"_blank\"\r\n                  placement=\"top\"\r\n                  ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\"\r\n                >\r\n                  <img\r\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\"\r\n                    class=\"img-fluid opacity-3\"\r\n                  />\r\n                </a>\r\n              </div>\r\n              <div class=\"col-lg-2 col-4\">\r\n                <a\r\n                  href=\"https://reactjs.org/?ref=creative-tim\"\r\n                  target=\"_blank\"\r\n                  placement=\"top\"\r\n                  ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\"\r\n                >\r\n                  <img\r\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\"\r\n                    class=\"img-fluid opacity-3\"\r\n                  />\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section> -->\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-shaped .shape-style-1.shape-default {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n#map {\n  height: 500px;\n  width: 100%; }\n\n.flex-center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.flex-center h4 {\n    font-variant: small-caps; }\n\n.flex-center p {\n    text-align: center; }\n\n.float-imgs {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around; }\n\n.bg-shape {\n  background: linear-gradient(45deg, #a9ecd014, #a9ecd073) !important; }\n\n.bg-gradient-default1 {\n  background: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9DOlxcVXNlcnNcXE1pbGVubnlzX0RldlxcRGVza3RvcFxcUHJveWVjdG9zXFxOdWV2b1dvbmRlclxcd29uZGVyaHVtYW5zXFxmcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRkFBcUYsRUFBQTs7QUFFekY7RUFDSSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUVmO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBOztBQUh2QjtJQUtRLHdCQUF3QixFQUFBOztBQUxoQztJQVFRLGtCQUFrQixFQUFBOztBQUcxQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDZCQUE2QixFQUFBOztBQUVqQztFQUVJLG1FQUFtRSxFQUFBOztBQUV2RTtFQUNJLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tc2hhcGVkIC5zaGFwZS1zdHlsZS0xLnNoYXBlLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MGRlZywgI2NmM2E5ZSAxNSUsICNmZjYyNDAgNzAlLCAjZmJhYTRmIDk0JSkgIWltcG9ydGFudDtcclxufVxyXG4jbWFwIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG4uZmxleC1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4uZmxvYXQtaW1nc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmJnLXNoYXBle1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNhOWVjZDAxNCwgI2E5ZWNkMDczKSAhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1ncmFkaWVudC1kZWZhdWx0MXtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.title = 'angular-gmap';
        this.lat = 25.793091000000004;
        this.lng = -80.22628800000001;
        this.coordinates = new google.maps.LatLng(this.lat, this.lng);
        this.mapOptions = {
            center: this.coordinates,
            zoom: 20
        };
        this.marker = new google.maps.Marker({
            position: this.coordinates,
        });
    }
    LandingComponent.prototype.ngAfterViewInit = function () {
        this.mapInitializer();
    };
    LandingComponent.prototype.mapInitializer = function () {
        this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
        this.marker.setMap(this.map);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LandingComponent.prototype, "gmap", void 0);
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/pages/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/pages/landing/landing.component.scss")]
        })
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-gradient-default {\r\n    background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important;\r\n}\r\n.white-font{\r\n    color: white;\r\n}\r\n.text-danger{\r\n    font-variant: small-caps;\r\n    font-size: small;\r\n}\r\n.section-shaped {\r\n    position: inherit !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFGQUFxRjtBQUN6RjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1ncmFkaWVudC1kZWZhdWx0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsICNjZjNhOWUgMTUlLCAjZmY2MjQwIDcwJSwgI2ZiYWE0ZiA5NCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuLndoaXRlLWZvbnR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRleHQtZGFuZ2Vye1xyXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG4uc2VjdGlvbi1zaGFwZWQge1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Sign in with credentials</small>\r\n              </div>\r\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div\r\n                  class=\"form-group mb-3\"\r\n                  [ngClass]=\"{ focused: focus === true }\"\r\n                >\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"\r\n                        ><i class=\"ni ni-single-02\"></i\r\n                      ></span>\r\n                    </div>\r\n                    <input\r\n                      maxlength=\"25\"\r\n                      minlength=\"3\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Username\"\r\n                      formControlName=\"username\"\r\n                      type=\"text\"\r\n                      (focus)=\"focus = true\"\r\n                      (blur)=\"focus = false\"\r\n                      [ngClass]=\"{ 'is-invalid': f['username'].errors && f['username'].touched }\"\r\n                    />\r\n                  </div>\r\n                  <section class=\"m-2 text-danger\" *ngIf=\"f['username'].hasError('required') && (f['username'].touched || f['username'].dirty)\">\r\n                    *Required field\r\n                  </section>\r\n                  <section class=\"m-2 text-danger\" *ngIf=\"f['username'].hasError('minlength') && (f['username'].touched || f['username'].dirty)\">\r\n                    *3 is the minimum characters allowed\r\n                  </section>\r\n                  <section class=\"m-2 text-danger\" *ngIf=\"f['username'].hasError('maxlength') && (f['username'].touched || f['username'].dirty)\">\r\n                    *25 is the maximum characters allowed\r\n                  </section>\r\n                </div>\r\n                <div\r\n                  class=\"form-group\"\r\n                  [ngClass]=\"{ focused: focus1 === true }\"\r\n                >\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"\r\n                        ><i class=\"ni ni-lock-circle-open\"></i\r\n                      ></span>\r\n                    </div>\r\n                    <input\r\n                      class=\"form-control\"\r\n                      formControlName=\"password\"\r\n                      id=\"password\"\r\n                      placeholder=\"Password\"\r\n                      type=\"password\"\r\n                      (focus)=\"focus1 = true\"\r\n                      [ngClass]=\"{ 'is-invalid': f['password'].errors && f['password'].touched}\"\r\n                      (blur)=\"focus1 = false\"\r\n                    />\r\n                  </div>\r\n                  <section class=\"m-2 text-danger\" *ngIf=\"f['password'].hasError('required') && (f['password'].touched || f['password'].dirty)\">\r\n                    *Required field\r\n                  </section>\r\n                  <section class=\"m-2 text-danger\" *ngIf=\"f['password'].hasError('minlength')\">\r\n                    *5 is the minimum characters allowed\r\n                  </section>\r\n                  <section class=\"m-2 text-danger\" *ngIf=\"f['password'].hasError('maxlength')\">\r\n                    *25 is the maximum characters allowed\r\n                  </section>\r\n                </div>\r\n                <div\r\n                  class=\"custom-control custom-control-alternative custom-checkbox\"\r\n                >\r\n                  <input\r\n                    class=\"custom-control-input\"\r\n                    id=\" customCheckLogin\"\r\n                    type=\"checkbox\"\r\n                  />\r\n                  <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                    <span>Remember me</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button\r\n                    type=\"submit\"\r\n                    class=\"btn btn-primary my-4\"\r\n                    [disabled]=\"loginForm.invalid\"\r\n                  >\r\n                    Sign in\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-6\">\r\n              <a href=\"javascript:void(0)\" class=\"white-font\">\r\n                <small></small>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n              <a [routerLink]=\"['/register']\" class=\"white-font\">\r\n                <small>Create new account</small>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, spinner, toastr, lsService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.lsService = lsService;
        this.router = router;
        this.user = {};
        this.auth = {};
        this.submitted = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Validate token
        var token = this.lsService.getValue('token');
        if (token) {
            this.router.navigate(['/user-profile']);
        }
        // Build form
        this.loginForm = this.formBuilder.group({
            username: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)])
            ],
            password: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25)]
            ]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.submitted = true;
        if (this.loginForm.invalid) {
            this.spinner.hide();
            return;
        }
        // Set object
        this.auth.username = this.loginForm.get('username').value;
        this.auth.password = this.loginForm.get('password').value;
        // Send request
        this.authService.login(this.auth).subscribe(function (data) {
            _this.user.id = data.id;
            _this.user.token = data.token;
            _this.user.first_name = data.first_name;
            _this.user.last_name = data.last_name;
            _this.user.username = data.username;
            _this.user.email = data.email;
            _this.lsService.setValue('wonderHumanUser', JSON.stringify(_this.user));
            _this.spinner.hide();
            _this.toastr.success('Welcome', 'login success');
            _this.router.navigateByUrl('/user-profile');
        }, function (err) { console.log(err); _this.toastr.error('Error', err.error.detail); _this.spinner.hide(); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-homeless/new-homeless.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/new-homeless/new-homeless.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"profile-page\">\r\n  <section class=\"section-profile-cover section-shaped my-0\">\r\n    <!-- Circles background -->\r\n    <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <!-- SVG separator -->\r\n    <div class=\"separator separator-bottom separator-skew\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </section>\r\n  <section class=\"section\" *ngIf=\"newHomelessForm\">\r\n    <form role=\"form\" [formGroup]=\"newHomelessForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"container\">\r\n        <div class=\"card card-profile shadow mt--300\">\r\n          <div class=\"px-4\">\r\n            <div class=\"row justify-content-center mb-10\">\r\n              <div class=\"col-lg-3 order-lg-2\">\r\n                <div class=\"card-profile-image\">\r\n                  <ng-template #noImage>\r\n                    <div class=\"imagen-para-archivo\">\r\n                      <span>\r\n                        <label for=\"boton-archivo\">\r\n                          <img *ngIf=\"!dataEdit\"\r\n                            src=\"https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png\" class=\"imageU\" />\r\n                          <img *ngIf=\"dataEdit\" [src]=\"imageEdit\" class=\"imageU\" />\r\n                        </label>\r\n\r\n                        <input id=\"boton-archivo\" type=\"file\" accept=\"image/*\" (change)=\"showPreview($event)\" />\r\n                      </span>\r\n                    </div>\r\n                  </ng-template>\r\n                  <span *ngIf=\"imageURL && imageURL !== ''; else noImage\">\r\n                    <img [src]=\"imageURL\" class=\"imageU\" />\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Firstname</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\r\n                    </div>\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['firstName'].errors && f['firstName'].touched\r\n                      }\" formControlName=\"firstName\" class=\"form-control form-control-alternative\"\r\n                      placeholder=\"Ex: Jhon Thomas\" type=\"text\" />\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['firstName'].hasError('required') &&\r\n                    (f['firstName'].touched || f['firstName'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['firstName'].hasError('minlength') &&\r\n                    (f['firstName'].touched || f['firstName'].dirty)\r\n                  \">\r\n                  *3 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['firstName'].hasError('maxlength') &&\r\n                    (f['firstName'].touched || f['firstName'].dirty)\r\n                  \">\r\n                  *25 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Lastname</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" formControlName=\"lastName\" class=\"form-control\"\r\n                      placeholder=\"Ex: Doe Smith\" type=\"text\" [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['lastName'].errors && f['lastName'].touched\r\n                      }\" />\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['lastName'].hasError('required') &&\r\n                    (f['lastName'].touched || f['lastName'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['lastName'].hasError('minlength') &&\r\n                    (f['lastName'].touched || f['lastName'].dirty)\r\n                  \">\r\n                  *3 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['lastName'].hasError('maxlength') &&\r\n                    (f['lastName'].touched || f['lastName'].dirty)\r\n                  \">\r\n                  *25 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Birthdate</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-birthday\"></i></span>\r\n                    </div>\r\n                    <input [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['dateOfBirth'].errors && f['dateOfBirth'].touched\r\n                      }\" formControlName=\"dateOfBirth\" class=\"form-control form-control-alternative datepicker\"\r\n                      placeholder=\"Ex: 24/08/1990\" type=\"text\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" />\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['dateOfBirth'].hasError('required') &&\r\n                    (f['dateOfBirth'].touched || f['dateOfBirth'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Country</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['country'].errors && f['country'].touched\r\n                      }\" formControlName=\"country\" class=\"form-control\" placeholder=\"Ex: EEUU\" type=\"text\" />\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-world\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['country'].hasError('required') &&\r\n                    (f['country'].touched || f['country'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['country'].hasError('minlength') &&\r\n                    (f['country'].touched || f['country'].dirty)\r\n                  \">\r\n                  *4 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['country'].hasError('maxlength') &&\r\n                    (f['country'].touched || f['country'].dirty)\r\n                  \">\r\n                  *25 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">City</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid': f['city'].errors && f['city'].touched\r\n                      }\" formControlName=\"city\" class=\"form-control\" placeholder=\"Ex: Miami\" type=\"text\" />\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-compass-04\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['city'].hasError('required') &&\r\n                    (f['city'].touched || f['city'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['city'].hasError('minlength') &&\r\n                    (f['city'].touched || f['city'].dirty)\r\n                  \">\r\n                  *4 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['city'].hasError('maxlength') &&\r\n                    (f['city'].touched || f['city'].dirty)\r\n                  \">\r\n                  *15 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Email</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid': f['email'].errors && f['email'].touched\r\n                      }\" formControlName=\"email\" class=\"form-control form-control-alternative\"\r\n                      placeholder=\"Ex: Jhon@example.com\" type=\"email\" />\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['email'].hasError('required') &&\r\n                    (f['email'].touched || f['email'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['email'].hasError('email') &&\r\n                    (f['email'].touched || f['email'].dirty)\r\n                  \">\r\n                  *Invalid email\r\n                </section>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                  <label for=\"\">Occupation</label>\r\n                  <div class=\"input-group input-group-alternative mb-4\">\r\n                    <input (focus)=\"focus = true\" (blur)=\"focus = false\" [ngClass]=\"{\r\n                        'is-invalid':\r\n                          f['occupation'].errors && f['occupation'].touched\r\n                      }\" formControlName=\"occupation\" class=\"form-control\" placeholder=\"Ex: Designer\" type=\"text\" />\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-briefcase-24\"></i></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['occupation'].hasError('required') &&\r\n                    (f['occupation'].touched || f['occupation'].dirty)\r\n                  \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['occupation'].hasError('minlength') &&\r\n                    (f['occupation'].touched || f['occupation'].dirty)\r\n                  \">\r\n                  *3 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                    f['occupation'].hasError('maxlength') &&\r\n                    (f['occupation'].touched || f['occupation'].dirty)\r\n                  \">\r\n                  *25 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n              <div class=\"col-12\">\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input formControlName=\"show_email\" class=\"custom-control-input\" id=\"show_email\" type=\"checkbox\" />\r\n                  <label class=\"custom-control-label\" for=\"show_email\">\r\n                    <span>Show email</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mb-4\">\r\n              <div class=\"col-6\">\r\n                <label for=\"\">Location detail</label>\r\n                <textarea maxlength=\"100\" (keyup)=\"onKey($event)\" (focus)=\"focus = true\" (blur)=\"focus = false\"\r\n                  [ngClass]=\"{\r\n                    'is-invalid': f['location_detail'].errors && f['location_detail'].touched\r\n                  }\" formControlName=\"location_detail\" class=\"form-control form-control-alternative\" rows=\"3\"\r\n                  placeholder=\"Write something here\"></textarea>\r\n                <span *ngIf=\"contator\"\r\n                  style=\"float: right;font-variant: small-caps;margin-top: 0.3rem;\">{{contator}}/{{restante}}\r\n                  caracteres</span>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                      f['location_detail'].hasError('required') &&\r\n                      (f['location_detail'].touched || f['location_detail'].dirty)\r\n                    \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                      f['location_detail'].hasError('minlength') &&\r\n                      (f['location_detail'].touched || f['location_detail'].dirty)\r\n                    \">\r\n                  *3 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                      f['location_detail'].hasError('maxlength') &&\r\n                      (f['location_detail'].touched || f['location_detail'].dirty)\r\n                    \">\r\n                  *50 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <label for=\"\">About you</label>\r\n                <textarea maxlength=\"100\" (keyup)=\"onKeyt($event)\" (focus)=\"focus = true\" (blur)=\"focus = false\"\r\n                  [ngClass]=\"{\r\n                    'is-invalid': f['aboutYou'].errors && f['aboutYou'].touched\r\n                  }\" formControlName=\"aboutYou\" class=\"form-control form-control-alternative\" rows=\"3\"\r\n                  placeholder=\"Write something here\"></textarea>\r\n                <span *ngIf=\"contatort\"\r\n                  style=\"float: right;font-variant: small-caps;margin-top: 0.3rem;\">{{contatort}}/{{restantet}}\r\n                  characters</span>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                      f['aboutYou'].hasError('required') &&\r\n                      (f['aboutYou'].touched || f['aboutYou'].dirty)\r\n                    \">\r\n                  *Required field\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                      f['aboutYou'].hasError('minlength') &&\r\n                      (f['aboutYou'].touched || f['aboutYou'].dirty)\r\n                    \">\r\n                  *4 is the minimum characters allowed\r\n                </section>\r\n                <section class=\"m-2 text-danger\" *ngIf=\"\r\n                      f['aboutYou'].hasError('maxlength') &&\r\n                      (f['aboutYou'].touched || f['aboutYou'].dirty)\r\n                    \">\r\n                  *100 is the maximum characters allowed\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"!dataEdit\">\r\n              <div class=\"col-12\">\r\n                <label for=\"\">Portfolio</label>\r\n                <file-upload class=\"w-100\" formControlName=\"portfolio\"></file-upload>\r\n                <span style=\"float: right;font-variant: small-caps;\">Maximum photos allowed: 4</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"row mt-5 mb-5 float-right\">\r\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"newHomelessForm.invalid\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/new-homeless/new-homeless.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/new-homeless/new-homeless.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mb-10 {\n  margin-bottom: 10rem; }\n\n.section-shaped .shape-style-1.shape-primary {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n.text-danger {\n  font-variant: small-caps;\n  font-size: small; }\n\n.imagen-para-archivo input {\n  display: none; }\n\n.imageU {\n  border-radius: 50% !important;\n  width: 180px !important;\n  max-width: 180px !important;\n  height: 180px !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LWhvbWVsZXNzL0M6XFxVc2Vyc1xcTWlsZW5ueXNfRGV2XFxEZXNrdG9wXFxQcm95ZWN0b3NcXE51ZXZvV29uZGVyXFx3b25kZXJodW1hbnNcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcbmV3LWhvbWVsZXNzXFxuZXctaG9tZWxlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxxRkFLWSxFQUFBOztBQUVkO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QiwrQkFBNEI7S0FBNUIsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXctaG9tZWxlc3MvbmV3LWhvbWVsZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1iLTEwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxufVxyXG4uc2VjdGlvbi1zaGFwZWQgLnNoYXBlLXN0eWxlLTEuc2hhcGUtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTUwZGVnLFxyXG4gICAgI2NmM2E5ZSAxNSUsXHJcbiAgICAjZmY2MjQwIDcwJSxcclxuICAgICNmYmFhNGYgOTQlXHJcbiAgKSAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLmltYWdlbi1wYXJhLWFyY2hpdm8gaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmltYWdlVSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcclxuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/new-homeless/new-homeless.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-homeless/new-homeless.component.ts ***!
  \**************************************************************/
/*! exports provided: NewHomelessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHomelessComponent", function() { return NewHomelessComponent; });
/* harmony import */ var _core_services_homeless_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/services/homeless.service */ "./src/app/core/services/homeless.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iplab/ngx-file-upload */ "./node_modules/@iplab/ngx-file-upload/fesm5/iplab-ngx-file-upload.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var NewHomelessComponent = /** @class */ (function () {
    function NewHomelessComponent(formBuilder, spinner, toastr, router, homelessService, route) {
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.homelessService = homelessService;
        this.route = route;
        this.fileUploadControl = new _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadControl"](_iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadValidators"].filesLimit(4));
        this.newHomeless = {};
        this.submitted = false;
        this.filesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _iplab_ngx_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadValidators"].filesLimit(4));
        this.portfolio = [];
        this.environmentY = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiRoot;
        this.idHomeless = this.route.snapshot.paramMap.get('idHomeless');
    }
    NewHomelessComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.idHomeless) {
            this.initForm();
        }
        else {
            this.homelessService.getHomelessProfile(this.idHomeless).subscribe(function (data) {
                _this.dataEdit = data;
                _this.imageEdit = "" + _this.environmentY + _this.dataEdit['photo'];
                var d = new Date(data['dateOfBirth']);
                _this.date = {
                    day: d.getDate() + 1,
                    month: d.getMonth() + 1,
                    year: d.getFullYear()
                };
                _this.initForm(data);
            }, function (error) {
                console.log(error);
            });
        }
    };
    NewHomelessComponent.prototype.initForm = function (dataUser) {
        // Build form
        this.newHomelessForm = this.formBuilder.group({
            firstName: [(dataUser) ? dataUser.firstName : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25),
                ]],
            lastName: [(dataUser) ? dataUser.lastName : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25),
                ]],
            email: [(dataUser) ? dataUser.email : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
                ]],
            occupation: [(dataUser) ? dataUser.occupation : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25),
                ]],
            city: [(dataUser) ? dataUser.city : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15),
                ]],
            country: [(dataUser) ? dataUser.country : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25),
                ]],
            dateOfBirth: [(dataUser) ? this.date : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            aboutYou: [(dataUser) ? dataUser.aboutYou : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100),
                ]],
            location_detail: [(dataUser) ? dataUser.location_detail : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                ]],
            show_email: [(dataUser) ? dataUser.show_email : false],
            portfolio: this.filesControl,
            photo: [null],
        });
    };
    Object.defineProperty(NewHomelessComponent.prototype, "f", {
        get: function () { return this.newHomelessForm.controls; },
        enumerable: true,
        configurable: true
    });
    NewHomelessComponent.prototype.fileBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });
    };
    NewHomelessComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, i, file, fileData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.portfolio.length = 0;
                        files = this.filesControl.value;
                        if (!(files !== null)) return [3 /*break*/, 5];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.filesControl.value.length)) return [3 /*break*/, 4];
                        file = this.filesControl.value[i];
                        return [4 /*yield*/, this.fileBase64(file)];
                    case 2:
                        fileData = _a.sent();
                        this.portfolio.push({
                            photo: fileData,
                        });
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.submit(this.portfolio);
                        return [3 /*break*/, 6];
                    case 5:
                        this.submit();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    NewHomelessComponent.prototype.calcularEdad = function (fecha) {
        var fecha_nacimiento = fecha.year + "/" + fecha.month + "/" + fecha.day;
        var hoy = new Date();
        var cumpleanos = new Date(fecha_nacimiento);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    };
    NewHomelessComponent.prototype.submit = function (portfolio) {
        var edad = this.calcularEdad(this.newHomelessForm.get('dateOfBirth').value);
        if (edad >= 12) {
            var show = this.newHomelessForm.get('show_email').value;
            this.newHomeless = {};
            this.newHomeless.firstName = this.newHomelessForm.get('firstName').value;
            this.newHomeless.lastName = this.newHomelessForm.get('lastName').value;
            this.newHomeless.email = this.newHomelessForm.get('email').value;
            this.newHomeless.occupation = this.newHomelessForm.get('occupation').value;
            this.newHomeless.city = this.newHomelessForm.get('city').value;
            this.newHomeless.country = this.newHomelessForm.get('country').value;
            this.newHomeless.dateOfBirth = (this.newHomelessForm.get('dateOfBirth').value);
            this.newHomeless.aboutYou = this.newHomelessForm.get('aboutYou').value;
            this.newHomeless.location_detail = this.newHomelessForm.get('location_detail').value;
            this.newHomeless.show_email = (show === true) ? 'True' : 'False';
            this.newHomeless.portfolio = (this.filesControl.value !== null) ? portfolio : null;
            this.newHomeless.photo = (this.imageURL) ? this.imageURL : null;
            if (!this.idHomeless) {
                this.newHomelessCreate(this.newHomeless);
            }
            else {
                this.editHomeless(this.newHomeless);
            }
        }
        else {
            this.toastr.error('The allowed date birth is 12 years ago');
        }
    };
    NewHomelessComponent.prototype.onKey = function (event) {
        this.contator = event.target.value.length;
        if (this.contator <= 100) {
            this.restante = 100 - this.contator;
        }
    };
    NewHomelessComponent.prototype.onKeyt = function (event) {
        this.contatort = event.target.value.length;
        if (this.contatort <= 100) {
            this.restantet = 100 - this.contatort;
        }
    };
    NewHomelessComponent.prototype.newHomelessCreate = function (dataHomeless) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Send request
                    return [4 /*yield*/, this.spinner.show()];
                    case 1:
                        // Send request
                        _a.sent();
                        this.homelessService.newHomeless(dataHomeless).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.spinner.hide()];
                                    case 1:
                                        _a.sent();
                                        this.toastr.success('Successful registration');
                                        return [4 /*yield*/, this.router.navigateByUrl('/user-profile')];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(err);
                                        this.toastr.error('Error', err.error.detail);
                                        return [4 /*yield*/, this.spinner.hide()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewHomelessComponent.prototype.editHomeless = function (dataHomeless) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = {
                            id: this.idHomeless,
                            firstName: dataHomeless.firstName,
                            lastName: dataHomeless.lastName,
                            email: dataHomeless.email,
                            show_email: dataHomeless.show_email,
                            occupation: dataHomeless.occupation,
                            city: dataHomeless.city,
                            country: dataHomeless.country,
                            dateOfBirth: dataHomeless.dateOfBirth,
                            location_detail: dataHomeless.location_detail,
                            aboutYou: dataHomeless.aboutYou,
                            photo: dataHomeless.photo
                        };
                        return [4 /*yield*/, this.spinner.show()];
                    case 1:
                        _a.sent();
                        this.homelessService.editHomeless(body).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.spinner.hide()];
                                    case 1:
                                        _a.sent();
                                        this.toastr.success('Successful update');
                                        return [4 /*yield*/, this.router.navigateByUrl('/user-profile')];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(err);
                                        this.toastr.error('Error', err.error.detail);
                                        return [4 /*yield*/, this.spinner.hide()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewHomelessComponent.prototype.photoAdd = function (event) {
        this.showPreview(event);
    };
    // Image Preview
    NewHomelessComponent.prototype.showPreview = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.newHomelessForm.patchValue({
            photo: file
        });
        this.newHomelessForm.get('photo').updateValueAndValidity();
        // File Preview
        var reader = new FileReader();
        reader.onload = function () {
            _this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    };
    NewHomelessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-new-homeless',
            template: __webpack_require__(/*! ./new-homeless.component.html */ "./src/app/pages/new-homeless/new-homeless.component.html"),
            styles: [__webpack_require__(/*! ./new-homeless.component.scss */ "./src/app/pages/new-homeless/new-homeless.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_services_homeless_service__WEBPACK_IMPORTED_MODULE_0__["HomelessService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NewHomelessComponent);
    return NewHomelessComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-searchbar class=\"w-100\"></app-searchbar>\r\n\r\n<main class=\"profile-page\">\r\n  <section class=\"section-profile-cover section-shaped my-0\">\r\n    <!-- Circles background -->\r\n    <div class=\"shape shape-style-1 shape-primary alpha-4\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <!-- SVG separator -->\r\n    <!-- <div class=\"separator separator-bottom separator-skew\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div> -->\r\n  </section>\r\n  <section class=\"section\">\r\n    <div class=\"container\">\r\n      <div class=\"card card-profile shadow mt--300\">\r\n        <div class=\"px-4\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-4 col-md-12 col-sm-12 order-md-1 order-xs-1 order-sm-1 order-lg-2\">\r\n              <div class=\"card-profile-image\">\r\n                <a href=\"javascript:void(0)\">\r\n                  <img [src]=\"imgDef\" *ngIf=\"imageUrl === null\" class=\"rounded-circle\">\r\n                  <img [src]=\"imageUrl\" class=\"imageU\" *ngIf=\"imageUrl !== null\">\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div\r\n              class=\"col-lg-4 order-lg-3 order-md-3 order-sm-3 order-xs-3 text-lg-right align-self-lg-center col-md-12 col-sm-12 \">\r\n              <div class=\"card-profile-actions d-flex justify-content-center mt-xs-4\">\r\n                <a [routerLink]=\"['/new-homeless']\" class=\"btn btn-sm btn-info \" *ngIf=\"profile\">Register new\r\n                  homeless</a>\r\n                <!-- <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default \">Message</a> -->\r\n                <a [routerLink]=\"['/food-run']\" class=\"btn btn-sm btn-success\" *ngIf=\"profile\">Add food run</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-4 order-lg-1 order-md-2 order-sm-2 order-xs-2 col-md-12 col-sm-12 mt-md-7 mt-lg-0\">\r\n              <div class=\"card-profile-stats d-flex justify-content-center\">\r\n                <div>\r\n                  <span class=\"heading\">0</span>\r\n                  <span class=\"description\">Friends</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">0</span>\r\n                  <span class=\"description\">Donations</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">0</span>\r\n                  <span class=\"description\">Volunteer</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center mt-5\">\r\n            <h3>{{user.first_name}} {{user.last_name}}\r\n            </h3>\r\n            <a [routerLink]=\"['/edit-profile']\" class=\"btn btn-sm btn-warning \" *ngIf=\"profile\">Edit profile</a>\r\n            <ng-container *ngIf=\"profile\">\r\n              <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>{{profile.phone}}</div>\r\n              <div class=\"h6 font-weight-300\" *ngIf=\"profile.show_email === true\"><i\r\n                  class=\"ni location_pin mr-2\"></i>{{user.email}}</div>\r\n              <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>{{profile.country}} - {{profile.city}}\r\n              </div>\r\n              <div class=\"h6 about-font\"><i class=\"ni location_pin mr-2\"></i>{{profile.aboutYou}}</div>\r\n              <h5 *ngIf=\"userHomeless === null\" style=\"padding: 1rem;\r\n              font-variant: all-small-caps;\">You do not have any registered homeless</h5>\r\n              <div class=\"row align\" *ngIf=\"userHomeless !== null\">\r\n                <div class=\"col-2 end\">\r\n                  <button (click)=\"moveLeft()\" class=\"btn-arrow\"><i class=\"fa fa-arrow-left\"></i></button>\r\n                </div>\r\n                <div class=\"col-8 mt-3 mb-3\" style=\"display: flex;\r\n                justify-content: space-around;\">\r\n\r\n                  <drag-scroll id=\"dragProfile\" *ngFor=\"let item of dataHom\" class=\"demo-one\"\r\n                    drag-scroll-y-disabled=\"true\" scrollbar-hidden=\"true\" (dsInitialized)=\"onDragScrollInitialized()\"\r\n                    (indexChanged)=\"onIndexChanged($event)\" (reachesLeftBound)=\"leftBoundStat($event)\"\r\n                    (reachesRightBound)=\"rightBoundStat($event)\" (snapAnimationFinished)=\"onSnapAnimationFinished()\"\r\n                    (dragStart)=\"onDragStart()\" (dragEnd)=\"onDragEnd()\" #nav>\r\n                    <img id=\"imageHom\" style=\"border: 2px solid lightgray;cursor: pointer;\"\r\n                      routerLink=\"/homeless-profile/{{item.id}}\" drag-scroll-item src=\"{{item.photo}}\" />\r\n\r\n                    <p style=\"line-height: 0.7;\r\n                      font-size: small;\r\n                      font-weight: 800;\r\n                      margin-bottom: 0 !important;\r\n                      margin-top: 5px;\">{{item.name | slice:0:12}}</p>\r\n\r\n                  </drag-scroll>\r\n                </div>\r\n                <div class=\"col-2 start\">\r\n                  <button (click)=\"moveRight()\" class=\"btn-arrow\"><i class=\"fa fa-arrow-right\"></i></button>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n            <div *ngIf=\"!profile\">\r\n              <a [routerLink]=\"['/edit-profile']\" class=\"btn btn-lg btn-warning mb-2\">Complete profile</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <div class=\"row justify-content-center\">\r\n              <section class=\"pb-5\">\r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <h5 class=\"w-100\"><i class=\"ni ni-album-2\"></i> Publications</h5>\r\n                  </div>\r\n                  <!-- <div *ngFor=\"let item of feedData\" class=\"col-md-3 col-lg-3\" style=\"display: flex;\r\njustify-content: center;\r\nalign-items: center;margin:0.5em\">\r\n  <span style=\"\">\r\n\r\n    <div class=\"span-cua ih-item square effect13 bottom_to_top\" style=\"widht:100%;box-shadow: 1px 1px 7px #808080e0;\r\n  \"><a>\r\n        <div class=\"img\" style=\"display: contents;\"><img src=\"{{environmentHomeless}}{{item.image}}\"\r\n            alt=\"img\" (click)=\"openModalWithComponent(item)\"></div>\r\n        <div class=\"info\" (click)=\"openModalWithComponent(item)\">\r\n          <h3 style=\"display: flex;\r\n            justify-content: center; background-color: transparent;\">\r\n            <p style=\"font-size: large; font-weight: 700;\"><i class=\"ni ni-chat-round\"></i>\r\n              {{item.total_comments}}</p>\r\n            <p style=\"font-size: large; font-weight: 700;\"><i class=\"ni ni-favourite-28\"></i>\r\n              {{item.total_likes}}</p>\r\n          </h3>\r\n\r\n        </div>\r\n      </a></div>\r\n  </span>\r\n</div> -->\r\n                  <div class=\"row\" style=\"justify-content: center;\">\r\n\r\n                    <div class=\"grid-container\">\r\n\r\n                      <article *ngFor=\"let item of feedData\" id=\"3685\" class=\"location-listing\">\r\n\r\n                        <a class=\" location-title\" (click)=\"openModalWithComponent(item)\">\r\n                          <h3 style=\"display: flex;\r\n                            justify-content: space-evenly;\r\n                            background-color: transparent;\r\n                            width: 100%;\r\n                            color: white;\">\r\n                            <p style=\"font-size: large; font-weight: 700;\"><i class=\"ni ni-chat-round\"></i>\r\n                              {{item.total_comments}}</p>\r\n                            <p style=\"font-size: large; font-weight: 700;\"><i class=\"ni ni-favourite-28\"></i>\r\n                              {{item.total_likes}}</p>\r\n                          </h3>\r\n                        </a>\r\n\r\n                        <div class=\"location-image\">\r\n                          <a href=\"#\">\r\n                            <img width=\"300\" height=\"169\" src=\"{{environmentHomeless}}{{item.image}}\"\r\n                              alt=\"san francisco\"></a>\r\n\r\n                        </div>\r\n\r\n                      </article>\r\n\r\n\r\n\r\n                    </div>\r\n                    <!-- end grid container -->\r\n                  </div>\r\n\r\n                  <!-- <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let homeless of userHomeless\" >\r\n                        <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\r\n                          <div class=\"mainflip\">\r\n                            <div class=\"frontside\">\r\n                              <div class=\"card\">\r\n                                <div class=\"card-body text-center\">\r\n                                  <p><img class=\" img-fluid\"\r\n                                      src=\"https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1112&q=80\"\r\n                                      alt=\"card image\"></p>\r\n                                  <h4 class=\"card-title\">{{homeless.firstName}} {{homeless.lastName}}</h4>\r\n                                  <p class=\"card-text\">{{homeless.occupation}}</p>\r\n                                  <p class=\"card-text\">{{homeless.phone}}</p>\r\n                                  <a href=\"#\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-plus\"></i></a>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"backside\">\r\n                              <div class=\"card\">\r\n                                <div class=\"card-body text-center mt-4\">\r\n                                  <h4 class=\"card-title\">{{homeless.firstName}} {{homeless.lastName}}</h4>\r\n                                  <p class=\"card-text\">{{homeless.aboutYou}}</p>\r\n                                  <div>\r\n                                    <a routerLink=\"/homeless-profile/{{homeless.id}}\" class=\"btn btn-sm btn-warning\">Ver profile</a>\r\n\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div> -->\r\n\r\n                </div>\r\n              </section>\r\n            </div>\r\n            <div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <button (click)=\"openModal2()\" class=\"btn-float\">\r\n    <i class=\"ni ni-fat-add\"></i>\r\n  </button>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n@charset \"UTF-8\";\n/* FontAwesome for working BootSnippet :> */\n#team {\n  background: #eee !important; }\n.btn-primary:hover,\n.btn-primary:focus {\n  background-color: #ff4100;\n  border-color: #FF5722;\n  box-shadow: none;\n  outline: none; }\n.btn-primary {\n  color: #fff;\n  background-color: #FF5722;\n  border-color: #F44336; }\nsection {\n  padding: 60px 0; }\nsection .section-title {\n  text-align: center;\n  color: #F44336;\n  margin-bottom: 50px;\n  text-transform: uppercase; }\n#team .card {\n  border: none;\n  background: #ffffff; }\n.image-flip:hover .backside,\n.image-flip.hover .backside {\n  -webkit-transform: rotateY(0deg);\n  transform: rotateY(0deg);\n  border-radius: .25rem; }\n.image-flip:hover .frontside,\n.image-flip.hover .frontside {\n  -webkit-transform: rotateY(180deg);\n  transform: rotateY(180deg); }\n.mainflip {\n  -webkit-transition: 1s;\n  -webkit-transform-style: preserve-3d;\n  -ms-transition: 1s;\n  -moz-transition: 1s;\n  -moz-transform: perspective(1000px);\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  transition: 1s;\n  transform-style: preserve-3d;\n  position: relative; }\n.frontside {\n  position: relative;\n  -webkit-transform: rotateY(0deg);\n  -ms-transform: rotateY(0deg);\n  z-index: 2;\n  margin-bottom: 30px; }\n.backside {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: white;\n  -webkit-transform: rotateY(-180deg);\n  transform: rotateY(-180deg);\n  box-shadow: 5px 7px 9px -4px #9e9e9e;\n  width: 100%; }\n.frontside,\n.backside {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transition: 1s;\n  -webkit-transform-style: preserve-3d;\n  -moz-transition: 1s;\n  -moz-transform-style: preserve-3d;\n  -o-transition: 1s;\n  -o-transform-style: preserve-3d;\n  -ms-transition: 1s;\n  -ms-transform-style: preserve-3d;\n  transition: 1s;\n  transform-style: preserve-3d; }\n.frontside .card,\n.backside .card {\n  min-height: 354px; }\n.backside .card a {\n  font-size: 18px;\n  color: #ffffff !important; }\n.frontside .card .card-title,\n.backside .card .card-title {\n  color: #F44336 !important; }\n.frontside .card .card-body img {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%; }\n.section-shaped .shape-style-1.shape-primary {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n#imageHom:hover {\n  box-shadow: -1px 1px 0px 1px #f443363d; }\n.section-shaped .shape {\n  position: fixed !important;\n  top: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%; }\n.about-font {\n  font-weight: 600 !important;\n  font-variant: petite-caps; }\n.separator-bottom {\n  top: auto;\n  bottom: 0;\n  z-index: 0 !important; }\n@media (min-width: 768px) and (max-width: 1000px) {\n  .mt-md-7,\n  .my-md-7 {\n    margin-top: 5rem !important; } }\n@media (max-width: 575.98px) {\n  .profile-page .card-profile .card-profile-actions {\n    margin-top: 125px; } }\n.imageU {\n  border-radius: 50% !important;\n  width: 180px !important;\n  max-width: 180px !important;\n  height: 180px !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important; }\n.drag-scroll {\n  height: 50px;\n  width: 100px; }\n.demo-one {\n  width: 100%; }\n.demo-one img {\n  height: 4rem;\n  width: 4rem;\n  margin: 0;\n  border-radius: 50%; }\n.demo-one img .drag-scroll-wrapper {\n    height: 100%; }\n.btn-arrow {\n  padding: 0.5rem;\n  border-radius: 50%;\n  font-size: small;\n  background: #3333338c;\n  border: none;\n  color: white;\n  font-weight: 700;\n  line-height: 2;\n  width: 2.5rem; }\n.end {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end; }\n.start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start; }\n.align {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 !important; }\n.btn-arrow:focus {\n  outline: ridge;\n  outline-color: #0c0c0c21; }\n.span-cua {\n  width: 100%;\n  height: 12rem;\n  border: 0 !important; }\n.span-cua img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n.btn-float {\n  float: right;\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  background: #e64d72;\n  border-color: azure;\n  color: white;\n  font-size: 2rem;\n  line-height: 2; }\nimg:focus {\n  outline: 1px dotted;\n  outline: transparent; }\nimg {\n  width: 100%;\n  /* need to overwrite inline dimensions */\n  height: auto; }\nh2 {\n  margin-bottom: .5em; }\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 1em; }\n/* hover styles */\n.location-listing {\n  position: relative;\n  box-shadow: 1px 1px 7px #808080e0; }\n.location-image {\n  line-height: 0;\n  overflow: hidden; }\n.location-image img {\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  -webkit-transition: -webkit-filter 0.3s ease-in;\n  transition: -webkit-filter 0.3s ease-in;\n  transition: filter 0.3s ease-in;\n  transition: filter 0.3s ease-in, -webkit-filter 0.3s ease-in;\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n.location-title {\n  font-size: 1.5em;\n  font-weight: bold;\n  text-decoration: none;\n  z-index: 1;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n  background: #0a0b0cc7;\n  color: white;\n  /* position the text in t’ middle*/\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.location-listing:hover .location-title {\n  opacity: 1; }\n.location-listing:hover .location-image img {\n  -webkit-filter: blur(2px);\n          filter: blur(2px); }\n/* for touch screen devices */\n@media (hover: none) {\n  .location-title {\n    opacity: 1; }\n  .location-image img {\n    -webkit-filter: blur(2px);\n            filter: blur(2px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXE1pbGVubnlzX0RldlxcRGVza3RvcFxcUHJveWVjdG9zXFxOdWV2b1dvbmRlclxcd29uZGVyaHVtYW5zXFxmcm9udGVuZC9zcmNcXGFzc2V0c1xcc2Nzc1xcX3Jldmlld3Muc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL0M6XFxVc2Vyc1xcTWlsZW5ueXNfRGV2XFxEZXNrdG9wXFxQcm95ZWN0b3NcXE51ZXZvV29uZGVyXFx3b25kZXJodW1hbnNcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsMEZBQVk7QUNGWixnQkFBZ0I7QURBaEIsMkNBQUE7QUFHQTtFQUNJLDJCQUEyQixFQUFBO0FBRy9COztFQUVJLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdqQjtFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCLEVBQUE7QUFHekI7RUFDSSxlQUFlLEVBQUE7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtBQUd2Qjs7RUFFSSxnQ0FBZ0M7RUFJaEMsd0JBQXdCO0VBQ3hCLHFCQUFxQixFQUFBO0FBR3pCOztFQUVJLGtDQUFrQztFQUdsQywwQkFBMEIsRUFBQTtBQUc5QjtFQUNJLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUluQywyQkFBMkI7RUFHM0Isb0NBQStDO0VBQy9DLFdBQVcsRUFBQTtBQUdmOztFQUVJLG1DQUFtQztFQUduQywyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsNEJBQTRCLEVBQUE7QUFHaEM7O0VBRUksaUJBQWlCLEVBQUE7QUFHckI7RUFDSSxlQUFlO0VBQ2YseUJBQXdCLEVBQUE7QUFHNUI7O0VBRUkseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FFOUh0QjtFQUNFLHFGQUcyQixFQUFBO0FBRzdCO0VBQ0Usc0NBQXNDLEVBQUE7QUFHeEM7RUFDRSwwQkFBMEI7RUFDMUIsTUFBTTtFQUNOLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2Q7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULHFCQUFxQixFQUFBO0FBR3ZCO0VBRUU7O0lBRUUsMkJBQTJCLEVBQUEsRUFDNUI7QUFHSDtFQUNFO0lBQ0UsaUJBQWlCLEVBQUEsRUFDbEI7QUFHSDtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QiwrQkFBNEI7S0FBNUIsNEJBQTRCLEVBQUE7QUFHOUI7RUFDRSxZQUFZO0VBQ1osWUFDRixFQUFBO0FBRUE7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULGtCQUFrQixFQUFBO0FBSnBCO0lBT0ksWUFBWSxFQUFBO0FBSWhCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBRXJCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhLEVBQUE7QUFJZjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtBQUczQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHVCQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTtBQUc3QjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCLEVBQUE7QUFHMUI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQixFQUFBO0FBSHRCO0lBTUksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCLEVBQUE7QUFJckI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUdoQjtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTtBQUt0QjtFQUNFLFdBQVc7RUFDWCx3Q0FBQTtFQUNBLFlBQVksRUFBQTtBQUdkO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELGFBQWEsRUFBQTtBQUlmLGlCQUFBO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDLEVBQUE7QUFHbkM7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLCtDQUErQjtFQUEvQix1Q0FBK0I7RUFBL0IsK0JBQStCO0VBQS9CLDREQUErQjtFQUMvQiw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsK0JBQXVCO0VBQXZCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUVaLGtDQUFBO0VBQ0Esb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7QUFHekI7RUFDRSxVQUFVLEVBQUE7QUFHWjtFQUNFLHlCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTtBQUluQiw2QkFBQTtBQUNBO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFHWjtJQUNFLHlCQUFpQjtZQUFqQixpQkFBaUIsRUFBQSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZvbnRBd2Vzb21lIGZvciB3b3JraW5nIEJvb3RTbmlwcGV0IDo+ICovXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcbiN0ZWFtIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxyXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDEwMDtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGNTcyMjtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1NzIyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRjQ0MzM2O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuc2VjdGlvbiAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0Y0NDMzNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4jdGVhbSAuY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaW1hZ2UtZmxpcDpob3ZlciAuYmFja3NpZGUsXHJcbi5pbWFnZS1mbGlwLmhvdmVyIC5iYWNrc2lkZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLmltYWdlLWZsaXA6aG92ZXIgLmZyb250c2lkZSxcclxuLmltYWdlLWZsaXAuaG92ZXIgLmZyb250c2lkZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5tYWluZmxpcCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IDFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAxcztcclxuICAgIC1tb3otdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mcm9udHNpZGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5iYWNrc2lkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDdweCA5cHggLTRweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDVweCA3cHggOXB4IC00cHggcmdiKDE1OCwgMTU4LCAxNTgpO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDdweCA5cHggLTRweCByZ2IoMTU4LCAxNTgsIDE1OCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZyb250c2lkZSxcclxuLmJhY2tzaWRlIHtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtbXMtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogMXM7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtby10cmFuc2l0aW9uOiAxcztcclxuICAgIC1vLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogMXM7XHJcbiAgICAtbXMtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmZyb250c2lkZSAuY2FyZCxcclxuLmJhY2tzaWRlIC5jYXJkIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM1NHB4O1xyXG59XHJcblxyXG4uYmFja3NpZGUgLmNhcmQgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mcm9udHNpZGUgLmNhcmQgLmNhcmQtdGl0bGUsXHJcbi5iYWNrc2lkZSAuY2FyZCAuY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI0Y0NDMzNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLWJvZHkgaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBGb250QXdlc29tZSBmb3Igd29ya2luZyBCb290U25pcHBldCA6PiAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XG4jdGVhbSB7XG4gIGJhY2tncm91bmQ6ICNlZWUgIWltcG9ydGFudDsgfVxuXG4uYnRuLXByaW1hcnk6aG92ZXIsXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MTAwO1xuICBib3JkZXItY29sb3I6ICNGRjU3MjI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjU3MjI7XG4gIGJvcmRlci1jb2xvcjogI0Y0NDMzNjsgfVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogNjBweCAwOyB9XG5cbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRjQ0MzM2O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbiN0ZWFtIC5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyB9XG5cbi5pbWFnZS1mbGlwOmhvdmVyIC5iYWNrc2lkZSxcbi5pbWFnZS1mbGlwLmhvdmVyIC5iYWNrc2lkZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTsgfVxuXG4uaW1hZ2UtZmxpcDpob3ZlciAuZnJvbnRzaWRlLFxuLmltYWdlLWZsaXAuaG92ZXIgLmZyb250c2lkZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxuXG4ubWFpbmZsaXAge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tcy10cmFuc2l0aW9uOiAxcztcbiAgLW1vei10cmFuc2l0aW9uOiAxcztcbiAgLW1vei10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMDBweCk7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmZyb250c2lkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLmJhY2tzaWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA3cHggOXB4IC00cHggIzllOWU5ZTtcbiAgLW1vei1ib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4ICM5ZTllOWU7XG4gIGJveC1zaGFkb3c6IDVweCA3cHggOXB4IC00cHggIzllOWU5ZTtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmZyb250c2lkZSxcbi5iYWNrc2lkZSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNpdGlvbjogMXM7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW8tdHJhbnNpdGlvbjogMXM7XG4gIC1vLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tcy10cmFuc2l0aW9uOiAxcztcbiAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyB9XG5cbi5mcm9udHNpZGUgLmNhcmQsXG4uYmFja3NpZGUgLmNhcmQge1xuICBtaW4taGVpZ2h0OiAzNTRweDsgfVxuXG4uYmFja3NpZGUgLmNhcmQgYSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDsgfVxuXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLXRpdGxlLFxuLmJhY2tzaWRlIC5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNGNDQzMzYgIWltcG9ydGFudDsgfVxuXG4uZnJvbnRzaWRlIC5jYXJkIC5jYXJkLWJvZHkgaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cblxuLnNlY3Rpb24tc2hhcGVkIC5zaGFwZS1zdHlsZS0xLnNoYXBlLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCAjY2YzYTllIDE1JSwgI2ZmNjI0MCA3MCUsICNmYmFhNGYgOTQlKSAhaW1wb3J0YW50OyB9XG5cbiNpbWFnZUhvbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDBweCAxcHggI2Y0NDMzNjNkOyB9XG5cbi5zZWN0aW9uLXNoYXBlZCAuc2hhcGUge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uYWJvdXQtZm9udCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBwZXRpdGUtY2FwczsgfVxuXG4uc2VwYXJhdG9yLWJvdHRvbSB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5tdC1tZC03LFxuICAubXktbWQtNyB7XG4gICAgbWFyZ2luLXRvcDogNXJlbSAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5wcm9maWxlLXBhZ2UgLmNhcmQtcHJvZmlsZSAuY2FyZC1wcm9maWxlLWFjdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDEyNXB4OyB9IH1cblxuLmltYWdlVSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7IH1cblxuLmRyYWctc2Nyb2xsIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwcHg7IH1cblxuLmRlbW8tb25lIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmRlbW8tb25lIGltZyB7XG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG4gIC5kZW1vLW9uZSBpbWcgLmRyYWctc2Nyb2xsLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTsgfVxuXG4uYnRuLWFycm93IHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM4YztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICB3aWR0aDogMi41cmVtOyB9XG5cbi5lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG5cbi5zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuXG4uYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi1hcnJvdzpmb2N1cyB7XG4gIG91dGxpbmU6IHJpZGdlO1xuICBvdXRsaW5lLWNvbG9yOiAjMGMwYzBjMjE7IH1cblxuLnNwYW4tY3VhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJyZW07XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50OyB9XG4gIC5zcGFuLWN1YSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxuXG4uYnRuLWZsb2F0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMnJlbTtcbiAgcmlnaHQ6IDJyZW07XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2U2NGQ3MjtcbiAgYm9yZGVyLWNvbG9yOiBhenVyZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyOyB9XG5cbmltZzpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XG4gIG91dGxpbmU6IHRyYW5zcGFyZW50OyB9XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBuZWVkIHRvIG92ZXJ3cml0ZSBpbmxpbmUgZGltZW5zaW9ucyAqL1xuICBoZWlnaHQ6IGF1dG87IH1cblxuaDIge1xuICBtYXJnaW4tYm90dG9tOiAuNWVtOyB9XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDFlbTsgfVxuXG4vKiBob3ZlciBzdHlsZXMgKi9cbi5sb2NhdGlvbi1saXN0aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDdweCAjODA4MDgwZTA7IH1cblxuLmxvY2F0aW9uLWltYWdlIHtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLmxvY2F0aW9uLWltYWdlIGltZyB7XG4gIGZpbHRlcjogYmx1cigwcHgpO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4zcyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cblxuLmxvY2F0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xuICBiYWNrZ3JvdW5kOiAjMGEwYjBjYzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogcG9zaXRpb24gdGhlIHRleHQgaW4gdOKAmSBtaWRkbGUqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4ubG9jYXRpb24tbGlzdGluZzpob3ZlciAubG9jYXRpb24tdGl0bGUge1xuICBvcGFjaXR5OiAxOyB9XG5cbi5sb2NhdGlvbi1saXN0aW5nOmhvdmVyIC5sb2NhdGlvbi1pbWFnZSBpbWcge1xuICBmaWx0ZXI6IGJsdXIoMnB4KTsgfVxuXG4vKiBmb3IgdG91Y2ggc2NyZWVuIGRldmljZXMgKi9cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgLmxvY2F0aW9uLXRpdGxlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIC5sb2NhdGlvbi1pbWFnZSBpbWcge1xuICAgIGZpbHRlcjogYmx1cigycHgpOyB9IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9yZXZpZXdzXCI7XHJcblxyXG4uc2VjdGlvbi1zaGFwZWQgLnNoYXBlLXN0eWxlLTEuc2hhcGUtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MGRlZyxcclxuICAgICAgI2NmM2E5ZSAxNSUsXHJcbiAgICAgICNmZjYyNDAgNzAlLFxyXG4gICAgICAjZmJhYTRmIDk0JSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2ltYWdlSG9tOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAtMXB4IDFweCAwcHggMXB4ICNmNDQzMzYzZDtcclxufVxyXG5cclxuLnNlY3Rpb24tc2hhcGVkIC5zaGFwZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFib3V0LWZvbnQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXZhcmlhbnQ6IHBldGl0ZS1jYXBzO1xyXG59XHJcblxyXG4uc2VwYXJhdG9yLWJvdHRvbSB7XHJcbiAgdG9wOiBhdXRvO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG5cclxuICAubXQtbWQtNyxcclxuICAubXktbWQtNyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAucHJvZmlsZS1wYWdlIC5jYXJkLXByb2ZpbGUgLmNhcmQtcHJvZmlsZS1hY3Rpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDEyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmltYWdlVSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcclxuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJhZy1zY3JvbGwge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwcHhcclxufVxyXG5cclxuLmRlbW8tb25lIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRlbW8tb25lIGltZyB7XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIC5kcmFnLXNjcm9sbC13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tYXJyb3cge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBiYWNrZ3JvdW5kOiAjMzMzMzMzOGM7XHJcbiAgO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICB3aWR0aDogMi41cmVtO1xyXG5cclxufVxyXG5cclxuLmVuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uc3RhcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYWxpZ24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYXJyb3c6Zm9jdXMge1xyXG4gIG91dGxpbmU6IHJpZGdlO1xyXG4gIG91dGxpbmUtY29sb3I6ICMwYzBjMGMyMTtcclxufVxyXG5cclxuLnNwYW4tY3VhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEycmVtO1xyXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tZmxvYXQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAycmVtO1xyXG4gIHJpZ2h0OiAycmVtO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI2U2NGQ3MjtcclxuICBib3JkZXItY29sb3I6IGF6dXJlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuXHJcbmltZzpmb2N1cyB7XHJcbiAgb3V0bGluZTogMXB4IGRvdHRlZDtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuXHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIG5lZWQgdG8gb3ZlcndyaXRlIGlubGluZSBkaW1lbnNpb25zICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogMWVtO1xyXG59XHJcblxyXG5cclxuLyogaG92ZXIgc3R5bGVzICovXHJcbi5sb2NhdGlvbi1saXN0aW5nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA3cHggIzgwODA4MGUwO1xyXG59XHJcblxyXG4ubG9jYXRpb24taW1hZ2Uge1xyXG4gIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1pbWFnZSBpbWcge1xyXG4gIGZpbHRlcjogYmx1cigwcHgpO1xyXG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ubG9jYXRpb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xyXG4gIGJhY2tncm91bmQ6ICMwYTBiMGNjNztcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIC8qIHBvc2l0aW9uIHRoZSB0ZXh0IGluIHTigJkgbWlkZGxlKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1saXN0aW5nOmhvdmVyIC5sb2NhdGlvbi10aXRsZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmxvY2F0aW9uLWxpc3Rpbmc6aG92ZXIgLmxvY2F0aW9uLWltYWdlIGltZyB7XHJcbiAgZmlsdGVyOiBibHVyKDJweCk7XHJcbn1cclxuXHJcblxyXG4vKiBmb3IgdG91Y2ggc2NyZWVuIGRldmljZXMgKi9cclxuQG1lZGlhIChob3Zlcjogbm9uZSkge1xyXG4gIC5sb2NhdGlvbi10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLmxvY2F0aW9uLWltYWdlIGltZyB7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _core_services_feed_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/services/feed.service */ "./src/app/core/services/feed.service.ts");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/fesm5/ngx-drag-scroll.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_modal_imagen_modal_imagen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modal-imagen/modal-imagen.component */ "./src/app/shared/modal-imagen/modal-imagen.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, modalService, feedService, changeDetection) {
        this.userService = userService;
        this.modalService = modalService;
        this.feedService = feedService;
        this.changeDetection = changeDetection;
        this.leftNavDisabled = false;
        this.rightNavDisabled = false;
        this.index = 0;
        this.dataHom = [];
        this.feedData = [];
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.dataHom.length = 0;
        this.getProfile();
        this.getMyHomelessProfile();
        this.getAllFeeds();
        this.imgDef = 'https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png';
    };
    ProfileComponent.prototype.clickItem = function (item) {
        console.log('item clicked');
    };
    ProfileComponent.prototype.toggleHideSB = function () {
        this.hideScrollbar = !this.hideScrollbar;
    };
    ProfileComponent.prototype.toggleDisable = function () {
        this.disabled = !this.disabled;
    };
    ProfileComponent.prototype.toggleXDisable = function () {
        this.xDisabled = !this.xDisabled;
    };
    ProfileComponent.prototype.toggleYDisable = function () {
        this.yDisabled = !this.yDisabled;
    };
    ProfileComponent.prototype.moveLeft = function () {
        this.ds.moveLeft();
    };
    ProfileComponent.prototype.moveRight = function () {
        this.ds.moveRight();
    };
    ProfileComponent.prototype.moveTo = function (idx) {
        this.ds.moveTo(idx);
    };
    ProfileComponent.prototype.leftBoundStat = function (reachesLeftBound) {
        this.leftNavDisabled = reachesLeftBound;
    };
    ProfileComponent.prototype.rightBoundStat = function (reachesRightBound) {
        this.rightNavDisabled = reachesRightBound;
    };
    ProfileComponent.prototype.onSnapAnimationFinished = function () {
        console.log('snap animation finished');
    };
    ProfileComponent.prototype.onIndexChanged = function (idx) {
        this.index = idx;
        console.log('current index: ' + idx);
    };
    ProfileComponent.prototype.onDragScrollInitialized = function () {
        console.log('first demo drag scroll has been initialized.');
    };
    ProfileComponent.prototype.onDragStart = function () {
        console.log('drag start');
    };
    ProfileComponent.prototype.onDragEnd = function () {
        console.log('drag end');
    };
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.userService.getProfile().subscribe(function (data) {
            _this.profile = data;
            _this.imageUrl = (data.photo) ? "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot + data.photo : null;
        }, function (error) {
            console.log(error);
            if (error.error.detail === 'User dont have profile') {
                _this.profile = null;
                _this.imageUrl = null;
            }
        });
    };
    ProfileComponent.prototype.getMyHomelessProfile = function () {
        var _this = this;
        this.dataHom.length = 0;
        this.userService.getMyHomelessProfile().subscribe(function (data) {
            _this.environmentHomeless = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiRoot;
            _this.userHomeless = (data.length !== 0) ? data : null;
            if (_this.userHomeless !== null) {
                _this.userHomeless.forEach(function (element) {
                    _this.dataHom.push({
                        name: element.firstName + " " + element.lastName,
                        photo: (element.photo) ? "" + _this.environmentHomeless + element.photo : 'https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png',
                        id: element.id
                    });
                });
            }
        }, function (err) {
            console.log('nohomeless' + err);
            console.log(err);
        });
    };
    ProfileComponent.prototype.feed = function () {
    };
    ProfileComponent.prototype.openModalWithComponent = function (item) {
        var _this = this;
        var initialState = {
            data: [
                {
                    img: item.image,
                    likes: item.total_likes,
                    comments: item.total_comments,
                    description: item.description,
                    date: item.created_at,
                    id: item.id,
                    name: item.userRegisterer.first_name,
                    lastname: item.userRegisterer.last_name,
                    idUser: item.userRegisterer.id,
                    ilike: item.i_like
                }
            ],
            type: 'view'
        };
        this.bsModalRef = this.modalService.show(src_app_shared_modal_imagen_modal_imagen_component__WEBPACK_IMPORTED_MODULE_5__["ModalImagenComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA');
        var _combine = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(this.modalService.onHide, this.modalService.onHidden).subscribe(function (data) {
            if (data[0] === 'close' || data[0] === 'backdrop-click') {
                _this.getAllFeeds();
            }
        });
    };
    ProfileComponent.prototype.openModal2 = function () {
        var _this = this;
        var initialState = {
            data: [
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF3mox4Rw8fYDWxtZ4Hr4rvAF3X5rEbaVYeA&usqp=CAU'
                }
            ],
            type: 'add'
        };
        this.bsModalRef = this.modalService.show(src_app_shared_modal_imagen_modal_imagen_component__WEBPACK_IMPORTED_MODULE_5__["ModalImagenComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA');
        var _combine = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(this.modalService.onHide, this.modalService.onHidden).subscribe(function (data) {
            if (data[0] === 'close' || data[0] === 'backdrop-click') {
                _this.getAllFeeds();
            }
        });
    };
    ProfileComponent.prototype.getAllFeeds = function () {
        var _this = this;
        this.feedService.getmyFeeds(this.user['id']).subscribe(function (data) {
            _this.feedData = (data.length !== 0) ? data : null;
        }, function (error) {
            console.log(error);
            _this.feedData = null;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('nav', { read: ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__["DragScrollComponent"] }),
        __metadata("design:type", ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__["DragScrollComponent"])
    ], ProfileComponent.prototype, "ds", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
            _core_services_feed_service__WEBPACK_IMPORTED_MODULE_0__["FeedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/qr-reader/qr-reader.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/qr-reader/qr-reader.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg pt-lg-0 mt--200 bg-black\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"qr-scan-area\">\r\n          <!-- This is the npm package in-charge of scanning the QR -->\r\n          <zxing-scanner #scanner [(device)]=\"currentDevice\" (scanSuccess)=\"onCodeResult($event)\"\r\n            (permissionResponse)=\"onHasPermission($event)\"></zxing-scanner>\r\n          <div class=\"qr-area\">\r\n            <div class=\"area\"></div>\r\n          </div>\r\n        </div>\r\n        <!-- <section class=\"p-4 margin-center\">\r\n            <div class=\"card sect-card\">\r\n              <div class=\"row\" *ngIf=\"qrResult\">\r\n                <div class=\"col-4 d-flex align-items-center\">\r\n                  <img src=\"https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art.png\"\r\n                    alt=\"...\" class=\"rounded-circle\">\r\n                </div>\r\n                <div class=\"col-8 \">\r\n                  <h5>Example title</h5>\r\n                  <small class=\"d-block\">Lorem ipsum dolor sit amet, consectetur adipisicing elit Incidunt.</small>\r\n                  <small>Consectetur adipisicing elit.</small>\r\n                  <a class=\"d-block text-info float-right mt-1 pr-1\">Ver detalles</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" #notFound *ngIf=\"qrResult === false\">\r\n                <div class=\"col-12\">\r\n                  <p class=\"text-lg text-center text-danger font-weight-bold\">No hay datos registrados.</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </section> -->\r\n        <!-- Displays message on the screen if guest is valid or not -->\r\n        <!-- <div class=\"guest\">\r\n            <ng-container *ngIf=\"qrResult\">\r\n              <div class=\"ui success message\">\r\n                <i class=\"close icon\"></i>\r\n                <div class=\"header\">\r\n                  Welcome!!\r\n                </div>\r\n                <p>Guest has been found on the guest lists</p>\r\n              </div>\r\n            </ng-container>\r\n            <ng-container #notFound *ngIf=\"qrResult === false\">\r\n              <div class=\"ui negative message\">\r\n                <i class=\"close icon\"></i>\r\n                <div class=\"header\">\r\n                  Warning!\r\n                </div>\r\n                <p>This person is not a guest!</p>\r\n              </div>\r\n            </ng-container>\r\n          </div> -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/qr-reader/qr-reader.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/qr-reader/qr-reader.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .qr-scan-area {\n  position: relative; }\n  ::ng-deep .qr-scan-area zxing-scanner {\n    max-width: 100%; }\n  ::ng-deep .qr-scan-area .qr-area {\n    position: absolute;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    height: calc(100% - 50px);\n    top: 0;\n    width: 100%; }\n  ::ng-deep .qr-scan-area .qr-area .area {\n      height: 75%;\n      width: 60%;\n      border: 2px solid #ffffffb8;\n      margin-top: 15%; }\n  .bg-black {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n  .sect-card {\n  width: 80vw;\n  padding: 6px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .rounded-circle {\n  width: 110px;\n  height: auto; }\n  .margin-center {\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXItcmVhZGVyL0M6XFxVc2Vyc1xcTWlsZW5ueXNfRGV2XFxEZXNrdG9wXFxQcm95ZWN0b3NcXE51ZXZvV29uZGVyXFx3b25kZXJodW1hbnNcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xccXItcmVhZGVyXFxxci1yZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBa0IsRUFBQTtFQUZ0QjtJQUtNLGVBQWUsRUFBQTtFQUxyQjtJQVNNLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLE1BQU07SUFDTixXQUFXLEVBQUE7RUFmakI7TUFrQlEsV0FBVztNQUNYLFVBQVU7TUFDViwyQkFBMkI7TUFDM0IsZUFBZSxFQUFBO0VBTXZCO0VBQ0UscUZBRzJCO0VBQzNCLGFBQWE7RUFDYixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtFQUd6QjtFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7RUFHZDtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3FyLXJlYWRlci9xci1yZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5xci1zY2FuLWFyZWEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIHp4aW5nLXNjYW5uZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnFyLWFyZWEge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgLmFyZWEge1xyXG4gICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZmI4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJnLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLFxyXG4gICAgICAjY2YzYTllIDE1JSxcclxuICAgICAgI2ZmNjI0MCA3MCUsXHJcbiAgICAgICNmYmFhNGYgOTQlKSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdC1jYXJkIHtcclxuICB3aWR0aDogODB2dztcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWFyZ2luLWNlbnRlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/qr-reader/qr-reader.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/qr-reader/qr-reader.component.ts ***!
  \********************************************************/
/*! exports provided: QrReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrReaderComponent", function() { return QrReaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QrReaderComponent = /** @class */ (function () {
    function QrReaderComponent(router) {
        this.router = router;
        this.currentDevice = null;
        this.qrResult = true;
    }
    QrReaderComponent.prototype.ngOnInit = function () { };
    QrReaderComponent.prototype.clearResult = function () {
        this.qrResult = true;
    };
    QrReaderComponent.prototype.onCodeResult = function (resultString) {
        if (resultString.includes('homeless-profile/')) {
            this.qrResult = resultString;
            this.goto();
        }
        else {
            console.log('no');
        }
    };
    QrReaderComponent.prototype.goto = function () {
        this.router.navigateByUrl(this.qrResult);
    };
    QrReaderComponent.prototype.onHasPermission = function (has) {
        this.hasPermission = has;
    };
    QrReaderComponent.prototype.clearMessage = function () {
        var _this = this;
        setTimeout(function () {
            _this.guestExist = null;
        }, 3000);
    };
    QrReaderComponent.prototype.checkQRJSON = function (qrString) {
        if (/^[\],:{}\s]*$/.test(qrString
            .replace(/\\["\\\/bfnrtu]/g, "@")
            .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
            .replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            return true;
        }
        else {
            return false;
        }
    };
    QrReaderComponent.prototype.validURL = function (str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    };
    QrReaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qr-reader',
            template: __webpack_require__(/*! ./qr-reader.component.html */ "./src/app/pages/qr-reader/qr-reader.component.html"),
            styles: [__webpack_require__(/*! ./qr-reader.component.scss */ "./src/app/pages/qr-reader/qr-reader.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QrReaderComponent);
    return QrReaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"shape shape-style-1 bg-gradient-default\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-8\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <!-- <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign up with</small>\r\n              </div>\r\n              <div class=\"text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/facebook.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Facebook</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Sign up with credentials</small>\r\n              </div>\r\n              <form role=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                      <div class=\"input-group input-group-alternative mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"ni ni-circle-08\"></i></span>\r\n                        </div>\r\n                        <input class=\"form-control\" formControlName=\"username\" class=\"form-control\" id=\"username\"\r\n                          placeholder=\"Username\" type=\"text\" (focus)=\"focus = true\" (blur)=\"focus = false\"\r\n                          [ngClass]=\"{ 'is-invalid': f['username'].errors && f['username'].touched }\" />\r\n                      </div>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['username'].hasError('required') && (f['username'].touched || f['username'].dirty)\">\r\n                        *Required field\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['username'].hasError('minlength') && (f['username'].touched || f['username'].dirty)\">\r\n                        *3 is the minimum characters allowed\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['username'].hasError('maxlength') && (f['username'].touched || f['username'].dirty)\">\r\n                        *25 is the maximum characters allowed\r\n                      </section>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\" [ngClass]=\"{ focused: focus1 === true }\">\r\n                      <div class=\"input-group input-group-alternative mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                        </div>\r\n                        <input class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Email\" type=\"email\"\r\n                          (focus)=\"focus1 = true\" (blur)=\"focus1 = false\"\r\n                          [ngClass]=\"{ 'is-invalid': f['email'].errors && f['email'].touched }\" />\r\n                      </div>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['email'].hasError('required') && (f['email'].touched || f['email'].dirty)\">\r\n                        *Required field\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['email'].hasError('email') && (f['email'].touched || f['email'].dirty)\">\r\n                        *Invalid email\r\n                      </section>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                      <div class=\"input-group input-group-alternative mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"ni ni-circle-08\"></i></span>\r\n                        </div>\r\n                        <input class=\"form-control\" formControlName=\"last_name\" id=\"last_name\" placeholder=\"Lastname\"\r\n                          type=\"text\" (focus)=\"focus = true\" (blur)=\"focus = false\"\r\n                          [ngClass]=\"{ 'is-invalid': f['last_name'].errors && f['last_name'].touched }\" />\r\n                      </div>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['last_name'].hasError('required') && (f['last_name'].touched || f['last_name'].dirty)\">\r\n                        *Required field\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['last_name'].hasError('minlength') && (f['last_name'].touched || f['last_name'].dirty)\">\r\n                        *3 is the minimum characters allowed\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['last_name'].hasError('maxlength') && (f['last_name'].touched || f['last_name'].dirty)\">\r\n                        *10 is the maximum characters allowed\r\n                      </section>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\r\n                      <div class=\"input-group input-group-alternative mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"ni ni-circle-08\"></i></span>\r\n                        </div>\r\n                        <input [ngClass]=\"{ 'is-invalid': f['first_name'].errors && f['first_name'].touched }\"\r\n                          formControlName=\"first_name\" class=\"form-control\" id=\"first_name\" placeholder=\"Firstname\"\r\n                          type=\"text\" (focus)=\"focus = true\" (blur)=\"focus = false\" />\r\n                      </div>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['first_name'].hasError('required') && (f['first_name'].touched || f['first_name'].dirty)\">\r\n                        *Required field\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['first_name'].hasError('minlength') && (f['first_name'].touched || f['first_name'].dirty)\">\r\n                        *3 is the minimum characters allowed\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['first_name'].hasError('maxlength') && (f['first_name'].touched || f['first_name'].dirty)\">\r\n                        *10 is the maximum characters allowed\r\n                      </section>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\" [ngClass]=\"{ focused: focus2 === true }\">\r\n                      <div class=\"input-group input-group-alternative\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                        </div>\r\n                        <input [ngClass]=\"{ 'is-invalid': f['password1'].errors && f['password1'].touched }\"\r\n                          class=\"form-control\" formControlName=\"password1\" placeholder=\"Password\" type=\"password\"\r\n                          (focus)=\"focus2 = true\" (blur)=\"focus2 = false\" />\r\n                      </div>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['password1'].hasError('required') && (f['password1'].touched || f['password1'].dirty)\">\r\n                        *Required field\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['password1'].hasError('minlength') && (f['password1'].touched || f['password1'].dirty)\">\r\n                        *5 is the minimum characters allowed\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['password1'].hasError('maxlength') && (f['password1'].touched || f['password1'].dirty)\">\r\n                        *25 is the maximum characters allowed\r\n                      </section>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\" [ngClass]=\"{ focused: focus2 === true }\">\r\n                      <div class=\"input-group input-group-alternative\">\r\n                        <div class=\"input-group-prepend\">\r\n                          <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                        </div>\r\n                        <input [ngClass]=\"{ 'is-invalid': f['password2'].errors && f['password2'].touched }\"\r\n                          class=\"form-control\" formControlName=\"password2\" placeholder=\"Password\" type=\"password\"\r\n                          (focus)=\"focus2 = true\" (blur)=\"focus2 = false\" />\r\n                      </div>\r\n                      <section class=\"m-2 text-danger\"\r\n                        *ngIf=\"f['password2'].hasError('required') && (f['password2'].touched || f['password2'].dirty)\">\r\n                        *Required field\r\n                      </section>\r\n                      <section class=\"m-2 text-danger\" *ngIf=\"validatePass === false && f['password2'].touched\">\r\n                        *Passwords do not match\r\n                      </section>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"text-muted font-italic\">\r\n                  <small>password strength:\r\n                    <span class=\"text-success font-weight-700\">strong</span>\r\n                  </small>\r\n                </div> -->\r\n                <!-- <div class=\"row my-4\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                      <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\r\n                      <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                        <span>I agree with the\r\n                          <a href=\"javascript:void(0)\">Privacy Policy</a>\r\n                        </span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"text-center\">\r\n                  <button type=\"submit\" class=\"btn btn-primary mt-4\" [disabled]=\"registerForm.invalid\">\r\n                    Create account\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-gradient-default {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n.text-danger {\n  font-variant: small-caps;\n  font-size: small; }\n\n.section-shaped {\n  position: inherit !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcTWlsZW5ueXNfRGV2XFxEZXNrdG9wXFxQcm95ZWN0b3NcXE51ZXZvV29uZGVyXFx3b25kZXJodW1hbnNcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxRkFBcUYsRUFBQTs7QUFFekY7RUFDSSx3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWdyYWRpZW50LWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MGRlZywgI2NmM2E5ZSAxNSUsICNmZjYyNDAgNzAlLCAjZmJhYTRmIDk0JSkgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1kYW5nZXJ7XHJcbiAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5zZWN0aW9uLXNoYXBlZCB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, authService, spinner, toastr, lsService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.lsService = lsService;
        this.router = router;
        this.test = new Date();
        this.user = {};
        this.submitted = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        // Validate token
        var token = this.lsService.getValue('token');
        if (token) {
            this.router.navigate(['/']);
        }
        // Build form
        this.registerForm = this.formBuilder.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                ]],
            first_name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                ]],
            last_name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]],
            password1: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                ]],
            password2: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
        }, {
            validators: this.password.bind(this)
        });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.submitted = true;
        if (this.registerForm.invalid) {
            this.spinner.hide();
            return;
        }
        // Set object
        this.user.username = this.registerForm.get('username').value;
        this.user.first_name = this.registerForm.get('first_name').value;
        this.user.last_name = this.registerForm.get('last_name').value;
        this.user.email = this.registerForm.get('email').value;
        this.user.password1 = this.registerForm.get('password1').value;
        this.user.password2 = this.registerForm.get('password2').value;
        // Send request
        this.authService.register(this.user).subscribe(function (data) {
            _this.spinner.hide();
            _this.toastr.success('Welcome', 'Register success');
            _this.router.navigateByUrl('/login');
        }, function (err) { console.log(err); _this.toastr.error('Error', err.error.detail); _this.spinner.hide(); });
    };
    SignupComponent.prototype.password = function (registerForm) {
        var password = registerForm.get('password1').value;
        var confirmPassword = registerForm.get('password2').value;
        this.validatePass = (password === confirmPassword) ? true : false;
        return password === confirmPassword ? null : { passwordNotMatch: true };
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FsZXJ0cy1zZWN0aW9uL2FsZXJ0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <h3 class=\"mt-lg mb-4\">\r\n    <span>Alerts</span>\r\n  </h3>\r\n  <div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"true\"  (close)=\"close(alert)\" >\r\n      <ng-container *ngIf=\"alert.icon\">\r\n        <div class=\"alert-inner--icon\">\r\n            <i class=\"{{alert.icon}}\"></i>\r\n        </div>\r\n      </ng-container>\r\n      <span class=\"alert-inner--text\">  <strong>{{alert.strong}} </strong>{{ alert.message }}</span>\r\n    </ngb-alert>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/alerts-section/alerts-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/alerts-section/alerts-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: AlertsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsSectionComponent", function() { return AlertsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertsSectionComponent = /** @class */ (function () {
    function AlertsSectionComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Success!',
            message: 'This is a success alert—check it out!',
            icon: 'ni ni-like-2'
        }, {
            id: 2,
            strong: 'Info!',
            type: 'info',
            message: 'This is an info alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert—check it out!',
            icon: 'ni ni-bell-55'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Danger!',
            message: 'This is a danger alert—check it out!',
            icon: 'ni ni-support-16'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertsSectionComponent.prototype.close = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AlertsSectionComponent.prototype, "alerts", void 0);
    AlertsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts-section',
            template: __webpack_require__(/*! ./alerts-section.component.html */ "./src/app/sections/alerts-section/alerts-section.component.html"),
            styles: [__webpack_require__(/*! ./alerts-section.component.css */ "./src/app/sections/alerts-section/alerts-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertsSectionComponent);
    return AlertsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FuZ3VsYXItc2VjdGlvbi9hbmd1bGFyLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Javascript Components</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Modals</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-primary mb-3\" (click)=\"open(classic,'' , '')\">\r\n       Default\r\n      </button>\r\n      <ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Type your modal title</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n            <button type=\"button\" class=\"btn btn-link  ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-warning mb-3\" (click)=\"open(classic2, 'Notification', '')\">\r\n         Notification\r\n      </button>\r\n      <ng-template #classic2 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content bg-gradient-danger\">\r\n          <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-notification\">Your attention is required</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n              <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"py-3 text-center\">\r\n              <i class=\"ni ni-bell-55 ni-3x\"></i>\r\n              <h4 class=\"heading mt-4\">You should read this!</h4>\r\n              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-white\">Ok, Got it</button>\r\n            <button type=\"button\" class=\"btn btn-link text-white ml-auto\" data-dismiss=\"modal\" (click)=\"c('Close click')\">Close</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <button class=\"btn btn-block btn-default\" (click)=\"open(classic1, 'modal_mini', 'sm')\">\r\n         Form\r\n      </button>\r\n      <ng-template #classic1 let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-body p-0\">\r\n            <div class=\"card bg-secondary shadow border-0\">\r\n              <div class=\"card-header bg-white pb-5\">\r\n                <div class=\"text-muted text-center mb-3\">\r\n                  <small>Sign in with</small>\r\n                </div>\r\n                <div class=\"btn-wrapper text-center\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/github.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Github</span>\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                    <span class=\"btn-inner--icon\">\r\n                      <img src=\"./assets/img/icons/common/google.svg\">\r\n                    </span>\r\n                    <span class=\"btn-inner--text\">Google</span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body px-lg-5 py-lg-5\">\r\n                <div class=\"text-center text-muted mb-4\">\r\n                  <small>Or sign in with credentials</small>\r\n                </div>\r\n                <form role=\"form\">\r\n                  <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                    <div class=\"input-group input-group-alternative\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                      </div>\r\n                      <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                    <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n                    <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                      <span>Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <!-- Datepicker -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Datepicker</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Single date</small>\r\n      <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n          </div>\r\n          <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus2=true\" (blur)=\"focus2=false\" type=\"text\" (select)=\"onDateSelection($event)\" autocomplete=\"off\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8 mt-4 mt-md-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Date range</small>\r\n      <div class=\"input-daterange datepicker row align-items-center\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus3===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp1\" [(ngModel)]=\"model1\" ngbDatepicker #d1=\"ngbDatepicker\" (click)=\"d1.toggle()\" (select)=\"mama($event)\" type=\"text\" [dayTemplate]=\"t\" (dateSelect)=\"startDateChanged($event)\" autocomplete=\"off\" (focus)=\"focus3=true\" (blur)=\"focus3=false\"/>\r\n              <ng-template #t let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus4===true}\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n              </div>\r\n              <input class=\"form-control datepicker\" placeholder=\"Select date\" name=\"dp2\" [(ngModel)]=\"model2\" ngbDatepicker #d2=\"ngbDatepicker\" (click)=\"d2.toggle()\" (focus)=\"focus4=true\" (blur)=\"focus4=false\" type=\"text\" [dayTemplate]=\"t1\" (dateSelect)=\"endDateChanged($event)\" autocomplete=\"off\"/>\r\n              <ng-template #t1 let-date let-focused=\"focused\" >\r\n               <span class=\"custom-day\"\r\n                [class.text-white]=\"isActive(date)\"\r\n                [class.range-end]=\"isRangeEnd(date)\"\r\n                [class.range-start]=\"isRangeStart(date)\"\r\n                [class.btn-light]=\"isActive(date)\"\r\n                [class.bg-primary]=\"isActive(date)\"\r\n                [class.range]=\"isInRange(date)\"\r\n                [class.faded]=\"isInRange(date)\"\r\n               >\r\n                 {{ date.day }}\r\n               </span>\r\n             </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Tooltips and Popovers -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md mb-4\">Tooltips &amp; Popovers</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Tooltips</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"left\"   ngbTooltip=\"Tooltip on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"top\"    ngbTooltip=\"Tooltip on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">On bottom</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-primary btn-tooltip\" placement=\"right\"  ngbTooltip=\"Tooltip on right\">On right</button>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-3\">Popovers</small>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"left\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">On left</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"top\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">On top</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"right\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">On right</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-default\" placement=\"bottom\"\r\n              ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">On bottom</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/angular-section/angular-section.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/angular-section/angular-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: AngularSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSectionComponent", function() { return AngularSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularSectionComponent = /** @class */ (function () {
    function AngularSectionComponent(modalService, calendar) {
        this.modalService = modalService;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    AngularSectionComponent.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content, { centered: true }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    AngularSectionComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AngularSectionComponent.prototype.isRangeStart = function (date) {
        return this.model1 && this.model2 && date.equals(this.model1);
    };
    AngularSectionComponent.prototype.isRangeEnd = function (date) {
        return this.model1 && this.model2 && date.equals(this.model2);
    };
    AngularSectionComponent.prototype.isInRange = function (date) {
        return date.after(this.model1) && date.before(this.model2);
    };
    AngularSectionComponent.prototype.isActive = function (date) {
        return date.equals(this.model1) || date.equals(this.model2);
    };
    AngularSectionComponent.prototype.endDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model1 = this.model2;
        }
    };
    AngularSectionComponent.prototype.startDateChanged = function (date) {
        if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day)) {
            this.model2 = this.model1;
        }
    };
    AngularSectionComponent.prototype.ngOnInit = function () {
    };
    AngularSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular-section',
            template: __webpack_require__(/*! ./angular-section.component.html */ "./src/app/sections/angular-section/angular-section.component.html"),
            styles: [__webpack_require__(/*! ./angular-section.component.css */ "./src/app/sections/angular-section/angular-section.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]])
    ], AngularSectionComponent);
    return AngularSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2J1dHRvbnMtc2VjdGlvbi9idXR0b25zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-components pb-0\" id=\"section-components\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Basic elements -->\r\n        <h2 class=\"mb-5\">\r\n          <span>Basic Elements</span>\r\n        </h2>\r\n        <!-- Buttons -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Buttons</h3>\r\n        <!-- Button styles -->\r\n        <div>\r\n          <button class=\"btn btn-primary\" type=\"button\">Button</button>\r\n          <button class=\"btn btn-icon btn-3 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n            <span class=\"btn-inner--text\">With icon</span>\r\n          </button>\r\n          <button class=\"btn btn-icon btn-2 btn-primary\" type=\"button\">\r\n            <span class=\"btn-inner--icon\"><i class=\"ni ni-bag-17\"></i></span>\r\n          </button>\r\n          <!-- Button wizes -->\r\n          <div class=\"mb-3 mt-5\">\r\n            <small class=\"text-uppercase font-weight-bold\">Pick your size</small>\r\n          </div>\r\n          <button class=\"btn btn-sm btn-primary\" type=\"button\">Small</button>\r\n          <button class=\"btn btn-1 btn-primary\" type=\"button\">Regular</button>\r\n          <button class=\"btn btn-lg btn-primary\" type=\"button\">Large Button</button>\r\n        </div>\r\n        <!-- Button colors -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Pick your color</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-primary\" type=\"button\">Primary</button>\r\n        <button class=\"btn btn-1 btn-info\" type=\"button\">Info</button>\r\n        <button class=\"btn btn-1 btn-success\" type=\"button\">Success</button>\r\n        <button class=\"btn btn-1 btn-warning\" type=\"button\">Warning</button>\r\n        <button class=\"btn btn-1 btn-danger\" type=\"button\">Danger</button>\r\n        <button class=\"btn btn-1 btn-neutral\" type=\"button\">Neutral</button>\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Outline</small>\r\n        </div>\r\n        <button class=\"btn btn-1 btn-outline-primary\" type=\"button\">Outline-primary</button>\r\n        <button class=\"btn btn-1 btn-outline-info\" type=\"button\">Outline-info</button>\r\n        <button class=\"btn btn-1 btn-outline-success\" type=\"button\">Outline-success</button>\r\n        <button class=\"btn btn-1 btn-outline-warning\" type=\"button\">Outline-warning</button>\r\n        <button class=\"btn btn-1 btn-outline-danger\" type=\"button\">Outline-danger</button>\r\n        <!-- Button links -->\r\n        <div class=\"mb-3 mt-5\">\r\n          <small class=\"text-uppercase font-weight-bold\">Links</small>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-default\">Default</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-primary\">Primary</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-info\">Info</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-success\">Success</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-warning\">Warning</a>\r\n        <a href=\"javascript:void(0)\" class=\"btn btn-link text-danger\">Danger</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/buttons-section/buttons-section.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/buttons-section/buttons-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsSectionComponent", function() { return ButtonsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsSectionComponent = /** @class */ (function () {
    function ButtonsSectionComponent() {
    }
    ButtonsSectionComponent.prototype.ngOnInit = function () {
    };
    ButtonsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons-section',
            template: __webpack_require__(/*! ./buttons-section.component.html */ "./src/app/sections/buttons-section/buttons-section.component.html"),
            styles: [__webpack_require__(/*! ./buttons-section.component.css */ "./src/app/sections/buttons-section/buttons-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsSectionComponent);
    return ButtonsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.css":
/*!****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Nycy1zZWN0aW9uL2Nycy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\r\n  <div class=\"container\">\r\n    <!-- Custom controls -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6\">\r\n        <!-- Checkboxes -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Checkboxes</small>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\">\r\n          <label class=\"custom-control-label\" for=\"customCheck1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\" checked>\r\n          <label class=\"custom-control-label\" for=\"customCheck2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\" disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck3\">\r\n            <span>Disabled Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-checkbox mb-3\">\r\n          <input class=\"custom-control-input\" id=\"customCheck4\" type=\"checkbox\" checked disabled>\r\n          <label class=\"custom-control-label\" for=\"customCheck4\">\r\n            <span>Disabled Checked</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Radio buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Radios</small>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio1\">\r\n            <span>Unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-1\" class=\"custom-control-input\" id=\"customRadio2\" checked type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio2\">\r\n            <span>Checked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio3\" disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio3\">\r\n            <span>Disabled unchecked</span>\r\n          </label>\r\n        </div>\r\n        <div class=\"custom-control custom-radio mb-3\">\r\n          <input name=\"custom-radio-2\" class=\"custom-control-input\" id=\"customRadio4\" checked disabled type=\"radio\">\r\n          <label class=\"custom-control-label\" for=\"customRadio4\">\r\n            <span>Disabled checkbox</span>\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <!-- Toggle buttons -->\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Toggle buttons</small>\r\n        </div>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\">\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n        <span class=\"clearfix\"></span>\r\n        <label class=\"custom-toggle\">\r\n          <input type=\"checkbox\" checked>\r\n          <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n        </label>\r\n      </div>\r\n      <div class=\"col-lg-3 col-sm-6 mt-4 mt-md-0\">\r\n        <div class=\"mb-3\">\r\n          <small class=\"text-uppercase font-weight-bold\">Sliders</small>\r\n        </div>\r\n        <!-- Simple slider -->\r\n        <div class=\"input-slider-container\">\r\n          <div id=\"input-slider\" class=\"input-slider\" ></div>\r\n        </div>\r\n        <!-- Range slider -->\r\n        <div class=\"mt-5\">\r\n          <!-- Range slider container -->\r\n          <div id=\"input-slider-range\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row justify-content-center mt-md\">\r\n      <div class=\"col-lg-12\">\r\n        <!-- Menu -->\r\n        <h3 class=\"h4 text-success font-weight-bold mb-4\">Menu</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-primary\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          <img src=\"./assets/img/brand/blue.png\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-primary\" aria-controls=\"nav-inner-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n                        <span class=\"sr-only\">(current)</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link no-caret\" ngbDropdownToggle id=\"dropdown1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Settings</a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"dropdown1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n          <div class=\"col-lg-6 mt-4 mt-lg-0\">\r\n            <div class=\"mb-3\">\r\n              <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n            </div>\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark bg-success rounded\">\r\n              <div class=\"container\">\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Menu</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                  <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"nav-inner-success\">\r\n                  <div class=\"navbar-collapse-header\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6 collapse-brand\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          <img src=\"./assets/img/brand/blue.png\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-6 collapse-close\">\r\n                        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#nav-inner-success\" aria-controls=\"nav-inner-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                          <span></span>\r\n                          <span></span>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <ul class=\"navbar-nav ml-lg-auto\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-favourite-28\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n                        <i class=\"ni ni-notification-70\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                      <a class=\"nav-link nav-link-icon no-caret\" ngbDropdownToggle id=\"nav-inner-success_dropdown_1\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"ni ni-settings-gear-65\"></i>\r\n                        <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n                      </a>\r\n                      <div class=\"dropdown-menu-right\" aria-labelledby=\"nav-inner-success_dropdown_1\" ngbDropdownMenu>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </nav>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/crs-section/crs-section.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/sections/crs-section/crs-section.component.ts ***!
  \***************************************************************/
/*! exports provided: CrsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrsSectionComponent", function() { return CrsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrsSectionComponent = /** @class */ (function () {
    function CrsSectionComponent() {
    }
    CrsSectionComponent.prototype.ngOnInit = function () {
    };
    CrsSectionComponent.prototype.ngAfterViewInit = function () {
        var slider = document.getElementById("input-slider");
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("input-slider-range");
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    CrsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crs-section',
            template: __webpack_require__(/*! ./crs-section.component.html */ "./src/app/sections/crs-section/crs-section.component.html"),
            styles: [__webpack_require__(/*! ./crs-section.component.css */ "./src/app/sections/crs-section/crs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CrsSectionComponent);
    return CrsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2lucHV0cy1zZWN0aW9uL2lucHV0cy1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section pb-0 section-components\">\r\n  <div class=\"container mb-5\">\r\n    <!-- Inputs -->\r\n    <h3 class=\"h4 text-success font-weight-bold mb-4\">Inputs</h3>\r\n    <div class=\"mb-3\">\r\n      <small class=\"text-uppercase font-weight-bold\">Form controls</small>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" placeholder=\"Regular\" class=\"form-control\" disabled />\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{'focused':focus5===true}\">\r\n          <div class=\"input-group mb-4\">\r\n            <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\" (focus)=\"focus5=true\" (blur)=\"focus5=false\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-sm-6\">\r\n        <div class=\"form-group has-success\">\r\n          <input type=\"text\" placeholder=\"Success\" class=\"form-control is-valid\" />\r\n        </div>\r\n        <div class=\"form-group has-danger\">\r\n          <input type=\"email\" placeholder=\"Error Input\" class=\"form-control is-invalid\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"py-5 bg-secondary\">\r\n    <div class=\"container\">\r\n      <!-- Inputs (alternative) -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">Form controls (alternative)</small>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative\" />\r\n          </div>\r\n          <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n              <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Regular\" class=\"form-control form-control-alternative \" disabled />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group input-group-alternative mb-4\">\r\n              <input class=\"form-control\" placeholder=\"Birthday\" type=\"text\">\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\"><i class=\"ni ni-zoom-split-in\"></i></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-6\">\r\n          <div class=\"form-group has-success\">\r\n            <input type=\"text\" placeholder=\"Success\" class=\"form-control form-control-alternative is-valid\" />\r\n          </div>\r\n          <div class=\"form-group has-danger\">\r\n            <input type=\"email\" placeholder=\"Error Input\" class=\"form-control form-control-alternative is-invalid\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/inputs-section/inputs-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/inputs-section/inputs-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsSectionComponent", function() { return InputsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputsSectionComponent = /** @class */ (function () {
    function InputsSectionComponent() {
    }
    InputsSectionComponent.prototype.ngOnInit = function () {
    };
    InputsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inputs-section',
            template: __webpack_require__(/*! ./inputs-section.component.html */ "./src/app/sections/inputs-section/inputs-section.component.html"),
            styles: [__webpack_require__(/*! ./inputs-section.component.css */ "./src/app/sections/inputs-section/inputs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputsSectionComponent);
    return InputsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/modal/modal.component.html":
/*!*****************************************************!*\
  !*** ./src/app/sections/modal/modal.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n\r\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\r\n"

/***/ }),

/***/ "./src/app/sections/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/sections/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL25hdmlnYXRpb24tc2VjdGlvbi9uYXZpZ2F0aW9uLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\r\n  <div class=\"container\">\r\n    <!-- Navigation -->\r\n    <h2 class=\"mb-5\">\r\n      <span>Navbars</span>\r\n    </h2>\r\n  </div>\r\n  <!-- Navbar default -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-default\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Default Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-default\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Discover</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-notification-70\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Profile</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-default_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-default_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar primary -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Primary Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbar-primary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Discover\r\n              <span class=\"sr-only\">(current)</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"javascript:void(0)\">Profile</a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link no-caret\" id=\"navbar-primary_dropdown_1\" ngbDropdownToggle>Settings</a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-primary_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar success -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-success mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Success Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbar-success\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-favourite-28\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Favorites</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"ni ni-planet\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Another action</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n            <a class=\"nav-link nav-link-icon no-caret\" id=\"navbar-success_dropdown_1\" ngbDropdownToggle>\r\n              <i class=\"ni ni-settings-gear-65\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Settings</span>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" aria-labelledby=\"navbar-success_dropdown_1\" ngbDropdownMenu>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar danger -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Danger Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbar-danger\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-google-plus\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Google +</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar warning -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-warning mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Warning Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbar-warning\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Share</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Tweet</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-pinterest\"></i>\r\n              <span class=\"nav-link-inner--text d-lg-none\">Pin</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <!-- Navbar info -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-info mt-4\">\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">Info Color</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\r\n        <div class=\"navbar-collapse-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img src=\"./assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbar-info\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-facebook-square\"></i>\r\n              <span class=\"nav-link-inner--text\">Facebook</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n              <span class=\"nav-link-inner--text\">Twitter</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon\" href=\"javascript:void(0)\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n              <span class=\"nav-link-inner--text\">Instagram</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/navigation-section/navigation-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/navigation-section/navigation-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavigationSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSectionComponent", function() { return NavigationSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationSectionComponent = /** @class */ (function () {
    function NavigationSectionComponent() {
    }
    NavigationSectionComponent.prototype.ngOnInit = function () {
    };
    NavigationSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation-section',
            template: __webpack_require__(/*! ./navigation-section.component.html */ "./src/app/sections/navigation-section/navigation-section.component.html"),
            styles: [__webpack_require__(/*! ./navigation-section.component.css */ "./src/app/sections/navigation-section/navigation-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationSectionComponent);
    return NavigationSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-spa {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvbnVjbGVvLXNlY3Rpb24vbnVjbGVvLXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9udWNsZW8tc2VjdGlvbi9udWNsZW8tc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1zcGEge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg section-nucleo-icons pb-250\" style=\"background-color: white !important;\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Ours contributors</h2>\r\n        <p class=\"lead\">\r\n          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis inventore dolore laborum eveniet,\r\n          sit culpa asperiores eum rem facilis ratione totam illum similique ipsa in quis veniam itaque! Dignissimos,\r\n          rerum.\r\n        </p>\r\n        <div class=\"btn-wrapper\">\r\n          <a class=\"btn btn-primary text-white\">Become a partner</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"blur--hover\">\r\n      <a>\r\n        <div class=\"icons-container blur-item mt-5\" data-toggle=\"on-screen\">\r\n          <!-- Center -->\r\n          <i> <img src=\"../../../assets/img/logo/Recurso 1.png\" alt=\"\" class=\"img-spa\"></i>\r\n\r\n          <!-- Right 1 -->\r\n          <i><img src=\"../../../assets/img/theme/team-1-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <i><img src=\"../../../assets/img/theme/team-2-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <i><img src=\"../../../assets/img/theme/team-3-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n\r\n          <!-- Right 2 -->\r\n          <i><img src=\"../../../assets/img/theme/team-1-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <i><img src=\"../../../assets/img/theme/team-2-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <i><img src=\"../../../assets/img/theme/team-3-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <!-- Left 1 -->\r\n          <i><img src=\"../../../assets/img/theme/team-1-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <i><img src=\"../../../assets/img/theme/team-2-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <i><img src=\"../../../assets/img/theme/team-3-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <!-- Left 2 -->\r\n          <i><img src=\"../../../assets/img/theme/team-1-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <i><img src=\"../../../assets/img/theme/team-2-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n          <i><img src=\"../../../assets/img/theme/team-3-800x800.jpg\" alt=\"\" class=\"img-spa\"></i>\r\n        </div>\r\n        <span class=\"blur-hidden h5\" style=\"text-align: center;\r\n        color: #212529 !important;\">Meet all our collaborators, you can be part.</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/nucleo-section/nucleo-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sections/nucleo-section/nucleo-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: NucleoSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoSectionComponent", function() { return NucleoSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NucleoSectionComponent = /** @class */ (function () {
    function NucleoSectionComponent() {
    }
    NucleoSectionComponent.prototype.ngOnInit = function () {
        var nucleoView = document.getElementsByClassName('icons-container')[0];
        window.addEventListener('scroll', function (event) {
            if (this.isInViewport(nucleoView)) {
                nucleoView.classList.add('on-screen');
            }
            else {
                nucleoView.classList.remove('on-screen');
            }
        }.bind(this), false);
    };
    NucleoSectionComponent.prototype.isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    ;
    NucleoSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleo-section',
            template: __webpack_require__(/*! ./nucleo-section.component.html */ "./src/app/sections/nucleo-section/nucleo-section.component.html"),
            styles: [__webpack_require__(/*! ./nucleo-section.component.css */ "./src/app/sections/nucleo-section/nucleo-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NucleoSectionComponent);
    return NucleoSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.css":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sections/sections.component.html":
/*!**************************************************!*\
  !*** ./src/app/sections/sections.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-buttons-section></app-buttons-section>\r\n<app-inputs-section></app-inputs-section>\r\n<app-crs-section></app-crs-section>\r\n<app-navigation-section></app-navigation-section>\r\n<section class=\"section section-components\">\r\n  <app-tabs-section></app-tabs-section>\r\n  <app-alerts-section></app-alerts-section>\r\n  <app-typography-section></app-typography-section>\r\n  <app-angular-section></app-angular-section>\r\n</section>\r\n<section class=\"section section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row justify-content-between align-items-center\">\r\n      <div class=\"col-lg-5 mb-5 mb-lg-0\">\r\n        <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\r\n        <p class=\"lead text-white mt-4\">Argon Design System comes with four pre-built pages to help you get started\r\n          faster. You can change the text and images and you're good to go.</p>\r\n        <a href=\"https://demos.creative-tim.com/argon-design-system-angular/documentation/alerts?ref=adsa-bootstrap-carousel\"\r\n          class=\"btn btn-white mt-4\">See all components</a>\r\n      </div>\r\n      <div class=\"col-lg-6 mb-lg-auto\">\r\n        <div class=\"rounded shadow-lg overflow-hidden transform-perspective-right\">\r\n          <ngb-carousel>\r\n            <ng-template ngbSlide>\r\n              <img class=\"img-fluid\" src=\"assets/img/theme/img-1-1200x1000.jpg\" alt=\"First slide\">\r\n            </ng-template>\r\n            <ng-template ngbSlide>\r\n              <img class=\"img-fluid\" src=\"assets/img/theme/img-2-1200x1000.jpg\" alt=\"Second slide\">\r\n            </ng-template>\r\n          </ngb-carousel>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- SVG separator -->\r\n  <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section>\r\n<app-nucleo-section></app-nucleo-section>\r\n<section class=\"section section-lg section-shaped\">\r\n  <div class=\"shape shape-style-1 shape-default\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  <div class=\"container py-md\">\r\n    <div class=\"row row-grid justify-content-between align-items-center\">\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"display-3 text-white\">A beautiful Design System\r\n          <span class=\"text-white\">completed with examples</span>\r\n        </h3>\r\n        <p class=\"lead text-white\">The Design System comes with four pre-built pages to help you get started faster. You\r\n          can change the text and images and you're good to go. More importantly, looking at them will give you a\r\n          picture of what you can built with this powerful Bootstrap 4 Design System.</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a [routerLink]=\"['/login']\" class=\"btn btn-success\">Login Page</a>\r\n          <a [routerLink]=\"['/register']\" class=\"btn btn-white\">Register Page</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5 mb-lg-auto\">\r\n        <div class=\"transform-perspective-right\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-header bg-white pb-5\">\r\n              <div class=\"text-muted text-center mb-3\">\r\n                <small>Sign in with</small>\r\n              </div>\r\n              <div class=\"btn-wrapper text-center\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/github.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Github</span>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n                  <span class=\"btn-inner--icon\">\r\n                    <img src=\"./assets/img/icons/common/google.svg\">\r\n                  </span>\r\n                  <span class=\"btn-inner--text\">Google</span>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <div class=\"text-center text-muted mb-4\">\r\n                <small>Or sign in with credentials</small>\r\n              </div>\r\n              <form role=\"form\">\r\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\"\r\n                      (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\"\r\n                      (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\" customCheckLogin2\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\" customCheckLogin2\">\r\n                    <span>Remember me</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary my-4\">Sign in</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- SVG separator -->\r\n  <div class=\"separator separator-bottom separator-skew\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-white\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</section>\r\n<app-versions-section></app-versions-section>\r\n"

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons-section/buttons-section.component */ "./src/app/sections/buttons-section/buttons-section.component.ts");
/* harmony import */ var _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputs-section/inputs-section.component */ "./src/app/sections/inputs-section/inputs-section.component.ts");
/* harmony import */ var _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crs-section/crs-section.component */ "./src/app/sections/crs-section/crs-section.component.ts");
/* harmony import */ var _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation-section/navigation-section.component */ "./src/app/sections/navigation-section/navigation-section.component.ts");
/* harmony import */ var _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tabs-section/tabs-section.component */ "./src/app/sections/tabs-section/tabs-section.component.ts");
/* harmony import */ var _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alerts-section/alerts-section.component */ "./src/app/sections/alerts-section/alerts-section.component.ts");
/* harmony import */ var _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typography-section/typography-section.component */ "./src/app/sections/typography-section/typography-section.component.ts");
/* harmony import */ var _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angular-section/angular-section.component */ "./src/app/sections/angular-section/angular-section.component.ts");
/* harmony import */ var _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nucleo-section/nucleo-section.component */ "./src/app/sections/nucleo-section/nucleo-section.component.ts");
/* harmony import */ var _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./versions-section/versions-section.component */ "./src/app/sections/versions-section/versions-section.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/sections/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _buttons_section_buttons_section_component__WEBPACK_IMPORTED_MODULE_8__["ButtonsSectionComponent"],
                _inputs_section_inputs_section_component__WEBPACK_IMPORTED_MODULE_9__["InputsSectionComponent"],
                _crs_section_crs_section_component__WEBPACK_IMPORTED_MODULE_10__["CrsSectionComponent"],
                _navigation_section_navigation_section_component__WEBPACK_IMPORTED_MODULE_11__["NavigationSectionComponent"],
                _tabs_section_tabs_section_component__WEBPACK_IMPORTED_MODULE_12__["TabsSectionComponent"],
                _alerts_section_alerts_section_component__WEBPACK_IMPORTED_MODULE_13__["AlertsSectionComponent"],
                _typography_section_typography_section_component__WEBPACK_IMPORTED_MODULE_14__["TypographySectionComponent"],
                _angular_section_angular_section_component__WEBPACK_IMPORTED_MODULE_15__["AngularSectionComponent"],
                _versions_section_versions_section_component__WEBPACK_IMPORTED_MODULE_17__["VersionsSectionComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"],
                _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__["NucleoSectionComponent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["NgbdModalContent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            exports: [_sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"], _nucleo_section_nucleo_section_component__WEBPACK_IMPORTED_MODULE_16__["NucleoSectionComponent"]]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.css":
/*!******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3RhYnMtc2VjdGlvbi90YWJzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 class=\"h4 text-success font-weight-bold mb-4\">Tabs</h3>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6\">\r\n      <!-- Tabs with icons -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With icons</small>\r\n      </div>\r\n        <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-cloud-upload-96 mr-2\"></i> Home\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                  <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                <i class=\"ni ni-bell-55 mr-2\"></i> Profile\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle>\r\n                  <i class=\"ni ni-calendar-grid-58 mr-2\"></i> Messages\r\n              </ng-template>\r\n                <ng-template ngbTabContent>\r\n                    <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n                </ng-template>\r\n            </ngb-tab>\r\n        </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-5 mt-lg-0\">\r\n      <!-- Menu -->\r\n      <div class=\"mb-3\">\r\n        <small class=\"text-uppercase font-weight-bold\">With text</small>\r\n      </div>\r\n      <ngb-tabset [justify]=\"'center'\" class=\"custom-tab-content flex-column flex-md-row\" type=\"pills\">\r\n          <ngb-tab title=\"Home\">\r\n            <ng-template ngbTabContent>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n              <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Profile\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Messages\">\r\n            <ng-template ngbTabContent>\r\n                <p class=\"description\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.</p>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row row-grid justify-content-between align-items-center mt-lg\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-4\">Progress bars</h3>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>40%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"default\" [value]=\"25\"></ngb-progressbar>\r\n      </div>\r\n      <div class=\"progress-wrapper\">\r\n        <div class=\"progress-info\">\r\n          <div class=\"progress-label\">\r\n            <span>Task completed</span>\r\n          </div>\r\n          <div class=\"progress-percentage\">\r\n            <span>60%</span>\r\n          </div>\r\n        </div>\r\n        <ngb-progressbar type=\"primary\" [value]=\"60\"></ngb-progressbar>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Pagination</h3>\r\n      <nav aria-label=\"Page navigation example\" class=\"mb-4\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\r\n      </nav>\r\n      <nav aria-label=\"Page navigation example\">\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page1\" aria-label=\"Default pagination\">\r\n          <ng-template ngbPaginationPrevious><i _ngcontent-c9=\"\" class=\"fa fa-angle-left\"></i></ng-template>\r\n          <ng-template ngbPaginationNext><i _ngcontent-c9=\"\" class=\"fa fa-angle-right\"></i></ng-template>\r\n        </ngb-pagination>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <div class=\"row row-grid justify-content-between\">\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Navigation Pills</h3>\r\n      <ngb-tabset type=\"pills\" class=\"nav-pills-circle\">\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-atom\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n              <span class=\"nav-link-icon d-block\"><i class=\"ni ni-chat-round\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>\r\n                <span class=\"nav-link-icon d-block\"><i class=\"ni ni-cloud-download-95\"></i></span>\r\n            </ng-template>\r\n          </ngb-tab>\r\n      </ngb-tabset>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <h3 class=\"h4 text-success font-weight-bold mb-5\">Labels</h3>\r\n      <span class=\"badge badge-pill badge-primary text-uppercase\">Primary</span>\r\n      <span class=\"badge badge-pill badge-success text-uppercase\">Success</span>\r\n      <span class=\"badge badge-pill badge-danger text-uppercase\">Danger</span>\r\n      <span class=\"badge badge-pill badge-warning text-uppercase\">Warning</span>\r\n      <span class=\"badge badge-pill badge-info text-uppercase\">Info</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/tabs-section/tabs-section.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/sections/tabs-section/tabs-section.component.ts ***!
  \*****************************************************************/
/*! exports provided: TabsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsSectionComponent", function() { return TabsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsSectionComponent = /** @class */ (function () {
    function TabsSectionComponent() {
        this.page = 2;
        this.page1 = 3;
    }
    TabsSectionComponent.prototype.ngOnInit = function () {
    };
    TabsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs-section',
            template: __webpack_require__(/*! ./tabs-section.component.html */ "./src/app/sections/tabs-section/tabs-section.component.html"),
            styles: [__webpack_require__(/*! ./tabs-section.component.css */ "./src/app/sections/tabs-section/tabs-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsSectionComponent);
    return TabsSectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3R5cG9ncmFwaHktc2VjdGlvbi90eXBvZ3JhcGh5LXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Typography</span>\r\n  </h2>\r\n  <h3 class=\"h4 text-success font-weight-bold\">Headings</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 5</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h5 class=\"mb-0\">Argon Design System </h5>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading 6</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h6 class=\"mb-0\">Argon Design System </h6>\r\n    </div>\r\n  </div>\r\n  <!-- Display titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Display titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 1</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h1 class=\"display-1 mb-0\">Argon Design System</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 2</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h2 class=\"display-2 mb-0\">Argon Design System</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 3</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"display-3 mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Display 4</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h4 class=\"display-4 mb-0\">Argon Design System</h4>\r\n    </div>\r\n  </div>\r\n  <!-- Specialized titles -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Specialized titles</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading title</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <h3 class=\"heading-title text-warning mb-0\">Argon Design System</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Heading seaction</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <div>\r\n        <h2 class=\"display-3\">Header with small subtitle </h2>\r\n        <p class=\"lead text-muted\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Paragraphs -->\r\n  <h3 class=\"h4 text-success font-weight-bold mt-md\">Paragraphs</h3>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Paragraph</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p>I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Lead text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"lead\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Quote</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <blockquote class=\"blockquote\">\r\n        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n        <footer class=\"blockquote-footer\">Someone famous in\r\n          <cite title=\"Source Title\">Source Title</cite>\r\n        </footer>\r\n      </blockquote>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Muted text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-muted mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Primary text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-primary\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Info text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-info mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Success text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-success mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Warning text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-warning mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row py-3 align-items-center\">\r\n    <div class=\"col-sm-3\">\r\n      <small class=\"text-uppercase text-muted font-weight-bold\">Danger text</small>\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n      <p class=\"text-danger mb-0\">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n    </div>\r\n  </div>\r\n  <!-- Images -->\r\n  <h2 class=\"mt-lg mb-5\">\r\n    <span>Images</span>\r\n  </h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Image</small>\r\n      <img src=\"./assets/img/theme/team-1-800x800.jpg\" alt=\"Rounded image\" class=\"img-fluid rounded shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Image</small>\r\n      <img src=\"./assets/img/theme/team-2-800x800.jpg\" alt=\"Circle image\" class=\"img-fluid rounded-circle shadow\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Raised</small>\r\n      <img src=\"./assets/img/theme/team-3-800x800.jpg\" alt=\"Raised image\" class=\"img-fluid rounded shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n    <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n      <small class=\"d-block text-uppercase font-weight-bold mb-4\">Circle Raised</small>\r\n      <img src=\"./assets/img/theme/team-4-800x800.jpg\" alt=\"Raised circle image\" class=\"img-fluid rounded-circle shadow-lg\" style=\"width: 150px;\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/typography-section/typography-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/typography-section/typography-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TypographySectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographySectionComponent", function() { return TypographySectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographySectionComponent = /** @class */ (function () {
    function TypographySectionComponent() {
    }
    TypographySectionComponent.prototype.ngOnInit = function () {
    };
    TypographySectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography-section',
            template: __webpack_require__(/*! ./typography-section.component.html */ "./src/app/sections/typography-section/typography-section.component.html"),
            styles: [__webpack_require__(/*! ./typography-section.component.css */ "./src/app/sections/typography-section/typography-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographySectionComponent);
    return TypographySectionComponent;
}());



/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3ZlcnNpb25zLXNlY3Rpb24vdmVyc2lvbnMtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg\">\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid justify-content-center\">\r\n      <div class=\"col-lg-8 text-center\">\r\n        <h2 class=\"display-3\">Do you love this awesome\r\n          <span class=\"text-success\">Design System for Angular?</span>\r\n        </h2>\r\n        <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\r\n        <div class=\"btn-wrapper\">\r\n          <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Sketch - Digital design toolkit\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-versions-section\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Adobe Photoshop - Software for digital images manipulation\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-lg-2 col-4\">\r\n              <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\r\n                <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/sections/versions-section/versions-section.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sections/versions-section/versions-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: VersionsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionsSectionComponent", function() { return VersionsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VersionsSectionComponent = /** @class */ (function () {
    function VersionsSectionComponent() {
    }
    VersionsSectionComponent.prototype.ngOnInit = function () {
    };
    VersionsSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-versions-section',
            template: __webpack_require__(/*! ./versions-section.component.html */ "./src/app/sections/versions-section/versions-section.component.html"),
            styles: [__webpack_require__(/*! ./versions-section.component.css */ "./src/app/sections/versions-section/versions-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VersionsSectionComponent);
    return VersionsSectionComponent;
}());



/***/ }),

/***/ "./src/app/shared/add-multimedia/add-multimedia.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/add-multimedia/add-multimedia.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <ng-template #noImage>\r\n    <div class=\"col-6 pr-0  addI\" style=\"max-height: 100%;padding-left: 0px;min-height: 30rem;\">\r\n      <h5>Add an image for your post</h5>\r\n      <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\r\n      <!-- <img *ngIf=\"croppedImage\" [src]=\"croppedImage\" /> -->\r\n      <div class=\"imagen-para-archivo\">\r\n        <span>\r\n          <label for=\"boton-archivo\">\r\n            <img [src]=\"imageDefaul\" class=\"imageU\" /> </label>\r\n\r\n          <input id=\"boton-archivo\" type=\"file\" accept=\"image/*\" (change)=\"showPreview($event)\" />\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"col-6\" style=\"max-height: 100%;padding: 3rem;\" *ngIf=\"imageURL && imageURL !== ''; else noImage\">\r\n    <span>\r\n      <img [src]=\"imageURL\" />\r\n    </span>\r\n  </div>\r\n  <div class=\"col-6 pl-0 addPublic\">\r\n    <label for=\"\">Description</label>\r\n    <textarea maxlength=\"100\" (keyup)=\"onKey($event)\" (focus)=\"focus = true\" (blur)=\"focus = false\"\r\n      [(ngModel)]=\"description\"></textarea>\r\n    <span *ngIf=\"contator\" style=\"float: right;font-variant: all-petite-caps;\">{{contator}}/{{restante}}\r\n      characters</span>\r\n    <span>\r\n      <button class=\"btn btn-sm btn-success\" [disabled]=\"readyImage === false\" (click)=\"post()\">Post</button>\r\n      <button class=\"btn btn-sm btn-info\" (click)=\"changeImg()\" [disabled]=\"!imageURL\">Change image</button>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/add-multimedia/add-multimedia.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/add-multimedia/add-multimedia.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row img {\n  width: 100%;\n  height: 100%; }\n\nspan.cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  left: 4rem;\n  position: absolute;\n  z-index: 111;\n  width: 100%;\n  top: -1rem; }\n\nspan.cont button {\n    background: transparent;\n    box-shadow: none;\n    border: 0;\n    color: white;\n    font-size: 2rem;\n    padding: 0; }\n\n.sp1 {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  padding: 5px; }\n\n.sp1 img {\n    width: 3rem;\n    height: 3rem; }\n\n.sp2 {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 1rem;\n  padding-bottom: 0; }\n\n.sp2 img {\n    width: 2.5rem;\n    height: 2.5rem; }\n\n.sp2 p {\n    font-size: small;\n    padding: 1rem;\n    padding-bottom: 0; }\n\na {\n  color: gray;\n  text-decoration: none !important; }\n\na .glyphicon {\n    -webkit-transition: all .5s;\n    transition: all .5s; }\n\na .glyphicon.ni-air-baloon {\n      color: #e74c3c; }\n\na .glyphicon.ni-air-baloon:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n\n.iconsbtn {\n  background: transparent;\n  border: none;\n  color: gray;\n  margin: 0.5rem; }\n\n.red {\n  color: red; }\n\n.grey {\n  color: gray; }\n\n.imagen-para-archivo input {\n  display: none; }\n\n.imageU {\n  border-radius: 50% !important;\n  width: 180px !important;\n  max-width: 180px !important;\n  height: 180px !important; }\n\n.addI {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #dee2e6;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.addI .imgI {\n    width: 5rem; }\n\n.addPublic {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.addPublic textarea {\n    width: 80%;\n    height: 10rem;\n    max-height: 10rem; }\n\n.addPublic span {\n    padding: 1rem;\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    width: 80%; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: transparent; }\n\ntextarea:focus {\n  outline: 1px dotted;\n  outline: transparent; }\n\nimg:focus {\n  outline: 1px dotted;\n  outline: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FkZC1tdWx0aW1lZGlhL0M6XFxVc2Vyc1xcTWlsZW5ueXNfRGV2XFxEZXNrdG9wXFxQcm95ZWN0b3NcXE51ZXZvV29uZGVyXFx3b25kZXJodW1hbnNcXGZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGFkZC1tdWx0aW1lZGlhXFxhZGQtbXVsdGltZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWhCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQVBaO0lBVUksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVLEVBQUE7O0FBSWQ7RUFDRSxXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBTmQ7SUFTSSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUloQjtFQUNFLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFMbkI7SUFRSSxhQUFhO0lBQ2IsY0FBYyxFQUFBOztBQVRsQjtJQWFJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0UsV0FBVztFQUNYLGdDQUFnQyxFQUFBOztBQUZsQztJQUtJLDJCQUFtQjtJQUFuQixtQkFBbUIsRUFBQTs7QUFMdkI7TUFRTSxjQUFjLEVBQUE7O0FBUnBCO01BYVEsNkJBQXFCO2NBQXJCLHFCQUFxQixFQUFBOztBQU03QjtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBTHhCO0lBUUksV0FBVyxFQUFBOztBQUlmO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBSnJCO0lBT0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUIsRUFBQTs7QUFUckI7SUFhSSxhQUFhO0lBQ2Isb0JBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFVBQVUsRUFBQTs7QUFNZDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FkZC1tdWx0aW1lZGlhL2FkZC1tdWx0aW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcblxyXG4gIC8vIGhlaWdodDogMjVyZW07XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbnNwYW4uY29udCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGxlZnQ6IDRyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDExMTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IC0xcmVtO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zcDEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc3AyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxuICAuZ2x5cGhpY29uIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcblxyXG4gICAgJi5uaS1haXItYmFsb29uIHtcclxuICAgICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICB9XHJcblxyXG4gICAgJi5uaS1haXItYmFsb29uIHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbnNidG4ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogZ3JheTtcclxuICBtYXJnaW46IDAuNXJlbTtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmdyZXkge1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uaW1hZ2VuLXBhcmEtYXJjaGl2byBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltYWdlVSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFkZEkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZGVlMmU2O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIC5pbWdJIHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZFB1YmxpYyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG5cclxuICAgIGJ1dHRvbiB7fVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiAxcHggZG90dGVkO1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogMXB4IGRvdHRlZDtcclxuICBvdXRsaW5lOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW1nOmZvY3VzIHtcclxuICBvdXRsaW5lOiAxcHggZG90dGVkO1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/add-multimedia/add-multimedia.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/add-multimedia/add-multimedia.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddMultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMultimediaComponent", function() { return AddMultimediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_food_run_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/food-run.service */ "./src/app/core/services/food-run.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddMultimediaComponent = /** @class */ (function () {
    function AddMultimediaComponent(foodRunService, spinner, toastr, modalService, bsModalRef) {
        this.foodRunService = foodRunService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.modalService = modalService;
        this.bsModalRef = bsModalRef;
        this.readyImage = false;
        this.imageDefaul = '../../../assets/img/add.png';
    }
    AddMultimediaComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    AddMultimediaComponent.prototype.onKey = function (event) {
        this.contator = event.target.value.length;
        if (this.contator <= 100) {
            this.restante = 100 - this.contator;
        }
    };
    AddMultimediaComponent.prototype.fileChangeEvent = function (event) {
        this.fileChangeEvent = event;
        this.show = true;
    };
    AddMultimediaComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    AddMultimediaComponent.prototype.imageLoaded = function () {
        // show cropper
        console.log('loades');
    };
    AddMultimediaComponent.prototype.cropperReady = function () {
        // cropper ready
        console.log('ready');
    };
    AddMultimediaComponent.prototype.loadImageFailed = function () {
        // show message
        console.log('failed');
    };
    AddMultimediaComponent.prototype.ready = function () {
        this.imageURL = this.croppedImage;
        this.readyImage = true;
    };
    AddMultimediaComponent.prototype.showPreview = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.fileImg = file;
        var reader = new FileReader();
        reader.onload = function () {
            _this.imageURL = reader.result;
            _this.readyImage = true;
        };
        reader.readAsDataURL(file);
    };
    AddMultimediaComponent.prototype.changeImg = function () {
        this.imageURL = '';
    };
    AddMultimediaComponent.prototype.cerrarModal = function () {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    };
    AddMultimediaComponent.prototype.post = function () {
        var _this = this;
        this.spinner.show();
        var body = {
            id_food_run: this.data,
            description: this.description,
            image: this.imageURL
        };
        this.foodRunService.newMultimedia(body).subscribe(function (data) {
            console.log(data);
            _this.toastr.success('Successful registration');
            _this.spinner.hide();
            _this.cerrarModal();
        }, function (error) {
            console.log(error);
            _this.spinner.hide();
            _this.cerrarModal();
            _this.toastr.error(error.error.detail);
        });
    };
    AddMultimediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-multimedia',
            template: __webpack_require__(/*! ./add-multimedia.component.html */ "./src/app/shared/add-multimedia/add-multimedia.component.html"),
            styles: [__webpack_require__(/*! ./add-multimedia.component.scss */ "./src/app/shared/add-multimedia/add-multimedia.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_food_run_service__WEBPACK_IMPORTED_MODULE_3__["FoodRunService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]])
    ], AddMultimediaComponent);
    return AddMultimediaComponent;
}());



/***/ }),

/***/ "./src/app/shared/causes-details/causes-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/causes-details/causes-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"row p-3\">\r\n    <div class=\"col-6\">\r\n      <h5 class=\"title\">Details of the cause</h5>\r\n      <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">Name: <b>{{causes.name}}</b></li>\r\n        <li class=\"list-group-item\">Total to collect: <b>{{causes.total | currency}}</b></li>\r\n        <li class=\"list-group-item\">Cumulative total: <b>{{causes.acumulado | currency}}</b></li>\r\n        <li class=\"list-group-item\">Remaining total: <b>{{causes.rest | currency}}</b></li>\r\n        <li class=\"list-group-item\">Progress:\r\n\r\n          <progressbar [max]=\"causes.total\" [animate]=\"true\" [value]=\"causes.acumulado\" type=\"success\" style=\"height: 1rem;\r\n                                  margin-top: 0.3rem;\">\r\n            <b style=\"color: black;\">{{causes.porcentage}}%</b>\r\n          </progressbar>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <hr>\r\n    <div class=\"col-6\">\r\n      <h5 class=\"title\">Make a donation to this cause</h5>\r\n      <form>\r\n        <label class=\"title w-100 pb-3 mt-3\"><b>Your card details</b></label>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"inputCity\">Numbercard</label>\r\n            <input type=\"text\" class=\"form-control form-control-alternative form-control-sm\" id=\"inputCity\">\r\n          </div>\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"inputCity\">Expiration date</label>\r\n            <input class=\"form-control form-control-alternative datepicker form-control-sm\" placeholder=\"//\" type=\"text\"\r\n              ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" />\r\n          </div>\r\n          <div class=\"form-group col-md-2\">\r\n            <label for=\"inputZip\">CVC</label>\r\n            <input type=\"text\" class=\"form-control form-control-alternative form-control-sm\" id=\"inputZip\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"formGroupExampleInput\">Mount</label>\r\n\r\n          <input type=\"number\" [(ngModel)]=\"monto\" name=\"amount\"\r\n            class=\"form-control form-control-alternative form-control-sm\" id=\"formGroupExampleInput\"\r\n            placeholder=\"Mount\">\r\n        </div>\r\n        <button class=\"btn btn-success btn-lg btn-block\" (click)=\"donar()\">Donate</button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h5 class=\"title\">Latest donations to this cause</h5>\r\n      <span *ngFor=\"let item of donations | slice:0:5\"\r\n        style=\"display: flex;flex-flow: row;align-items: baseline;justify-content: left;margin: 1.5rem;\">\r\n        <div class=\"icon icon-sm icon-shape bg-gradient-pink shadow rounded-circle\">\r\n          <i class=\"fa fa-heart \" style=\"color: #dc3545 !important;\"></i>\r\n        </div>\r\n        <p\r\n          style=\"display: flex;flex-direction: column;justify-content: space-between;align-items: baseline; margin-left: 5px;\">\r\n          <b>{{item.user.first_name}} {{item.user.last_name}}</b>\r\n          <small>Donated {{item.amount | currency}}</small>\r\n          <small style=\"font-style: italic;\"><b>\"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero maxime\r\n              est provident expedita\r\n              praesentium.\"</b></small>\r\n        </p>\r\n      </span>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/causes-details/causes-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/causes-details/causes-details.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-variant: small-caps;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhdXNlcy1kZXRhaWxzL0M6XFxVc2Vyc1xcTWlsZW5ueXNfRGV2XFxEZXNrdG9wXFxQcm95ZWN0b3NcXE51ZXZvV29uZGVyXFx3b25kZXJodW1hbnNcXGZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGNhdXNlcy1kZXRhaWxzXFxjYXVzZXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2F1c2VzLWRldGFpbHMvY2F1c2VzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/causes-details/causes-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/causes-details/causes-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: CausesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CausesDetailsComponent", function() { return CausesDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_homeless_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/services/homeless.service */ "./src/app/core/services/homeless.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CausesDetailsComponent = /** @class */ (function () {
    function CausesDetailsComponent(bsModalRef, serviceDonation, spinner, toastr, modalService) {
        this.bsModalRef = bsModalRef;
        this.serviceDonation = serviceDonation;
        this.spinner = spinner;
        this.toastr = toastr;
        this.modalService = modalService;
    }
    CausesDetailsComponent.prototype.ngOnInit = function () {
        this.causes = this.data[0];
        console.log(this.causes);
        this.recentDonations();
    };
    CausesDetailsComponent.prototype.donar = function () {
        var _this = this;
        this.spinner.show();
        var body = {
            id_stripe: 'saasdsladjsadjl2',
            id_cause: this.causes.id,
            amount: this.monto
        };
        this.serviceDonation.newDonation(body).subscribe(function (data) {
            console.log(data);
            _this.toastr.success('Successful donation');
            _this.spinner.hide();
            _this.cerrarModal();
        }, function (error) {
            console.log(error);
            _this.toastr.error('Ha ocurrido un error');
            _this.spinner.hide();
        });
    };
    CausesDetailsComponent.prototype.recentDonations = function () {
        var _this = this;
        this.spinner.show();
        this.serviceDonation.recentDonations(this.causes.id).subscribe(function (data) {
            _this.donations = data['donations'];
            _this.spinner.hide();
            console.log(_this.donations);
        }, function (error) {
            _this.spinner.hide();
            console.log(error);
        });
    };
    CausesDetailsComponent.prototype.cerrarModal = function () {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    };
    CausesDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-causes-details',
            template: __webpack_require__(/*! ./causes-details.component.html */ "./src/app/shared/causes-details/causes-details.component.html"),
            styles: [__webpack_require__(/*! ./causes-details.component.scss */ "./src/app/shared/causes-details/causes-details.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _core_services_homeless_service__WEBPACK_IMPORTED_MODULE_4__["HomelessService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"]])
    ], CausesDetailsComponent);
    return CausesDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared/donation-food-run/donation-food-run.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/donation-food-run/donation-food-run.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"row p-3\">\r\n    <div class=\"col-6\">\r\n      <h5 class=\"title\">Food run details</h5>\r\n      <ul class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\">Name: <b>{{causes.name}}</b></li>\r\n        <li class=\"list-group-item\">Total to collect: <b>{{causes.total | currency}}</b></li>\r\n        <li class=\"list-group-item\">Cumulative total: <b>{{(causes.total - causes.rest) | currency}}</b></li>\r\n        <li class=\"list-group-item\">Remaining total: <b>{{causes.rest | currency}}</b></li>\r\n      </ul>\r\n    </div>\r\n    <hr>\r\n    <div class=\"col-6\">\r\n      <h5 class=\"title\">Make a donation to this food run</h5>\r\n      <form>\r\n        <label class=\"title w-100 pb-3 mt-3\"><b>Your card details</b></label>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"inputCity\">Numbercard</label>\r\n            <input type=\"text\" class=\"form-control form-control-alternative form-control-sm\" id=\"inputCity\">\r\n          </div>\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"inputCity\">Expiration date</label>\r\n            <input class=\"form-control form-control-alternative datepicker form-control-sm\" placeholder=\"24/08/1990\"\r\n              type=\"text\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" />\r\n          </div>\r\n          <div class=\"form-group col-md-2\">\r\n            <label for=\"inputZip\">CVC</label>\r\n            <input type=\"text\" class=\"form-control form-control-alternative form-control-sm\" id=\"inputZip\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"formGroupExampleInput\">Mount</label>\r\n\r\n          <input type=\"number\" [(ngModel)]=\"monto\" name=\"amount\"\r\n            class=\"form-control form-control-alternative form-control-sm\" id=\"formGroupExampleInput\"\r\n            placeholder=\"Mount\">\r\n        </div>\r\n        <button class=\"btn btn-success btn-lg btn-block\" (click)=\"donar()\">Donate</button>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/donation-food-run/donation-food-run.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/donation-food-run/donation-food-run.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-variant: small-caps;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RvbmF0aW9uLWZvb2QtcnVuL0M6XFxVc2Vyc1xcTWlsZW5ueXNfRGV2XFxEZXNrdG9wXFxQcm95ZWN0b3NcXE51ZXZvV29uZGVyXFx3b25kZXJodW1hbnNcXGZyb250ZW5kL3NyY1xcYXBwXFxzaGFyZWRcXGRvbmF0aW9uLWZvb2QtcnVuXFxkb25hdGlvbi1mb29kLXJ1bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZG9uYXRpb24tZm9vZC1ydW4vZG9uYXRpb24tZm9vZC1ydW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/donation-food-run/donation-food-run.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/donation-food-run/donation-food-run.component.ts ***!
  \*************************************************************************/
/*! exports provided: DonationFoodRunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationFoodRunComponent", function() { return DonationFoodRunComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_food_run_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/services/food-run.service */ "./src/app/core/services/food-run.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DonationFoodRunComponent = /** @class */ (function () {
    function DonationFoodRunComponent(bsModalRef, spinner, toastr, modalService, foodService) {
        this.bsModalRef = bsModalRef;
        this.spinner = spinner;
        this.toastr = toastr;
        this.modalService = modalService;
        this.foodService = foodService;
    }
    DonationFoodRunComponent.prototype.ngOnInit = function () {
        this.causes = this.data[0];
        console.log(this.data);
    };
    DonationFoodRunComponent.prototype.cerrarModal = function () {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    };
    DonationFoodRunComponent.prototype.donar = function () {
        var _this = this;
        this.spinner.show();
        var body = {
            id_stripe: 'saasdsladjsadjl2',
            id_food_run: this.causes.id,
            amount: this.monto
        };
        this.foodService.newDonation(body).subscribe(function (data) {
            console.log(data);
            _this.toastr.success('Successful donation');
            _this.spinner.hide();
            _this.cerrarModal();
        }, function (error) {
            console.log(error);
            _this.toastr.error('Ha ocurrido un error');
            _this.spinner.hide();
        });
    };
    DonationFoodRunComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donation-food-run',
            template: __webpack_require__(/*! ./donation-food-run.component.html */ "./src/app/shared/donation-food-run/donation-food-run.component.html"),
            styles: [__webpack_require__(/*! ./donation-food-run.component.scss */ "./src/app/shared/donation-food-run/donation-food-run.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _core_services_food_run_service__WEBPACK_IMPORTED_MODULE_4__["FoodRunService"]])
    ], DonationFoodRunComponent);
    return DonationFoodRunComponent;
}());



/***/ }),

/***/ "./src/app/shared/food-run-form/food-run-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/food-run-form/food-run-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row p-3\">\n    <div class=\"col-12\">\n      <form>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Nombre del food run</label>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Nombre\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label>Monto a reunir</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Monto\">\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label>Número de voluntarios</label>\n            <input type=\"number\" class=\"form-control\" placeholder=\"Voluntarios\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputState\">State</label>\n            <select id=\"inputState\" class=\"form-control\">\n              <option selected>Choose...</option>\n              <option>...</option>\n            </select>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n      </form>\n\n    </div>\n  </div>\n</div> -->\n<div class=\"container\">\n  <div class=\"card card-profile p-2\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"cerrarModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"px-4\">\n\n      <div class=\"row justify-content-center mb-2\">\n        <div class=\"col-lg-3 order-lg-2\">\n          <div class=\"card-profile-image\" style=\"margin: 0.5rem;\">\n            <div *ngIf=\"imageURL && imageURL\" style=\"    position: absolute;\n            z-index: 11;\n            right: 0;\">\n              <button class=\"btn-danger btn-sm\" (click)=\"remove()\" style=\"padding: 0;\n              width: 1.8rem;\n              height: 1.8rem;\n              border-radius: 100px;\n              box-shadow: none;\n              border: 1px solid #d2bdbd;\n              background: #f75573;\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <span *ngIf=\"imageURL && imageURL !== ''; else noImage\">\n              <img [src]=\"imageURL\" class=\"imageU\" style=\"    filter: drop-shadow(2px 4px 6px grey);\n              cursor: pointer;\" />\n            </span>\n            <ng-template #noImage>\n              <div class=\"imagen-para-archivo\">\n                <span>\n                  <label for=\"boton-archivo\" *ngIf=\"data === undefined\">\n                    <img src=\"https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png\" class=\"imageU\" style=\"    filter: drop-shadow(2px 4px 6px grey);\n                    cursor: pointer;\" />\n                  </label>\n                  <label for=\"boton-archivo\" *ngIf=\"data !== undefined\">\n                    <img src=\"{{environmentY}}{{data.image}}\" class=\"imageU\" style=\"    filter: drop-shadow(2px 4px 6px grey);\n                    cursor: pointer;\" />\n                  </label>\n\n                  <input id=\"boton-archivo\" type=\"file\" accept=\"image/*\" (change)=\"showPreview($event)\" />\n                </span>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n      <div class=\"row justify-content-center \">\n        <div class=\"col-12 order-lg-2\">\n          <div class=\"form-row\" style=\"margin-bottom: 1.5rem;\">\n            <div class=\"form-group col-md-12\">\n              <label>Food run name</label>\n              <input (keyup)=\"nameLength($event)\" type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\"\n                minlength=\"5\" maxlength=\"100\">\n              <small *ngIf=\"nameNo === 'min'\" id=\"nameevent\" class=\"form-text text-muted\"\n                style=\"color: red !important;\">*5 is\n                the\n                minimum characters allowed. </small>\n              <small *ngIf=\"nameNo === 'max'\" id=\"nameevent\" class=\"form-text text-muted\"\n                style=\"color: red !important;\">*100\n                is the\n                maximum characters allowed. </small>\n            </div>\n\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-4\" style=\"margin-bottom: 0;\">\n              <label>Amount to collect</label>\n              <input (keyup)=\"totalLength($event)\" type=\"number\" class=\"form-control\" placeholder=\"Mount\"\n                [(ngModel)]=\"total\">\n              <small *ngIf=\"mountNo === 'min'\" id=\"nameevent\" class=\"form-text text-muted\"\n                style=\"color: red !important;\">*$0\n                is\n                the\n                minimum mount allowed. </small>\n              <small *ngIf=\"mountNo === 'max'\" id=\"nameevent\" class=\"form-text text-muted\"\n                style=\"color: red !important;\">*$9999999\n                is the\n                maximum mount allowed. </small>\n            </div>\n            <div class=\"form-group col-md-3\" style=\"margin-bottom: 0;\">\n              <label>Number of volunteers</label>\n              <input type=\"number\" pattern=\"[\\d]{9}\" (keyup)=\"volLength($event)\" class=\"form-control\"\n                placeholder=\"Voluntarios\" [(ngModel)]=\"volunteers\">\n              <small *ngIf=\"volNo === 'min'\" id=\"nameevent\" class=\"form-text text-muted\"\n                style=\"color: red !important;\">*0\n                is\n                the\n                minimum volunteers allowed. </small>\n              <small *ngIf=\"volNo === 'max'\" id=\"nameevent\" class=\"form-text text-muted\"\n                style=\"color: red !important;\">*10000\n                is the\n                maximum volunteers allowed. </small>\n            </div>\n            <div class=\"form-group col-md-3\" style=\"margin-bottom: 0;\">\n              <label>Date of realization</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-birthday\"></i></span>\n                </div>\n                <input [(ngModel)]=\"dateRe\" class=\"form-control datepicker\" placeholder=\"Ex: /**/**/****\" type=\"text\"\n                  ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" />\n              </div>\n            </div>\n            <div class=\"form-group col-md-2\" style=\"margin-bottom: 0; margin-top: -12px;\">\n              <ngb-timepicker [(ngModel)]=\"time\" id=\"time\"></ngb-timepicker>\n\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label>Description</label>\n              <textarea minlength=\"5\" maxlength=\"300\" (keyup)=\"desLength($event)\" class=\"form-control\"\n                placeholder=\"Description\" [(ngModel)]=\"description\"></textarea>\n              <small *ngIf=\"desNo === 'min'\" id=\"nameevent\" class=\"form-text text-muted\"\n                style=\"color: red !important;\">*5 is\n                the\n                minimum characters allowed. </small>\n              <small *ngIf=\"desNo === 'max'\" id=\"nameevent\" class=\"form-text text-muted\"\n                style=\"color: red !important;\">*100\n                is the\n                maximum characters allowed. </small>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-12\">\n              <label>Invitation message</label>\n              <textarea class=\"form-control\" placeholder=\"Message to show people who want to join as a volunteer\"\n                [(ngModel)]=\"invitation_message\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mt-5 mb-5 float-right\">\n        <button (click)=\"save()\" class=\"btn btn-success\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/food-run-form/food-run-form.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/food-run-form/food-run-form.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mb-10 {\n  margin-bottom: 10rem; }\n\n.section-shaped .shape-style-1.shape-primary {\n  background: linear-gradient(150deg, #cf3a9e 15%, #ff6240 70%, #fbaa4f 94%) !important; }\n\n.text-danger {\n  font-variant: small-caps;\n  font-size: small; }\n\n.imagen-para-archivo input {\n  display: none; }\n\n.imageU {\n  border-radius: 50% !important;\n  width: 180px !important;\n  max-width: 180px !important;\n  height: 180px !important;\n  -o-object-fit: cover !important;\n     object-fit: cover !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb2QtcnVuLWZvcm0vQzpcXFVzZXJzXFxNaWxlbm55c19EZXZcXERlc2t0b3BcXFByb3llY3Rvc1xcTnVldm9Xb25kZXJcXHdvbmRlcmh1bWFuc1xcZnJvbnRlbmQvc3JjXFxhcHBcXHNoYXJlZFxcZm9vZC1ydW4tZm9ybVxcZm9vZC1ydW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLHFGQUcyQixFQUFBOztBQUc3QjtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsK0JBQTRCO0tBQTVCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb2QtcnVuLWZvcm0vZm9vZC1ydW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYi0xMCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLXNoYXBlZCAuc2hhcGUtc3R5bGUtMS5zaGFwZS1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLFxyXG4gICAgICAjY2YzYTllIDE1JSxcclxuICAgICAgI2ZmNjI0MCA3MCUsXHJcbiAgICAgICNmYmFhNGYgOTQlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uaW1hZ2VuLXBhcmEtYXJjaGl2byBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltYWdlVSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcclxuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/food-run-form/food-run-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/food-run-form/food-run-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: FoodRunFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodRunFormComponent", function() { return FoodRunFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _core_services_food_run_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/food-run.service */ "./src/app/core/services/food-run.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoodRunFormComponent = /** @class */ (function () {
    function FoodRunFormComponent(bsModalRef, spinner, modalService, foodService, toastr) {
        this.bsModalRef = bsModalRef;
        this.spinner = spinner;
        this.modalService = modalService;
        this.foodService = foodService;
        this.toastr = toastr;
        this.imageURL = null;
        this.volunteers = null;
        this.total = null;
        this.description = null;
        this.name = null;
        this.environmentY = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiRoot;
        this.dateRe = null;
        this.time = { hour: 0, minute: 0, second: 0 };
    }
    FoodRunFormComponent.prototype.ngOnInit = function () {
        if (this.data !== undefined) {
            this.name = this.data.name;
            this.volunteers = this.data.total_volunteers;
            this.total = this.data.total;
            this.description = this.data.description;
            var d = new Date(this.data.execution_date);
            this.dateRe = {
                day: d.getDate() + 1,
                month: d.getMonth() + 1,
                year: d.getFullYear()
            };
            this.time = {
                hour: d.getHours(),
                minute: d.getMinutes()
            };
        }
    };
    FoodRunFormComponent.prototype.nameLength = function (ev) {
        var lengthName = ev.target.value.length;
        if (lengthName < 5) {
            this.noValidate = true;
            this.nameNo = 'min';
        }
        else if (lengthName > 100) {
            this.nameNo = 'max';
            this.noValidate = true;
        }
        else {
            this.noValidate = false;
            this.nameNo = null;
        }
    };
    FoodRunFormComponent.prototype.desLength = function (ev) {
        var lengthName = ev.target.textLength;
        if (lengthName < 5) {
            this.noValidate = true;
            this.desNo = 'min';
        }
        else if (lengthName > 300) {
            this.desNo = 'max';
            this.noValidate = true;
        }
        else {
            this.noValidate = false;
            this.desNo = null;
        }
    };
    FoodRunFormComponent.prototype.totalLength = function (ev) {
        var lengthMount = Number(ev.target.value);
        if (lengthMount <= 0) {
            this.noValidate = true;
            this.mountNo = 'min';
        }
        else if (lengthMount > 9999999) {
            this.noValidate = true;
            this.mountNo = 'max';
        }
        else {
            this.noValidate = false;
            this.mountNo = null;
        }
    };
    FoodRunFormComponent.prototype.volLength = function (ev) {
        var leVol = Number(ev.target.value);
        if (leVol <= 0) {
            this.noValidate = true;
            this.volNo = 'min';
        }
        else if (leVol > 10000) {
            this.noValidate = true;
            this.volNo = 'max';
        }
        else {
            this.noValidate = false;
            this.volNo = null;
        }
    };
    FoodRunFormComponent.prototype.remove = function () {
        this.imageURL = null;
    };
    FoodRunFormComponent.prototype.validarFechaMenorActual = function (date) {
        var x = new Date();
        var fecha = date.split("/");
        x.setFullYear(fecha[2], fecha[1] - 1, fecha[0]);
        var today = new Date();
        if (x >= today) {
            return false;
        }
        else {
            return true;
        }
    };
    // Image Preview
    FoodRunFormComponent.prototype.showPreview = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function () {
            _this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    };
    FoodRunFormComponent.prototype.save = function () {
        var _this = this;
        this.imageURL = (this.data !== undefined && this.imageURL === null) ? 'noImage' : this.imageURL;
        if (this.imageURL === null || this.name === null || this.total === null || this.volunteers === null || this.description === null || this.time === null || this.dateRe === null) {
            this.toastr.error('Error, you must enter all data');
        }
        else {
            this.dateRealiz = {
                day: this.dateRe.day,
                month: this.dateRe.month,
                year: this.dateRe.year,
                hour: this.time.hour,
                minute: this.time.minute
            };
            console.log(this.dateRealiz);
            var fecha_choice = this.dateRe.day + "/" + this.dateRe.month + "/" + this.dateRe.year;
            var hoy = new Date();
            var isOr = this.validarFechaMenorActual(fecha_choice);
            if (isOr === false) {
                var hoyT = hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear();
                if (fecha_choice === hoyT) {
                    console.log('soy hoy');
                    this.dateNo = true;
                    this.toastr.error('Date must be higher than current');
                }
                else {
                    this.spinner.show();
                    this.dateNo = false;
                    if (this.data === undefined) {
                        var body = {
                            image: this.imageURL,
                            name: this.name,
                            description: this.description,
                            total: this.total,
                            total_volunteers: this.volunteers,
                            execution_date: this.dateRealiz,
                            invitation_message: this.invitation_message
                        };
                        this.foodService.newFoodRund(body).subscribe(function (data) {
                            _this.toastr.success('Successful registration');
                            _this.spinner.hide();
                            _this.cerrarModal();
                        }, function (err) {
                            console.log(err);
                            _this.toastr.error(err.error.detail);
                            _this.spinner.hide();
                            _this.cerrarModal();
                        });
                    }
                    else {
                        if (this.imageURL === 'noImage') {
                            var body = {
                                id_food_run: this.data.id,
                                name: this.name,
                                description: this.description,
                                total: this.total,
                                total_volunteers: this.volunteers,
                                execution_date: this.dateRealiz,
                                invitation_message: this.invitation_message
                            };
                            this.foodService.editFoodRund(body).subscribe(function (data) {
                                _this.toastr.success('Successful update');
                                _this.spinner.hide();
                                _this.cerrarModal();
                            }, function (err) {
                                console.log(err);
                                if (err.status === 400) {
                                    _this.toastr.error('Error');
                                    _this.spinner.hide();
                                    _this.cerrarModal();
                                }
                                else {
                                    _this.cerrarModal();
                                }
                            });
                        }
                        else {
                            var body = {
                                id_food_run: this.data.id,
                                image: this.imageURL,
                                name: this.name,
                                description: this.description,
                                total: this.total,
                                total_volunteers: this.volunteers,
                                execution_date: this.dateRealiz,
                                invitation_message: this.invitation_message
                            };
                            this.foodService.editFoodRund(body).subscribe(function (data) {
                                _this.toastr.success('Successful update');
                                _this.spinner.hide();
                                _this.cerrarModal();
                            }, function (err) {
                                console.log(err);
                                _this.toastr.error('Error');
                                _this.spinner.hide();
                                _this.cerrarModal();
                            });
                        }
                    }
                }
            }
            else {
                this.dateNo = true;
                console.log('errorrrrrrrrrrrrrrr');
                this.toastr.error('Error, la fecha deber ser mayor a la actual');
            }
        }
    };
    FoodRunFormComponent.prototype.cerrarModal = function () {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    };
    FoodRunFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-run-form',
            template: __webpack_require__(/*! ./food-run-form.component.html */ "./src/app/shared/food-run-form/food-run-form.component.html"),
            styles: [__webpack_require__(/*! ./food-run-form.component.scss */ "./src/app/shared/food-run-form/food-run-form.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"],
            _core_services_food_run_service__WEBPACK_IMPORTED_MODULE_3__["FoodRunService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], FoodRunFormComponent);
    return FoodRunFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" [ngClass]=\"{'has-cards': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'}\">\r\n  <div class=\"container container-lg\" *ngIf=\"getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login'\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 mb-5 mb-md-0\">\r\n        <div class=\"card card-lift--hover shadow border-0\">\r\n          <a [routerLink]=\"['/landing']\" title=\"Landing Page\">\r\n            <img src=\"./assets/img/theme/landing.jpg\" class=\"card-img\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 mb-5 mb-lg-0\">\r\n        <div class=\"card card-lift--hover shadow border-0\">\r\n          <a [routerLink]=\"['/user-profile']\" title=\"Profile Page\">\r\n            <img src=\"./assets/img/theme/profile.jpg\" class=\"card-img\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row row-grid align-items-center\" [ngClass]=\"{'my-md': getPath()!=='/user-profile' && getPath()!=='/register' && getPath()!=='/login', 'mb-5':getPath()==='/user-profile' || getPath()==='/register' || getPath()==='/login'}\">\r\n      <div class=\"col-lg-6\">\r\n        <h3 class=\"text-primary font-weight-light mb-2\">Thank you for supporting us!</h3>\r\n        <h4 class=\"mb-0 font-weight-light\">Let's get in touch on any of these platforms.</h4>\r\n      </div>\r\n      <div class=\"col-lg-6 text-lg-center btn-wrapper\">\r\n        <a target=\"_blank\" href=\"https://twitter.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-twitter\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg\" ngbTooltip=\"Like us\">\r\n          <i class=\"fa fa-facebook-square\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://dribbble.com/creativetim\" class=\"btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round\" ngbTooltip=\"Follow us\">\r\n          <i class=\"fa fa-dribbble\"></i>\r\n        </a>\r\n        <a target=\"_blank\" href=\"https://github.com/creativetimofficial\" class=\"btn btn-neutral btn-icon-only btn-github btn-round btn-lg\" ngbTooltip=\"Star on Github\">\r\n          <i class=\"fa fa-github\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row align-items-center justify-content-md-between\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"copyright\">\r\n          &copy; {{test | date: 'yyyy'}}\r\n          <a href=\"https://www.creative-tim.com?ref=adsa-footer\" target=\"_blank\">Creative Tim</a>.\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <ul class=\"nav nav-footer justify-content-end\">\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://www.creative-tim.com?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://www.creative-tim.com/presentation?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">About Us</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"http://blog.creative-tim.com?ref=adsa-footer\" class=\"nav-link\" target=\"_blank\">Blog</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal-imagen/modal-imagen.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modal-imagen/modal-imagen.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"cont\">\r\n  <button (click)=\"cerrarModal()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</span>\r\n<div class=\"row\" *ngIf=\"type === 'view'\" style=\"padding: 1rem;\">\r\n  <div class=\"col-7 col-xs-6 col-md-7 col-lg-7 col-xl-7 pr-0\">\r\n    <span style=\"position: absolute;\r\n    padding: 10px;\r\n    background: border-box;\r\n    display: flex;\r\n    justify-content: start;\r\n    background: #faebd74a;\">\r\n      <button class=\"btn btn-sm btn-warning\" (click)=\"editType(allData.id)\"><i class=\"fa fa-edit\"></i></button>\r\n      <button class=\"btn btn-sm btn-danger\" (click)=\"deleteFeed(allData.id)\"><i class=\"fa fa-close\"></i></button>\r\n    </span>\r\n    <img [src]=\"img\" alt=\"\">\r\n  </div>\r\n  <div class=\"col-5 col-xs-6 col-md-5 col-lg-5 col-xl-5 pl-0\">\r\n    <section>\r\n      <span class=\"sp1\">\r\n        <img src=\"https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png\" alt=\"\">\r\n        <b>{{allData.name}} {{allData.lastname}}</b>\r\n      </span>\r\n    </section>\r\n    <section style=\"\r\n      overflow: overlay;\r\n      min-height: 10rem;\">\r\n      <span class=\"sp2\">\r\n        <img src=\"https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png\" alt=\"\">\r\n        <p style=\"display: flex; flex-direction: column;max-height: 90px;\r\n        word-break: break-all;\">\r\n          <b style=\"font-weight: 700;\">{{allData.name}} {{allData.lastname}}</b>\r\n          {{allData.description}}\r\n          <small>{{allData.date | date}} - {{allData.date | date:'h:mm'}} </small>\r\n        </p>\r\n      </span>\r\n      <span class=\"sp2\" *ngFor=\"let item of comments\">\r\n        <img src=\"https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png\" alt=\"\">\r\n\r\n        <p style=\"display: flex; flex-direction: column;\">\r\n          <b style=\"font-weight: 700;\">{{item.user.first_name}} {{item.user.last_name}}</b>\r\n          {{item.comment}}\r\n          <small>{{item.created_at | date}} - {{item.created_at | date:'h:mm'}} </small>\r\n        </p>\r\n      </span>\r\n\r\n    </section>\r\n    <section>\r\n      <span class=\"icons\">\r\n        <button class=\"iconsbtn\" (click)=\"doVote()\"><i class=\"ni ni-favourite-28\"\r\n            [ngClass]=\"{'red': ilike === 'true'}\"></i></button>\r\n      </span>\r\n      <p style=\"padding: 0.5rem;\">{{allData.likes}} people like it</p>\r\n      <span style=\"display: flex;\r\n        width: 100%;\r\n        justify-content: space-between;\r\n        padding: 00.2rem;\r\n        align-items: inherit;\">\r\n        <span>\r\n          <span *ngIf=\"contatorC\" style=\"float: left;\r\n          font-variant: all-petite-caps;\r\n          margin-left: 5px;\">{{contatorC}}/{{restanteC}}\r\n            characters</span>\r\n          <textarea maxlength=\"3500\" (keyup)=\"onKeyC($event)\"\r\n            style=\"width: 100%; max-height: 50px; border:none; resize: none;\" placeholder=\"  Write your comments\"\r\n            [(ngModel)]=\"comment\"></textarea>\r\n\r\n        </span>\r\n        <button style=\"max-height: 50px;\" class=\"btn btn-success btn-sm\" (click)=\"publicar(allData)\"\r\n          [disabled]=\"disabledBtn === true\">Post</button>\r\n      </span>\r\n    </section>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\" *ngIf=\"type === 'add'\">\r\n  <ng-template #noImage>\r\n    <div class=\"col-6 pr-0  addI\" style=\"max-height: 100%;padding-left: 0px;min-height: 30rem;\">\r\n      <h5>Add an image for your post</h5>\r\n      <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\r\n      <!-- <img *ngIf=\"croppedImage\" [src]=\"croppedImage\" /> -->\r\n      <div class=\"imagen-para-archivo\">\r\n        <span>\r\n          <label for=\"boton-archivo\">\r\n            <img class=\"imgI\" *ngIf=\"croppedImage\" [src]=\"croppedImage\" />\r\n            <img class=\"imgI\" *ngIf=\"!croppedImage\" [src]=\"imageDefaul\" />\r\n\r\n            <input id=\"boton-archivo\" type=\"file\" accept=\"image/*\" (change)=\"fileChangeEvent($event)\" />\r\n          </label>\r\n        </span>\r\n\r\n      </div>\r\n      <image-cropper *ngIf=\"show === true\" [backgroundColor]=\"Brown\" [imageChangedEvent]=\"imageChangedEvent\"\r\n        [maintainAspectRatio]=\"true\" [aspectRatio]=\"7 / 6\" format=\"png\" (imageCropped)=\"imageCropped($event)\"\r\n        (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\">\r\n      </image-cropper>\r\n      <button class=\"btn btn-sm btn-success mb-2\" (click)=\"ready()\" *ngIf=\"croppedImage\">Ready</button>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"col-6 pr-0\" style=\"max-height: 100%;\" *ngIf=\"imageURL && imageURL !== ''; else noImage\">\r\n    <span>\r\n      <img [src]=\"imageURL\" />\r\n    </span>\r\n  </div>\r\n  <div class=\"col-6 pl-0 addPublic\">\r\n    <label for=\"\">Description</label>\r\n    <textarea maxlength=\"65000\" (keyup)=\"onKey($event)\" (focus)=\"focus = true\" (blur)=\"focus = false\"\r\n      [(ngModel)]=\"description\"></textarea>\r\n    <span *ngIf=\"contator\" style=\"float: right;font-variant: all-petite-caps;\">{{contator}}/{{restante}}\r\n      characters</span>\r\n    <span>\r\n      <button class=\"btn btn-sm btn-success\" (click)=\"upload()\" [disabled]=\"readyImage === false\">Post</button>\r\n      <button class=\"btn btn-sm btn-info\" (click)=\"changeImg()\">Change image</button>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"type === 'edit'\">\r\n  <ng-template #noImage>\r\n    <div class=\"col-6 pr-0  addI\" style=\"max-height: 100%;padding-left: 0px; height: 30rem;\">\r\n      <h6 style=\"text-align: center;\">Choose a new image for your publication</h6>\r\n\r\n      <div class=\"imagen-para-archivo\">\r\n        <span>\r\n          <label for=\"boton-archivo\">\r\n            <img class=\"imgI\" *ngIf=\"croppedImage\" [src]=\"croppedImage\" />\r\n            <img class=\"imgI\" *ngIf=\"!croppedImage\" [src]=\"imageDefaul\" />\r\n\r\n            <input id=\"boton-archivo\" type=\"file\" accept=\"image/*\" (change)=\"fileChangeEvent($event)\" />\r\n          </label>\r\n        </span>\r\n\r\n      </div>\r\n      <image-cropper *ngIf=\"show === true\" [backgroundColor]=\"Brown\" [imageChangedEvent]=\"imageChangedEvent\"\r\n        [maintainAspectRatio]=\"true\" [aspectRatio]=\"7 / 6\" format=\"png\" (imageCropped)=\"imageCropped($event)\"\r\n        (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\">\r\n      </image-cropper>\r\n      <button class=\"btn btn-sm btn-success\" (click)=\"ready()\" *ngIf=\"croppedImage\">Ready</button>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"col-6 pr-0\" style=\"max-height: 100%;\" *ngIf=\"imageURL && imageURL !== ''; else noImage\">\r\n    <span>\r\n      <img [src]=\"imageURL\" />\r\n    </span>\r\n  </div>\r\n  <div class=\"col-6 pl-0 addPublic\">\r\n    <label for=\"\">Description</label>\r\n    <textarea maxlength=\"65000\" (keyup)=\"onKey($event)\" (focus)=\"focus = true\" (blur)=\"focus = false\"\r\n      [(ngModel)]=\"description\"></textarea>\r\n    <span *ngIf=\"contator\" style=\"float: right;font-variant: all-petite-caps;\">{{contator}}/{{restante}}\r\n      characters</span>\r\n    <span>\r\n      <button class=\"btn btn-sm btn-success\" (click)=\"edit()\">Edit</button>\r\n      <button class=\"btn btn-sm btn-info\" (click)=\"changeImg()\">Change image</button>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"type === 'onlyView'\">\r\n  <div *ngIf=\"editPortofolio === false else editPorf\" class=\"col-12 pr-0\" style=\"max-height: 100%;    display: flex;\r\n  justify-content: start;\">\r\n    <span style=\"position: absolute;\r\n    padding: 10px;\r\n    background: border-box;\r\n    display: flex;\r\n    justify-content: start;\r\n    background: #faebd74a;\">\r\n      <button class=\"btn btn-sm btn-warning\" (click)=\"editPort()\"><i class=\"fa fa-edit\"></i></button>\r\n      <button class=\"btn btn-sm btn-danger\" (click)=\"deletePortfolio()\"><i class=\"fa fa-close\"></i></button>\r\n    </span>\r\n    <img [src]=\"img\" alt=\"\" style=\"padding: 2rem;object-fit: contain;margin: 0 auto; max-width: 30rem;\r\n    min-width: 30rem;\r\n    object-fit: cover;\">\r\n  </div>\r\n  <ng-template #editPorf>\r\n    <div *ngIf=\"fir === false\" class=\"col-12 pr-0  addI\"\r\n      style=\"max-height: 100%;padding-left: 0px; height: 30rem;padding: 16px;\">\r\n      <h6 style=\"text-align: center;\">Choose a new image for your publication</h6>\r\n\r\n      <div class=\"imagen-para-archivo\">\r\n        <span>\r\n          <label for=\"boton-archivo\">\r\n            <img class=\"imgI\" *ngIf=\"croppedImage\" [src]=\"croppedImage\" />\r\n            <img class=\"imgI\" *ngIf=\"!croppedImage\" [src]=\"imageDefaul\" />\r\n\r\n            <input id=\"boton-archivo\" type=\"file\" accept=\"image/*\" (change)=\"fileChangeEvent($event)\" />\r\n          </label>\r\n        </span>\r\n\r\n      </div>\r\n      <image-cropper *ngIf=\"show === true\" [backgroundColor]=\"Brown\" [imageChangedEvent]=\"imageChangedEvent\"\r\n        [maintainAspectRatio]=\"true\" [aspectRatio]=\"7 / 6\" format=\"png\" (imageCropped)=\"imageCropped($event)\"\r\n        (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\">\r\n      </image-cropper>\r\n      <button class=\"btn btn-sm btn-success\" (click)=\"editar()\" *ngIf=\"croppedImage\">Ready</button>\r\n    </div>\r\n    <div class=\"col-12 pr-0\" style=\"max-height: 100%;\" *ngIf=\"imageURL && imageURL !== ''\">\r\n      <span style=\"padding: 2rem;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: baseline;\">\r\n        <button (click)=\"readyEdit()\" class=\"btn btn-sm btn-success\" style=\"position: absolute;\r\n        margin: 1rem;\r\n        right: 15px;bottom: 0;\">Ready</button>\r\n        <img [src]=\"imageURL\" />\r\n      </span>\r\n\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/modal-imagen/modal-imagen.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modal-imagen/modal-imagen.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row img {\n  width: 100%;\n  height: 100%; }\n\nspan.cont {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  left: 4rem;\n  position: absolute;\n  z-index: 111;\n  width: 100%;\n  top: -1rem; }\n\nspan.cont button {\n    background: transparent;\n    box-shadow: none;\n    border: 0;\n    color: white;\n    font-size: 2rem;\n    padding: 0; }\n\n.sp1 {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  padding: 5px; }\n\n.sp1 img {\n    width: 3rem;\n    height: 3rem; }\n\n.sp2 {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 1rem;\n  padding-bottom: 0; }\n\n.sp2 img {\n    width: 2.5rem;\n    height: 2.5rem; }\n\n.sp2 p {\n    font-size: small;\n    padding: 1rem;\n    padding-bottom: 0; }\n\na {\n  color: gray;\n  text-decoration: none !important; }\n\na .glyphicon {\n    -webkit-transition: all .5s;\n    transition: all .5s; }\n\na .glyphicon.ni-air-baloon {\n      color: #e74c3c; }\n\na .glyphicon.ni-air-baloon:hover {\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1); }\n\n.iconsbtn {\n  background: transparent;\n  border: none;\n  color: gray;\n  margin: 0.5rem; }\n\n.red {\n  color: red; }\n\n.grey {\n  color: gray; }\n\n.imagen-para-archivo input {\n  display: none; }\n\n.imageU {\n  border-radius: 50% !important;\n  width: 180px !important;\n  max-width: 180px !important;\n  height: 180px !important; }\n\n.addI {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #dee2e6;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n.addI .imgI {\n    width: 5rem; }\n\n.addPublic {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.addPublic textarea {\n    width: 80%;\n    height: 10rem;\n    max-height: 10rem; }\n\n.addPublic span {\n    padding: 1rem;\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    width: 80%; }\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: transparent; }\n\ntextarea:focus {\n  outline: 1px dotted;\n  outline: transparent; }\n\nimg:focus {\n  outline: 1px dotted;\n  outline: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWltYWdlbi9DOlxcVXNlcnNcXE1pbGVubnlzX0RldlxcRGVza3RvcFxcUHJveWVjdG9zXFxOdWV2b1dvbmRlclxcd29uZGVyaHVtYW5zXFxmcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFxtb2RhbC1pbWFnZW5cXG1vZGFsLWltYWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSWhCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IscUJBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQVBaO0lBVUksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVLEVBQUE7O0FBSWQ7RUFDRSxXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBTmQ7SUFTSSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUloQjtFQUNFLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFMbkI7SUFRSSxhQUFhO0lBQ2IsY0FBYyxFQUFBOztBQVRsQjtJQWFJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0UsV0FBVztFQUNYLGdDQUFnQyxFQUFBOztBQUZsQztJQUtJLDJCQUFtQjtJQUFuQixtQkFBbUIsRUFBQTs7QUFMdkI7TUFRTSxjQUFjLEVBQUE7O0FBUnBCO01BYVEsNkJBQXFCO2NBQXJCLHFCQUFxQixFQUFBOztBQU03QjtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQix3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBTHhCO0lBUUksV0FBVyxFQUFBOztBQUlmO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7O0FBSnJCO0lBT0ksVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUIsRUFBQTs7QUFUckI7SUFhSSxhQUFhO0lBQ2Isb0JBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFVBQVUsRUFBQTs7QUFNZDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFsLWltYWdlbi9tb2RhbC1pbWFnZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuXHJcbiAgLy8gaGVpZ2h0OiAyNXJlbTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuc3Bhbi5jb250IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbGVmdDogNHJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTExO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogLTFyZW07XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnNwMSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogM3JlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zcDIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5nbHlwaGljb24ge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuXHJcbiAgICAmLm5pLWFpci1iYWxvb24ge1xyXG4gICAgICBjb2xvcjogI2U3NGMzYztcclxuICAgIH1cclxuXHJcbiAgICAmLm5pLWFpci1iYWxvb24ge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pY29uc2J0biB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG1hcmdpbjogMC41cmVtO1xyXG59XHJcblxyXG4ucmVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZ3JleSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5pbWFnZW4tcGFyYS1hcmNoaXZvIGlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW1hZ2VVIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTgwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkSSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNkZWUyZTY7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLmltZ0kge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkUHVibGljIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgYnV0dG9uIHt9XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiAxcHggZG90dGVkO1xyXG4gIG91dGxpbmU6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pbWc6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XHJcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/modal-imagen/modal-imagen.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/modal-imagen/modal-imagen.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalImagenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalImagenComponent", function() { return ModalImagenComponent; });
/* harmony import */ var _core_services_feed_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/services/feed.service */ "./src/app/core/services/feed.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_services_homeless_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../core/services/homeless.service */ "./src/app/core/services/homeless.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var base_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiRoot;
var ModalImagenComponent = /** @class */ (function () {
    function ModalImagenComponent(bsModalRef, feedService, spinner, toastr, modalService, homelessService) {
        this.bsModalRef = bsModalRef;
        this.feedService = feedService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.modalService = modalService;
        this.homelessService = homelessService;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.data = [];
        this.imgTemp = null;
        this.votes = 5;
        this.userVotes = true;
        this.imageDefaul = '../../../assets/img/add.png';
        this.show = false;
        this.readyImage = false;
        this.editPortofolio = false;
        this.fir = false;
    }
    ModalImagenComponent.prototype.ngOnInit = function () {
        this.getComments();
        var img = this.data[0].img;
        if (img.includes('https')) {
            this.img = img;
        }
        else {
            this.img = "" + base_url + img;
        }
        this.allData = this.data[0];
        this.ilike = this.allData.ilike;
        this.disabledBtn = true;
    };
    ModalImagenComponent.prototype.cerrarModal = function () {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    };
    ModalImagenComponent.prototype.onKey = function (event) {
        this.contator = event.target.value.length;
        if (this.contator <= 65000) {
            this.restante = 65000 - this.contator;
        }
    };
    ModalImagenComponent.prototype.onKeyC = function (event) {
        this.contatorC = event.target.value.length;
        if (this.contatorC <= 3500) {
            this.restanteC = 3500 - this.contatorC;
        }
        if (this.contatorC < 2) {
            this.disabledBtn = true;
        }
        else {
            this.disabledBtn = false;
        }
    };
    ModalImagenComponent.prototype.doVote = function () {
        var _this = this;
        if (this.ilike === 'false') {
            this.feedService.like(this.allData.id).subscribe(function (data) {
                _this.ilike = data['i_like'];
                _this.allData.likes = _this.allData.likes + 1;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.feedService.dislike(this.allData.id).subscribe(function (data) {
                _this.ilike = data['i_like'];
                _this.allData.likes = _this.allData.likes - 1;
            }, function (err) {
                console.log(err);
            });
        }
    };
    // Image Preview
    ModalImagenComponent.prototype.showPreview = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.fileImg = file;
        var reader = new FileReader();
        reader.onload = function () {
            _this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    };
    ModalImagenComponent.prototype.upload = function () {
        var _this = this;
        if (this.imageURL === undefined || this.description === '') {
            this.toastr.error('Error, debe ingresar todos los datos');
        }
        else {
            this.spinner.show();
            var body = {
                image: this.imageURL,
                description: this.description
            };
            this.feedService.newFeed(body).subscribe(function (data) {
                _this.toastr.success('Successful registration');
                _this.spinner.hide();
                _this.cerrarModal();
                _this.ngOnInit();
            }, function (err) {
                console.log(err);
                _this.spinner.hide();
                _this.toastr.error(err.error.detail);
                _this.cerrarModal();
            });
        }
    };
    ModalImagenComponent.prototype.publicar = function (data) {
        var _this = this;
        if (this.comment === '') {
            this.toastr.error('Error, debe ingresar un comentario');
        }
        else {
            this.spinner.show();
            var body = {
                comment: this.comment
            };
            this.feedService.newCom(data.id, body).subscribe(function (res) {
                _this.spinner.hide();
                _this.toastr.success('Successful posting');
                _this.cerrarModal();
                _this.ngOnInit();
            }, function (err) {
                _this.toastr.error(err.error.detail);
                console.log(err);
                _this.spinner.hide();
            });
        }
    };
    ModalImagenComponent.prototype.changeImg = function () {
        this.imageURL = '';
    };
    ModalImagenComponent.prototype.getComments = function () {
        var _this = this;
        this.feedService.getComments(this.data[0].id).subscribe(function (data) {
            _this.comments = (data['length'] !== 0) ? data : null;
        }, function (err) {
            console.log(err);
        });
    };
    ModalImagenComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
        this.show = true;
    };
    ModalImagenComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    ModalImagenComponent.prototype.imageLoaded = function () {
        // show cropper
        console.log('loades');
    };
    ModalImagenComponent.prototype.cropperReady = function () {
        // cropper ready
        console.log('ready');
    };
    ModalImagenComponent.prototype.loadImageFailed = function () {
        // show message
        console.log('failed');
    };
    ModalImagenComponent.prototype.ready = function () {
        this.imageURL = this.croppedImage;
        this.readyImage = true;
    };
    ModalImagenComponent.prototype.editType = function (id) {
        this.type = 'edit';
        this.idEdit = id;
    };
    ModalImagenComponent.prototype.edit = function () {
        var _this = this;
        this.spinner.show();
        var body = {
            id: this.idEdit,
            image: this.imageURL,
            description: this.description
        };
        this.feedService.editFeed(body).subscribe(function (data) {
            _this.toastr.success('Successful update');
            _this.spinner.hide();
            _this.cerrarModal();
            _this.ngOnInit();
        }, function (err) {
            console.log(err);
            _this.spinner.hide();
            _this.toastr.error(err.error.detail);
            _this.cerrarModal();
        });
    };
    ModalImagenComponent.prototype.deleteFeed = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to remove this?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (!result.dismiss) {
                _this.feedService.deleteFeed(id).subscribe(function (data) {
                    _this.toastr.success('Successful removal');
                    _this.spinner.hide();
                    _this.cerrarModal();
                    _this.ngOnInit();
                }, function (err) {
                    console.log(err);
                    _this.spinner.hide();
                    _this.toastr.error(err.error.detail);
                    _this.cerrarModal();
                });
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
            }
        });
    };
    ModalImagenComponent.prototype.deletePortfolio = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: "Do you want to remove this?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (!result.dismiss) {
                _this.homelessService.deletePortfolio(_this.data[0].id).subscribe(function (data) {
                    _this.toastr.success('Successful removal');
                    _this.spinner.hide();
                    _this.cerrarModal();
                    _this.ngOnInit();
                }, function (err) {
                    console.log(err);
                    _this.spinner.hide();
                    _this.toastr.error(err.error.detail);
                    _this.cerrarModal();
                });
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
            }
        });
    };
    ModalImagenComponent.prototype.editPort = function () {
        this.editPortofolio = true;
    };
    ModalImagenComponent.prototype.editar = function () {
        this.imageURL = this.croppedImage;
        this.readyImage = true;
        this.fir = true;
    };
    ModalImagenComponent.prototype.readyEdit = function () {
        var _this = this;
        this.spinner.show();
        var body = {
            photo: this.imageURL,
            id: this.data[0].id
        };
        console.log(body);
        this.homelessService.editPortfolio(body).subscribe(function (data) {
            _this.spinner.hide();
            _this.toastr.success('Successful update');
            _this.cerrarModal();
        }, function (err) {
            console.log(err);
            _this.spinner.hide();
            _this.toastr.error(err.error.detail);
            _this.cerrarModal();
        });
    };
    ModalImagenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-imagen',
            template: __webpack_require__(/*! ./modal-imagen.component.html */ "./src/app/shared/modal-imagen/modal-imagen.component.html"),
            styles: [__webpack_require__(/*! ./modal-imagen.component.scss */ "./src/app/shared/modal-imagen/modal-imagen.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _core_services_feed_service__WEBPACK_IMPORTED_MODULE_0__["FeedService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _core_services_homeless_service__WEBPACK_IMPORTED_MODULE_7__["HomelessService"]])
    ], ModalImagenComponent);
    return ModalImagenComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar-main\"\r\n  class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand mr-lg-5 d-flex\" [routerLink]=\"['/landing']\">\r\n      <img src=\"./assets/img/logo/WH-Logo-White.png\">\r\n      <h4 style=\"color: white; font-weight: bold;margin-left: 10px;\">WonderHumans</h4>\r\n    </a>\r\n    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button> -->\r\n\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\r\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"navbar-collapse collapse\" [ngbCollapse]=\"isCollapsed\">\r\n      <div class=\"navbar-collapse-header\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\">\r\n            <a [routerLink]=\"['/home']\">\r\n              <h4 style=\"color: #172b4d !important; font-weight: bold;\">WonderHumans</h4>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-6 collapse-close\">\r\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\r\n              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\r\n              <span></span>\r\n              <span></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-end d-flex justify-content-end w-100\">\r\n        <!-- <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret\" data-toggle=\"dropdown\" role=\"button\">\r\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\r\n            <span class=\"nav-link-inner--text\">Components</span>\r\n          </a>\r\n          <div class=\"dropdown-menu-xl dropdown-menu\" >\r\n            <div class=\"dropdown-menu-inner\">\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/tutorial']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-primary rounded-circle text-white\">\r\n                  <i class=\"ni ni-spaceship\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Getting started</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn how to use Argon compiling Scss, change brand colors and more.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/colors']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\r\n                  <i class=\"ni ni-palette\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h6 class=\"heading text-primary mb-md-1\">Foundation</h6>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn more about colors, typography, icons and the grid system we used for Argon.</p>\r\n                </div>\r\n              </a>\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/alerts']\" class=\"media d-flex align-items-center\">\r\n                <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\r\n                  <i class=\"ni ni-ui-04\"></i>\r\n                </div>\r\n                <div class=\"media-body ml-3\">\r\n                  <h5 class=\"heading text-warning mb-md-1\">Components</h5>\r\n                  <p class=\"description d-none d-md-inline-block mb-0\">Browse our 50 beautiful handcrafted components offered in the Free version.</p>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </li> -->\r\n\r\n\r\n\r\n        <!-- <li class=\"nav-item dropdown\">\r\n          <div>\r\n            <div class=\"card\">\r\n              <div class=\"input-group\">\r\n                <input [(ngModel)]=\"term\" (keyup)=\"onKey($event)\" type=\"text\" class=\"form-control\">\r\n                <div class=\"input-group-append\"><button class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex flex-row justify-content-between mb-2 cont\" *ngIf=\"searchActive !== null\" style=\"position: absolute;\r\n              width: 100%;\r\n              top: 4rem;\r\n          \">\r\n                <div class=\"d-flex flex-column p-3\">\r\n                  <p class=\"mb-1\" (click)=\"onClick(item)\" clickable>sdfdfdsfds</p>\r\n                  <small class=\"text-muted\">8 days remaining</small>\r\n                  <p>{{item}}</p>\r\n                </div>\r\n                <div class=\"price pt-3 pl-3\"> <span class=\"mb-2\">Fixed</span>\r\n                  <h5><span>$</span>1,500</h5>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </li> -->\r\n        <li class=\"nav-item dropdown\" *ngIf=\"!user\">\r\n          <a class=\"nav-link \" role=\"button\" [routerLink]=\"['/login']\">\r\n            <span class=\"nav-link-inner--text\">Login</span>\r\n          </a>\r\n\r\n        </li>\r\n        <li class=\"nav-item dropdown\" *ngIf=\"user\">\r\n          <a class=\"nav-link \" role=\"button\" [routerLink]=\"['/user-profile']\">\r\n            <span class=\"nav-link-inner--text\">Profile</span>\r\n          </a>\r\n\r\n        </li>\r\n        <li class=\"nav-item dropdown\" *ngIf=\"user\">\r\n          <a class=\"nav-link \" role=\"button\" [routerLink]=\"['/new-homeless']\">\r\n            <span class=\"nav-link-inner--text\">New Register Homeless</span>\r\n          </a>\r\n\r\n        </li>\r\n        <li class=\"nav-item dropdown\" *ngIf=\"!user\">\r\n          <a class=\"nav-link \" role=\"button\" [routerLink]=\"['/register']\">\r\n            <span class=\"nav-link-inner--text\">Register</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"user\">\r\n          <a class=\"nav-link nav-link-icon\" role=\"button\" [routerLink]=\"['/qr-reader']\" data-toggle=\"tooltip\">\r\n            <span class=\"nav-link-inner--text d-lg-none\">QR READER</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" *ngIf=\"user\">\r\n          <a class=\"nav-link \" role=\"button\" (click)=\"logout()\" data-toggle=\"Logout\">\r\n            <span class=\"nav-link-inner--text\">Logout</span>\r\n          </a>\r\n        </li>\r\n        <!-- <li *ngIf=\"user\" class=\"nav-item\">\r\n          <button (click)=\"logout()\" class=\"nav-link nav-link-icon btn btn-icon btn-3 btn-secondary btn-sm\" type=\"button\"\r\n            placement=\"bottom\" ngbTooltip=\"Cerrar Sesión\" style=\"padding: 0;\r\n                          color: brown;font-size: small;\">\r\n            <span class=\"btn-inner--text\">Logout <i class=\"ni ni-button-power\"></i></span>\r\n          </button>\r\n        </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.modal-dialog {\n  margin-left: 0px;\n  margin-top: 0px; }\n\n.navbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9DOlxcVXNlcnNcXE1pbGVubnlzX0RldlxcRGVza3RvcFxcUHJveWVjdG9zXFxOdWV2b1dvbmRlclxcd29uZGVyaHVtYW5zXFxmcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lm1vZGFsLWRpYWxvZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router, lsService, modalService, toastr) {
        this.location = location;
        this.router = router;
        this.lsService = lsService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    NavbarComponent.prototype.logout = function () {
        this.user = null;
        localStorage.removeItem('token');
        localStorage.removeItem('wonderHumanUser');
        // tslint:disable-next-line: no-unused-expression
        this.router.navigateByUrl('/login');
        this.toastr.success('Successful logout');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('user'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "user", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/searchbar/searchbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/searchbar/searchbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 6rem;\">\r\n  <div class=\"row d-flex justify-content-center w-100\" style=\"padding: 1.5rem;\r\n  background: #ec588a;\r\n  border: 1px solid white;\r\n  border-radius: 17px;margin: 0;\">\r\n    <div class=\"col-8\">\r\n      <h3 style=\"text-align: center;\r\n      color: white;\r\n      font-variant: all-petite-caps;\r\n      font-size: 1.5rem;\r\n      font-weight: 700;margin-bottom: 0;\">Search homeless by code</h3>\r\n      <div class=\"card\">\r\n        <div class=\"input-group\">\r\n          <input [(ngModel)]=\"term\" (keyup)=\"onKey($event)\" type=\"text\" class=\"form-control\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-primary\" (click)=\"onClick()\">\r\n              <i class=\"fa fa-search\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex flex-row justify-content-between mb-2 cont\" *ngIf=\"searchActive !== null\"\r\n          style=\"position: relative;width: 100%;top: 1rem;\">\r\n          <div class=\"d-flex flex-column p-3\">\r\n            <a (click)=\"select(dataHomeless.id)\" clickable>\r\n              <img [src]=\"imageUrl\" alt=\"\" style=\"display: inline-flex;\r\n              width: 2rem;\r\n              border-radius: 50px;\r\n              height: 2rem;\">\r\n              <p class=\"mb-1\" style=\"margin-left: 10px;\r\n              display: inline-flex;\r\n              align-items: center;\">{{dataHomeless.firstName}} {{dataHomeless.lastName}}\r\n                <small class=\"text-muted d-block ml-2\">{{dataHomeless.city}}</small>\r\n              </p>\r\n            </a>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/searchbar/searchbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/searchbar/searchbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .card {\n  border: none;\n  border-radius: 20px;\n  background: transparent; }\n\n:host .form-control {\n  border-radius: 50px;\n  border: 1.5px solid #E3E6ED;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n:host input.form-control:focus {\n  box-shadow: none;\n  border: 1.5px solid #E3E6ED;\n  background-color: #F7F8FD;\n  letter-spacing: 1px; }\n\n:host .btn-primary {\n  border-color: #ffffff !important;\n  background-color: #fff !important;\n  border-radius: 50px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  color: #ef5560 !important; }\n\n:host .btn-primary:focus {\n  box-shadow: none; }\n\n:host .text {\n  font-size: 13px;\n  color: #9CA1A4; }\n\n:host .price {\n  background: #F5F8FD;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  width: 97px; }\n\n:host .flex-row {\n  border: 1px solid #F2F2F4;\n  border-radius: 10px;\n  margin: 0 1px 0;\n  background: white; }\n\n:host .flex-column p {\n  font-size: 14px; }\n\n:host span.mb-2 {\n  font-size: 12px;\n  color: #8896BD; }\n\n:host h5 span {\n  color: #869099; }\n\n@media screen and (max-width: 450px) {\n  :host .card {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    text-align: center; }\n  :host .price {\n    border: none;\n    margin: 0 auto; } }\n\n:host .cont {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n  background: #e9ecef;\n  box-shadow: 2px 2px 4px #adb5bd; }\n\n:host .cont p:hover, :host .cont p:active, :host .cont p:focus {\n    background-color: #3448ff1c;\n    cursor: pointer;\n    padding: 0.5rem;\n    border-radius: .6rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlYXJjaGJhci9DOlxcVXNlcnNcXE1pbGVubnlzX0RldlxcRGVza3RvcFxcUHJveWVjdG9zXFxOdWV2b1dvbmRlclxcd29uZGVyaHVtYW5zXFxmcm9udGVuZC9zcmNcXGFwcFxcc2hhcmVkXFxzZWFyY2hiYXJcXHNlYXJjaGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBTDNCO0VBU0ksbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsNkJBQTZCLEVBQUE7O0FBWmpDO0VBZ0JJLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQW5CdkI7RUF1QkksZ0NBQWdDO0VBQ2hDLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qix5QkFBeUIsRUFBQTs7QUE1QjdCO0VBZ0NJLGdCQUNGLEVBQUE7O0FBakNGO0VBb0NJLGVBQWU7RUFDZixjQUNGLEVBQUE7O0FBdENGO0VBeUNJLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLFdBQ0YsRUFBQTs7QUE3Q0Y7RUFnREkseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBbkRyQjtFQXVESSxlQUNGLEVBQUE7O0FBeERGO0VBMkRJLGVBQWU7RUFDZixjQUNGLEVBQUE7O0FBN0RGO0VBZ0VJLGNBQ0YsRUFBQTs7QUFFQTtFQW5FRjtJQXFFTSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGtCQUNGLEVBQUE7RUF4RUo7SUEyRU0sWUFBWTtJQUNaLGNBQ0YsRUFBQSxFQUFDOztBQTdFTDtFQWlGSSx1Q0FBaUM7RUFBakMsd0NBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsK0JBQStCLEVBQUE7O0FBbkZuQztJQTBGUSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jYXJkIHtcclxuXHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNFM0U2RUQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNFM0U2RUQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOEZEO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB9XHJcblxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGNvbG9yOiAjZWY1NTYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnRuLXByaW1hcnk6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM5Q0ExQTRcclxuICB9XHJcblxyXG4gIC5wcmljZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVGOEZEO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA5N3B4XHJcbiAgfVxyXG5cclxuICAuZmxleC1yb3cge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YyRjJGNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgMXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5mbGV4LWNvbHVtbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gIH1cclxuXHJcbiAgc3Bhbi5tYi0yIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjODg5NkJEXHJcbiAgfVxyXG5cclxuICBoNSBzcGFuIHtcclxuICAgIGNvbG9yOiAjODY5MDk5XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBtYXJnaW46IDAgYXV0b1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4ICNhZGI1YmQ7XHJcblxyXG4gICAgcCB7XHJcblxyXG4gICAgICAmOmhvdmVyLFxyXG4gICAgICAmOmFjdGl2ZSxcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NDhmZjFjO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjZyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/searchbar/searchbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/searchbar/searchbar.component.ts ***!
  \*********************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_core_services_homeless_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/homeless.service */ "./src/app/core/services/homeless.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent(searchService, spinner, toastr, router) {
        this.searchService = searchService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
        this.searchActive = null;
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    SearchbarComponent.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    SearchbarComponent.prototype.onClick = function () {
        var _this = this;
        console.log(this.term);
        this.searchService.searchHomeless(this.term).subscribe(function (data) {
            console.log(data);
            _this.dataHomeless = data;
            _this.searchActive = true;
            _this.imageUrl = (data['photo']) ? "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiRoot + data['photo'] : null;
        }, function (error) {
            _this.toastr.error(error.error.detail);
            console.log(error);
        });
    };
    SearchbarComponent.prototype.getData = function (item) {
        console.log(item);
    };
    SearchbarComponent.prototype.select = function (id) {
        this.router.navigateByUrl("homeless-profile/" + id);
        this.searchActive = null;
        this.term = '';
    };
    SearchbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/shared/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.scss */ "./src/app/shared/searchbar/searchbar.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_core_services_homeless_service__WEBPACK_IMPORTED_MODULE_4__["HomelessService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/shared/searchbar/searchbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Pipes
// Directives
// Components
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"]
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchbarComponent"]
            ],
            declarations: [_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchbarComponent"]
            ],
        })
    ], SharedModule);
    return SharedModule;
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
    production: false,
    apiRoot: 'http://localhost:8000',
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
/*!

=========================================================
* Argon Design System Angular - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




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

module.exports = __webpack_require__(/*! C:\Users\Milennys_Dev\Desktop\Proyectos\NuevoWonder\wonderhumans\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map