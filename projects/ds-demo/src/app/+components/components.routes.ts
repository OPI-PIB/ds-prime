import { Routes } from '@angular/router';

export const routesComponents: Routes = [
	{ path: '', redirectTo: 'button', pathMatch: 'full' },
	{
		path: 'button',
		loadComponent: () => import('./+button/button')
	},
	{
		path: 'checkbox',
		loadComponent: () => import('./+checkbox/checkbox')
	},
	{
		path: 'datepicker',
		loadComponent: () => import('./+datepicker/datepicker')
	},
	{
		path: 'radio',
		loadComponent: () => import('./+radio/radio')
	},
	{
		path: 'textarea',
		loadComponent: () => import('./+textarea/textarea')
	},
	{
		path: 'text-field',
		loadComponent: () => import('./+text-field/text-field')
	},
	{
		path: 'toggle',
		loadComponent: () => import('./+toggle/toggle')
	}
];
