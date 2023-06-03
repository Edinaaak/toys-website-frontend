import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuditoriumService } from '../auditorium.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private userService:UserService, private auditoriumService :AuditoriumService, private router:Router) { }
  users : any = []
  auditoriums :any = []
  places : any = []
  nazivIzm: string = ''
  forma = new FormGroup(
    {
      novoIme : new FormControl()
    }
  )
  formaPlace = new FormGroup(
    {
      novoMesto: new FormControl(),
      novaLokacija : new FormControl()
    }
  )
  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(res=>
      {
        this.users = res.data
      })

      this.auditoriumService.getAllAuditoriums()
      .subscribe(res=>
        {
          this.auditoriums = res.data
        })

      this.auditoriumService.getPlaces()
      .subscribe(res=>
        {
          this.places = res.data
        })
  }

  updateUser(id:any)
  {
    this.router.navigate([`update-user/${id}`]);
  }

  deleteUser(id:any)
  {
    var result = confirm("Do you want to delete your account?");

    if (result) {
      this.userService.deleteUser(id)
      .subscribe((res:any)=>
        {
            localStorage.removeItem('token'); //?
            this.router.navigate(['']);
            alert('Your account was deleted')

        },
        (error:any)=>
        {
            console.log(error)
        })
    } else {
      alert("You give up ");
    }

  }

  updateAuditorium(id:any)
  {
    if(this.forma.get('novoIme')?.value != '')
    {
      let izmena =
      {
        naziv : this.forma.get('novoIme')?.value
      }
    this.auditoriumService.updateAuditorium(id, izmena)
    .subscribe(res=>
      {
        console.log('izmenjenoo')
      },
      error=>
      {
        console.log(error)
      })
    }

  }

  deleteAuditorium(id:number)
  {
    var result = confirm("Do you want to delete this auditorium?");

    if (result) {
      this.auditoriumService.deleteAuditorium(id)
      .subscribe((res:any)=>
        {

            this.router.navigate(['']);
            alert('Auditorium was deleted')

        },
        (error:any)=>
        {
            console.log(error)
        })
    } else {
      alert("You give up ");
    }
  }

  updatePlace(id:any)
  {
    console.log(this.formaPlace.get('novoMesto')?.value)
    console.log(this.formaPlace.get('novaLokacija')?.value)
    if(this.formaPlace.get('novoMesto')?.value === null || this.formaPlace.get('novaLokacija')?.value === null)
   {
        alert("both inputs must be filled")
   }
   else
   {
    let novo =
    {
      naziv : this.formaPlace.get('novoMesto')?.value,
      lokacija : this.formaPlace.get('novaLokacija')?.value
    }
    this.auditoriumService.updatePlace(id, novo)
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

  deletePlace(id:any)
  {
    var result = confirm("Do you want to delete this place?");

    if (result) {
      this.auditoriumService.deletePlace(id)
      .subscribe((res:any)=>
        {

            this.router.navigate(['']);
            alert('Place was deleted')

        },
        (error:any)=>
        {
            console.log(error)
        })
    } else {
      alert("You give up ");
    }
  }

}
