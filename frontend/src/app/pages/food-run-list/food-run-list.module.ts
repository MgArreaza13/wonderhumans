import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRunListComponent } from './food-run-list.component';
import { SectionsModule } from 'src/app/sections/sections.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NucleoSectionComponent } from 'src/app/sections/nucleo-section/nucleo-section.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        SectionsModule,
        NgbModule,
        RouterModule
    ],
    declarations: [FoodRunListComponent],
})
export class FoodRunListModule { }
