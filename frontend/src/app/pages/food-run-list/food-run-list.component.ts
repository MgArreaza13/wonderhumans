import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { combineLatest } from 'rxjs';
import { FoodRunFormComponent } from 'src/app/shared/food-run-form/food-run-form.component';
import { environment } from 'src/environments/environment';
import { FoodRunService } from './../../core/services/food-run.service';

@Component({
    selector: 'app-food-run-list',
    templateUrl: './food-run-list.component.html',
    styleUrls: ['./food-run-list.component.scss']
})
export class FoodRunListComponent implements OnInit {
    bsModalRef: BsModalRef;
    foodRunsData;
    environmentY = environment.apiRoot;
    constructor(
        private router: Router,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private modalService2: BsModalService,
        private foodService: FoodRunService) { }

    ngOnInit() {
        this.getFoodRuns();
    }

    addFoodRun() {
        this.bsModalRef = this.modalService2.show(FoodRunFormComponent);
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA fullscreen-modal');
        const _combine = combineLatest(
            this.modalService2.onHide,
            this.modalService2.onHidden,
        ).subscribe((data) => {
            if (data[0] === 'close') {
                this.ngOnInit();
            }

        });
    }

    getFoodRuns() {
        this.spinner.show();
        this.foodService.getFoodRuns().subscribe((data) => {
            console.log(data);
            this.foodRunsData = data;
            this.spinner.hide();
        }, err => {
            console.log(err);
            this.spinner.hide();
        })
    }

}
