import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsModule } from 'src/app/sections/sections.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FoodRunDetailsComponent } from './food-run-details.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { DragScrollModule } from 'ngx-drag-scroll';
@NgModule({
    imports: [
        CommonModule,
        SectionsModule,
        NgbModule,
        RouterModule,
        ProgressbarModule.forRoot(),
        DragScrollModule
    ],
    declarations: [FoodRunDetailsComponent],
})
export class FoodRunDetailsModule { }
