import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
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
        BsDatepickerModule,
        Ng2SearchPipeModule,
        NgxPaginationModule
    ],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SearchbarComponent,
        ListEventsComponent],
    declarations: [SearchbarComponent, ListEventsComponent
    ],
})
export class SharedModule { }
