import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-tooltip',
  imports: [TooltipModule, InputTextModule],
  templateUrl: './tooltip.html',
})
export default class Tooltip {}
