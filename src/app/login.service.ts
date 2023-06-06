import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './interfaces/User';
import { logout } from './store/actions/user.actions';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://localhost:7036/api/Auth/"
  constructor(private http : HttpClient, private store: Store<{user: User}>) { }

  getCredentials(user :any)
  {
    return this.http.post<any>(`${this.url}login`, user)
  }

  isLoggedIn()
  {
    let token = localStorage.getItem('user');
    if(token == null)
      return false;
    return true;

  }

  logout()
  {
    this.store.dispatch(logout())
    localStorage.removeItem('user');
  }

  googleLogin (email : any)
  {
    const options = {
      headers: { 'Content-Type': 'application/json' }
    };
    return this.http.post<any>(`${this.url}google-login`, email, options)
  }

}
