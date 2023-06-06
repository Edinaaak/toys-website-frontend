import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userService : UserService) { }
  forma = new FormGroup(
    {
      email : new FormControl()
    }
  )
  sent : boolean = false;

  ngOnInit(): void {
  }

  send()
  {

    this.userService.forgotPassword(JSON.stringify(this.forma.get('email')?.value))
    .subscribe(res=>
      {
        console.log(res)
        this.sent = true;
      },
      error=>
      {
        console.log(error)
      })
  }

}
