import { HomelessService } from './../../core/services/homeless.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewHomeless } from 'src/app/shared/models/newHomeless';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { UserService } from 'src/app/core/services/user.service';


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

    constructor(
        private formBuilder: FormBuilder,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private router: Router,
        private homelessService: HomelessService,
    ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm(dataUser?) {
        // Build form
        this.newHomelessForm = this.formBuilder.group({
            firstName: [(dataUser) ? dataUser.user.first_name : '', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            lastName: [(dataUser) ? dataUser.user.last_name : '', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            email: [(dataUser) ? dataUser.user.email : '', [
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
                Validators.maxLength(25),
            ]],
            country: [(dataUser) ? dataUser.country : '', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(25),
            ]],
            dateOfBirth: ['', [
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
            console.log(this.portfolio)
            this.submit(this.portfolio);
        } else {
            this.submit();
        }
    }


    submit(portfolio?) {
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
        console.log(this.newHomeless);
        this.newHomelessCreate(this.newHomeless)
    }

    async newHomelessCreate(dataHomeless) {
        // Send request
        console.log(dataHomeless)
        await this.spinner.show();
        this.homelessService.newHomeless(dataHomeless).subscribe(
            async (data: any) => {
                console.log(data);
                await this.spinner.hide();
                this.toastr.success('Welcome', 'Registro satisfactorio');
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
        console.log(event)
        console.log('aqui para poner foto de perfil');
        this.showPreview(event);
    }

    // Image Preview
    showPreview(event) {
        console.log(event)
        const file = (event.target as HTMLInputElement).files[0];
        console.log(file)
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
