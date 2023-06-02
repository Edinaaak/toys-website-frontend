import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:7036";
  constructor(private http:HttpClient) { }


  getAllRoles()
  {
      return this.http.get<any>(`${this.url}/role`);
  }

  createUser(user: any)
  {
    return this.http.post<any>(`${this.url}/api/Auth/register`, user);
  }

  getJuries()
  {
    return this.http.get<any>(`${this.url}/api/User/jury-list`);
  }
}
