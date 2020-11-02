import { FeedService } from './../../core/services/feed.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
const base_url = environment.apiRoot;
@Component({
    selector: 'app-modal-imagen',
    templateUrl: './modal-imagen.component.html',
    styleUrls: ['./modal-imagen.component.scss']

})
export class ModalImagenComponent implements OnInit {
    type: string;
    closeBtnName: string;
    data: any[] = [];
    public imagenSubir: File;
    public imgTemp: any = null;
    img: any;
    votes: any = 5;
    userVotes: boolean = true;
    imageURL: string;
    // tslint:disable-next-line: max-line-length
    imageDefaul = 'https://images.vexels.com/media/users/3/135544/isolated/preview/23724deafa9e7ec5830d49438d3e3f9f-colorful-button-more-add-icon-by-vexels.png';
    fileImg: File;
    description: any;
    allData: any;
    comment: any;
    constructor(
        public bsModalRef: BsModalRef,
        private feedService: FeedService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private modalService: BsModalService, ) { }

    ngOnInit(): void {

        console.log('hola' + this.type)
        console.log(this.data);
        const img = this.data[0].img;
        if (img.includes('https')) {
            this.img = img;
        } else {
            this.img = `${base_url}${img}`;
        }
        this.allData = this.data[0];
    }


    cerrarModal() {
        this.bsModalRef.hide();
        this.modalService.setDismissReason('close');
        this.modalService._hideModal(0)
    }

    doVote() {
        console.log('hesss')
    }

    // Image Preview
    showPreview(event) {
        console.log(event)
        const file = (event.target as HTMLInputElement).files[0];
        console.log(file);
        this.fileImg = file;
        // this.profileForm.patchValue({
        //     photo: file
        // });
        // this.profileForm.get('photo').updateValueAndValidity();

        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result as string;
        }
        reader.readAsDataURL(file);
    }

    upload() {
        if (this.imageURL === undefined || this.description === '' ) {
            this.toastr.error('Error, debe ingresar todos los datos');
        } else {
            this.spinner.show();
            const body = {
                image: this.imageURL,
                description: this.description
            };
            console.log(body);
            this.feedService.newFeed(body).subscribe((data) => {
                console.log(data);
                this.toastr.success('Registro satisfactorio');
                this.spinner.hide();
                this.cerrarModal();
                this.ngOnInit();
            }, err => {
                console.log(err);
                this.spinner.hide();
                this.toastr.error(err.error.detail);
                this.cerrarModal();
            });
        }
    }

    publicar(data) {
        if (this.comment === '') {
            this.toastr.error('Error, debe ingresar un comentario');
        } else {
            this.spinner.show();
            const body = {
                comment: this.comment
            };
            this.feedService.newCom(data.id, body).subscribe((res) => {
                console.log(res);
                this.spinner.hide();
                this.toastr.success('Publicación exitosa');
                this.cerrarModal();
                this.ngOnInit();
            }, err => {
                this.toastr.error(err.error.detail);
                console.log(err);
                this.spinner.hide();
            });
        }
    }

    changeImg() {
        this.imageURL = '';
    }
}
