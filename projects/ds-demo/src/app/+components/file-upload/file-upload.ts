import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
	selector: 'app-file-upload',
	imports: [FileUploadModule, ButtonModule],
	templateUrl: './file-upload.html'
})
export class FileUpload {}
