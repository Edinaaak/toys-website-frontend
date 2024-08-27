import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';
import { ThematicUnitService } from '../thematic-unit.service';
import { AuditoriumService } from '../auditorium.service';
import { CartService } from '../cart.service';
import { BasketComponent } from '../basket/basket.component';
import { Observable } from 'rxjs';
import { selectProductCount } from '../store/reducers/user.reducer';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loginService : any = LoginService;
  user: User  = {} as User
  isSearchVisible = false;
  thematicUnits: any = [];
  toysByInterests: any = [];
  prices = [15,25, 40];
  productsFromCart: any = []
  length: any = 0;
  @ViewChild('cartComponent') cartComponent!: BasketComponent;
  productCount$ !: Observable<number>;

  constructor( loginService: LoginService, private userStorage : Store<{user: User}>, private thematicUnitService: ThematicUnitService, private audithoriumService: AuditoriumService,
    private cartService: CartService, private store: Store<{ products: any }>
  ) {
    this.loginService = loginService
    this.userStorage.select('user').subscribe((res) => {
      this.user = res;

    })
   }

   toggleSearch(): void {
    this.isSearchVisible = !this.isSearchVisible;
  }

  ngOnInit(): void {

    this.thematicUnitService.getThematicUnits().subscribe(res => {
      this.thematicUnits = res;
    });
    this.audithoriumService.getAllAuditoriums().subscribe(res => {
      this.toysByInterests = res.data;
    });
    this.productCount$ = this.store.select(selectProductCount);
    this.getProductCount();
  }

  getProductCount () {
    this.store.select('products').subscribe((res) => {
    this.length = res?.products?.length;
  })
  }


  openComp() {
    this.cartComponent.isCartOpen = true;
    this.cartComponent.refetchProducts();
    console.log("open")
  }
  

}
