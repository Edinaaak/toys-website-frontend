import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userService : UserService) { }
  security : any = ""
  ifUser : boolean = false
  error : any = ""
  changed : boolean = false;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  forma = new FormGroup(
    {
      password :new FormControl('', [Validators.required,Validators.pattern(this.passwordPattern)])
    }
  )

  get password ()
  {
    return this.forma.get('password')
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => this.security = params.get('token')?? ""
    )
    console.log(this.security)
    this.userService.checkToken(JSON.stringify(this.security))
    .subscribe( res=>
      {
        this.ifUser = res
      },
      (error)=>
      {
          this.error = error.error
      })


  }
  changePassword()
  {
    let request =
    {
      token : this.security,
      newPassword : this.forma.get('password')?.value
    }
    this.userService.changePassword(request)
    .subscribe(res=>
      {
        console.log(res)
        this.changed = true;
      },
      error=>
      {
        console.log(error)
      })
  }

}
