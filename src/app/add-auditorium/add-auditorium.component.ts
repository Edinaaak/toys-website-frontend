import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuditoriumService } from '../auditorium.service';

@Component({
  selector: 'app-add-auditorium',
  templateUrl: './add-auditorium.component.html',
  styleUrls: ['./add-auditorium.component.css']
})
export class AddAuditoriumComponent implements OnInit {

  constructor(private auditoriumService : AuditoriumService) { }
  forma = new FormGroup({
    name : new FormControl('', Validators.required),
    area : new FormControl('', [Validators.required,Validators.pattern(/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/)])

  })

  get name(){
    return this.forma.get('name');
   }
   get area(){
     return this.forma.get('area');
   }
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
      alert('added auditorium')
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
