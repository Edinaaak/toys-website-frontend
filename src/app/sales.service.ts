import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { } 


  getToysOnSale() {
    return this.http.get<any>(`${this.url}/Rasprodaja`);
  }
}
