import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';
import { updateUser } from '../store/actions/user.actions';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user : any = {}
  constructor(private userService:UserService, private routerActive : ActivatedRoute, private userStorage : Store<{user:User}>) {

   }
  id : number = 0;
  added : boolean = false;
  updateForm = new FormGroup({
    name : new FormControl('', Validators.required),
    surname : new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    ptt : new FormControl('', Validators.required)
  })
  ngOnInit(): void {

    this.routerActive.paramMap.subscribe
    (
      params => this.id = +(params.get('id')?? "0")
    )
    this.userService.getById(this.id)
    .subscribe(res=>
      {
        this.user = res
        console.log(this.user)
        this.updateForm.get('name')?.setValue(this.user.ime);
        this.updateForm.get('surname')?.setValue(this.user.prezime);
        this.updateForm.get('city')?.setValue(this.user.nazivMesta);
        this.updateForm.get('ptt')?.setValue(this.user.ptt);
      })


  }

  get name()
  {
    return this.updateForm.get('name')
  }
  get surname ()
  {
    return this.updateForm.get('surname')
  }
  get city()
  {
    return this.updateForm.get('city')
  }
  get ptt()
  {
    return this.updateForm.get('ptt')
  }
  saveUser()
  {
    let user =
    {
      ime : this.updateForm.get('name')?.value,
      prezime : this.updateForm.get('surname')?.value,
      nazivMesta : this.updateForm.get('city')?.value,
      ptt : this.updateForm.get('ptt')?.value

    }
    this.userService.updateUser(this.id, user)
    .subscribe((res:any)=>
      {

        this.added = true
        console.log("update-ovano", res)
        this.userStorage.dispatch(updateUser({painter:res}))
        localStorage.setItem('user', JSON.stringify(this.user))
      },
      error=>
      {
        console.log(error)
      })

  }

}
