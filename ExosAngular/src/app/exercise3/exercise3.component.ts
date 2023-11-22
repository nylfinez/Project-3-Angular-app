import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsService } from '../transactions.service';
import { Transaction } from '../transaction';

@Component({ //FAIL
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
      <tr *ngFor="let transaction of transactions">
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
export class Exercise3Component implements OnInit{
 transactions: Transaction[] = [];

 constructor(private transactionService: TransactionsService) {}

 ngOnInit(): void {
   this.transactionService.getTransactions().subscribe( (data) => {
    this.transactions = data;
  });
 }
}
