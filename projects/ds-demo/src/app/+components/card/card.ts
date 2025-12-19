import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
	selector: 'app-card',
	imports: [CardModule, ButtonModule],
	templateUrl: './card.html'
})
export class Card {}
