import { Component, inject, signal } from '@angular/core';
import { SpreadsheetUploadComponent } from "./spreadsheet-upload/spreadsheet-upload.component";
import { SavingsReportComponent } from './savings-report/savings-report.component';
import { SavingsService } from './savings/savings.service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [SpreadsheetUploadComponent, SavingsReportComponent, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly savingsService = inject(SavingsService);
  clientIds = signal<string[]>([]);
  selectedClientId?: string;

  public onSpreadsheetLoaded(): void {
    this.clientIds.set(this.savingsService.getClientIds());
  }
}

