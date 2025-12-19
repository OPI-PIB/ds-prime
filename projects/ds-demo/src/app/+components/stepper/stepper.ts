import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
	selector: 'app-stepper',
	imports: [StepperModule, ButtonModule],
	templateUrl: './stepper.html'
})
export class Stepper {}
