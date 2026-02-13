import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-checkbox',
  imports: [CheckboxModule, FormsModule],
  templateUrl: './checkbox.html',
})
export default class Checkbox {
  checked = true;

  checkedIndeterminate = null;

  checkedInvalid = true;
}
