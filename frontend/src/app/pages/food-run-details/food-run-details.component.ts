import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ActivatedRoute } from '@angular/router';
import { FoodRunService } from './../../core/services/food-run.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-food-run-details',
    templateUrl: './food-run-details.component.html',
    styleUrls: ['./food-run-details.component.scss']
})
export class FoodRunDetailsComponent implements OnInit {
    @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
    environmentY = environment.apiRoot;
    slides = [
        { img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { img: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" },
        { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { img: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" },
        { img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
        { img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
    ];
    xDisabled: boolean;
    disabled: boolean;
    hideScrollbar: boolean;
    yDisabled: boolean;
    leftNavDisabled: boolean;
    rightNavDisabled: boolean;
    index: any;
    idFood: any;
    dataDetails;
    dataVol;
    constructor(
        private route: ActivatedRoute,
        private serviceFood: FoodRunService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
    ) {
        this.idFood = this.route.snapshot.paramMap.get('idFood');
        console.log(this.idFood);
    }

    ngOnInit() {
        this.getDetails();
    }

    getDetails() {
        this.spinner.show();
        this.serviceFood.getFoodRu(this.idFood).subscribe((data) => {
            console.log(data);
            this.dataDetails = data;
            this.getVol();
        }, error => {
            console.log(error);
            this.spinner.hide();

        });
    }

    getVol() {
        this.serviceFood.getVol(this.idFood).subscribe((data) => {
            console.log(data);
            this.dataVol = (data['length'] === 0) ? null : data;
            this.spinner.hide();
        }, error => {
            console.log(error)
        });
    }

    volunterAdd() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Deseas inscribirte como voluntario?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result) {
                const body = {
                    id_food_run: this.idFood
                };
                this.spinner.show();
                this.serviceFood.newVol(body).subscribe(data => {
                    console.log(data);
                    this.spinner.hide();
                    this.toastr.success('Ud se ha registrado satisfactoriamente como voluntario');
                    this.ngOnInit();
                }, error => {
                    console.log(error);
                    this.toastr.error(error.error.detail);
                    this.spinner.hide();

                });
            }
        });
    }

    toggleHideSB() {
        this.hideScrollbar = !this.hideScrollbar;
    }

    toggleDisable() {
        this.disabled = !this.disabled;
    }
    toggleXDisable() {
        this.xDisabled = !this.xDisabled;
    }
    toggleYDisable() {
        this.yDisabled = !this.yDisabled;
    }

    moveLeft() {
        this.ds.moveLeft();
    }

    moveRight() {
        this.ds.moveRight();
    }

    moveTo(idx: number) {
        this.ds.moveTo(idx);
    }

    leftBoundStat(reachesLeftBound: boolean) {
        this.leftNavDisabled = reachesLeftBound;
    }

    rightBoundStat(reachesRightBound: boolean) {
        this.rightNavDisabled = reachesRightBound;
    }

    onSnapAnimationFinished() {
        console.log('snap animation finished');
    }

    onIndexChanged(idx) {
        this.index = idx;
        console.log('current index: ' + idx);
    }

    onDragScrollInitialized() {
        console.log('first demo drag scroll has been initialized.');
    }

    onDragStart() {
        console.log('drag start');
    }

    onDragEnd() {
        console.log('drag end');
    }


}
