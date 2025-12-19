import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';

type Country = {
	name: string;
	code: string;
};

@Component({
	selector: 'app-autocomplete',
	imports: [FormsModule, AutoCompleteModule],
	templateUrl: './autocomplete.html'
})
export class Autocomplete {
	#items: Country[] = [
		{ name: 'Afghanistan', code: 'AF' },
		{ name: 'Albania', code: 'AL' },
		{ name: 'Algeria', code: 'DZ' },
		{ name: 'American Samoa', code: 'AS' },
		{ name: 'Andorra', code: 'AD' },
		{ name: 'Angola', code: 'AO' },
		{ name: 'Anguilla', code: 'AI' },
		{ name: 'Antarctica', code: 'AQ' },
		{ name: 'Antigua and Barbuda', code: 'AG' },
		{ name: 'Argentina', code: 'AR' },
		{ name: 'Armenia', code: 'AM' },
		{ name: 'Aruba', code: 'AW' },
		{ name: 'Australia', code: 'AU' },
		{ name: 'Austria', code: 'AT' },
		{ name: 'Azerbaijan', code: 'AZ' }
	];

	protected filteredCountries: Country[] = [];

	protected selectedBasic: Country | null = null;

	protected filterCountry(event: AutoCompleteCompleteEvent) {
		const filtered: Country[] = [];
		const query = event.query;

		this.#items.forEach((c) => {
			if (c.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
				filtered.push(c);
			}
		});

		this.filteredCountries = filtered;
	}
}
