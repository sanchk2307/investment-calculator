import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserForm } from './user-input/user-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentResultsService } from './investment-results/investment-results.service';
import { Results } from './results.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  results?: Results[];
  formData?: UserForm;
  constructor(private investmentResultsService: InvestmentResultsService) {}
  onStartCalculate(formData: UserForm) {
    this.results = this.investmentResultsService.calculateInvestmentResults(
      formData.enteredInitialInvestment,
      formData.enteredAnnualInvestment,
      formData.enteredExpectedReturn,
      formData.enteredDuration
    );
    this.formData = formData;
  }
}
