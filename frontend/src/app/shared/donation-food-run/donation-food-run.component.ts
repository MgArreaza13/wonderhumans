import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FoodRunService } from './../../core/services/food-run.service';

@Component({
    selector: 'app-donation-food-run',
    templateUrl: './donation-food-run.component.html',
    styleUrls: ['./donation-food-run.component.scss']
})
export class DonationFoodRunComponent implements OnInit {
    data;
    causes;
    monto;
    constructor(
        public bsModalRef: BsModalRef,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private modalService: BsModalService,
        private foodService: FoodRunService
    ) { }

    ngOnInit() {
        this.causes = this.data[0];
        console.log(this.data)
    }

    cerrarModal() {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    }

    donar() {
        this.spinner.show();
        const body = {
            id_stripe: 'saasdsladjsadjl2',
            id_food_run: this.causes.id,
            amount: this.monto
        };
        this.foodService.newDonation(body).subscribe((data) => {
            console.log(data);
            this.toastr.success('Donación exitosa');
            this.spinner.hide();
            this.cerrarModal();
        }, error => {
            console.log(error);
            this.toastr.error('Ha ocurrido un error')
            this.spinner.hide();
        });
    }

}
