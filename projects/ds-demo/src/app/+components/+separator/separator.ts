import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-separator',
  imports: [DividerModule],
  templateUrl: './separator.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Separator {}
