import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import pl from '@angular/common/locales/pl';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';

import { DsPrime } from '../../../../src/index';

import { routes } from './app.routes';

registerLocaleData(pl);

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideRouter(routes),
		provideHttpClient(),
		provideTranslateService({
			loader: provideTranslateHttpLoader({
				prefix: './i18n/',
				suffix: '.json'
			})
		}),
		providePrimeNG({
			theme: {
				preset: DsPrime,
				options: {
					prefix: 'p',
					darkModeSelector: 'system',
					cssLayer: {
						name: 'primeng',
						order: 'tw, primeng, ds'
					}
				}
			},
			ripple: false,
			pt: {}
		})
	]
};
