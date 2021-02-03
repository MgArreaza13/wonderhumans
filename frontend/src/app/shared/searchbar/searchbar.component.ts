import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomelessService } from 'src/app/core/services/homeless.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
    searchActive = null;
    term;
    values: any;
    dataHomeless: Object;
    imageUrl: string;
    constructor(
        private searchService: HomelessService,
        private spinner: NgxSpinnerService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onKey(event: any) {
        this.values = event.target.value;
    }

    onClick() {
        console.log(this.term);
        this.searchService.searchHomeless(this.term).subscribe(data => {
            console.log(data);
            this.dataHomeless = data;
            this.searchActive = true;
            this.imageUrl = (data['photo']) ? `${environment.apiRoot}${data['photo']}` : null;
        }, error => {
            this.toastr.error(error.error.detail)
            console.log(error)
        })
    }

    getData(item) {
        console.log(item)
    }

    select(id) {
        this.router.navigateByUrl(`homeless-profile/${id}`);
        this.searchActive = null;
        this.term = '';
    }

}
