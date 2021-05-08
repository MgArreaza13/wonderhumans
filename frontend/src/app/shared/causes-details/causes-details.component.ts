import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomelessService } from './../../core/services/homeless.service';

@Component({
    selector: 'app-causes-details',
    templateUrl: './causes-details.component.html',
    styleUrls: ['./causes-details.component.scss']
})
export class CausesDetailsComponent implements OnInit {
    data;
    causes;
    monto;
    donations;
    constructor(
        public bsModalRef: BsModalRef,
        private serviceDonation: HomelessService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private modalService: BsModalService) { }

    ngOnInit() {
        this.causes = this.data[0];
        console.log(this.causes);
        this.recentDonations();
    }
    donar() {
        this.spinner.show();
        const body = {
            id_stripe: 'saasdsladjsadjl2',
            id_cause: this.causes.id,
            amount: this.monto
        };
        this.serviceDonation.newDonation(body).subscribe((data) => {
            console.log(data);
            this.toastr.success('Successful donation');
            this.spinner.hide();
            this.cerrarModal();
        }, error => {
            console.log(error);
            this.toastr.error('Ha ocurrido un error')
            this.spinner.hide();
        });
    }

    recentDonations() {
        this.spinner.show();
        this.serviceDonation.recentDonations(this.causes.id).subscribe(
            (data) => {
                this.donations = data['donations'];
                this.spinner.hide();
                console.log(this.donations);
            }, error => {
                this.spinner.hide();
                console.log(error)
            }
        )
    }

    cerrarModal() {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    }
}
