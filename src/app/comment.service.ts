import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { } 


  createComment(comment: any) {
    return this.http.post<any>(`${this.url}/Comment`, comment);
  }

  getComments(id:any) {
    return this.http.get<any>(`${this.url}/Comment/allComments/${id}`);
  }
}
