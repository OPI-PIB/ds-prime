# ds-prime

## Setup

```
import { DsPrime } from '@opi/ds-prime';

export const appConfig: ApplicationConfig = {
	providers: [
		providePrimeNG({
			theme: {
				preset: DsPrime,
				options: {
					prefix: 'p',
					darkModeSelector: 'system',
					cssLayer: {
						name: 'primeng',
						order: 'tw, primeng, ds'
					}
				}
			},
			ripple: false,
			pt: {}
		})
	]
};
```
