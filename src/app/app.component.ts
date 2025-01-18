import { Component } from '@angular/core';
import { SavingsReportComponent } from "./savings-report/savings-report.component";

@Component({
  selector: 'app-root',
  imports: [SavingsReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }

