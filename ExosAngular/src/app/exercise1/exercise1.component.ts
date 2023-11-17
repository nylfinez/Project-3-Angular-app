import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <header [style.font-family]="selectedFont" [style.font-size.px]="selectedSize" [style.text-align]="alignment">
      Hello {{ name.toUpperCase() }}!
    </header>
    <div id="textFormat">
      <label for="nameInput">Enter name:</label>
      <input type="text" id="nameInput" [(ngModel)]="name" /> <!--ngModel is to bind input values to elements-->
      
      <label for="fontStyle">Font style:</label>
      <select id="fontStyle" [(ngModel)]="selectedFont">
        <option value="arial">Arial</option>
        <option value="calibri">Calibri</option>
        <option value="georgia">Georgia</option>
        <option value="rockwell">Rockwell</option>
        <option value="timesNewRoman">Times New Roman</option>
      </select>

      <label for="fontSize">Font size:</label>
      <input type="number" id="fontSize" [(ngModel)]="selectedSize" />
      <div class="radioGroup">
        <input type="radio" id="alignleft" [(ngModel)]="alignment" value="left"/>
        <label for="alignLeft">Left</label>
        <input type="radio" id="alignCenter" [(ngModel)]="alignment" value="center" />
        <label for="alignCenter">Center</label>
        <input type="radio" id="alignRight" [(ngModel)]="alignment" value="right" />
        <label for="alignRight">Right</label>
      </div>
    </div>
    <hr>
  `,
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  name: string = '';
  selectedFont: string = 'Arial';
  selectedSize: number = 22;
  alignment: string = 'left';
}
