import { Routes } from '@angular/router';
import { HomeComponent } from './portfolio-Website/home/home.component';
import { AboutComponent } from './portfolio-Website/about/about.component';
import { PortfolioComponent } from './portfolio-Website/portfolio/portfolio.component';

import { ContactComponent } from './portfolio-Website/contact/contact.component';
import { BannerComponent } from './portfolio-Website/banner/banner.component';
import { SkillComponent } from './portfolio-Website/skill/skill.component';
import { TestComponent } from './test/test.component';
import { FurnitureHomeComponent } from './furniture-store/furniture-home/furniture-home.component';

export const routes: Routes = [
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
  { path: 'test', title: 'Test', component: TestComponent },
  {
    path: 'furniture-store',
    title: 'Furniture Store',
    component: FurnitureHomeComponent,
  },
];
