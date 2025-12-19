import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
	selector: 'app-avatar',
	imports: [AvatarModule, AvatarGroupModule, OverlayBadgeModule],
	templateUrl: './avatar.html'
})
export class Avatar {}
