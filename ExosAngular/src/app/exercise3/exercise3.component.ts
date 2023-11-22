import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <tr>
        <th>Id</th>
        <th>Amount</th>
        <th>Balance</th>
        <th>Label</th>
        <th>Date</th>
      </tr>
      <tr>
      </tr>
    </table>
  `,
  styleUrl: './exercise3.component.css'
})
export class Exercise3Component {

}
