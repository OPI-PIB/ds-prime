import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
	selector: 'app-badge',
	imports: [BadgeModule, ButtonModule, OverlayBadgeModule],
	templateUrl: './badge.html'
})
export class Badge {}
