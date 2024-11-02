import { Component, Input } from '@angular/core';
import { UserForm } from '../user-input/user-input.model';
import { InvestmentResultsService } from './investment-results.service';
import { Results } from '../results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) results!: Results[];
  @Input({ required: true }) initialInvestment!: number;
}
