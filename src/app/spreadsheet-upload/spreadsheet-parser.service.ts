import { inject, Injectable, ɵɵsetComponentScope } from '@angular/core';
import { Savings } from '../savings/savings.model';
import { SavingsService } from '../savings/savings.service';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetParserService {
  private readonly savingsService = inject(SavingsService);

  private parseRow(row: Array<string | number | null>): Savings {
    return {
      month: row[0] as string,
      consumption: row[2] as number,
      cip: row[4] as number,
      fioB: row[3] as number | null,
      concessionRate: row[5] as number,
      concessionCost: row[6] as number,
      ascenderRate: row[7] as number,
      ascenderCost: row[8] as number,
      savings: row[9] as number
    }
  }

  public parseSheet(data: Array<unknown>[]): void {
    if (data.length < 3 || data[0].length !== 1) {
      return
    }
    const clientName: string = data[0][0] as string;
    const dataRows: Array<Array<string | number | null>> = data.slice(2) as Array<Array<string | number | null>>;
    const savings: Savings[] = dataRows.map(row => this.parseRow(row));
    this.savingsService.storeSavings(clientName, savings);
  }
}
