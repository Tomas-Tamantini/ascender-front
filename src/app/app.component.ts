import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  clientName = "TTBurger"
  reportData = [
    { month: 'Julho', consumption: 5830, cip: 3.38, fioB: '-', concessionRate: 0.9926, concessionCost: 5790.06, ascenderRate: 0.83, ascenderCost: 4842.28, savings: 947.78 },
    { month: 'Agosto', consumption: 4950, cip: 3.38, fioB: '-', concessionRate: 0.9939, concessionCost: 4923.01, ascenderRate: 0.83, ascenderCost: 4111.88, savings: 811.13 },
    { month: 'Setembro', consumption: 5900, cip: 541.41, fioB: '-', concessionRate: 0.9165, concessionCost: 5948.52, ascenderRate: 0.77, ascenderCost: 5084.41, savings: 864.11 },
    { month: 'Outubro', consumption: 5210, cip: 541.41, fioB: '-', concessionRate: 0.9903, concessionCost: 5701.01, ascenderRate: 0.83, ascenderCost: 4865.71, savings: 835.3 },
    { month: 'Novembro', consumption: 5130, cip: 541.41, fioB: 196.53, concessionRate: 0.9633, concessionCost: 5679.91, ascenderRate: 0.81, ascenderCost: 4893.24, savings: 786.67 },
    { month: 'Dezembro', consumption: 5390, cip: 541.41, fioB: 193.49, concessionRate: 0.8794, concessionCost: 5474.83, ascenderRate: 0.77, ascenderCost: 4885.2, savings: 589.63 }
  ];
}

