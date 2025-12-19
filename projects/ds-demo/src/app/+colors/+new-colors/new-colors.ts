import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { Color } from './color/color';
import { applyPaletteToDocument, generateTailwindPalette, PaletteResult, SHADES } from './generator';

@Component({
	selector: 'app-new-colors',
	imports: [Color, ButtonModule, InputTextModule, FormsModule],
	templateUrl: './new-colors.html',
	styles: ``
})
export default class NewColors {
	protected color = '';

	protected shades = SHADES;

	protected palette = signal<PaletteResult | null>(null);

	protected error = signal<string | null>(null);

	protected generateColors() {
		try {
			this.error.set(null);
			const palette = generateTailwindPalette(this.color);
			this.palette.set(palette);
			applyPaletteToDocument(palette);
		} catch (e) {
			if (e instanceof Error) {
				this.error.set(e.message);
			}
		}
	}
}
