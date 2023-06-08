import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Store } from '@ngrx/store';
import { User } from './interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private store: Store<{user: User}>, private router:Router, ) {
    this.store.select('user').subscribe(res=> this.user =  res);
   }
  user : User = {} as User
  canActivate(): boolean {
    if (this.user?.role == 'Admin') {
      // Ako je korisnik administrator, dozvoli pristup ruti
      return true;
    } else {
      // Ako korisnik nije administrator, preusmjeri na drugu rutu ili prikaži poruku o nedozvoljenom pristupu
      this.router.navigate(['unauthorized']);
      return false;
    }
  }
}
