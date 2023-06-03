import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService:UserService, private routerActive : ActivatedRoute) { }
  id : number = 0;
  updateForm = new FormGroup({
    name : new FormControl(),
    surname : new FormControl(),
    city: new FormControl(),
    ptt : new FormControl()
  })
  ngOnInit(): void {

    this.routerActive.paramMap.subscribe
    (
      params => this.id = +(params.get('id')?? "0")
    )
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
    .subscribe(res=>
      {
        console.log("update-ovano", res)
      },
      error=>
      {
        console.log(error)
      })

  }

}
