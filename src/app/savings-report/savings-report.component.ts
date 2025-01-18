import { Component, inject, OnInit, input, AfterViewInit } from '@angular/core';
import { BrNumberPipe } from '../shared/br-number.pipe';
import { CommonModule } from '@angular/common';
import { SavingsService } from '../savings/savings.service';
import { Savings } from '../savings/savings.model';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-savings-report',
  imports: [BrNumberPipe, CommonModule],
  templateUrl: './savings-report.component.html',
  styleUrl: './savings-report.component.css'
})
export class SavingsReportComponent implements OnInit, AfterViewInit {
  savingsService = inject(SavingsService);
  clientName = input<string>("");
  reportData: Savings[] = [];

  ngOnInit() {
    this.reportData = this.savingsService.savings(this.clientName());
  }

  public totalSavings() {
    return this.reportData.reduce((acc, curr) => acc + curr.savings, 0);
  }

  ngAfterViewInit() {
    const months = this.reportData.map(data => data.month);
    const consumption = this.reportData.map(data => data.consumption);
    const savings = this.reportData.map(data => data.savings);

    new Chart('consumoChart', {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Consumo (kWh)',
            data: consumption,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            yAxisID: 'y'
          },
          {
            label: 'Economia (R$)',
            data: savings,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Consumo (kWh)'
            }
          },
          y1: {
            beginAtZero: true,
            type: 'linear',
            position: 'right',
            grid: {
              drawOnChartArea: false
            },
            title: {
              display: true,
              text: 'Economia (R$)'
            }
          }
        }
      }
    });
  }
}