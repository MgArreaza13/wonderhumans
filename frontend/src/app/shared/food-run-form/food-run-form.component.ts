import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { FoodRunService } from './../../core/services/food-run.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

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
    data;
    environmentY = environment.apiRoot;
    dateRe: any = null;
    dateRealiz: { day: number; month: number; year: number; hour: number; minute: number; };
    time: any = null;
    invitation_message;
    constructor(
        public bsModalRef: BsModalRef,
        private spinner: NgxSpinnerService,
        private modalService: BsModalService,
        private foodService: FoodRunService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        console.log(this.data)
        if (this.data !== undefined) {
            this.name = this.data.name;
            this.volunteers = this.data.total_volunteers;
            this.total = this.data.total;
            this.description = this.data.description;
            const d = new Date(this.data.execution_date);
            console.log(d)
            this.dateRe = {
                day: d.getDate() + 1,
                month: d.getMonth() + 1,
                year: d.getFullYear()
            };
            this.time = {
                hour: d.getHours(),
                minute: d.getMinutes()
            };

        }
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
        this.dateRealiz = {
            day: this.dateRe.day,
            month: this.dateRe.month,
            year: this.dateRe.year,
            hour: this.time.hour,
            minute: this.time.minute
        };
        this.imageURL = (this.data !== undefined && this.imageURL === null) ? 'noImage' : this.imageURL;
        if (this.imageURL === null || this.name === null || this.total === null || this.volunteers === null || this.description === null || this.time === null || this.dateRe === null) {
            console.log('error');
            this.toastr.error('Error, debe ingresar todos los datos');
        } else {
            this.spinner.show();
            if (this.data === undefined) {
                const body = {
                    image: this.imageURL,
                    name: this.name,
                    description: this.description,
                    total: this.total,
                    total_volunteers: this.volunteers,
                    execution_date: this.dateRealiz,
                    invitation_message: this.invitation_message
                };
                console.log(body);
                this.foodService.newFoodRund(body).subscribe((data) => {
                    this.toastr.success('Registro satisfactorio');
                    this.spinner.hide();
                    this.cerrarModal();
                }, err => {
                    console.log(err);
                    this.toastr.error('Error');
                    this.spinner.hide();
                    this.cerrarModal();
                });
            } else {
                if (this.imageURL === 'noImage') {
                    const body = {
                        id_food_run: this.data.id,
                        name: this.name,
                        description: this.description,
                        total: this.total,
                        total_volunteers: this.volunteers,
                        execution_date: this.dateRealiz,
                        invitation_message: this.invitation_message
                    };
                    console.log(body);
                    this.foodService.editFoodRund(body).subscribe((data) => {
                        console.log(data);
                        this.toastr.success('Edición exitosa');
                        this.spinner.hide();
                        this.cerrarModal();
                    }, err => {
                        console.log(err);
                        this.toastr.error('Error');
                        this.spinner.hide();
                        this.cerrarModal();
                    });
                } else {
                    const body = {
                        id_food_run: this.data.id,
                        image: this.imageURL,
                        name: this.name,
                        description: this.description,
                        total: this.total,
                        total_volunteers: this.volunteers,
                        execution_date: this.dateRealiz,
                        invitation_message: this.invitation_message
                    };
                    console.log(body);
                    this.foodService.editFoodRund(body).subscribe((data) => {
                        console.log(data);
                        this.toastr.success('Edición exitosa');
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
        }
    }

    cerrarModal() {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    }



}
