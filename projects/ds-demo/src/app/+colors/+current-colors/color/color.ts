import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
	selector: 'app-color',
	imports: [NgClass],
	templateUrl: './color.html'
})
export class Color {
	className = input.required<string>();

	protected variableName = computed(() => {
		return this.className().replace('bg-', '--color-');
	});
}
