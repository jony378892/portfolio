import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  selectedProduct = 2;
  productTitle =
    '20CM LED Simple Circular Ring Table Lamp Bedroom Bedside Living Room Restaurant Hotel Decorative Lamp Dimmable Round Night Light';
  subTotal = 22.0;
  shippingFee = 20.0;
  total = 240.0;
  selectedItem = 2;
  productPrice1 = 100;
  productPrice2 = 120;
  welcome = 'Welcome deal for 1 item only';
  storeName1 = '3c Consumer Electronics Accessories Store';
  storeName2 = 'MXYY Store';
  shippedFromAbroad = 'Shipped By Global Sellers';
  count1 = 1;
  count2 = 1;
  increment1(){
    this.count1++;
  }
  decrement1(){
    this.count1--;
  }
  increment2(){
    this.count2++;
  }
  decrement2(){
    this.count2--;
  }
}
