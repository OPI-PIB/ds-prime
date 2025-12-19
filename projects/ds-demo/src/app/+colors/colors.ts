import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { I18nModule } from '@core/i18n';

@Component({
	selector: 'app-colors',
	imports: [RouterOutlet, RouterLink, RouterLinkActive, ButtonModule, I18nModule],
	templateUrl: './colors.html'
})
export default class Colors {}
