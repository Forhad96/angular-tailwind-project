import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  private currentStepSubject = new BehaviorSubject<number>(1);
  currentStep$ = this.currentStepSubject.asObservable();
  private stepErrors: Record<number, { hasError: boolean; message?: string }> = {};

  get currentStep(): number {
    return this.currentStepSubject.value;
  }

  nextStep(totalSteps: number, onComplete?: () => void): void {
    if (this.currentStep >= totalSteps) {
      onComplete?.();
      return;
    }
    this.currentStepSubject.next(this.currentStep + 1);
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStepSubject.next(this.currentStep - 1);
    }
  }

  setStepError(step: number, hasError: boolean, message?: string): void {
    this.stepErrors[step] = { hasError, message };
  }

  getStepError(step: number): { hasError: boolean; message?: string } {
    return this.stepErrors[step] || { hasError: false };
  }
  constructor() { }
}
