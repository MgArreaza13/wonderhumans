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
    time: any = { hour: 0, minute: 0, second: 0 };
    invitation_message;
    noValidate: boolean;
    nameNo: string;
    desNo: string;
    mountNo: string;
    volNo: string;
    dateNo: boolean;
    mindate;
    constructor(
        public bsModalRef: BsModalRef,
        private spinner: NgxSpinnerService,
        private modalService: BsModalService,
        private foodService: FoodRunService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        const current = new Date();
        this.mindate = {
            year: current.getFullYear(),
            month: current.getMonth() + 1,
            day: current.getDate() + 1
        };
        console.log(this.mindate)
        if (this.data !== undefined) {
            this.name = this.data.name;
            this.volunteers = this.data.total_volunteers;
            this.total = this.data.total;
            this.description = this.data.description;
            const d = new Date(this.data.execution_date);
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

    nameLength(ev) {
        const lengthName = ev.target.value.length;
        if (lengthName < 5) {
            this.noValidate = true;
            this.nameNo = 'min';
        } else if (lengthName > 100) {
            this.nameNo = 'max';
            this.noValidate = true;

        } else {
            this.noValidate = false;
            this.nameNo = null;
        }
    }
    desLength(ev) {
        const lengthName = ev.target.textLength;
        if (lengthName < 5) {
            this.noValidate = true;
            this.desNo = 'min';
        } else if (lengthName > 300) {
            this.desNo = 'max';
            this.noValidate = true;

        } else {
            this.noValidate = false;
            this.desNo = null;
        }
    }
    totalLength(ev) {
        const lengthMount = Number(ev.target.value);
        if (lengthMount <= 0) {
            this.noValidate = true;
            this.mountNo = 'min';
        } else if (lengthMount > 9999999) {
            this.noValidate = true;
            this.mountNo = 'max';
        } else {
            this.noValidate = false;
            this.mountNo = null;
        }
    }
    volLength(ev) {
        const leVol = Number(ev.target.value);
        if (leVol <= 0) {
            this.noValidate = true;
            this.volNo = 'min';
        } else if (leVol > 10000) {
            this.noValidate = true;
            this.volNo = 'max';
        } else {
            this.noValidate = false;
            this.volNo = null;
        }
    }
    remove() {
        this.imageURL = null;
    }

    validarFechaMenorActual(date) {
        let x = new Date();
        let fecha = date.split("/");
        x.setFullYear(fecha[2], fecha[1] - 1, fecha[0]);
        let today = new Date();

        if (x >= today) {
            return false;
        } else {
            return true;
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

        this.imageURL = (this.data !== undefined && this.imageURL === null) ? 'noImage' : this.imageURL;
        if (this.imageURL === null || this.name === null || this.total === null || this.volunteers === null || this.description === null || this.time === null || this.dateRe === null) {
            this.toastr.error('Error, you must enter all data');
        } else {
            this.dateRealiz = {
                day: this.dateRe.day,
                month: this.dateRe.month,
                year: this.dateRe.year,
                hour: this.time.hour,
                minute: this.time.minute
            };
            console.log(this.dateRealiz)
            const fecha_choice = `${this.dateRe.day}/${this.dateRe.month}/${this.dateRe.year}`;
            const hoy = new Date();
            const isOr = this.validarFechaMenorActual(fecha_choice);
            if (isOr === false) {
                const hoyT = `${hoy.getDate()}/${hoy.getMonth() + 1}/${hoy.getFullYear()}`;
                if (fecha_choice === hoyT) {
                    this.dateNo = true;
                    this.toastr.error('Date must be higher than current');
                } else {
                    this.spinner.show();
                    this.dateNo = false;
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
                        this.foodService.newFoodRund(body).subscribe((data) => {
                            this.toastr.success('Successful registration');
                            this.spinner.hide();
                            this.cerrarModal();
                        }, err => {
                            console.log(err);
                            this.toastr.error(err.error.detail);
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
                            this.foodService.editFoodRund(body).subscribe((data) => {
                                this.toastr.success('Successful update');
                                this.spinner.hide();
                                this.cerrarModal();
                            }, err => {
                                console.log(err);
                                if (err.status === 400) {
                                    this.toastr.error('Error');
                                    this.spinner.hide();
                                    this.cerrarModal();
                                } else {
                                    this.cerrarModal();

                                }


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
                            this.foodService.editFoodRund(body).subscribe((data) => {
                                this.toastr.success('Successful update');
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
            } else {
                this.dateNo = true;
                this.toastr.error('Error, la fecha deber ser mayor a la actual')
            }

        }
    }

    cerrarModal() {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    }



}
