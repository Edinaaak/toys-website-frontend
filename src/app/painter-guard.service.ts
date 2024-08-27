import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './interfaces/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PainterGuardService {


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
