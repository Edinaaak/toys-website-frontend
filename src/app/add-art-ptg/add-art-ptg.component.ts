import { Component, OnInit } from '@angular/core';
import { ArtPaintingService } from '../art-painting.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-art-ptg',
  templateUrl: './add-art-ptg.component.html',
  styleUrls: ['./add-art-ptg.component.css']
})
export class AddArtPtgComponent implements OnInit {

  constructor(private artService:ArtPaintingService) { }
  id : number = 0;
  slikarId = 2;
  celinaId = 1;

  addForm = new FormGroup(
    {
      name: new FormControl(),
      width: new FormControl(),
      height : new FormControl(),
      image : new FormControl(),
      slikarId : new FormControl(2),
      celinaId : new FormControl(1)


    }
  )
  ngOnInit(): void {
  }

  choose()
  {
    this.id = +(document.getElementById('selectThematicUnit') as HTMLInputElement).value
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
    formData.append('celinaId', this.addForm.get('celinaId')?.value)
  
    this.artService.createArtPtg(formData)
    .subscribe(res =>
      {
        console.log(res, "dodato")
      },
      error=>
      {
        console.log(error)
      })
  }

}
