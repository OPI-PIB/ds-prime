import { Component } from '@angular/core';

import { I18nModule } from '@core/i18n';

import { Color } from './color/color';

@Component({
  selector: 'app-current-colors',
  imports: [Color, I18nModule],
  templateUrl: './current-colors.html',
  styleUrl: './current-colors.css',
})
export default class CurrentColors {}
