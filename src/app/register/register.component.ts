import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './validacija.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }
  roles :any = {}
  id:number = 2;
  registered : boolean = false;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  registerForm = new FormGroup(
    {
     name: new FormControl('',[Validators.required, Validators.minLength(3),CustomValidator.neMozeRazmake]),
      surname : new FormControl('',[Validators.required, Validators.minLength(3)]),
      umcn : new FormControl('',[Validators.required, CustomValidator.umcnLengthValidator]),
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required,
        Validators.pattern(this.passwordPattern)]),
      confirmPassword : new FormControl('',[Validators.required, CustomValidator.passwordMatchValidator]),
      city : new FormControl('',[Validators.required]),
      zip : new FormControl('',[Validators.required])

    }
  )
  get name(){
    return this.registerForm.get('name')
    }
    get surname(){
      return this.registerForm.get('surname')
    }
    get umcn(){
      return this.registerForm.get('umcn')
    }
    get email(){
      return this.registerForm.get('email')
    }

    get confirmPassword()
    {
      return this.registerForm.get('confirmPassword')
    }
    get password(){
      return this.registerForm.get('password')
    }

    get city(){
      return this.registerForm.get('city')
    }

    get zip(){
      return this.registerForm.get('zip');
    }
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
      userName : this.registerForm.get('email')?.value,
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
        this.registered = true
      })

  }

}
