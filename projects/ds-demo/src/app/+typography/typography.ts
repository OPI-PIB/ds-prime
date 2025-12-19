import { Component } from '@angular/core';

import { I18nModule } from '@core/i18n';

import { TextCard } from './text-card/text-card';

@Component({
	selector: 'app-typography',
	imports: [TextCard, I18nModule],
	templateUrl: './typography.html'
})
export default class Typography {
	content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	contentWithUnderline =
		'Lorem <a href="#">ipsum dolor</a> sit amet, <u>consectetur</u> adipiscing elit. Donec ut erat <ins>eu turpis feugiat</ins> suscipit a ut diam.';
}
