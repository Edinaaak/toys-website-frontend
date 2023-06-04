import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
   passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  forma = new FormGroup(
    {
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)] )

    }
  )
  get email(){
    return this.forma.get('email')
  }
  get password(){
    return this.forma.get('password')
  }

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
        this.router.navigate([''])
      },
      error=>
      {
        console.log(error.message)
        this.error = error.error;
      })

  }

}
