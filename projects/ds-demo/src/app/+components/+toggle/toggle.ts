import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
	selector: 'app-toggle',
	imports: [FormsModule, NgClass, ToggleButtonModule, ToggleSwitchModule],
	templateUrl: './toggle.html'
})
export default class Toggle {
	checked = new FormControl<boolean>(true);
}
