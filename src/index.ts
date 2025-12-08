import { definePreset } from '@primeuix/styled';
import Aura from '@primeuix/themes/aura';

export const DsPrime = definePreset(Aura, {
	name: 'ds-prime',
	css: `
/* Button */
:root,
:host {
	--button-text-size: var(--text-b2--size);
	--button-py: 11px;
	--button-px: 11px;
	--button-cta-text-size: var(--text-b1--size);
	--button-cta-py: 12px;
	--button-cta-px: 15px;
	--button-border-radius: var(--radius-sm);
	--button-border-width: 2px;
	--button-icon-only-width: 48px;
	--button-cta-icon-only-width: 56px;
}

@media (width > 45rem) {
	:root,
	:host {
		--button-py: 9px;
		--button-px: 10px;
		--button-icon-only-width: 44px;
	}
}

/* Button - Disabled */
.p-button:disabled,
.p-button.p-button-text:disabled {
	background-color: var(--p-surface-100);
	border-color: var(--p-surface-100);
	color: var(--p-surface-600);
}

/* Button - Outlined */
.p-button.p-button-outlined {
	--p-button-padding-y: 10px;
	--p-button-lg-padding-y: 11px;

	border-width: var(--button-border-width);
}

.p-button.p-button-outlined:disabled {
	background-color: var(--color-white);
	border-color: var(--p-surface-100);
	color: var(--p-surface-600);
}

.p-button.p-button-outlined:not(:disabled):hover,
.p-button.p-button-outlined:not(:disabled):active {
	border-width: var(--button-border-width);
}

@media (prefers-color-scheme: light) {
	.p-button.p-button-outlined:not(:disabled):hover {
		--p-button-outlined-primary-color: var(--primary-bg-hover);
		--p-button-outlined-danger-color: var(--error-text-hover);
		--p-button-outlined-warn-color: var(--warning-text-hover);
		--p-button-outlined-success-color: var(--success-text-hover);
		--p-button-outlined-info-color: var(--info-text-hover);
	}

	.p-button.p-button-outlined:not(:disabled):active {
		--p-button-outlined-primary-color: var(--primary-bg-active);
		--p-button-outlined-danger-color: var(--error-text-active);
		--p-button-outlined-warn-color: var(--warning-text-active);
		--p-button-outlined-success-color: var(--success-text-active);
		--p-button-outlined-info-color: var(--info-text-active);
	}
}

@media (width > 45rem) {
	.p-button.p-button-outlined {
		--p-button-padding-y: 8px;
	}
}

/* Link */
a:not(.p-button) {
	color: var(--p-button-link-color);
	outline-color: currentcolor;
	outline-offset: 4px;
	outline-width: 2px;
}

a:not(.p-button):hover {
	color: var(--p-button-link-hover-color);
}

a:not(.p-button):active {
	color: var(--p-button-link-active-color);
}

.p-button-text,
.p-button-link {
	--p-button-focus-ring-offset: -8px;
}

.p-button-link:not(:disabled) .p-button-label,
.p-button-text:hover {
	text-decoration-line: var(--link-text-decoration);
	text-decoration-skip-ink: auto;
	text-decoration-style: solid;
	text-underline-offset: 25%;
	text-underline-position: from-font;
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
		borderRadius: {
			none: 'var(--radius-none)',
			xs: 'var(--radius-xs)',
			sm: 'var(--radius-sm)',
			md: 'var(--radius-md)',
			lg: 'var(--radius-lg)',
			xl: 'var(--radius-xl)'
		}
	},
	components: {
		button: {
			root: {
				borderRadius: 'var(--button-border-radius)',
				paddingY: 'var(--button-py)',
				paddingX: 'var(--button-px)',
				iconOnlyWidth: 'var(--button-icon-only-width)',
				lg: {
					fontSize: 'var(--button-cta-text-size)',
					paddingY: 'var(--button-cta-py)',
					paddingX: 'var(--button-cta-px)',
					iconOnlyWidth: 'var(--button-cta-icon-only-width)'
				}
			},
			colorScheme: {
				light: {
					root: {
						primary: {
							color: 'var(--primary-text)',
							hoverColor: 'var(--primary-text-hover)',
							activeColor: 'var(--primary-text-active)',
							background: 'var(--primary-bg)',
							hoverBackground: 'var(--primary-bg-hover)',
							activeBackground: 'var(--primary-bg-active)',
							borderColor: 'var(--primary-border)',
							hoverBorderColor: 'var(--primary-border-hover)',
							activeBorderColor: 'var(--primary-border-active)',
							focusRing: {
								color: 'var(--primary-bg)'
							}
						},
						danger: {
							color: 'var(--error-text)',
							hoverColor: 'var(--error-text-hover)',
							activeColor: 'var(--error-text-active)',
							background: 'var(--error-bg)',
							hoverBackground: 'var(--error-bg-hover)',
							activeBackground: 'var(--error-bg-active)',
							borderColor: 'var(--error-border)',
							hoverBorderColor: 'var(--error-border-hover)',
							activeBorderColor: 'var(--error-border-active)',
							focusRing: {
								color: 'var(--error-text)'
							}
						},
						warn: {
							color: 'var(--warning-text)',
							hoverColor: 'var(--warning-text-hover)',
							activeColor: 'var(--warning-text-active)',
							background: 'var(--warning-bg)',
							hoverBackground: 'var(--warning-bg-hover)',
							activeBackground: 'var(--warning-bg-active)',
							borderColor: 'var(--warning-border)',
							hoverBorderColor: 'var(--warning-border-hover)',
							activeBorderColor: 'var(--warning-border-active)',
							focusRing: {
								color: 'var(--warning-text)'
							}
						},
						success: {
							color: 'var(--success-text)',
							hoverColor: 'var(--success-text-hover)',
							activeColor: 'var(--success-text-active)',
							background: 'var(--success-bg)',
							hoverBackground: 'var(--success-bg-hover)',
							activeBackground: 'var(--success-bg-active)',
							borderColor: 'var(--success-border)',
							hoverBorderColor: 'var(--success-border-hover)',
							activeBorderColor: 'var(--success-border-active)',
							focusRing: {
								color: 'var(--success-text)'
							}
						},
						info: {
							color: 'var(--info-text)',
							hoverColor: 'var(--info-text-hover)',
							activeColor: 'var(--info-text-active)',
							background: 'var(--info-bg)',
							hoverBackground: 'var(--info-bg-hover)',
							activeBackground: 'var(--info-bg-active)',
							borderColor: 'var(--info-border)',
							hoverBorderColor: 'var(--info-border-hover)',
							activeBorderColor: 'var(--info-border-active)',
							focusRing: {
								color: 'var(--info-text)'
							}
						}
					},
					outlined: {
						plain: {
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)',
							borderColor: 'currentcolor',
							color: 'var(--color-primary-700)'
						},
						primary: {
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)',
							borderColor: 'currentcolor',
							color: 'var(--color-primary-700)'
						},
						danger: {
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)',
							borderColor: 'currentcolor',
							color: 'var(--color-error-800)'
						},
						warn: {
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)',
							borderColor: 'currentcolor',
							color: 'var(--color-warning-800)'
						},
						success: {
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)',
							borderColor: 'currentcolor',
							color: 'var(--color-success-800)'
						},
						info: {
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)',
							borderColor: 'currentcolor',
							color: 'var(--color-info-800)'
						}
					},
					text: {
						plain: {
							color: 'var(--color-primary-700)',
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)'
						},
						primary: {
							color: 'var(--color-primary-700)',
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)'
						},
						danger: {
							color: 'var(--color-error-800)',
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)'
						},
						warn: {
							color: 'var(--color-warning-800)',
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)'
						},
						success: {
							color: 'var(--color-success-800)',
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)'
						},
						info: {
							color: 'var(--color-info-800)',
							hoverBackground: 'var(--color-white)',
							activeBackground: 'var(--color-white)'
						}
					},
					link: {
						color: 'var(--primary-bg)',
						hoverColor: 'var(--primary-bg-hover)',
						activeColor: 'var(--primary-bg-active)'
					}
				}
			}
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
		focusRing: {
			color: 'var(--color-focus-ring)',
			width: '2px',
			offset: '2px'
		},
		transitionDuration: '0',
		disabledOpacity: '1',
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
