import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { CartService } from '../cart.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})  
export class BasketComponent  implements OnInit {

  isCartOpen = false ;
  productsFromCart: any[] = [];

  constructor(private cartService : CartService, private store: Store<{user: User}>) {}

  ngOnInit(): void {
    // Fetch cart items from the server
    this.store.select('user').subscribe((res) => {
      this.cartService.getCartByUser(res.painter.id).subscribe((res:any) => {
        this.productsFromCart = res;
      });
    });
  }
  toggleCart() {
    console.log(this.isCartOpen);
    this.isCartOpen = true;
    console.log(this.isCartOpen);
  }

  closeCart() {
    this.isCartOpen = false;
  }

  getSubtotal() {
    return this.productsFromCart?.reduce((total, item) => total + item?.umetnickoDelo?.cena * item.quantity, 0);
  }

  increaseQuantity(item: any) {
    const cartItem = this.productsFromCart.find((i) => i.id === item.id);
    if (cartItem) {
      cartItem.quantity++;
    }
  }

  decreaseQuantity(item: any) {
    const cartItem = this.productsFromCart.find((i) => i.id === item.id);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: any) {
    this.productsFromCart = this.productsFromCart.filter((i) => i.id !== item.id);
  }

  

}
