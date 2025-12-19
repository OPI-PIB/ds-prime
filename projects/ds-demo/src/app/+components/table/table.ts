import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';

import { Products } from './products';

@Component({
	selector: 'app-table',
	imports: [FormsModule, ButtonModule, TableModule, SelectButtonModule],
	templateUrl: './table.html',
	providers: [Products]
})
export class Table {
	#Products = inject(Products);

	products = signal(this.#Products.getProductsData());

	sizes = [
		{ name: 'Small', value: 'small' },
		{ name: 'Normal', value: undefined },
		{ name: 'Large', value: 'large' }
	];

	selectedSize: 'small' | 'large' | undefined = undefined;
}
