import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-button',
	imports: [ButtonModule],
	templateUrl: './button.html'
})
export default class Button {
	protected loading = signal(false);

	protected load() {
		this.loading.set(true);

		setTimeout(() => {
			this.loading.set(false);
		}, 5000);
	}
}
