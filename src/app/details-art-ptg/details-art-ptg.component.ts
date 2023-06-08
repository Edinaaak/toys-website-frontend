import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ArtPaintingService } from '../art-painting.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { AuditoriumService } from '../auditorium.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-details-art-ptg',
  templateUrl: './details-art-ptg.component.html',
  styleUrls: ['./details-art-ptg.component.css']
})
export class DetailsArtPtgComponent implements OnInit, AfterViewInit {

  constructor(private artPtg : ArtPaintingService, private routerActive : ActivatedRoute, private audService : AuditoriumService, private router : Router,
    private userStorage:Store<{user:User}>) {
      this.userStorage.select('user').subscribe(res =>
        {
          this.user = res
        })
    }

  artPtgDetails : any ={};
  id : any = 0;
  stars = document.getElementsByClassName('stars');
  rate : number = 0;
  data : any = {}
  mark : any = {};
  error : any = {}
  auds : any = []
  viewMark :number = 0;
  idAuditorium : any = 0;
  user : User = {} as User
  alreadyRate : boolean = false
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

      this.audService.getAllAuditoriums()
      .subscribe(res=>
        {
          this.auds = res.data;
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
              userId : this.user.painter?.id,
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
                this.alreadyRate = true
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
      this.artPtg.getMarkForArtPtg(this.user.painter?.id)
      .subscribe(res =>
        {
          this.data = res;
          this.mark = this.data.find((x:any)=> x.deloId == this.id);
          if(this.mark != null)
          {
            this.viewMark = this.mark.ocena;
            console.log(this.viewMark, '0CENAA')
          }
        },
        error =>
        {
          console.log(error)
        })


    }

    addImageToAuditorium(id :number)
    {
        let formdata =
        {
          id : this.id,
          idSala : this.idAuditorium
        }
        this.artPtg.UpdateSalaForAudiorium(formdata)
        .subscribe(res=>
          {
            console.log(res)
          },
          error=>
          {
              console.log(error)
          })

    }

    setIdAuditorium()
    {
      this.idAuditorium = +(document.getElementById('auditoriumSelect') as HTMLInputElement).value
    }


    deleteArt()
    {
      var result = confirm('Do you want to delete this art painting?')
      if(result){
      this.artPtg.deleteArtPtg(this.id)
      .subscribe(res =>
        {
          console.log(this.error)
          this.router.navigate(['gallery']);

        },
        error =>
        {
            console.log(error)
        })}
        else
        {
          alert('You gave up')
        }
    }




}
