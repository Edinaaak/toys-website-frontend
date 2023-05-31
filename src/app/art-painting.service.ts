import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtPaintingService {

  url = environment.apiUrl;
  constructor(private http:HttpClient) { }

  createArtPtg (art : any)
  {
    return this.http.post<any>(`${this.url}/Masterpiece`, art);
  }
}
