import { Component, computed, input } from '@angular/core';

@Component({
	selector: 'app-icon',
	imports: [],
	templateUrl: './icon.html',
	styles: `
		i {
			font-size: 16px;
		}

		i:nth-child(2) {
			font-size: 20px;
		}

		i:nth-child(3) {
			font-size: 24px;
		}

		i:nth-child(4) {
			font-size: 32px;
		}
	`
})
export class Icon {
	icon = input.required<string>();

	isImage = input<boolean>(false);

	protected iconClass = computed(() => (this.isImage() ? `ds-img-${this.icon()}` : `ds-icon-${this.icon()}`));
}
