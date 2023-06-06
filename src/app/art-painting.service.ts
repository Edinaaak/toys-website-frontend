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

  getArtPtg ()
  {
    return this.http.get<any>(`${this.url}/Masterpiece`);
  }

  getArtPtgById(id:number)
  {
    return this.http.get<any>(`${this.url}/Masterpiece/${id}`)
  }

  addMark(addMarkRequest : any)
  {
    return this.http.post<any>(`${this.url}/Masterpiece/add-mark`, addMarkRequest);
  }

  getArtPtgByFilter(param : any)
  {
    const params : any = {}

    if (param.celinaId !== null) {
      params.celinaId = param.celinaId;
    }

    if (param.salaId !== null) {
      params.salaId = param.salaId;
    }

    params.currPage = param.currPage;
    params.pageSize = param.pageSize;

    return this.http.get(`${this.url}/Masterpiece`, {params});
  }

  getMarkForArtPtg(id:number)
  {
    return this.http.get<any>(`${this.url}/Masterpiece/get-mark/${id}`)
  }

  getTop3 ()
  {
    return this.http.get<any>(`${this.url}/Masterpiece/top-3`);

  }

  UpdateSalaForAudiorium (zahtev : any)
  {
    return this.http.put<any>(`${this.url}/Masterpiece/update-masterpiece-auditorium`, zahtev);
  }


}
