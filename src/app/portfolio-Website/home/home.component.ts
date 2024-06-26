import { Component } from '@angular/core';

import { BannerComponent } from '../banner/banner.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SkillComponent } from '../skill/skill.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    SkillComponent,
    NavbarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
