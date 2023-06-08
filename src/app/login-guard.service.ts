import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private loginService : LoginService, private router: Router) { }

  canActivate(): boolean {
    if (!this.loginService.isLoggedIn()) {
      // Ako korisnik nije prijavljen, preusmjeri na stranicu za prijavu
      this.router.navigate(['login']);
      return false;
    } else {
      // Ako je korisnik prijavljen, omogući pristup
      return true;
    }
  }
}
