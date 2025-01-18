import { Component, inject, OnInit, input } from '@angular/core';
import { BrNumberPipe } from '../shared/br-number.pipe';
import { CommonModule } from '@angular/common';
import { SavingsService } from '../savings/savings.service';
import { Savings } from '../savings/savings.model';

@Component({
  selector: 'app-savings-report',
  imports: [BrNumberPipe, CommonModule],
  templateUrl: './savings-report.component.html',
  styleUrl: './savings-report.component.css'
})
export class SavingsReportComponent implements OnInit {
  savingsService = inject(SavingsService);
  clientName = input<string>("");
  reportData: Savings[] = [];

  ngOnInit() {
    this.reportData = this.savingsService.savings(this.clientName());
  }

  public totalSavings() {
    return this.reportData.reduce((acc, curr) => acc + curr.savings, 0);
  }
}
