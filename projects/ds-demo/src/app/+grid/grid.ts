import { Component } from '@angular/core';

import { I18nModule } from '@core/i18n';

import { GridLabel } from './grid-label/grid-label';

@Component({
  selector: 'app-grid',
  imports: [I18nModule, GridLabel],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export default class Grid {}
