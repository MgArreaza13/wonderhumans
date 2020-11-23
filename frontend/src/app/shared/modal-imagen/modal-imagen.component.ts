import { FeedService } from './../../core/services/feed.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ImageCroppedEvent } from 'ngx-image-cropper';

const base_url = environment.apiRoot;
@Component({
    selector: 'app-modal-imagen',
    templateUrl: './modal-imagen.component.html',
    styleUrls: ['./modal-imagen.component.scss']

})
export class ModalImagenComponent implements OnInit {
    imageChangedEvent: any = '';
    croppedImage: any = '';
    type: string;
    closeBtnName: string;
    data: any[] = [];
    public imagenSubir: File;
    public imgTemp: any = null;
    img: any;
    votes: any = 5;
    userVotes: boolean = true;
    imageURL: string;
    imageDefaul = '../../../assets/img/add.png';
    fileImg: File;
    description: any;
    allData: any;
    comment: any;
    comments: Object;
    ilike: any;
    show: boolean = false;
    idEdit: any;
    readyImage: boolean = false;
    contator: any;
    restante: number;
    contatorC: any;
    restanteC: number;
    constructor(
        public bsModalRef: BsModalRef,
        private feedService: FeedService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private modalService: BsModalService,) { }

    ngOnInit(): void {
        this.getComments();

        console.log('hola' + this.type)
        console.log(this.data);
        const img = this.data[0].img;
        if (img.includes('https')) {
            this.img = img;
        } else {
            this.img = `${base_url}${img}`;
        }
        this.allData = this.data[0];
        this.ilike = this.allData.ilike;
        console.log(this.ilike)
    }


    cerrarModal() {
        this.modalService.setDismissReason('close');
        this.bsModalRef.hide();
        this.modalService._hideModal(0);
    }

    onKey(event) {
        this.contator = event.target.value.length;
        if (this.contator <= 65000) {
            this.restante = 65000 - this.contator;
        }
    }
    onKeyC(event) {
        this.contatorC = event.target.value.length;
        if (this.contatorC <= 3500) {
            this.restanteC = 3500 - this.contatorC;
        }
    }

    doVote() {
        console.log('hesss');
        if (this.ilike === 'false') {
            this.feedService.like(this.allData.id).subscribe((data) => {
                console.log(data)
                this.ilike = data['i_like'];
                console.log(this.ilike);
                this.allData.likes = this.allData.likes + 1;
            }, err => {
                console.log(err)
            });
        } else {
            this.feedService.dislike(this.allData.id).subscribe((data) => {
                console.log(data)
                this.ilike = data['i_like'];
                this.allData.likes = this.allData.likes - 1;
                console.log(this.ilike)
            }, err => {
                console.log(err)
            });
        }
    }

    // Image Preview
    showPreview(event) {
        const file = (event.target as HTMLInputElement).files[0];
        this.fileImg = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result as string;
        }
        reader.readAsDataURL(file);
    }

    upload() {
        if (this.imageURL === undefined || this.description === '') {
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

    getComments() {
        this.feedService.getComments(this.data[0].id).subscribe((data) => {
            this.comments = (data['length'] !== 0) ? data : null;
            console.log(this.comments)
        }, err => {
            console.log(err)
        });
    }


    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
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
        console.log('ready');
        console.log(this.imageCropped)
        this.readyImage = true;
    }

    editType(id) {
        console.log(id)
        this.type = 'edit';
        this.idEdit = id;
    }

    edit() {
        this.spinner.show();
        const body = {
            id: this.idEdit,
            image: this.imageURL,
            description: this.description
        };
        console.log(body);
        this.feedService.editFeed(body).subscribe((data) => {
            console.log(data);
            this.toastr.success('Actualización satisfactoria');
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

    deleteFeed(id) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Desea eliminar este feed?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result) {
                this.feedService.deleteFeed(id).subscribe((data) => {
                    console.log(data);
                    this.toastr.success('Eliminación satisfactoria');
                    this.spinner.hide();
                    this.cerrarModal();
                    this.ngOnInit();
                }, err => {
                    console.log(err);
                    this.spinner.hide();
                    this.toastr.error(err.error.detail);
                    this.cerrarModal();
                });
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
            }
        });
    }

}
