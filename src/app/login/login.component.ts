import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials : any = {}
  user: any = {}
  error : any = {}
  constructor(private loginService:LoginService, private router:Router) {
   }
  forma = new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl()

    }
  )

  ngOnInit(): void {
  }

  login()
  {
    let user =
    {
      email : this.forma.get('email')?.value,
      password : this.forma.get('password')?.value
    }
    this.loginService.getCredentials(user)
    .subscribe(res =>
      {
        console.log(res);
        this.credentials = res;
        localStorage.setItem('token',this.credentials.token);
        const token = this.credentials.token;
        this.router.navigate(['home'])
      },
      error=>
      {
        console.log(error.message)
        this.error = error.error;
      })

  }

}
