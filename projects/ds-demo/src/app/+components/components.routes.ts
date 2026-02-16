import { Routes } from '@angular/router';

export const routesComponents: Routes = [
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  /* Form */
  {
    path: 'checkbox',
    loadComponent: () => import('./+checkbox/checkbox'),
  },
  {
    path: 'radio',
    loadComponent: () => import('./+radio/radio'),
  },
  {
    path: 'switch',
    loadComponent: () => import('./+switch/switch'),
  },
  /* Button */
  {
    path: 'button',
    loadComponent: () => import('./+button/button'),
  },
  {
    path: 'fab',
    loadComponent: () => import('./+fab/fab'),
  },
  /* Panel */
  {
    path: 'separator',
    loadComponent: () => import('./+separator/separator'),
  },
  /* Misc */
  {
    path: 'badge',
    loadComponent: () => import('./+badge/badge'),
  },
  /* TODO */
  {
    path: 'datepicker',
    loadComponent: () => import('./+datepicker/datepicker'),
  },
  {
    path: 'textarea',
    loadComponent: () => import('./+textarea/textarea'),
  },
  {
    path: 'text-field',
    loadComponent: () => import('./+text-field/text-field'),
  },
];
