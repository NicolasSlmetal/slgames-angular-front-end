import { Component } from '@angular/core';
import { DataInput } from '../../components/data-input/data-input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'slgames-login',
  standalone: true,
  imports: [
    DataInput,
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  get isValid() {
    return this.isValidEmail() && this.isValidPassword();
  }

  public updateLoginButtonState() {
    
    const button = document.querySelector('.login-button') as HTMLButtonElement;
    if (this.isValidForm()) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  isValidForm(): boolean {
    return this.isValidEmail() && this.isValidPassword();
  }

  isValidPassword(): boolean {
    const value = this.password;
    return value.length >= 8 && /\d/.test(value) && /[a-zA-Z]/.test(value) && /[^A-Za-z0-9]/.test(value);
  }

  isValidEmail(): boolean {
    const value = this.email;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const data = {
      email: this.email,
      password: this.password
    }

    console.log({data});
  }

}
