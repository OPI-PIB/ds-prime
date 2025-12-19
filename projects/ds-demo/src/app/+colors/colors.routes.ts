import { Routes } from '@angular/router';

export const routesColors: Routes = [
	{ path: '', redirectTo: 'current-colors', pathMatch: 'full' },
	{
		path: 'current-colors',
		loadComponent: () => import('./+current-colors/current-colors')
	},
	{
		path: 'new-colors',
		loadComponent: () => import('./+new-colors/new-colors')
	}
];
