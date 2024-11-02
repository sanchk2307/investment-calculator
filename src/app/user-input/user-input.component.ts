import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserForm } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() submitForm = new EventEmitter<UserForm>()
  formData = {
    enteredInitialInvestment: 0,
    enteredAnnualInvestment: 0,
    enteredExpectedReturn: 0,
    enteredDuration: 0
  
  }
  onSubmit() {
    this.submitForm.emit(this.formData);
  }
}
