import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

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
}
