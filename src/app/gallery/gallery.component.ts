import { Component, OnInit } from '@angular/core';
import { ArtPaintingService } from '../art-painting.service';
import { Router } from '@angular/router';
import { AuditoriumService } from '../auditorium.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private artPtgService : ArtPaintingService, private router:Router, private auditoriumService : AuditoriumService) { }
  galleryImages :any = {}
  thematicUnit : any = {}
  idthematicUnit : any = null
  auditoriums :any = {}
  idAuditorium : any = null

  ngOnInit(): void {
    this.artPtgService.getArtPtg()
    .subscribe(res =>
      {
        this.galleryImages = res;
        console.log(this.galleryImages)
      },
      error=>
      {
        console.log(error)
      })

      this.auditoriumService.getAllThematicUnit()
      .subscribe(res=>
        {
          this.thematicUnit = res
        },
        error=>
        {
          console.log(error)
        })

        this.auditoriumService.getAllAuditoriums()
        .subscribe(res=>
          {
            this.auditoriums = res.data
          },
          error =>{
            console.log(error)
          })
   }

   detalji(id:number)
   {
      this.router.navigate([`gallery/${id}`])
   }

   filterByAuditorium()
   {
      this.idAuditorium = (document.getElementById('filterByAud') as HTMLInputElement).value;
      let params = {
        celinaId : 5,
        salaId : 17
      }
      this.artPtgService.getArtPtgByFilter(params)
      .subscribe(res=>
        {
          console.log(res)
        },
        error=>
        {
          console.log(error)
        })
   }

}
