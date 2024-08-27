import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './interfaces/User';
import { logout, setProducts } from './store/actions/user.actions';
import { CartService } from './cart.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://localhost:7036/api/Auth/"
  constructor(private http : HttpClient, private store: Store<{user: User}>, private productStore: Store<{products: any}>, private cartService: CartService) { }

  getCredentials(user :any)
  {
    return this.http.post<any>(`${this.url}login`, user)
  }

  isLoggedIn()
  {
    let token = localStorage.getItem('user');
    if(token == null) {
      this.productStore.dispatch(setProducts({products: []}))
      return false;
    }
  
    return true;

  }

  logout()
  {
    this.store.dispatch(logout())
    this.productStore.dispatch(setProducts({products: []}))
    localStorage.removeItem('user');
    localStorage.removeItem('products');
  }

  googleLogin (email : any)
  {
    const options = {
      headers: { 'Content-Type': 'application/json' }
    };
    return this.http.post<any>(`${this.url}google-login`, email, options)
  }

}
