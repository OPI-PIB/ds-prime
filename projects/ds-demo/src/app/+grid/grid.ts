import { Component } from '@angular/core';

import { I18nModule } from '@core/i18n';

import { GridLabel } from './grid-label/grid-label';

@Component({
	selector: 'app-grid',
	imports: [I18nModule, GridLabel],
	templateUrl: './grid.html',
	styles: `
		@reference '@opi_pib/ds/tailwind';

		.grid-24 {
			@apply gap-4 tablet:gap-5 laptop:gap-6 grid mb-4 tablet:mb-5 laptop:mb-6;
		}

		.grid-32 {
			@apply gap-4 tablet:gap-5 laptop:gap-8 grid laptop:mx-2 mb-4 tablet:mb-5 laptop:mb-8;
		}
	`
})
export default class Grid {}
