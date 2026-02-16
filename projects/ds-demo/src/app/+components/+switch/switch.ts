import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-switch',
  imports: [NgClass, FormsModule, ToggleSwitchModule],
  templateUrl: './switch.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Switch {
  protected checked = new FormControl(false);
}
