import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
	selector: 'app-divider',
	imports: [DividerModule, ButtonModule],
	templateUrl: './divider.html'
})
export class Divider {}
