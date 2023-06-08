import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jury-list',
  templateUrl: './jury-list.component.html',
  styleUrls: ['./jury-list.component.css']
})
export class JuryListComponent implements OnInit {

  constructor(private userService : UserService) { }
  juries : any = [];

  getJuryList()
  {
    this.userService.getJuries()
    .subscribe((res:any)=>
    {
      this.juries = res;
      console.log(this.juries)
    },
    error=>
    {
      console.log(error)
    })

  }

  ngOnInit(): void {
    this.getJuryList();

  }

  acceptJury(id:number)
  {
    this.userService.acceptJury(id)
    .subscribe( res =>
      {
        console.log(res)
        alert("accepted")
        this.getJuryList()
      },
      error=>
      {
        console.log(error)
      })
  }

  declineJury(id:number)
  {
    this.userService.declineJury(id)
    .subscribe(res =>
      {
        console.log(res)
        alert("declined")
        this.getJuryList()
      },
      error=>
      {
        console.log(error)
      })
  }

}
