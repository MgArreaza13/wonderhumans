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
    selector: 'app-list-events',
    templateUrl: './list-events.component.html',
    styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {
    foodRunsData: Object;
    environmentY = environment.apiRoot;
    term;
    valor = '';
    showMsg: boolean;
    p: number = 1;
    constructor(
        private router: Router,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private modalService2: BsModalService,
        private foodService: FoodRunService
    ) { }

    ngOnInit() {
        this.getFoodRuns();
    }

    search() {
        this.term = this.valor;
    }

    getFoodRuns() {
        this.spinner.show();
        this.foodService.getFoodRuns().subscribe((data) => {
            this.foodRunsData = data;
            this.spinner.hide();
        }, err => {
            console.log(err);
            this.spinner.hide();
        })
    }

    back() {
        this.router.navigateByUrl('/food-run')
    }
    details(id) {
        this.router.navigateByUrl(`/details-food-run/${id}`)
    }



}
