import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }
  roles :any = {}
  id:number = 0;
  registerForm = new FormGroup(
    {
      name: new FormControl(),
      surname : new FormControl(),
      umcn : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
      confirmPassword : new FormControl(),
      city : new FormControl(),
      zip : new FormControl()

    }
  )
  ngOnInit(): void {
    this.userService.getAllRoles()
    .subscribe((res:any) =>
      {
        this.roles = res;
        console.log(this.roles);

      },
      error=>
      {
        console.log(error)
      })
  }

  izaberi()
  {
    console.log("promenjeno")
    this.id =  +(document.getElementById('selectRole') as HTMLInputElement).value;
    console.log(this.id);
  }

  register()
  {
    let user =
    {
      ime: this.registerForm.get('name')?.value,
      prezime: this.registerForm.get('surname')?.value,
      email: this.registerForm.get('email')?.value,
      userName : this.registerForm.get('name')?.value,
      jmbg: this.registerForm.get('umcn')?.value,
      password: this.registerForm.get('password')?.value,
      nazivMesta: this.registerForm.get('city')?.value,
      ptt: this.registerForm.get('zip')?.value,
      role : this.id

    }
    this.userService.createUser(user)
    .subscribe(res =>
      {
        console.log(res);
      })

  }

}
