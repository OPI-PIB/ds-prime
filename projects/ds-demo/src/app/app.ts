import pl from '@angular/common/locales/pl';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { I18nService } from '@core/i18n';

import { Menu } from './menu/menu';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, Menu],
	templateUrl: './app.html'
})
export class App {
	#I18nService = inject(I18nService);

	constructor() {
		this.#I18nService.forRoot([pl]);
	}
}
