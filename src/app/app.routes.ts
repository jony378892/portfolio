import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { SkillComponent } from './skill/skill.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'portfolio', title: 'Portfolio', component: PortfolioComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'banner', title: 'Banner', component: BannerComponent },
  { path: 'skill', title: 'Skill', component: SkillComponent },
];
