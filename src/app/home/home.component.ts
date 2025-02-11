import { Component, signal } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CounterComponent } from '../counter/counter.component';
import { StepperComponent } from '../stepper/stepper.component';
import { Step } from '../stepper/stepper.model';
import { Stepper2Component } from '../stepper2/stepper2.component';
import { Stepper3Component } from "../stepper3/stepper3.component";

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    CounterComponent,
    StepperComponent,
    Stepper2Component,
    Stepper3Component
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  bannerTitleHome = signal(
    'Welcome to Angular Tailwind Project title comes from Parent'
  );

  // stepper
  steps: Step[] = [
    { label: 'Step 1', component: FormComponent1 },
    { label: 'Step 2', component: FormComponent2 },
    { label: 'Step 3', component: FormComponent3 },
  ];

  currentStep = 0;

  onStepChange(index: number) {
    this.currentStep = index;
  }
 

  //step 3
  // In your parent component's TypeScript:
myCurrentStep = 1; // Initialize

handleStepChange(step: number) {
  this.myCurrentStep = step; // Update the current step
  console.log('Current Step:', this.myCurrentStep);
  // Now you can load data or perform actions based on the new step
}

}





















@Component({
  selector: 'app-form-1',
  template: '<p>this is form component 1!</p>',
})
export class FormComponent1 {}
@Component({
  selector: 'app-form-2',
  template: '<p>this is form component 2!</p>',
})
export class FormComponent2 {}
@Component({
  selector: 'app-form-3',
  template: '<p>this is form component 3!</p>',
})
export class FormComponent3 {}
