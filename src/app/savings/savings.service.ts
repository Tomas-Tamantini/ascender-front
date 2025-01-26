import { Injectable } from '@angular/core';
import { Savings } from './savings.model';

@Injectable({
  providedIn: 'root'
})
export class SavingsService {

  private readonly storedSavings = new Map<string, Savings[]>();

  public storeSavings(clientName: string, savings: Savings[]) {
    this.storedSavings.set(clientName, savings);
  }

  public savings(clientName: string): Savings[] {
    return this.storedSavings.get(clientName) || [];
  }
}
