import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SearchbarComponent } from './searchbar/searchbar.component';

// Pipes


// Directives


// Components


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        BsDatepickerModule
    ],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SearchbarComponent],
    declarations: [SearchbarComponent
    ],
})
export class SharedModule { }
