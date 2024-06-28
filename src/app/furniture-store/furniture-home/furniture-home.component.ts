import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductSectionComponent } from '../product-section/product-section.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-furniture-home',
  standalone: true,
  imports: [
    BannerComponent,
    FooterComponent,
    ProductSectionComponent,
    RouterLink,
  ],
  templateUrl: './furniture-home.component.html',
  styleUrl: './furniture-home.component.scss',
})
export class FurnitureHomeComponent {}
