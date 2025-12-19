import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { TailwindScale } from '../generator';

@Component({
	selector: 'app-color',
	imports: [NgClass],
	templateUrl: './color.html',
	styleUrl: './color.scss'
})
export class Color {
	scale = input<TailwindScale>();

	selected = input<boolean>();

	className = input.required<string>();

	color = input.required<string>();
}
