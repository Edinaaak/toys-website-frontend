import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotFoundGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Preusmjeri korisnika na stranicu "Not Found" za sve nepostojeće rute
    this.router.navigate(['login']);
    return false;
  }
}
