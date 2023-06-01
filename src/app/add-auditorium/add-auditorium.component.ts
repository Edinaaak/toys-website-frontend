import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuditoriumService } from '../auditorium.service';

@Component({
  selector: 'app-add-auditorium',
  templateUrl: './add-auditorium.component.html',
  styleUrls: ['./add-auditorium.component.css']
})
export class AddAuditoriumComponent implements OnInit {

  constructor(private auditoriumService : AuditoriumService) { }
  forma = new FormGroup({
    name : new FormControl(),
    area : new FormControl()

  })
  places : any = {}
  id : any = {}
  ngOnInit(): void {

    this.auditoriumService.getPlaces()
    .subscribe((res:any) =>
      {
        this.places = res.data;
      },
      error =>
      {
        console.log(error)
      })
  }
  addAuditorium()
  {
    let request =
    {
       naziv : this.forma.get('name')?.value,
       povrsina : this.forma.get('area')?.value,
       mestoId : this.id
    }
    this.auditoriumService.addAuditorium(request)
    .subscribe((res:any) => {
      console.log('dodato')
    },
    error =>
    {
      console.log(error)
    })
  }

  choose()
  {
    this.id = (document.getElementById('selectPlace') as HTMLInputElement).value
  }

}
