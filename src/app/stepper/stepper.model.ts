import { Type } from '@angular/core';

export interface Step {
  label: string;
  component: Type<any>;
}
