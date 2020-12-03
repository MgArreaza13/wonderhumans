// tslint:disable-next-line: max-line-length
import { DragScrollModule } from 'ngx-drag-scroll';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NewHomelessComponent } from './pages/new-homeless/new-homeless.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HomeModule } from './pages/home/home.module';
import { LoginComponent } from './pages/login/login.component';
// import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { HomelessProfileComponent } from './pages/homeless-profile/homeless-profile.component';
import { LightboxModule } from 'ngx-lightbox';
import { QrReaderComponent } from './pages/qr-reader/qr-reader.component';
import { SidebarModule } from 'ng-sidebar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgxStripeModule } from '@nomadreservations/ngx-stripe';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalImagenComponent } from './shared/modal-imagen/modal-imagen.component';
import { FoodRunListModule } from './pages/food-run-list/food-run-list.module';
import { FoodRunDetailsModule } from './pages/food-run-details/food-run-details.module';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LandingComponent,
        ProfileComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        EditProfileComponent,
        NewHomelessComponent,
        HomelessProfileComponent,
        QrReaderComponent,
        ModalImagenComponent,


    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule,
        CoreModule,
        SharedModule,
        ZXingScannerModule,
        NgxSpinnerModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }), // ToastrModule added
        HomeModule,
        AppRoutingModule,
        LightboxModule,
        SidebarModule.forRoot(),
        ModalModule.forRoot(),
        FileUploadModule,
        NgxStripeModule.forRoot('pk_test_HvwgwPUBp4MDNtNzAblZKClz00L9KZljOT'),
        BsDatepickerModule.forRoot(),
        DragScrollModule,
        ImageCropperModule,
        ProgressbarModule.forRoot(),
        FoodRunListModule,
        FoodRunDetailsModule

    ],
    providers: [],
    // tslint:disable-next-line: max-line-length
    exports: [],
    bootstrap: [AppComponent],
    entryComponents: [ModalImagenComponent]
})
export class AppModule { }
