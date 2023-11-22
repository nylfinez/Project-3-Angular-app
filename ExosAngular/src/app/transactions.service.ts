import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({  //NULL INJECTION ERROR
  providedIn: 'root'
})
export class TransactionsService {
  private baseUrl = 'data/';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}transactions.json`);
  }
  
  getTransactionsById(id: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}${id}.json`);
  }

}
