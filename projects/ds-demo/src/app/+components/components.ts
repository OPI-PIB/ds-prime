import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { I18nModule } from '@core/i18n';
import { Sidebar } from '@core/sidebar/sidebar';

@Component({
  selector: 'app-components',
  imports: [I18nModule, RouterLink, RouterLinkActive, RouterOutlet, Sidebar],
  templateUrl: './components.html',
  styleUrl: './components.css',
})
export default class Components {}
