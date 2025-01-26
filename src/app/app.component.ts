import { Component } from '@angular/core';
import { SpreadsheetUploadComponent } from "./spreadsheet-upload/spreadsheet-upload.component";
import { SavingsReportComponent } from './savings-report/savings-report.component';

@Component({
  selector: 'app-root',
  imports: [SpreadsheetUploadComponent, SavingsReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }

