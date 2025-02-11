import { Component } from '@angular/core';
import { Step } from './stepper2.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper2',
  imports: [CommonModule],
  templateUrl: './stepper2.component.html',
  styleUrl: './stepper2.component.css'
})
export class Stepper2Component {
  steps = [
    { label: 'Step 1', complete: true, active: false },
    { label: 'Step 2', complete: true, active:true },
    { label: 'Step 3', complete: false, active: false },
    { label: 'Step 4', complete: false, active: false },
    { label: 'Step 5', complete: false, active: false },

  ];
  activeStep = this.steps[3]
}
