import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private loginService: LoginService, private userService: UserService, private router : Router) { }
  user : any = []
  dela:any = []
  ngOnInit(): void {
    let User =
    {
      email : "ediank@gmail.com",
      password : "Edinaa1!"
    }
    this.loginService.getCredentials(User)
    .subscribe(res=>
      {
        this.user = res;
        console.log(res)
        this.dela = res.dela
      },
      error =>
      {
        console.log(error)
      })
  }

  updateUser(id : any)
  {
    this.router.navigate([`update-user/${id}`]);

  }

  deleteUser(id:any)
  {
    var result = confirm("Do you want to delete your account?");

    if (result) {
      this.userService.deleteUser(13)
      .subscribe((res:any)=>
        {
            localStorage.removeItem('token'); //?
            this.router.navigate(['']);
            alert('Your account was deleted')

        },
        (error:any)=>
        {
            console.log(error)
        })
    } else {
      alert("You give up ");
    }

  }

}
