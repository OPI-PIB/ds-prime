import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
	selector: 'app-breadcrumb',
	imports: [BreadcrumbModule],
	templateUrl: './breadcrumb.html'
})
export class Breadcrumb {
	items: MenuItem[] = [
		{ label: 'Components', routerLink: '/' },
		{ label: 'Breadcrumbs', routerLink: '/' }
	];

	home: MenuItem = { icon: 'ds-icon-home', routerLink: '/' };
}
