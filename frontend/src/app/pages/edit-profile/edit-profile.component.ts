import { Router } from '@angular/router';
import { Profile } from './../../shared/models/profile';
import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
    contator: number = 0;
    hasProfile = false;
    submitted = false;
    profileForm: FormGroup;
    user: User;
    profile: Profile = {};
    date: { year: number; month: number; day: number; };
    imageURL: string;
    imageDefaul: string;
    focus;
    restante: number;
    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private router: Router
    ) {
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
        this.getProfile();
    }

    onKey(event) {
        this.contator = event.target.value.length;
        if (this.contator <= 100) {
            this.restante = 100 - this.contator;
        }
    }

    async getProfile() {
        this.userService.getProfile().subscribe(
            async (data: any) => {
                // tslint:disable-next-line: max-line-length
                this.imageDefaul = (data.photo) ? `${environment.apiRoot}${data.photo}` : 'https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png';
                this.hasProfile = true;
                const d = new Date(data.dateOfBirth);
                this.date = {
                    day: d.getDate() + 1,
                    month: d.getMonth() + 1,
                    year: d.getFullYear()
                };
                if (this.date) {
                    this.initForm(data);

                }
            },
            async (error) => {
                if (error.error.detail === 'User dont have profile') {
                    this.hasProfile = false;
                    this.initForm();
                    this.imageDefaul = 'https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png';
                }
            }
        );

    }


    initForm(dataUser?) {
        // Build form
        this.profileForm = this.formBuilder.group({
            firstName: [(dataUser) ? dataUser.user.first_name : this.user.first_name, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            lastName: [(dataUser) ? dataUser.user.last_name : this.user.last_name, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            email: [(dataUser) ? dataUser.user.email : this.user.email, [
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
            dateOfBirth: [(dataUser) ? this.date : '', [
                Validators.required,
            ]],
            aboutYou: [(dataUser) ? dataUser.aboutYou : '', [
                Validators.required,
            ]],
            show_email: [(dataUser) ? dataUser.show_email : false],
            photo: [null],
        });
    }

    get f() { return this.profileForm.controls; }


    onSubmit() {
        const show = this.profileForm.get('show_email').value;
        this.spinner.show();
        this.submitted = true;
        this.profile = {} as Profile;
        this.profile.firstName = this.profileForm.get('firstName').value;
        this.profile.lastName = this.profileForm.get('lastName').value;
        this.profile.email = this.profileForm.get('email').value;
        this.profile.occupation = this.profileForm.get('occupation').value;
        this.profile.city = this.profileForm.get('city').value;
        this.profile.country = this.profileForm.get('country').value;
        this.profile.dateOfBirth = this.profileForm.get('dateOfBirth').value;
        this.profile.aboutYou = this.profileForm.get('aboutYou').value;
        this.profile.show_email = (show === true) ? 'True' : 'False';
        this.profile.photo = this.imageURL;
        if (this.hasProfile === false) {
            this.createProfile(this.profile);
        } else if (this.hasProfile === true) {
            this.updateProfile(this.profile);
        }

    }

    createProfile(profile) {
        this.userService.newProfile(profile).subscribe(
            async (data: any) => {
                await this.spinner.hide();
                await this.toastr.success('Success', 'New Profile');
                await this.router.navigateByUrl('/user-profile');
            },
            err => {
                console.log(err);
                this.toastr.error('Error', err.error.detail);
                this.spinner.hide();
            }
        );
    }

    updateProfile(update) {
        this.userService.updateProfile(update).subscribe(
            async (data: any) => {
                await this.spinner.hide();
                await this.toastr.success('Success', 'Update Profile');
                await this.router.navigateByUrl('/user-profile');
            },
            err => {
                console.log(err);
                this.toastr.error('Error', err.error.detail);
                this.spinner.hide();
            }
        );
    }

    photoAdd(event) {
        this.showPreview(event);
    }

    // Image Preview
    showPreview(event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.profileForm.patchValue({
            photo: file
        });
        this.profileForm.get('photo').updateValueAndValidity();

        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result as string;
        };
        reader.readAsDataURL(file);
    }
}
