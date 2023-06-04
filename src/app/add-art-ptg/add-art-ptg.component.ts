import { Component, OnInit } from '@angular/core';
import { ArtPaintingService } from '../art-painting.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuditoriumService } from '../auditorium.service';

@Component({
  selector: 'app-add-art-ptg',
  templateUrl: './add-art-ptg.component.html',
  styleUrls: ['./add-art-ptg.component.css']
})
export class AddArtPtgComponent implements OnInit {

  constructor(private artService:ArtPaintingService, private auditoriumService: AuditoriumService) { }
  id : any = 0;
  idAuditorium : any = 0;
  slikarId = 3;
  celinaId = 1;
  thUnits : any = {};
  auditoriums : any = {}


  addForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      width: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
      height : new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
      image : new FormControl('', Validators.required),
      slikarId : new FormControl(3),


    }
  )
  get Naziv(){
    return this.addForm.get('name')
  }
  get Visina(){
    return this.addForm.get('height');
  }
  get Sirina(){
    return this.addForm.get('width');
  }
  get Putanja(){
    return this.addForm.get('image');
  }

  ngOnInit(): void {
    this.auditoriumService.getAllThematicUnit()
    .subscribe(res =>
      {
        this.thUnits = res;
      },
      error =>
      {
        console.log(error)
      })

      this.auditoriumService.getAllAuditoriums()
      .subscribe(res=>
        {
          this.auditoriums = res.data;
          console.log(res.data[0].naziv)
        },
        error=>
        {
          console.log(error)
        })
  }

  choose()
  {
    this.id = (document.getElementById('selectThematicUnit') as HTMLInputElement).value
    this.idAuditorium = (document.getElementById('selectAuditorium') as HTMLInputElement).value
  }

  add()
  {
    let inputElement = document.getElementById('customFile') as HTMLInputElement;
    const putanja = inputElement?.files?.[0];
    var formData = new FormData();
    formData.append('Naziv', this.addForm.get('name')?.value);
    formData.append('Visina', this.addForm.get('height')?.value);
    formData.append('Sirina', this.addForm.get('width')?.value);
    formData.append('Putanja',  putanja || "");
    formData.append('slikarId', this.addForm.get('slikarId')?.value)
    formData.append('celinaId', this.id)
    formData.append('salaId', this.idAuditorium)


    this.artService.createArtPtg(formData)
    .subscribe(res =>
      {
        console.log(res, "dodato")
        alert("Add an art painting")
      },
      error=>
      {
        console.log(error)
      })
  }

}
