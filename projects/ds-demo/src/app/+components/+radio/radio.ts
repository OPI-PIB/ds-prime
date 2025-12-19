import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
	selector: 'app-radio',
	imports: [FormsModule, RadioButtonModule],
	templateUrl: './radio.html'
})
export default class Radio {
	ingredient = new FormControl<string | null>(null);
}
