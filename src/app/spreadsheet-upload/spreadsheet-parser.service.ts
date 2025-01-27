import { inject, Injectable, ɵɵsetComponentScope } from '@angular/core';
import { Savings } from '../savings/savings.model';
import { SavingsService } from '../savings/savings.service';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetParserService {
  private readonly savingsService = inject(SavingsService);

  private parseRow(row: Array<string | number | null>, headerRow: string[]): Savings {
    const expectedHeaders = ['DATA', 'CONSUMO', 'CIP', 'FIO B', 'TARIFA NEO', 'NEOENERGIA', 'TARIFA USINA', 'USINA', 'ECONOMIA'];
    const indices = expectedHeaders.map(header => headerRow.indexOf(header));
    return {
      month: row[indices[0]] as string,
      consumption: row[indices[1]] as number,
      cip: row[indices[2]] as number,
      fioB: row[indices[3]] as number | null,
      concessionRate: row[indices[4]] as number,
      concessionCost: row[indices[5]] as number,
      ascenderRate: row[indices[6]] as number,
      ascenderCost: row[indices[7]] as number,
      savings: row[indices[8]] as number
    }
  }

  public parseSheet(data: Array<unknown>[]): void {
    if (data.length < 3 || data[0].length !== 1) {
      return
    }
    const clientName: string = data[0][0] as string;
    const headerRow = data[1] as string[];
    const dataRows: Array<Array<string | number | null>> = data.slice(2) as Array<Array<string | number | null>>;
    const savings: Savings[] = dataRows.map(row => this.parseRow(row, headerRow));
    this.savingsService.storeSavings(clientName, savings);
  }
}
