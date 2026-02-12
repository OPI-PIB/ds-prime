import { Routes } from '@angular/router';

import { routesColors } from './+colors/colors.routes';
import { routesComponents } from './+components/components.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'colors', pathMatch: 'full' },
  {
    path: 'colors',
    loadComponent: () => import('./+colors/colors'),
    children: routesColors,
  },
  {
    path: 'components',
    loadComponent: () => import('./+components/components'),
    children: routesComponents,
  },
  {
    path: 'grid',
    loadComponent: () => import('./+grid/grid'),
  },
  {
    path: 'icons',
    loadComponent: () => import('./+icons/icons'),
  },
  {
    path: 'typography',
    loadComponent: () => import('./+typography/typography'),
  },
];
