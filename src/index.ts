import { definePreset } from '@primeuix/styled';
import Aura from '@primeuix/themes/aura';

export const DsPrime = definePreset(Aura, {
	name: 'ds-prime',
	css: `
:root,
:host {
	--radius-default: var(--radius-xs);
	--disabled-text: var(--color-neutral-800);
	--disabled-bg: var(--color-neutral-200);
	--disabled-border: var(--color-neutral-200);
	--invalid-text: light-dark(var(--color-error-800), var(--color-error-500));
	--invalid-bg: light-dark(var(--color-error-800), var(--color-error-500));
	--invalid-border: light-dark(var(--color-error-800), var(--color-error-500));
	--invalid-bg-hover: light-dark(var(--color-error-900), var(--color-error-400));
	--invalid-bg-active: light-dark(var(--color-error-950), var(--color-error-300));
	--invalid-border-hover: light-dark(var(--color-error-900), var(--color-error-400));
	--invalid-border-active: light-dark(var(--color-error-950), var(--color-error-300));
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
			css: `
:root,
:host {
	--button-font-weight: var(--font-weight-regular);
	--button-text-size: var(--text-b2--size);
	--button-py: 11px;
	--button-px: 11px;
	--button-cta-text-size: var(--text-b1--size);
	--button-cta-py: 12px;
	--button-cta-px: 15px;
	--button-border-radius: var(--radius-default);
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

.p-button:disabled { 
	color: var(--disabled-text);
}

.p-button:not(.p-button-text):disabled { 
	border-color: var(--disabled-border);
}

.p-button:not(.p-button-outlined, .p-button-text):disabled,
.p-button.p-button-outlined.p-button-icon-only:disabled {
	background-color: var(--disabled-bg);
}

.p-button.p-button-outlined {
	--p-button-padding-y: 10px;
	--p-button-lg-padding-y: 11px;

	border-width: var(--button-border-width);
}

.p-button.p-button-outlined.p-button-icon-only {
	background-color: light-dark(var(--color-white), var(--color-neutral-50));
}

.p-button.p-button-outlined:not(.p-button-icon-only) {
	--p-button-outlined-primary-hover-background: transparent;
	--p-button-outlined-primary-active-background: transparent;
	--p-button-outlined-danger-hover-background: transparent;
	--p-button-outlined-danger-active-background: transparent;
}

.p-button.p-button-outlined:not(:disabled):hover,
.p-button.p-button-outlined:not(:disabled):active {
	border-width: var(--button-border-width);
}

@media (width > 45rem) {
	.p-button.p-button-outlined {
		--p-button-padding-y: 8px;
	}
}

.p-button.p-button-outlined:not(:disabled):hover {
	--p-button-outlined-primary-color: light-dark(var(--color-primary-600), var(--color-primary-400));
	--p-button-outlined-danger-color: light-dark(var(--color-error-700), var(--color-error-400));
}

.p-button.p-button-outlined:not(:disabled):active {
	--p-button-outlined-primary-color: light-dark(var(--color-primary-800), var(--color-primary-600));
	--p-button-outlined-danger-color: light-dark(var(--color-error-900), var(--color-error-600));
}

.p-button.p-button-text:not(:disabled):hover {
	--p-button-text-primary-color: light-dark(var(--color-primary-600), var(--color-primary-400));
	--p-button-text-danger-color: light-dark(var(--color-error-700), var(--color-error-400));
}

.p-button.p-button-text:not(:disabled):active {
	--p-button-text-primary-color: light-dark(var(--color-primary-800), var(--color-primary-600));
	--p-button-text-danger-color: light-dark(var(--color-error-900), var(--color-error-600));
}

.p-button-text,
.p-button-link {
	--p-button-padding-x: 0;
	--p-button-padding-y: 0;
}

.p-button-link:not(:disabled) .p-button-label,
.p-button-text:not(:disabled):hover {
	text-decoration-line: var(--link-text-decoration);
	text-decoration-skip-ink: auto;
	text-decoration-style: solid;
	text-underline-offset: 25%;
	text-underline-position: from-font;
}

a:not(.p-button) {
	color: var(--p-button-link-color);
	outline-color: var(--color-focus-ring);
	outline-offset: 4px;
	outline-width: 2px;
}

a:not(.p-button):hover {
	color: var(--p-button-link-hover-color);
}

a:not(.p-button):active {
	color: var(--p-button-link-active-color);
}
`,
			root: {
				label: {
					fontWeight: 'var(--button-font-weight)'
				},
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
							color: 'var(--color-white)',
							hoverColor: 'var(--color-white)',
							activeColor: 'var(--color-white)',
							background: 'var(--color-primary-700)',
							hoverBackground: 'var(--color-primary-600)',
							activeBackground: 'var(--color-primary-800)',
							borderColor: 'var(--color-primary-700)',
							hoverBorderColor: 'var(--color-primary-600)',
							activeBorderColor: 'var(--color-primary-800)',
							focusRing: {
								color: 'var(--color-focus-ring)'
							}
						},
						danger: {
							color: 'var(--color-error-800)',
							hoverColor: 'var(--color-error-900)',
							activeColor: 'var(--color-error-950)',
							background: 'var(--color-error-200)',
							hoverBackground: 'var(--color-error-300)',
							activeBackground: 'var(--color-error-400)',
							borderColor: 'var(--color-error-200)',
							hoverBorderColor: 'var(--color-error-300)',
							activeBorderColor: 'var(--color-error-400)',
							focusRing: {
								color: 'var(--color-error-950)'
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
						}
					},
					text: {
						plain: {
							color: 'var(--color-primary-700)',
							hoverBackground: 'transparent',
							activeBackground: 'transparent'
						},
						primary: {
							color: 'var(--color-primary-700)',
							hoverBackground: 'transparent',
							activeBackground: 'transparent'
						},
						danger: {
							color: 'var(--color-error-800)',
							hoverBackground: 'transparent',
							activeBackground: 'transparent'
						}
					},
					link: {
						color: 'var(--color-primary-700)',
						hoverColor: 'var(--color-primary-600)',
						activeColor: 'var(--color-primary-800)'
					}
				},
				dark: {
					root: {
						primary: {
							color: 'var(--color-white)',
							hoverColor: 'var(--color-white)',
							activeColor: 'var(--color-white)',
							background: 'var(--color-primary-700)',
							hoverBackground: 'var(--color-primary-600)',
							activeBackground: 'var(--color-primary-800)',
							borderColor: 'var(--color-primary-700)',
							hoverBorderColor: 'var(--color-primary-600)',
							activeBorderColor: 'var(--color-primary-800)',
							focusRing: {
								color: 'var(--color-focus-ring)'
							}
						},
						danger: {
							color: 'var(--color-error-800)',
							hoverColor: 'var(--color-error-900)',
							activeColor: 'var(--color-error-950)',
							background: 'var(--color-error-200)',
							hoverBackground: 'var(--color-error-300)',
							activeBackground: 'var(--color-error-400)',
							borderColor: 'var(--color-error-200)',
							hoverBorderColor: 'var(--color-error-300)',
							activeBorderColor: 'var(--color-error-400)',
							focusRing: {
								color: 'var(--color-error-950)'
							}
						}
					},
					outlined: {
						plain: {
							hoverBackground: 'var(--color-neutral-50)',
							activeBackground: 'var(--color-neutral-50)',
							borderColor: 'currentcolor',
							color: 'var(--color-primary-500)'
						},
						primary: {
							hoverBackground: 'var(--color-neutral-50)',
							activeBackground: 'var(--color-neutral-50)',
							borderColor: 'currentcolor',
							color: 'var(--color-primary-500)'
						},
						danger: {
							hoverBackground: 'var(--color-neutral-50)',
							activeBackground: 'var(--color-neutral-50)',
							borderColor: 'currentcolor',
							color: 'var(--color-error-500)'
						}
					},
					text: {
						plain: {
							color: 'var(--color-primary-500)',
							hoverBackground: 'transparent',
							activeBackground: 'transparent'
						},
						primary: {
							color: 'var(--color-primary-500)',
							hoverBackground: 'transparent',
							activeBackground: 'transparent'
						},
						danger: {
							color: 'var(--color-error-500)',
							hoverBackground: 'transparent',
							activeBackground: 'transparent'
						}
					},
					link: {
						color: 'var(--color-primary-500)',
						hoverColor: 'var(--color-primary-400)',
						activeColor: 'var(--color-primary-600)'
					}
				}
			}
		},
		checkbox: {
			css: `
:root,
:host {
	--checkbox-mt: 0;
	--p-checkbox-width: 1.5rem;
	--p-checkbox-height: 1.5rem;
}

@media (width > 45rem) {
	:root,
	:host {
		--checkbox-mt: 2px;
		--p-checkbox-width: 1.25rem;
		--p-checkbox-height: 1.25rem;
	}
}

.p-checkbox-input {
	height: 200%;
	margin: -10px;
	width: 200%;
}

.p-checkbox-box {
	--p-checkbox-icon-disabled-color: var(--disabled-text);
	--p-checkbox-disabled-background: var(--disabled-bg);

	margin-top: var(--checkbox-mt);
	border-width: 2px;
}

.p-checkbox.p-invalid ~ .label,
.p-checkbox.p-invalid ~ label {
	color: var(--invalid-text);
}

.p-checkbox.p-invalid {
	--p-checkbox-focus-ring-color: var(--invalid-border-active);
	--p-checkbox-focus-border-color: var(--invalid-border);
	--p-checkbox-checked-focus-border-color: var(--invalid-border);
	--p-checkbox-checked-background: var(--invalid-bg);
	--p-checkbox-hover-border-color: var(--invalid-border-hover);
	--p-checkbox-checked-hover-background: var(--invalid-bg-hover);
	--p-checkbox-checked-hover-border-color: var(--invalid-border-hover);
	
}
			`,
			root: {
				shadow: 'none',
				borderRadius: 'var(--radius-default)',
				background: 'var(--color-neutral-50)',
				borderColor: 'var(--color-neutral-950)',
				hoverBorderColor: 'var(--color-primary-600)',
				focusBorderColor: 'var(--color-primary-800)',
				invalidBorderColor: 'var(--invalid-border)',
				disabledBackground: 'var(--disabled-bg)',
				checkedDisabledBorderColor: 'var(--disabled-border)',
				checkedBackground: 'var(--color-primary-700)',
				checkedBorderColor: 'var(--color-primary-700)',
				checkedHoverBorderColor: 'var(--color-primary-600)',
				checkedFocusBorderColor: 'var(--color-primary-800)',
				checkedHoverBackground: 'var(--color-primary-600)'
			}
		},
		radiobutton: {
			css: `
:root,
:host {
	--radiobutton-mt: 0;
	--p-radiobutton-width: 1.5rem;
	--p-radiobutton-height: 1.5rem;
	--p-radiobutton-icon-size: 0.75rem;
}

@media (width > 45rem) {
	:root,
	:host {
		--radiobutton-mt: 2px;
		--p-radiobutton-width: 1.25rem;
		--p-radiobutton-height: 1.25rem;
		--p-radiobutton-icon-size: 0.625rem;
	}
}

.p-radiobutton-box {
	border-width: 2px;
	margin-top: var(--radiobutton-mt);
}

.p-radiobutton.p-invalid ~ .label,
.p-radiobutton.p-invalid ~ label {
	color: var(--invalid-text);
}

.p-radiobutton.p-invalid {
	--p-radiobutton-focus-ring-color: var(--invalid-border-active);
	--p-radiobutton-hover-border-color: var(--invalid-border-hover);
	--p-radiobutton-checked-focus-border-color: var(--invalid-border-hover);
	--p-radiobutton-icon-checked-color: var(--invalid-border);
	--p-radiobutton-checked-hover-border-color: var(--invalid-border-hover);
	--p-radiobutton-icon-checked-hover-color: var(--invalid-border-hover);
}
			`,
			icon: {
				size: '10px',
				checkedColor: 'var(--color-primary-700)',
				checkedHoverColor: 'var(--color-primary-600)',
				disabledColor: 'var(--disabled-border)'
			},
			root: {
				shadow: 'none',
				background: 'var(--color-neutral-50)',
				borderColor: 'var(--color-neutral-950)',
				hoverBorderColor: 'var(--color-primary-600)',
				focusBorderColor: 'var(--color-primary-800)',
				invalidBorderColor: 'var(--invalid-border)',
				disabledBackground: 'var(--color-neutral-50)',
				checkedDisabledBorderColor: 'var(--disabled-border)',
				checkedBackground: 'var(--color-neutral-50)',
				checkedBorderColor: 'var(--color-primary-700)',
				checkedHoverBorderColor: 'var(--color-primary-600)',
				checkedFocusBorderColor: 'var(--color-primary-800)',
				checkedHoverBackground: 'var(--color-neutral-50)'
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
		formField: {
			borderRadius: 'var(--radius-default)'
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
