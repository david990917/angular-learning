import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product) {
    this.items.push(product);
    this.items.sort((a, b) => -(a.price - b.price)); // sort by price in descending order
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
}
