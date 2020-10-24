import { environment } from './../../../environments/environment';
import { User } from 'src/app/shared/models/user';
import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  user: User
  profile;
  userHomeless;
  imageUrl: any;
  constructor(
    private userService: UserService
  ) {
    this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
  }

  ngOnInit() {
    console.log(this.user);
    this.getProfile();
    this.getMyHomelessProfile();
  }

  getProfile() {
    this.userService.getProfile().subscribe(
      (data: any) => {
        console.log(data);
        this.profile = data;
        this.imageUrl = (data.photo) ? `${environment.apiRoot}${data.photo}` : null;
      },
      (error) => {
        console.log(error)
        if (error.error.detail === 'User dont have profile') {
          this.profile = null;
        }
      }
    )
  }


  getMyHomelessProfile() {
    this.userService.getMyHomelessProfile().subscribe(
      (data: any) => {
        this.userHomeless = data;
      },
      err => {
        console.log(err)
      }
    )
  }

}
