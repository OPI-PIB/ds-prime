import { definePreset } from '@primeuix/styled';
import Aura from '@primeuix/themes/aura';

export const DsPrime = definePreset(Aura, {
	name: 'ds-prime',
	css: `
		.p-fileupload-advanced,
		.p-paginator {
			--p-icon-size: 12px;
		}
		.p-autocomplete,
		.p-breadcrumb,
		.p-select,
		.p-accordionheader {
			--p-icon-size: 10px;
		}
		.p-button {
			--link-text-decoration: none;
		}
		.p-datepicker {
			--ds-icon-vertical-align: baseline;
		}
	`,
	primitive: {
		neutral: {
			50: 'var(--color-neutral-50)',
			100: 'var(--color-neutral-100)',
			200: 'var(--color-neutral-200)',
			300: 'var(--color-neutral-300)',
			400: 'var(--color-neutral-400)',
			500: 'var(--color-neutral-500)',
			600: 'var(--color-neutral-600)',
			700: 'var(--color-neutral-700)',
			800: 'var(--color-neutral-800)',
			900: 'var(--color-neutral-900)',
			950: 'var(--color-neutral-950)'
		},
		green: {
			50: 'var(--color-success-50)',
			100: 'var(--color-success-100)',
			200: 'var(--color-success-200)',
			300: 'var(--color-success-300)',
			400: 'var(--color-success-400)',
			500: 'var(--color-success-500)',
			600: 'var(--color-success-600)',
			700: 'var(--color-success-700)',
			800: 'var(--color-success-800)',
			900: 'var(--color-success-900)',
			950: 'var(--color-success-950)'
		},
		orange: {
			50: 'var(--color-warning-50)',
			100: 'var(--color-warning-100)',
			200: 'var(--color-warning-200)',
			300: 'var(--color-warning-300)',
			400: 'var(--color-warning-400)',
			500: 'var(--color-warning-500)',
			600: 'var(--color-warning-600)',
			700: 'var(--color-warning-700)',
			800: 'var(--color-warning-800)',
			900: 'var(--color-warning-900)',
			950: 'var(--color-warning-950)'
		},
		red: {
			50: 'var(--color-error-50)',
			100: 'var(--color-error-100)',
			200: 'var(--color-error-200)',
			300: 'var(--color-error-300)',
			400: 'var(--color-error-400)',
			500: 'var(--color-error-500)',
			600: 'var(--color-error-600)',
			700: 'var(--color-error-700)',
			800: 'var(--color-error-800)',
			900: 'var(--color-error-900)',
			950: 'var(--color-error-950)'
		},
		sky: {
			50: 'var(--color-info-50)',
			100: 'var(--color-info-100)',
			200: 'var(--color-info-200)',
			300: 'var(--color-info-300)',
			400: 'var(--color-info-400)',
			500: 'var(--color-info-500)',
			600: 'var(--color-info-600)',
			700: 'var(--color-info-700)',
			800: 'var(--color-info-800)',
			900: 'var(--color-info-900)',
			950: 'var(--color-info-950)'
		},
		blue: {
			50: 'var(--color-info-50)',
			100: 'var(--color-info-100)',
			200: 'var(--color-info-200)',
			300: 'var(--color-info-300)',
			400: 'var(--color-info-400)',
			500: 'var(--color-info-500)',
			600: 'var(--color-info-600)',
			700: 'var(--color-info-700)',
			800: 'var(--color-info-800)',
			900: 'var(--color-info-900)',
			950: 'var(--color-info-950)'
		},
		purple: {
			50: 'var(--color-help-50)',
			100: 'var(--color-help-100)',
			200: 'var(--color-help-200)',
			300: 'var(--color-help-300)',
			400: 'var(--color-help-400)',
			500: 'var(--color-help-500)',
			600: 'var(--color-help-600)',
			700: 'var(--color-help-700)',
			800: 'var(--color-help-800)',
			900: 'var(--color-help-900)',
			950: 'var(--color-help-950)'
		},
		borderRadius: {
			none: '0',
			xs: '0',
			sm: '0',
			md: '0',
			lg: '0',
			xl: '0'
		}
	},
	semantic: {
		primary: {
			50: 'var(--color-primary-50)',
			100: 'var(--color-primary-100)',
			200: 'var(--color-primary-200)',
			300: 'var(--color-primary-300)',
			400: 'var(--color-primary-400)',
			500: 'var(--color-primary-500)',
			600: 'var(--color-primary-600)',
			700: 'var(--color-primary-700)',
			800: 'var(--color-primary-800)',
			900: 'var(--color-primary-900)',
			950: 'var(--color-primary-950)'
		},
		colorScheme: {
			light: {
				surface: {
					50: 'var(--color-neutral-50)',
					100: 'var(--color-neutral-100)',
					200: 'var(--color-neutral-200)',
					300: 'var(--color-neutral-300)',
					400: 'var(--color-neutral-400)',
					500: 'var(--color-neutral-500)',
					600: 'var(--color-neutral-600)',
					700: 'var(--color-neutral-700)',
					800: 'var(--color-neutral-800)',
					900: 'var(--color-neutral-900)',
					950: 'var(--color-neutral-950)'
				}
			},
			dark: {
				surface: {
					50: 'var(--color-neutral-50)',
					100: 'var(--color-neutral-100)',
					200: 'var(--color-neutral-200)',
					300: 'var(--color-neutral-300)',
					400: 'var(--color-neutral-400)',
					500: 'var(--color-neutral-500)',
					600: 'var(--color-neutral-600)',
					700: 'var(--color-neutral-700)',
					800: 'var(--color-neutral-800)',
					900: 'var(--color-neutral-900)',
					950: 'var(--color-neutral-950)'
				}
			}
		}
	}
});
