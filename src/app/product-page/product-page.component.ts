import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  website = 'Shipper';
  category = 'Home & Living';
  category1 = 'Lighting';
  category2 = 'Floor Lamp';
  productTitle = 'Modern Nordic Style LED Light Floor Lamp For Bedroom';
  ratingIndicator = 4.2;
  totalRating = 590;
  soldQty = 1600;
  shippingTo = 'Dhaka, Bangladesh';
  shippingCost = 0.0;
  productQty = 1;
  availableQty = 600;
}
