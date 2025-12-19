import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { map } from 'rxjs';

import { I18nModule, I18nService } from '@core/i18n';
import { TranslationLanguage } from '@core/i18n/translation-language';
import { TranslationLanguageEnum } from '@translations/translation-languages';

@Component({
	selector: 'app-menu',
	imports: [RouterLink, RouterLinkActive, ButtonModule, I18nModule],
	templateUrl: './menu.html'
})
export class Menu {
	#I18nService = inject(I18nService);

	isPl = toSignal(this.#I18nService.getCurrentLanguage$().pipe(map((x) => x.toDto() === 'pl')));

	protected setLang(lang: TranslationLanguageEnum) {
		this.#I18nService.setLanguage(TranslationLanguage.create({ lang }));
	}
}
