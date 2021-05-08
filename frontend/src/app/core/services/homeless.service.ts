import { User } from './../../shared/models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Authentication } from 'src/app/shared/models/authentication';
import { NewHomeless } from 'src/app/shared/models/newHomeless';

@Injectable()
export class HomelessService {
    constructor(private http: HttpClient) { }

    newHomeless(newH: NewHomeless) {
        return this.http.post(`${environment.apiRoot}/api/accounts/homelessProfile/`, newH);
    }
    editHomeless(homeless) {
        return this.http.put(`${environment.apiRoot}/api/accounts/homelessProfile/edit/`, homeless);
    }

    getHomelessProfile(id) {
        return this.http.get(`${environment.apiRoot}/api/accounts/homelessProfile/${id}`);
    }

    getCommentsProfile(id) {
        return this.http.get(`${environment.apiRoot}/api/comments/get/${id}`);
    }

    getDonations(id) {
        return this.http.get(`${environment.apiRoot}/api/donations/get/${id}`);
    }

    getEventsDonations(id) {
        return this.http.get(`${environment.apiRoot}/api/donations/cause/all/${id}`);
    }

    getPortfolio(id) {
        return this.http.get(`${environment.apiRoot}/api/portfolio/get/${id}`);
    }
    deletePortfolio(id) {
        return this.http.delete(`${environment.apiRoot}/api/portfolio/delete/${id}`);
    }
    editPortfolio(portfolio) {
        return this.http.put(`${environment.apiRoot}/api/portfolio/edit/`, portfolio);
    }

    newComment(id, comment) {
        return this.http.post(`${environment.apiRoot}/api/comments/new/${id}`, comment);
    }

    newEvent(id, cause) {
        return this.http.post(`${environment.apiRoot}/api/donations/cause/new/${id}`, cause);
    }

    newDonation(body) {
        return this.http.post(`${environment.apiRoot}/api/donations/new/`, body);
    }

    recentDonations(id) {
        return this.http.get(`${environment.apiRoot}/api/donations/cause/get/${id}`);
    }

    searchHomeless(code) {
        return this.http.get(`${environment.apiRoot}/api/accounts/homeless/code/${code}`);
    }

    newPortfolio(body, id) {
        return this.http.post(`${environment.apiRoot}/api/portfolio/create/${id}`, body);
    }
}
