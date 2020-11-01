import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    constructor(
        private http: HttpClient
    ) { }

    newFeed(body) {
        return this.http.post(`${environment.apiRoot}/api/feed/create/`, body);
    }
    like(id) {
        return this.http.post(`${environment.apiRoot}/api/feed/new/${id}`, null);
    }
    newCom(id,body) {
        return this.http.post(`${environment.apiRoot}/api/comments/feed/new/${id}`, body);
    }
    getmyFeeds(id) {
        return this.http.get(`${environment.apiRoot}/api/feed/filter/${id}`);
    }
    getOnlyFeed(id){
        return this.http.get(`${environment.apiRoot}/api/feed/get/${id}`);
    }
}
