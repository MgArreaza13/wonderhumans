import { NewHomelessComponent } from './pages/new-homeless/new-homeless.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { HomelessProfileComponent } from './pages/homeless-profile/homeless-profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { QrReaderComponent } from './pages/qr-reader/qr-reader.component';
import { FoodRunListComponent } from './pages/food-run-list/food-run-list.component';
import { FoodRunDetailsComponent } from './pages/food-run-details/food-run-details.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user-profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'qr-reader', component: QrReaderComponent },
    { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard] },
    { path: 'new-homeless', component: NewHomelessComponent, canActivate: [AuthGuard] },
    { path: 'edit-homeless/:idHomeless', component: NewHomelessComponent, canActivate: [AuthGuard] },
    { path: 'homeless-profile/:idHomeless', component: HomelessProfileComponent, canActivate: [AuthGuard] },
    { path: 'register', component: SignupComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'food-run', component: FoodRunListComponent },
    { path: 'details-food-run', component: FoodRunDetailsComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
