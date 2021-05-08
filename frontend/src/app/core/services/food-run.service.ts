import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FoodRunService {

    constructor(private http: HttpClient) { }

    newFoodRund(body) {
        return this.http.post(`${environment.apiRoot}/api/food/new/`, body);
    }
    editFoodRund(body) {
        return this.http.put(`${environment.apiRoot}/api/food/edit/`, body);
    }
    deleteFoodRund(id) {
        return this.http.delete(`${environment.apiRoot}/api/food/get/${id}`);
    }
    deleteVol(id) {
        return this.http.delete(`${environment.apiRoot}/api/food/delete/volunteer/${id}`);
    }
    newVol(body) {
        return this.http.post(`${environment.apiRoot}/api/food/new/volunteer/`, body);
    }
    getFoodRuns() {
        return this.http.get(`${environment.apiRoot}/api/food/all/`)
    }
    getFoodRu(id) {
        return this.http.get(`${environment.apiRoot}/api/food/get/${id}`);
    }
    getVol(id) {
        return this.http.get(`${environment.apiRoot}/api/food/all/volunteer/${id}`);
    }
    newDonation(body) {
        return this.http.post(`${environment.apiRoot}/api/food/new/donation/`, body);
    }

    getDonations(id) {
        return this.http.get(`${environment.apiRoot}/api/food/all/donation/${id}`);
    }

    newMultimedia(body) {
        return this.http.post(`${environment.apiRoot}/api/food/new/feed/`, body);
    }

    getMultimedia(id) {
        return this.http.get(`${environment.apiRoot}/api/food/all/feed/${id}`);
    }

}
