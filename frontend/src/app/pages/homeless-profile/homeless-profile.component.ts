import { HomelessService } from './../../core/services/homeless.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { StripeService, StripeCardComponent, Element as StripeElement, ElementOptions, ElementsOptions } from "@nomadreservations/ngx-stripe";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-homeless-profile',
  templateUrl: './homeless-profile.component.html',
  styleUrls: ['./homeless-profile.component.scss']
})
export class HomelessProfileComponent implements OnInit {
  stripeKey = '';
  error: any;
  complete = false;
  element: StripeElement;
  cardOptions: ElementOptions = {
    style: {
      base: {
        iconColor: 'red',
        color: 'gray',
        lineHeight: '40px',
        fontWeight: 500,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: ElementsOptions = {
    locale: 'en'
  };
  modalRef: BsModalRef;
  portfolio: any;
  eventsList: any;
  donationsList: any;
  closeResult: string;
  comment;
  ifSendComment = false;
  private idHomeless;
  private homelessProfile;
  name;
  total;
  description;
  album: any = [];
  comments;
  imageUrl: string;
  homelessPhoto: any;
  constructor(
    private modalService: NgbModal,
    private homelessService: HomelessService,
    private route: ActivatedRoute,
    private _lightbox: Lightbox,
    private bmodalService: BsModalService,
    private _stripe: StripeService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {
    this.idHomeless = this.route.snapshot.paramMap.get('idHomeless');
    this.imageUrl = environment.apiRoot;
  }

  ngOnInit() {
    this.getProfile(this.idHomeless);
    this.getCommentsProfile(this.idHomeless);
    this.getDonationsList(this.idHomeless);
    this.getEventList(this.idHomeless);
    this.getPortfolioList(this.idHomeless);
  }

  cardUpdated(result) {
    this.element = result.element;
    this.complete = result.card.complete;
    this.error = undefined;
  }

  keyUpdated() {
    this._stripe.changeKey(this.stripeKey);
  }

  getCardToken() {
    Swal.fire({
      input: 'number',
      title: 'Amount to donate',
      text: `Enter the amount please`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        const mount = result.value;
        this._stripe.createToken(this.element, {
          name: 'tested_ca',
          address_line1: '123 A Place',
          address_line2: 'Suite 100',
          address_city: 'Irving',
          address_state: 'BC',
          address_zip: 'VOE 1H0',
          address_country: 'CA'
        }).subscribe(result => {
          // Pass   token to service for purchase.
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You have donated successfully!',
            showConfirmButton: false,
            timer: 1500
          });
          this.closemodal();
          console.log(result);
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error',
        });
      }
    });

  }
  open(classic) {
    this.modalService.open(classic, { size: 'lg', centered: true });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  getProfile(id: number) {
    this.homelessService.getHomelessProfile(id).subscribe(
      (data) => {
        console.log(data);
        this.homelessProfile = data;
        // tslint:disable-next-line: max-line-length
        this.homelessPhoto = (this.homelessProfile.photo) ? `${this.imageUrl}${this.homelessProfile.photo}` : 'https://lh3.googleusercontent.com/proxy/MwlVugXgLdVUNuSXNfNEQd_jKgFJC3Zt0uRxpV9Nle2GuREJpmKWLzxpplOVkiUvwoMLe-Oa6rYouAS_gziG8PdbkjXJ65a62wgAsTqlJ5PBJCsIOZqBpt8wrR8bS6E'
      },
      error => {
        console.log(error)
      }
    )
  }


  getCommentsProfile(id: number) {
    this.homelessService.getCommentsProfile(id).subscribe(
      (data) => {
        console.log(data);
        this.comments = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  openM(url): void {
    // this._lightbox.open(`http://localhost:8000${url}`);
  }

  close(): void {
    this._lightbox.close();
  }



  getDonationsList(id) {
    this.homelessService.getDonations(id).subscribe(
      (data: any) => {
        this.donationsList = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getEventList(id) {
    this.homelessService.getEventsDonations(id).subscribe(
      (data: any) => {
        this.eventsList = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getPortfolioList(id) {
    this.homelessService.getPortfolio(id).subscribe(
      (data: any) => {
        this.portfolio = data;
        console.log(this.portfolio)

      },
      error => {
        console.log(error);
      }
    );
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.bmodalService.show(template);
  }

  newComment() {
    this.createComment(this.idHomeless);
  }

  createComment(id) {
    this.spinner.show();
    const body = {
      comment: this.comment
    };
    this.ifSendComment = true;

    this.homelessService.newComment(id, body).subscribe(
      (data: any) => {
        console.log(data);
        this.ifSendComment = false;
        this.comment = '';
        this.comments = data;
        this.spinner.hide();
        this.toastr.success('Comment added successfully')
      },
      error => {
        this.ifSendComment = false;
        console.log(error);
        this.comment = '';
        this.toastr.error(error);
        this.spinner.hide();

      }
    );

  }

  newEvent() {
    console.log(this.total)
    console.log(this.description)
    console.log(this.name)
    if (this.name === undefined || this.description === undefined || this.total === undefined) {
      this.toastr.error('Empty fields');
    } else {
      this.createEvent(this.idHomeless);
    }
  }

  async createEvent(id) {
    await this.spinner.show();
    const body = {
      name: this.name,
      total: this.total,
      description: this.description,
    };
    console.log(body);
    this.homelessService.newEvent(id, body).subscribe(
      async (data: any) => {
        console.log(data);
        this.closemodal();
        await this.spinner.hide();
        this.toastr.success('Event added successfully');
        this.total = '';
        this.description = '';
        this.name = '';
        await this.getEventList(this.idHomeless);
      },
      async error => {
        console.log(error);
        await this.spinner.hide();
        this.toastr.error(error);
        this.total = '';
        this.description = '';
        this.name = '';
        this.closemodal();
      }
    );
  }

  closemodal() {
    this.modalRef.hide();
  }

  async back() {
    await this.router.navigateByUrl('/user-profile');
  }
}
