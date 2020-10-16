import { HomelessService } from './../../core/services/homeless.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewHomeless } from 'src/app/shared/models/newHomeless';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';


@Component({
  selector: 'app-new-homeless',
  templateUrl: './new-homeless.component.html',
  styleUrls: ['./new-homeless.component.scss']
})
export class NewHomelessComponent implements OnInit {
  public fileUploadControl = new FileUploadControl(FileUploadValidators.filesLimit(2));
  public newHomelessForm: FormGroup;
  public newHomeless: NewHomeless = {};
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
    private homelessService: HomelessService
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
        Validators.maxLength(10),
      ]],
      lastName: [(dataUser) ? dataUser.user.last_name : '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
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
    });
  }

  get f() { return this.newHomelessForm.controls; }


  onSubmit() {
    this.newHomeless = {} as NewHomeless;
    this.newHomeless.firstName = this.newHomelessForm.get('firstName').value;
    this.newHomeless.lastName = this.newHomelessForm.get('lastName').value;
    this.newHomeless.email = this.newHomelessForm.get('email').value;
    this.newHomeless.occupation = this.newHomelessForm.get('occupation').value;
    this.newHomeless.city = this.newHomelessForm.get('city').value;
    this.newHomeless.country = this.newHomelessForm.get('country').value;
    this.newHomeless.dateOfBirth = (this.newHomelessForm.get('dateOfBirth').value);
    this.newHomeless.aboutYou = this.newHomelessForm.get('aboutYou').value;
    console.log(this.newHomeless);
    this.newHomelessCreate(this.newHomeless)

  }

  async newHomelessCreate(dataHomeless) {
    // Send request
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

}
