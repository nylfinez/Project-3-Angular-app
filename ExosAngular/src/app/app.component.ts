import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Exercise1Component, Exercise2Component, Exercise3Component],
  template: `
  <h3>Exercise 1</h3>
  <app-exercise1></app-exercise1>

  <h3>Exercise 2</h3>
  <app-exercise2></app-exercise2>

  <h3>Exercise 3</h3>
  <app-exercise3></app-exercise3>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExosAngular'; //TODO change
}
