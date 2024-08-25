import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThematicUnitService {

  url = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getThematicUnits ()
  {
    return this.http.get<any>(`${this.url}/TematskaCelina`);
  }
}
