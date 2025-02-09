import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = signal(false); // Using Angular Signals for reactive state management

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    console.log("clicking on submit");
    if (this.loginForm.invalid) return;

    this.isLoading.set(true);
    try {
      const values = this.loginForm.value;
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading.set(false);
    }
  }

  signInWithGoogle() {
    console.log('Signing in with Google...');
    // Implement Google sign-in logic here
  }
}
