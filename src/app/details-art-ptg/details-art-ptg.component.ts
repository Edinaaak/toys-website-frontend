import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ArtPaintingService } from '../art-painting.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-details-art-ptg',
  templateUrl: './details-art-ptg.component.html',
  styleUrls: ['./details-art-ptg.component.css']
})
export class DetailsArtPtgComponent implements OnInit, AfterViewInit {

  constructor(private artPtg : ArtPaintingService, private routerActive : ActivatedRoute) { }

  artPtgDetails : any ={};
  id : any = 0;
  stars = document.getElementsByClassName('stars');
  rate : number = 0;
  data : any = {}
  mark : any = {};
  error : any = {}
  viewMark :number = 0;
  ngOnInit(): void {


    this.routerActive.paramMap.subscribe
    (
      params => this.id = +(params.get('id')?? "0")
    )

    this.fetchMark()

    this.artPtg.getArtPtgById(this.id)
    .subscribe(res =>
      {
        this.artPtgDetails = res;
        console.log(res)

      },
      error=>
      {
        console.log(error);
      })


    }

    ngAfterViewInit(): void {

      const stars = document.querySelectorAll('.stars i');
        stars.forEach((star, index1) => {
          star.addEventListener('click', () => {
            this.rate = index1 + 1;
            let addMark =
            {
              ocena: this.rate,
              userId : 4,
              deloId : this.artPtgDetails.id
            }
            console.log(addMark)
            this.artPtg.addMark(addMark)
            .subscribe(res=>
              {
                this.fetchMark()
              },
              error=>
              {
                this.error = error.error
                console.log(error.error)
              })
            console.log(this.rate)
           stars.forEach((star, index2) =>
           {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');

           })
          });
        });
    }

    fetchMark ()
    {
      this.artPtg.getMarkForArtPtg(4)
      .subscribe(res =>
        {
          this.data = res;
          this.mark = this.data.find((x:any)=> x.deloId == this.id);
          if(this.mark != null)
          {
            this.viewMark = this.mark.ocena;
            console.log(this.viewMark)
          }
        },
        error =>
        {
          console.log(error)
        })


    }





}
