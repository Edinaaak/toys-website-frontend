import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuditoriumService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getAllThematicUnit()
  {
    return this.http.get<any>(`${this.url}/Masterpiece/thematic-unit`);
  }


  getAllAuditoriums()
  {
    return this.http.get<any>(`${this.url}/Sala`);
  }

  addPlace(place : any)
  {
    return this.http.post<any>(`${this.url}/Place`, place);
  }

  addAuditorium(auditorium : any)
  {
    return this.http.post<any>(`${this.url}/Sala`, auditorium);
  }

  getPlaces ()
  {
    return this.http.get<any>(`${this.url}/Place`);
  }
}
