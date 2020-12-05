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
    constructor(
        public bsModalRef: BsModalRef,
        private serviceDonation: HomelessService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private modalService: BsModalService) { }

    ngOnInit() {
        this.causes = this.data[0];
        console.log(this.causes);
    }
    donar() {
        const body = {
            id_stripe: 'saasdsladjsadjl2',
            cause: 1,
            amount: this.monto
        };
        this.serviceDonation.newDonation(body).subscribe((data) => {
            console.log(data);
        }, error => {
            console.log(error)
        });
    }

    cerrarModal() {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    }
}
