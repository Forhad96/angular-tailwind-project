import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper3',
  imports: [CommonModule],
  templateUrl: './stepper3.component.html',
  styleUrl: './stepper3.component.css'
})
export class Stepper3Component implements OnInit{
  
  
  @Input() totalSteps: number = 0;
  @Input() currentStep: number = 0;
  @Input() labels: string[] = [];

  @Output() stepChange = new EventEmitter<number>();

  steps: number[] = [];

  ngOnInit() {
    this.initializeSteps();
    this.validateCurrentStep();
  }

  ngOnChanges() {
    this.initializeSteps(); // In case totalSteps changes
    this.validateCurrentStep();
  }

  initializeSteps() {
    this.steps = Array.from({ length: this.totalSteps }, (_, i) => i + 1);
  }

  validateCurrentStep() {
    if (this.currentStep < 1) this.currentStep = 1;
    if (this.currentStep > this.totalSteps) this.currentStep = this.totalSteps;
  }

  getStepLabel(step: number): string {
    return this.labels.length >= step ? this.labels[step - 1] : '';
  }

  getCurrentStepLabel(): string {
    return this.labels[this.currentStep];
  }

  goToStep(step: number) {
    console.log(step);
    this.currentStep = step;
    this.validateCurrentStep();
    this.emitStepChange();
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.emitStepChange();
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.emitStepChange();
    }
  }

  emitStepChange() {
    this.stepChange.emit(this.currentStep);
  }
}
