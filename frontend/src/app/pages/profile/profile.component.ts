import { FeedService } from './../../core/services/feed.service';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { environment } from './../../../environments/environment';
import { User } from 'src/app/shared/models/user';
import { UserService } from './../../core/services/user.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ModalImagenComponent } from 'src/app/shared/modal-imagen/modal-imagen.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest } from 'rxjs';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    bsModalRef: BsModalRef;
    @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
    hideScrollbar;
    disabled;
    xDisabled;
    yDisabled;
    leftNavDisabled = false;
    rightNavDisabled = false;
    index = 0;
    user: User
    profile;
    userHomeless;
    imageUrl: any;
    images: any[];
    dataHom = [];
    environmentHomeless: string;
    feedData: any = [];
    constructor(
        private userService: UserService,
        private modalService: BsModalService,
        private feedService: FeedService,
        private changeDetection: ChangeDetectorRef

    ) {
        this.user = JSON.parse(localStorage.getItem('wonderHumanUser'));
    }

    ngOnInit() {
        this.dataHom.length = 0;
        this.getProfile();
        this.getMyHomelessProfile();
        this.getAllFeeds();
    }

    clickItem(item) {
        console.log('item clicked');
    }

    toggleHideSB() {
        this.hideScrollbar = !this.hideScrollbar;
    }

    toggleDisable() {
        this.disabled = !this.disabled;
    }
    toggleXDisable() {
        this.xDisabled = !this.xDisabled;
    }
    toggleYDisable() {
        this.yDisabled = !this.yDisabled;
    }

    moveLeft() {
        this.ds.moveLeft();
    }

    moveRight() {
        this.ds.moveRight();
    }

    moveTo(idx: number) {
        this.ds.moveTo(idx);
    }

    leftBoundStat(reachesLeftBound: boolean) {
        this.leftNavDisabled = reachesLeftBound;
    }

    rightBoundStat(reachesRightBound: boolean) {
        this.rightNavDisabled = reachesRightBound;
    }

    onSnapAnimationFinished() {
        console.log('snap animation finished');
    }

    onIndexChanged(idx) {
        this.index = idx;
        console.log('current index: ' + idx);
    }

    onDragScrollInitialized() {
        console.log('first demo drag scroll has been initialized.');
    }

    onDragStart() {
        console.log('drag start');
    }

    onDragEnd() {
        console.log('drag end');
    }

    getProfile() {
        this.userService.getProfile().subscribe(
            (data: any) => {

                this.profile = data;
                this.imageUrl = (data.photo) ? `${environment.apiRoot}${data.photo}` : null;
            },
            (error) => {
                console.log(error)
                if (error.error.detail === 'User dont have profile') {
                    this.profile = null;
                    this.imageUrl = null;
                }
            }
        )
    }


    getMyHomelessProfile() {
        console.log('entre en obtener homelless')
        this.dataHom.length = 0;
        this.userService.getMyHomelessProfile().subscribe(
            (data: any) => {
                this.environmentHomeless = environment.apiRoot;

                this.userHomeless = (data.length !== 0) ? data : null;
                if (this.userHomeless !== null) {
                    this.userHomeless.forEach(element => {
                        this.dataHom.push(
                            {
                                name: `${element.firstName} ${element.lastName}`,
                                photo: (element.photo) ? `${this.environmentHomeless}${element.photo}` : 'https://pngimage.net/wp-content/uploads/2018/05/add-image-png-4.png',
                                id: element.id
                            })
                    });
                }
                console.log(this.dataHom)
            },
            err => {
                console.log('nohomeless' + err)
                console.log(err)
            }
        )
    }

    feed() {
        console.log('holaaa Miodaasdaskljhk')
    }

    openModalWithComponent(item) {
        const initialState = {

            data: [
                {
                    img: item.image,
                    likes: item.total_likes,
                    comments: item.total_comments,
                    description: item.description,
                    date: item.created_at,
                    id: item.id,
                    name: item.userRegisterer.first_name,
                    lastname: item.userRegisterer.last_name,
                    idUser: item.userRegisterer.id,
                    ilike: item.i_like
                }
            ],
            type: 'view'
        };
        this.bsModalRef = this.modalService.show(ModalImagenComponent, { initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA');
        const _combine = combineLatest(
            this.modalService.onHide,
            this.modalService.onHidden,
        ).subscribe((data) => {
            console.log(data)
            if (data[0] === 'close' || data[0] === 'backdrop-click') {
                this.getAllFeeds();
            }

        });
    }

    openModal2() {
        const initialState = {

            data: [
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF3mox4Rw8fYDWxtZ4Hr4rvAF3X5rEbaVYeA&usqp=CAU'
                }
            ],
            type: 'add'
        };
        this.bsModalRef = this.modalService.show(ModalImagenComponent, { initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.setClass('modal-lg modalA');
        const _combine = combineLatest(
            this.modalService.onHide,
            this.modalService.onHidden,
        ).subscribe((data) => {
            console.log(data)
            if (data[0] === 'close' || data[0] === 'backdrop-click') {
                this.getAllFeeds();
            }

        });

    }

    getAllFeeds() {
        this.feedService.getmyFeeds(this.user['id']).subscribe(
            (data: any) => {
                this.feedData = (data.length !== 0) ? data : null;
            },
            (error) => {
                console.log(error);
                this.feedData = null;

            }
        )
    }


}
