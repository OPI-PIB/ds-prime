import { Component } from '@angular/core';

import { I18nModule } from '@core/i18n';

import { Icon } from './icon/icon';

@Component({
	selector: 'app-icons',
	imports: [Icon, I18nModule],
	templateUrl: './icons.html'
})
export default class Icons {}
