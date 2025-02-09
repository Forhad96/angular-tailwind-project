import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
bannerTitle = input("Welcome to Angular Tailwind Project")
}
