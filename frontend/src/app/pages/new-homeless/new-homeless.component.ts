import { HomelessService } from './../../core/services/homeless.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewHomeless } from 'src/app/shared/models/newHomeless';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { UserService } from 'src/app/core/services/user.service';
import { environment } from './../../../environments/environment';


@Component({
    selector: 'app-new-homeless',
    templateUrl: './new-homeless.component.html',
    styleUrls: ['./new-homeless.component.scss']
})
export class NewHomelessComponent implements OnInit {
    public fileUploadControl = new FileUploadControl(FileUploadValidators.filesLimit(4));
    public newHomelessForm: FormGroup;
    public newHomeless: NewHomeless = {};
    public submitted = false;
    private filesControl = new FormControl(null, FileUploadValidators.filesLimit(4));
    imag: any[];
    base64textString: string;
    public portfolio: Array<any> = [];
    fileString: string | ArrayBuffer;
    imageURL: string;
    contator: any;
    restante: number;
    contatort: any;
    restantet: number;
    idHomeless: any;
    dataEdit: Object;
    environmentY = environment.apiRoot;
    imageEdit: string;
    date: { day: number; month: number; year: number; };
    constructor(
        private formBuilder: FormBuilder,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private router: Router,
        private homelessService: HomelessService,
        private route: ActivatedRoute
    ) {
        this.idHomeless = this.route.snapshot.paramMap.get('idHomeless');
    }

    ngOnInit() {
        if (!this.idHomeless) {

            this.initForm();
        } else {

            this.homelessService.getHomelessProfile(this.idHomeless).subscribe(
                (data) => {
                    this.dataEdit = data;
                    this.imageEdit = `${this.environmentY}${this.dataEdit['photo']}`;
                    const d = new Date(data['dateOfBirth']);
                    this.date = {
                        day: d.getDate() + 1,
                        month: d.getMonth() + 1,
                        year: d.getFullYear()
                    };
                    this.initForm(data);

                },
                error => {
                    console.log(error);
                }
            )

        }
    }

    initForm(dataUser?) {
        // Build form
        this.newHomelessForm = this.formBuilder.group({
            firstName: [(dataUser) ? dataUser.firstName : '', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            lastName: [(dataUser) ? dataUser.lastName : '', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            email: [(dataUser) ? dataUser.email : '', [
                Validators.required, Validators.email
            ]],
            occupation: [(dataUser) ? dataUser.occupation : '', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            city: [(dataUser) ? dataUser.city : '', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]],
            country: [(dataUser) ? dataUser.country : '', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(25),
            ]],
            dateOfBirth: [(dataUser) ? this.date : '', [
                Validators.required,
            ]],
            aboutYou: [(dataUser) ? dataUser.aboutYou : '', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(100),
            ]],
            location_detail: [(dataUser) ? dataUser.location_detail : '', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50),
            ]],
            show_email: [(dataUser) ? dataUser.show_email : false],
            portfolio: this.filesControl,
            photo: [null],

        });
    }

    get f() { return this.newHomelessForm.controls; }


    fileBase64(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });
    }

    async onSubmit() {
        this.portfolio.length = 0;
        const files = this.filesControl.value;
        if (files !== null) {
            for (var i = 0; i < this.filesControl.value.length; i++) {
                let file =
                    this.filesControl.value[i]
                    ;
                let fileData = await this.fileBase64(file);
                this.portfolio.push({
                    photo: fileData,
                });
            }
            this.submit(this.portfolio);
        } else {
            this.submit();
        }
    }

    calcularEdad(fecha) {
        const fecha_nacimiento = `${fecha.year}/${fecha.month}/${fecha.day}`;
        const hoy = new Date();
        const cumpleanos = new Date(fecha_nacimiento);
        let edad = hoy.getFullYear() - cumpleanos.getFullYear();
        const m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    }

    submit(portfolio?) {
        const edad = this.calcularEdad(this.newHomelessForm.get('dateOfBirth').value);
        if (edad >= 12) {
            const show = this.newHomelessForm.get('show_email').value;
            this.newHomeless = {} as NewHomeless;
            this.newHomeless.firstName = this.newHomelessForm.get('firstName').value;
            this.newHomeless.lastName = this.newHomelessForm.get('lastName').value;
            this.newHomeless.email = this.newHomelessForm.get('email').value;
            this.newHomeless.occupation = this.newHomelessForm.get('occupation').value;
            this.newHomeless.city = this.newHomelessForm.get('city').value;
            this.newHomeless.country = this.newHomelessForm.get('country').value;
            this.newHomeless.dateOfBirth = (this.newHomelessForm.get('dateOfBirth').value);
            this.newHomeless.aboutYou = this.newHomelessForm.get('aboutYou').value;
            this.newHomeless.location_detail = this.newHomelessForm.get('location_detail').value;
            this.newHomeless.show_email = (show === true) ? 'True' : 'False';
            this.newHomeless.portfolio = (this.filesControl.value !== null) ? portfolio : null;
            this.newHomeless.photo = (this.imageURL) ? this.imageURL : null;
            if (!this.idHomeless) {
                this.newHomelessCreate(this.newHomeless);

            } else {
                this.editHomeless(this.newHomeless);
            }
        } else {
            this.toastr.error('The allowed date birth is 12 years ago');
        }

    }


    onKey(event) {
        this.contator = event.target.value.length;
        if (this.contator <= 100) {
            this.restante = 100 - this.contator;
        }
    }
    onKeyt(event) {
        this.contatort = event.target.value.length;
        if (this.contatort <= 100) {
            this.restantet = 100 - this.contatort;
        }
    }

    async newHomelessCreate(dataHomeless) {
        // Send request
        await this.spinner.show();
        this.homelessService.newHomeless(dataHomeless).subscribe(
            async (data: any) => {
                await this.spinner.hide();
                this.toastr.success('Registro satisfactorio');
                await this.router.navigateByUrl('/user-profile');
            },
            async err => {
                console.log(err);
                this.toastr.error('Error', err.error.detail);
                await this.spinner.hide();
            }
        );
    }
    async editHomeless(dataHomeless) {
        // Send request

        const body = {
            id: this.idHomeless,
            firstName: dataHomeless.firstName,
            lastName: dataHomeless.lastName,
            email: dataHomeless.email,
            show_email: dataHomeless.show_email,
            occupation: dataHomeless.occupation,
            city: dataHomeless.city,
            country: dataHomeless.country,
            dateOfBirth: dataHomeless.dateOfBirth,
            location_detail: dataHomeless.location_detail,
            aboutYou: dataHomeless.aboutYou,
            photo: dataHomeless.photo
        };
        await this.spinner.show();
        this.homelessService.editHomeless(body).subscribe(
            async (data: any) => {
                await this.spinner.hide();
                this.toastr.success('Actualización satisfactoria');
                await this.router.navigateByUrl('/user-profile');
            },
            async err => {
                console.log(err);
                this.toastr.error('Error', err.error.detail);
                await this.spinner.hide();
            }
        );
    }

    photoAdd(event) {
        this.showPreview(event);
    }

    // Image Preview
    showPreview(event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.newHomelessForm.patchValue({
            photo: file
        });
        this.newHomelessForm.get('photo').updateValueAndValidity();

        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result as string;
        }
        reader.readAsDataURL(file)
    }
}
