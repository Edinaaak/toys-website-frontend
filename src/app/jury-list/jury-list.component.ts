import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-jury-list',
  templateUrl: './jury-list.component.html',
  styleUrls: ['./jury-list.component.css']
})
export class JuryListComponent implements OnInit {

  constructor(private userService : UserService) { }
  juries : any = []

  ngOnInit(): void {

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

  acceptJury(id:number)
  {}

  declineJury(id:number)
  {}

}
