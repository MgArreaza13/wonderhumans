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
}
