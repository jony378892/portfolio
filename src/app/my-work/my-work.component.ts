import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FoodComponent } from '../food_store/food/food.component';
import { FurnitureHomeComponent } from '../furniture-store/furniture-home/furniture-home.component';
import { PortfolioComponent } from '../portfolio-Website/portfolio/portfolio.component';
import { HotelComponent } from '../hotel-booking/hotel/hotel.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [
    RouterLink,
    FoodComponent,
    FurnitureHomeComponent,
    PortfolioComponent,
    HotelComponent,
  ],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {}
