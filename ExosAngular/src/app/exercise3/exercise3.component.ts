import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-exercise3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table>
      <tr>
        <th>ID</th>
        <th>Amount</th>
        <th>Balance</th>
        <th>Label</th>
        <th>Date</th>
      </tr>
      <tr *ngFor="let transaction of transactionList">
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.balance }}</td>
        <td>{{ transaction.label }}</td>
        <td>{{ transaction.date }}</td>
      </tr>
    </table>
  `,
  styleUrl: './exercise3.component.css'
})
export class Exercise3Component implements OnInit {
  transactionList: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
      transactions => {
        this.transactionList = transactions;
      },
      error => {
        console.error('Error getting transactions', error);
      }
    );
  }
}
