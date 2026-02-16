import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-tabs',
  imports: [TabsModule],
  templateUrl: './tabs.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Tabs {}
