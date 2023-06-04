import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuditoriumService } from '../auditorium.service';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {

  constructor(private auditoriumService : AuditoriumService) { }
  forma = new FormGroup({
    place : new FormControl('', Validators.required),
    location : new FormControl('', Validators.required)

  })
  get place(){
    return this.forma.get('place')
  }
  get location(){
    return this.forma.get('location');
  }
  ngOnInit(): void {
  }
  addPlace()
  {
    let request =
    {
       naziv : this.forma.get('place')?.value,
       lokacija : this.forma.get('location')?.value
    }
    this.auditoriumService.addPlace(request)
    .subscribe(res => {
      console.log('dodato')
    },
    error =>
    {
      console.log(error)
    })
  }

}
