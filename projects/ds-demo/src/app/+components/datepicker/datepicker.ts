import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageModule } from 'primeng/message';

@Component({
	selector: 'app-datepicker',
	imports: [DatePickerModule, MessageModule],
	templateUrl: './datepicker.html'
})
export default class Datepicker {}
