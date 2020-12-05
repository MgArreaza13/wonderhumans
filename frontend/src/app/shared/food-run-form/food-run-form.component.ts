import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { FoodRunService } from './../../core/services/food-run.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-food-run-form',
    templateUrl: './food-run-form.component.html',
    styleUrls: ['./food-run-form.component.scss']
})
export class FoodRunFormComponent implements OnInit {
    imageURL = null;
    volunteers: any = null;
    total: any = null;
    description: any = null;
    name: any = null;
    constructor(
        public bsModalRef: BsModalRef,
        private spinner: NgxSpinnerService,
        private modalService: BsModalService,
        private foodService: FoodRunService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
    }

    // Image Preview
    showPreview(event) {
        const file = (event.target as HTMLInputElement).files[0];
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result as string;
        };
        reader.readAsDataURL(file);
    }

    save() {
        if (this.imageURL === null || this.name === null || this.total === null || this.volunteers === null || this.description === null) {
            console.log('erosss');
            this.toastr.error('Error, debe ingresar todos los datos');
        } else {
            this.spinner.show();
            const body = {
                image: this.imageURL,
                name: this.name,
                description: this.description,
                total: this.total,
                total_volunteers: this.volunteers
            };
            console.log(body);
            this.foodService.newFoodRund(body).subscribe((data) => {
                console.log(data);
                this.toastr.success('Registro satisfactorio');
                this.spinner.hide();
                this.cerrarModal();
            }, err => {
                console.log(err);
                this.toastr.error('Error');
                this.spinner.hide();
                this.cerrarModal();
            });
        }
    }

    cerrarModal() {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    }

}
