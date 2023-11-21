import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { transaction } from './transactions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'data/';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<transaction[]> {
    return this.http.get<transaction[]>(`${this.baseUrl}transactions.json`);
  }
}
