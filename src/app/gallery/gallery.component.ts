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
  galleryImages :any = []
  thematicUnit : any = []
  idthematicUnit : any = null
  auditoriums :any = []
  idAuditorium : any = null
  currPageNumber : any = 1;

  ngOnInit(): void {
    // this.artPtgService.getArtPtg()
    // .subscribe((res: any[]) =>
    //   {
    //     this.galleryImages = res;
    //     console.log(this.galleryImages)
    //   },
    //   error=>
    //   {
    //     console.log(error)
    //   })

      this.filterByAuditorium();
      this.auditoriumService.getAllThematicUnit()
      .subscribe((res: any[])=>
        {
          this.thematicUnit = res
        },
        error=>
        {
          console.log(error)
        })

        this.auditoriumService.getAllAuditoriums()
        .subscribe((res: any)=>
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
      this.idthematicUnit = (document.getElementById('tematskaCelina') as HTMLInputElement).value;
      let params = {
        celinaId : this.idthematicUnit,
        salaId : this.idAuditorium,
        currPage : this.currPageNumber,
        pageSize : 3
      }
      this.artPtgService.getArtPtgByFilter(params)
      .subscribe((res: any)=>
        {
          this.galleryImages = res;
        },
        error=>
        {
          console.log(error)
        })
   }

   setCurrPage1(id:number)
   {
      this.currPageNumber = id;
      this.filterByAuditorium();
   }

   setPrevPage()
   {
    if(this.currPageNumber >= 2)
    this.currPageNumber--;
    this.filterByAuditorium();
   }

   setNextPage()
   {
      this.currPageNumber ++ ;
      this.filterByAuditorium();
   }


}
