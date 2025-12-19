import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { I18nModule } from '@core/i18n';

@Component({
	selector: 'app-components',
	imports: [I18nModule, RouterLink, RouterLinkActive, RouterOutlet, ButtonModule],
	templateUrl: './components.html'
})
export default class Components {}
