import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
