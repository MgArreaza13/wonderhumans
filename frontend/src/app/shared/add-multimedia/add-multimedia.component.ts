import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FoodRunService } from './../../core/services/food-run.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-add-multimedia',
    templateUrl: './add-multimedia.component.html',
    styleUrls: ['./add-multimedia.component.scss']
})
export class AddMultimediaComponent implements OnInit {
    imageURL: any;
    readyImage: boolean = false;
    show: boolean;
    croppedImage: any;
    imageDefaul = '../../../assets/img/add.png';
    fileImg: File;
    contator: any;
    restante: number;
    description: any;
    data;
    constructor(
        private foodRunService: FoodRunService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private modalService: BsModalService,
        public bsModalRef: BsModalRef,

    ) { }

    ngOnInit() {
        console.log(this.data)
    }

    onKey(event) {
        this.contator = event.target.value.length;
        if (this.contator <= 100) {
            this.restante = 100 - this.contator;
        }
    }
    fileChangeEvent(event: any): void {
        this.fileChangeEvent = event;
        this.show = true;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
        console.log('loades')
    }
    cropperReady() {
        // cropper ready
        console.log('ready')
    }
    loadImageFailed() {
        // show message
        console.log('failed')
    }
    ready() {
        this.imageURL = this.croppedImage;
        this.readyImage = true;
    }
    showPreview(event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.fileImg = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result as string;
            this.readyImage = true;
        }
        reader.readAsDataURL(file);
    }
    changeImg() {
        this.imageURL = '';
    }
    cerrarModal() {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    }

    post() {
        this.spinner.show();
        const body = {
            id_food_run: this.data,
            description: this.description,
            image: this.imageURL
        };
        this.foodRunService.newMultimedia(body).subscribe((data) => {
            console.log(data);
            this.toastr.success('Registro satisfactorio');
            this.spinner.hide();
            this.cerrarModal();
        }, error => {
            console.log(error);
            this.spinner.hide();
            this.cerrarModal();
            this.toastr.error(error.error.detail);
        })
    }
}
