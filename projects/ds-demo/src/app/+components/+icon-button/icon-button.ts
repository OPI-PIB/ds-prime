import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-icon-button',
  imports: [ButtonModule],
  templateUrl: './icon-button.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IconButton {}
