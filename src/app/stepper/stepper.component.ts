import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Step } from './stepper.model';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {
  @Input() steps: Step[] = [];
  @Input() activeStep: number = 0;
  @Output() stepChange = new EventEmitter<number>();

  nextStep() {
    if (this.activeStep < this.steps.length - 1) {
      this.activeStep++;
      this.stepChange.emit(this.activeStep);
    }
  }

  prevStep() {
    if (this.activeStep > 0) {
      this.activeStep--;
      this.stepChange.emit(this.activeStep);
    }
  }

  goToStep(index: number) {
    this.activeStep = index;
    this.stepChange.emit(this.activeStep);
  }
}
