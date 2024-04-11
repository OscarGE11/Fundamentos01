import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ts01Component } from './ts01/ts01.component';
import { Angular01Component } from './angular01/angular01.component';
import { Reto1angularComponent } from './reto1angular/reto1angular.component';
import { Reto2angularComponent } from './reto2angular/reto2angular.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ts01Component,Angular01Component,Reto1angularComponent,Reto2angularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fundamentos01';
}
