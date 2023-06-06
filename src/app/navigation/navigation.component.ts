import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loginService : any = LoginService;
  user: User  = {} as User
  constructor( loginService: LoginService, private userStorage : Store<{user: User}>) {
    this.loginService = loginService
    this.userStorage.select('user').subscribe((res) => {
      this.user = res;

    })
   }

  ngOnInit(): void {
  }

}
