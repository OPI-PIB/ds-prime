import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
	selector: 'app-select',
	imports: [FormsModule, SelectModule],
	templateUrl: './select.html'
})
export class Select {
	protected cities = [
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' }
	];

	protected basicSelected = new FormControl<string | null>(null);

	protected filterSelected = new FormControl<string | null>(null);
}
