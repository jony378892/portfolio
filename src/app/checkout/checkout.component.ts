import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, CartComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  customerName = 'Jony';
  product1 = 'Cinthol Soap Lime 100G ( Buy 3 Get 1 Free)';
  product2 = 'Partex Clean Toilet Tissue- 2 ply value pack 4 rolls';
  product3 = 'Yes Hand Wash Liquid Chocolate (Transparent) - 1Ltr.';
  product1Brand = 'Cinthol';
  product1Category = 'Scent and others';
  product2Brand = 'Partex';
  product2Category = 'Tissue';
  product3Brand = 'Yes';
  product3Category = 'Handwash';
  productQty1 = 1;
  productQty2 = 1;
  productQty3 = 1;
  productPrice1 = 167;
  productPrice2 = 79;
  deliveryCharge = 85;
  productPrice3 = 145;
  TotalPrice = this.productPrice1 + this.productPrice2 + this.productPrice3;
  totalItems = this.productQty1 + this.productQty2 + this.productQty3;
  totalPriceWithDelivery = this.TotalPrice + this.deliveryCharge;
}
