import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/User';
import { Store } from '@ngrx/store';
import { login, setProducts } from '../store/actions/user.actions';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: any = {}
  user: any = {}
  error: boolean = false
  errorMsg : any = {}
  userInfo?: any

  constructor(private loginService: LoginService, private router: Router, private store: Store<{user: User}>,private productStore: Store<{products: any}>, private cartService: CartService) {

  }


  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  forma = new FormGroup(
    {
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.pattern(this.passwordPattern)])

    }
  )
  get email() {
    return this.forma.get('email')
  }
  get password() {
    return this.forma.get('password')
  }

  ngOnInit(): void {
  }

  login() {
    let user =
    {
      email: this.forma.get('email')?.value,
      password: this.forma.get('password')?.value
    }
    this.loginService.getCredentials(user)
      .subscribe(res => {
        this.store.dispatch(login(res))
        this.credentials = res;
        // localStorage.setItem('token', this.credentials.token);
        localStorage.setItem('user', JSON.stringify(res));
        this.cartService.getCartByUser(res.painter.id).subscribe(res => {
          this.productStore.dispatch(setProducts({products: res}))
          localStorage.setItem('products', JSON.stringify(res))
          console.log(res)
      this.router.navigate([''])
    })
       
      },
        (error:any) => {
          if(error.status == 400)
          {
            console.log(error)
             this.error = true;
              this.errorMsg = error?.error?.msg;

          }
          else
          {
            this.error= true;
            console.log(error.error.msg)
            this.errorMsg = error?.error?.error
          }

        })

  }




}
