import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { CartService } from '../cart.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';
import { deleteProduct } from '../store/actions/user.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})  
export class BasketComponent  implements OnInit {

  isCartOpen = false ;
  productsFromCart: any[] = [];
  user: User = {} as User;

  constructor(private cartService : CartService, private store: Store<{user: User}>, private productStore: Store<{products:any}>) {}

  ngOnInit(): void {
    // Fetch cart items from the server
    this.getProducts();
    this.store.select('user').subscribe((res) => {
      this.user = res;
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
    const data = {
      id: item.id,
      quantity: cartItem.quantity
    }
    this.cartService.updateProductInCart(data).subscribe(res => {
      console.log(res);
      this.getProducts();
    });
  }

  decreaseQuantity(item: any) {
    const cartItem = this.productsFromCart.find((i) => i.id === item.id);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      this.removeItem(item);
    }
    const data = {
      id: item.id,
      quantity: cartItem.quantity
    }
    this.cartService.updateProductInCart(data).subscribe(res => {
      console.log(res);
      this.getProducts();
    });
  }

  removeItem(item: any) {
    this.productsFromCart = this.productsFromCart.filter((i) => i.id !== item.id);
    this.cartService.deleteProductFromCart(item.id).subscribe(res => {
      this.productStore.dispatch(deleteProduct({id: item.id}));
      localStorage.setItem('products', JSON.stringify(this.productsFromCart));
      this.getProducts();
      console.log(res);
    });
  }

  refetchProducts() {
    this.getProducts();
  }

  getProducts() {
    this.store.select('user').subscribe((res) => {
      this.cartService.getCartByUser(res.painter.id).subscribe((res:any) => {
        this.productsFromCart = res;
      });
    } );}
  
    checkout() {
      this.cartService.deleteProductsFromCart(this.user.painter.id).subscribe(res => {
        console.log(res);
        this.productsFromCart = [];
        localStorage.setItem('products', JSON.stringify(this.productsFromCart));
        alert('You have successfully purchased the items');
        this.getProducts();
      });
    }

}
