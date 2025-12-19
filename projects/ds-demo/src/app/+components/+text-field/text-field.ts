import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
	selector: 'app-text-field',
	imports: [ButtonModule, IconFieldModule, InputIconModule, InputNumberModule, InputTextModule, MessageModule],
	templateUrl: './text-field.html'
})
export default class TextField {}
