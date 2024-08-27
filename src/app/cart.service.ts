import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { } 


  getCartByUser(id: number) {
    return this.http.get<any>(`${this.url}/Korpa/${id}`);
  }

  addProductToCart(product: any) {
    return this.http.post<any>(`${this.url}/Korpa`, product);
  }

  deleteProductFromCart(id: number) {
    return this.http.delete<any>(`${this.url}/Korpa/${id}`);
  }

  updateProductInCart(data: any) {
    return this.http.put<any>(`${this.url}/Korpa`, data);
  }

  deleteProductsFromCart(id: number) {
    return this.http.delete<any>(`${this.url}/Korpa/deleteFromCart/${id}`);
  }
}
