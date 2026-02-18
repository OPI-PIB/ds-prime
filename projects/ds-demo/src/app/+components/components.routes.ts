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
  {
    path: 'icon-button',
    loadComponent: () => import('./+icon-button/icon-button'),
  },
  /* Panel */
  {
    path: 'separator',
    loadComponent: () => import('./+separator/separator'),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./+tabs/tabs'),
  },
  /* Misc */
  {
    path: 'badge',
    loadComponent: () => import('./+badge/badge'),
  },
  {
    path: 'tag',
    loadComponent: () => import('./+tag/tag'),
  },
];
