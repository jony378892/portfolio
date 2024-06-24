import { Component, Directive } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HighlightDirective,
    HomeComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Jony.dev';
}
