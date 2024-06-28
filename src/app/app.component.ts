import { Component, Directive } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './portfolio-Website/home/home.component';
import { FurnitureHomeComponent } from './furniture-store/furniture-home/furniture-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HighlightDirective,
    HomeComponent,
    RouterLink,
    FurnitureHomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Jony.dev';
}
