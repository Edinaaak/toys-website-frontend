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

  acceptJury(id:number)
  {
    return this.http.put<any>(`${this.url}/api/User/accept/${id}`, null);

  }

  declineJury(id:number)
  {
    return this.http.delete<any>(`${this.url}/api/User/decline/${id}`);
  }


  updateUser(id:number, user:any)
  {
    return this.http.put<any>(`${this.url}/api/User/${id}`, user);
  }

  deleteUser(id:number)
  {
    return this.http.delete<any>(`${this.url}/api/User/${id}`);
  }

  getUsers()
  {
    return this.http.get<any>(`${this.url}/api/User`);
  }

  forgotPassword (email : any)
  {
    const options =
    {
      headers : {'Content-Type': 'application/json'}
    }
    return this.http.post<any>(`${this.url}/api/Auth/forgot-password`, email, options);
  }
  checkToken(token : any)
  {
    const options = {
      headers: { 'Content-Type': 'application/json' }
    };
    return this.http.post<any>(`${this.url}/api/Auth/check-token`, token, options)
  }

  changePassword(request : any)
  {
    return this.http.post<any>(`${this.url}/api/Auth/reset-password`, request);
  }

  

}
