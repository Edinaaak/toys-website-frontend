import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.apiUrl2
  constructor(private http:HttpClient) { }


  getAllRoles()
  {
      return this.http.get<any>(`${this.url}/role`);
  }

  createUser(user: any)
  {
    return this.http.post<any>(`${this.url}/Auth/register`, user);
  }

  getJuries()
  {
    return this.http.get<any>(`${this.url}/User/jury-list`);
  }

  acceptJury(id:number)
  {
    return this.http.put<any>(`${this.url}/User/accept/${id}`, null);

  }

  declineJury(id:number)
  {
    return this.http.delete<any>(`${this.url}/User/decline/${id}`);
  }


  updateUser(id:number, user:any)
  {
    return this.http.put<any>(`${this.url}/User/${id}`, user);
  }

  deleteUser(id:number)
  {
    return this.http.delete<any>(`${this.url}/api/User/${id}`);
  }

  getUsers()
  {
    return this.http.get<any>(`${this.url}/User`);
  }

  forgotPassword (email : any)
  {
    const options =
    {
      headers : {'Content-Type': 'application/json'}
    }
    return this.http.post<any>(`${this.url}/Auth/forgot-password`, email, options);
  }
  checkToken(token : any)
  {
    const options = {
      headers: { 'Content-Type': 'application/json' }
    };
    return this.http.post<any>(`${this.url}/Auth/check-token`, token, options)
  }

  changePassword(request : any)
  {
    return this.http.post<any>(`${this.url}/Auth/reset-password`, request);
  }

  getById(id:number)
 {
  return this.http.get<any>(`${this.url}/User/${id}`)
 }



}
