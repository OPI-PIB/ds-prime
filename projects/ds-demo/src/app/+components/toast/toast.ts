import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
	selector: 'app-toast',
	imports: [ToastModule, ButtonModule],
	templateUrl: './toast.html',
	providers: [MessageService]
})
export class Toast {
	#MessageService = inject(MessageService);

	protected showSuccess() {
		this.#MessageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
	}

	protected showInfo() {
		this.#MessageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
	}

	protected showWarn() {
		this.#MessageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
	}

	protected showError() {
		this.#MessageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
	}

	protected showContrast() {
		this.#MessageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
	}

	protected showSecondary() {
		this.#MessageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
	}
}
