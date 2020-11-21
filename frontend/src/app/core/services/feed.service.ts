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
    editFeed(body) {
        return this.http.put(`${environment.apiRoot}/api/feed/update/`, body);
    }
    deleteFeed(id) {
        return this.http.delete(`${environment.apiRoot}/api/feed/delete/${id}`);
    }
    like(id) {
        return this.http.post(`${environment.apiRoot}/api/likes/feed/new/${id}`, null);
    }
    dislike(id) {
        return this.http.delete(`${environment.apiRoot}/api/likes/feed/new/${id}`);
    }
    newCom(id, body) {
        return this.http.post(`${environment.apiRoot}/api/comments/feed/new/${id}`, body);
    }
    getmyFeeds(id) {
        return this.http.get(`${environment.apiRoot}/api/feed/filter/${id}`);
    }
    getComments(id) {
        return this.http.get(`${environment.apiRoot}/api/comments/feed/new/${id}`);
    }
    getOnlyFeed(id) {
        return this.http.get(`${environment.apiRoot}/api/feed/get/${id}`);
    }

}
