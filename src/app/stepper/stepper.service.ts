import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  logStepChange(stepIndex: number) {
    console.log(`Step changed to: ${stepIndex}`);
  }
}
