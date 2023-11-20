import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="wrapper">
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
      
        <label>Result: {{ result }}</label>
      </div>
      <div class="history">
        <h2>History:</h2>
        <ul>
          <li *ngFor="let entry of history; let i = index">
            <p id="time">{{ entry.time }}</p>
            <p>{{ entry.operation }}</p>
            <p id="result">{{ entry.result }}</p>
            <button (click)="clearEntry(i)">Del</button>
          </li>
        </ul>
      </div>
    </div>
    <hr>
  `,
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {
  number1: number = 0;
  number2: number = 0;
  operation: string = '+';
  result: number = 0;
  history: Array<{time: string, operation: string, result: number}> = []; //Array for objects with 3 attributes

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
  
    const currentTime = new Date().toLocaleTimeString() + ': ';
    const operationString = `${this.number1} ${this.operation} ${this.number2} =`;
    const historyEntry = { time: currentTime, operation: operationString, result: this.result}
    this.history.push(historyEntry);
  }
  clearEntry(index: number) {
    this.history.splice(index, 1); //delete only 1 item
  }
}
