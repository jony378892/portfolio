import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink, ContactComponent, RouterOutlet],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {}
