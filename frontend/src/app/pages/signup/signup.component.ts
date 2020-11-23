import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;
    focus2;
    public registerForm: FormGroup;
    public user: User = {};
    public submitted = false;
    validatePass: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private lsService: LocalStorageService,
        private router: Router) { }

    ngOnInit() {
        // Validate token
        const token = this.lsService.getValue('token');
        if (token) {
            this.router.navigate(['/']);
        }

        // Build form
        this.registerForm = this.formBuilder.group({
            username: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            first_name: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            last_name: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(25),
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password1: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(25),
            ]],
            password2: ['', [
                Validators.required]],
        }, {
            validators: this.password.bind(this)
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.spinner.show();
        this.submitted = true;
        if (this.registerForm.invalid) {
            this.spinner.hide();
            return;
        }

        // Set object
        this.user.username = this.registerForm.get('username').value;
        this.user.first_name = this.registerForm.get('first_name').value;
        this.user.last_name = this.registerForm.get('last_name').value;
        this.user.email = this.registerForm.get('email').value;
        this.user.password1 = this.registerForm.get('password1').value;
        this.user.password2 = this.registerForm.get('password2').value;

        // Send request
        this.authService.register(this.user).subscribe(
            (data: any) => {
                this.spinner.hide();
                this.toastr.success('Welcome', 'Register success');
                this.router.navigateByUrl('/login')
            },
            err => { console.log(err); this.toastr.error('Error', err.error.detail); this.spinner.hide(); }
        );
    }


    password(registerForm: FormGroup) {
        const { value: password } = registerForm.get('password1');
        const { value: confirmPassword } = registerForm.get('password2');
        this.validatePass = (password === confirmPassword) ? true : false;
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }

}
