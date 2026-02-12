import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { I18nModule } from '@core/i18n';
import { Sidebar } from '@core/sidebar/sidebar';

@Component({
  selector: 'app-colors',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, I18nModule, Sidebar],
  templateUrl: './colors.html',
  styleUrl: './colors.css',
})
export default class Colors {}
