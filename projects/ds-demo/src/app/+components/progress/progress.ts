import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SliderModule } from 'primeng/slider';

@Component({
	selector: 'app-progress',
	imports: [FormsModule, ProgressBarModule, ProgressSpinnerModule, SliderModule],
	templateUrl: './progress.html'
})
export class Progress {
	value = new FormControl<number>(45);
}
