import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodRunService } from './../../core/services/food-run.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest } from 'rxjs';
import { FoodRunFormComponent } from 'src/app/shared/food-run-form/food-run-form.component';
import { DonationFoodRunComponent } from 'src/app/shared/donation-food-run/donation-food-run.component';
import { AddMultimediaComponent } from 'src/app/shared/add-multimedia/add-multimedia.component';

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
    bsModalRef: BsModalRef;
    dataDonations: Object;
    user: any;
    isVolunter: boolean = false;
    isOwner: boolean = false;
    multiMedia: Object;
    constructor(
        private route: ActivatedRoute,
        private serviceFood: FoodRunService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private modalService2: BsModalService,
        private router: Router,
    ) {
        this.idFood = this.route.snapshot.paramMap.get('idFood');
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
        this.getDetails();
    }

    getDetails() {
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
        this.spinner.show();
        this.serviceFood.getFoodRu(this.idFood).subscribe((data) => {
            this.dataDetails = data;
            if (this.dataDetails.user.id === this.user['id']) {
                this.isOwner = true;
            } else {
                this.isOwner = false;
            }
            this.donations();
        }, error => {
            console.log(error);
            this.spinner.hide();

        });
    }

    addMoreMulti() {
        const initialState = {

            data: this.idFood

        };

        this.bsModalRef = this.modalService2.show(AddMultimediaComponent, { initialState });
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

    getMoreMulti() {
        this.serviceFood.getMultimedia(this.idFood).subscribe(async (data) => {
            console.log(data);
            this.multiMedia = data;
            this.spinner.hide();

        }, error => {
            console.log(error)
        });
    }


    getVol() {
        this.serviceFood.getVol(this.idFood).subscribe(async (data) => {
            this.dataVol = (data['length'] === 0) ? null : data;
            if (this.dataVol !== null) {
                this.dataVol.forEach(element => {
                    if (element.user.id === this.user['id']) {
                        this.isVolunter = true;
                    }
                });
            }
            console.log(this.dataVol)
            this.getMoreMulti();
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

    editFoodRun() {
        const initialState = {

            data: this.dataDetails

        };
        this.bsModalRef = this.modalService2.show(FoodRunFormComponent, { initialState });
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

    deleteFoodRun() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Deseas eliminar este food run?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result) {

                this.spinner.show();
                this.serviceFood.deleteFoodRund(this.idFood).subscribe((data) => {
                    console.log(data);
                    this.toastr.success('Eliminación exitosa');
                    this.spinner.hide();
                    this.router.navigateByUrl('/food-run');
                }, err => {
                    console.log(err);
                    this.toastr.error('Error');
                    this.spinner.hide();
                });
            }
        });

    }

    donationDetails(data) {

        const initialState = {

            data: [
                data
            ],
        };
        this.bsModalRef = this.modalService2.show(DonationFoodRunComponent, { initialState });
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

    donations() {
        this.serviceFood.getDonations(this.idFood).subscribe((data) => {
            this.dataDonations = (data['length'] === 0) ? null : data;
            this.spinner.hide();
            this.getVol();
        }, error => {
            console.log(error)
        });
    }

}
