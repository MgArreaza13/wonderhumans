import { User } from 'src/app/shared/models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authentication } from 'src/app/shared/models/authentication';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  public loginForm: FormGroup;
  public user: User = {};
  public auth: Authentication = {};
  public submitted = false;
  public loading = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private lsService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    // Validate token
    const token = this.lsService.getValue('token');
    if (token) {
      this.router.navigate(['/user-profile']);
    }

    // Build form
    this.loginForm = this.formBuilder.group({
      username: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(5), Validators.maxLength(8)]
      ]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.spinner.show();
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.spinner.hide();
      return;
    }

    // Set object
    this.auth.username = this.loginForm.get('username').value;
    this.auth.password = this.loginForm.get('password').value;

    // Send request
    this.authService.login(this.auth).subscribe(
      (data: any) => {
        console.log(data);
        this.user.id = data.id;
        this.user.token = data.token;
        this.user.first_name = data.first_name;
        this.user.last_name = data.last_name;
        this.user.username = data.username;
        this.user.email = data.email;
        this.lsService.setValue('wonderHumanUser', JSON.stringify(this.user));
        this.spinner.hide();
        this.toastr.success('Welcome', 'login success');
        this.router.navigateByUrl('/user-profile')
      },
      err => { console.log(err); this.toastr.error('Error', err.error.detail); this.spinner.hide(); }
    );
  }

}
