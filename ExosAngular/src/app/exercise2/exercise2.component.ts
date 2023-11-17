import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="calculator">
      <input type="number" id="number1" [(ngModel)]="number1" />

      <select id="operation" [(ngModel)]="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <input type="number" id="number2" [(ngModel)]="number2" />
      <button (click)="calculate()">=</button>

      <h2>Result: </h2>
      <p>{{ result }}</p>
    </div>
  `,
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {
  number1: number = 0;
  number2: number = 0;
  operation: string = '+';
  result: number = 0;

  calculate() {
    switch(this.operation) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case '*':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
      default:
        this.result = 0;
    }
  }
}
