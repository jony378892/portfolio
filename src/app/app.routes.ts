import { Routes } from '@angular/router';
import { HomeComponent } from './portfolio-Website/home/home.component';
import { AboutComponent } from './portfolio-Website/about/about.component';
import { PortfolioComponent } from './portfolio-Website/portfolio/portfolio.component';

import { ContactComponent } from './portfolio-Website/contact/contact.component';
import { BannerComponent } from './portfolio-Website/banner/banner.component';
import { SkillComponent } from './portfolio-Website/skill/skill.component';

import { FurnitureHomeComponent } from './furniture-store/furniture-home/furniture-home.component';
import { FoodComponent } from './food_store/food/food.component';
import { HotelComponent } from './hotel-booking/hotel/hotel.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { InteriorComponent } from './interior/interior.component';
import { HouseComponent } from './house/house.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: MyWorkComponent },
  {
    path: 'portfolio-website',
    title: 'Portfolio Website',
    component: HomeComponent,
  },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'portfolio', title: 'Portfolio', component: PortfolioComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'banner', title: 'Banner', component: BannerComponent },
  { path: 'skill', title: 'Skill', component: SkillComponent },
  {
    path: 'furniture-store',
    title: 'Furniture Store',
    component: FurnitureHomeComponent,
  },
  { path: 'food-store', title: 'Food Store', component: FoodComponent },
  { path: 'hotel', title: 'Hotel Booking ', component: HotelComponent },
  { path: 'interior', title: 'Interior Home', component: InteriorComponent },
  { path: 'house', title: 'House', component: HouseComponent },
  {path:  'product-page', title: 'Product Page', component: ProductPageComponent},
  {path: 'cart', title: 'Cart', component: CartComponent},
  {path: 'checkout', title: 'Checkout',  component: CheckoutComponent},
];
