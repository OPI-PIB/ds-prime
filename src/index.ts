import { definePreset } from '@primeuix/styled';
import Aura from '@primeuix/themes/aura';

export const DsPrime = definePreset(Aura, {
  name: 'ds-prime',
  css: `
:root,
:host { 
	--border-width: 2px; 
}
	`,
  primitive: {
    neutral: {
      0: 'var(--color-neutral-0)',
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
      950: 'var(--color-neutral-950)',
    },
    red: {
      0: 'var(--color-neutral-0)',
      50: 'var(--color-danger-50)',
      100: 'var(--color-danger-100)',
      200: 'var(--color-danger-200)',
      300: 'var(--color-danger-300)',
      400: 'var(--color-danger-400)',
      500: 'var(--color-danger-500)',
      600: 'var(--color-danger-600)',
      700: 'var(--color-danger-700)',
      800: 'var(--color-danger-800)',
      900: 'var(--color-danger-900)',
      950: 'var(--color-danger-950)',
    },
    borderRadius: {
      none: 'var(--radius-none)',
      xs: 'var(--radius-xs)',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)',
    },
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

.p-button:not(.p-button-text):disabled { 
	border-color: var(--color-stroke-disabled);
}

.p-button:not(.p-button-outlined, .p-button-text):disabled,
.p-button.p-button-outlined.p-button-icon-only:disabled {
	background-color: var(--color-fill-primary-disabled);
}

.p-button.p-button-outlined {
	--p-button-padding-y: 10px;
	--p-button-lg-padding-y: 11px;

	border-width: var(--border-width);
}

.p-button.p-button-outlined.p-button-icon-only {
	background-color: var(--color-neutral-0);
}

.p-button.p-button-outlined:not(.p-button-icon-only) {
	--p-button-outlined-primary-hover-background: transparent;
	--p-button-outlined-primary-active-background: transparent;
	--p-button-outlined-danger-hover-background: transparent;
	--p-button-outlined-danger-active-background: transparent;
}

.p-button.p-button-outlined:not(:disabled):hover,
.p-button.p-button-outlined:not(:disabled):active {
	border-width: var(--border-width);
}

@media (width > 45rem) {
	.p-button.p-button-outlined {
		--p-button-padding-y: 8px;
	}
}

.p-button.p-button-outlined:not(:disabled):hover {
	--p-button-outlined-primary-color: var(--color-text-primary-hover);
	--p-button-outlined-danger-color: var(--color-text-danger-hover);
}

.p-button.p-button-outlined:not(:disabled):active {
	--p-button-outlined-primary-color: var(--color-text-primary-pressed);
	--p-button-outlined-danger-color: var(--color-text-danger-pressed);
}

.p-button.p-button-text:not(:disabled):hover {
	--p-button-text-primary-color: var(--color-text-primary-hover);
	--p-button-text-danger-color: var(--color-text-danger-hover);
}

.p-button.p-button-text:not(:disabled):active {
	--p-button-text-primary-color: var(--color-text-primary-pressed);
	--p-button-text-danger-color: var(--color-text-danger-pressed);
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
          fontWeight: 'var(--button-font-weight)',
        },
        borderRadius: 'var(--radius-default)',
        paddingY: 'var(--button-py)',
        paddingX: 'var(--button-px)',
        iconOnlyWidth: 'var(--button-icon-only-width)',
        lg: {
          fontSize: 'var(--button-cta-text-size)',
          paddingY: 'var(--button-cta-py)',
          paddingX: 'var(--button-cta-px)',
          iconOnlyWidth: 'var(--button-cta-icon-only-width)',
        },
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              color: 'var(--color-text-inverse)',
              hoverColor: 'var(--color-text-inverse)',
              activeColor: 'var(--color-text-inverse)',
              background: 'var(--color-fill-primary-default)',
              hoverBackground: 'var(--color-fill-primary-hover)',
              activeBackground: 'var(--color-fill-primary-pressed)',
              borderColor: 'var(--color-fill-primary-default)',
              hoverBorderColor: 'var(--color-fill-primary-hover)',
              activeBorderColor: 'var(--color-fill-primary-pressed)',
              focusRing: {
                color: 'var(--color-focus-ring)',
              },
            },
            danger: {
              color: 'var(--color-text-danger-default)',
              hoverColor: 'var(--color-text-danger-hover)',
              activeColor: 'var(--color-text-danger-pressed)',
              background: 'var(--color-fill-danger-default)',
              hoverBackground: 'var(--color-fill-danger-hover)',
              activeBackground: 'var(--color-fill-danger-pressed)',
              borderColor: 'var(--color-fill-danger-default)',
              hoverBorderColor: 'var(--color-fill-danger-hover)',
              activeBorderColor: 'var(--color-fill-danger-pressed)',
              focusRing: {
                color: 'var(--color-danger-950)',
              },
            },
          },
          outlined: {
            plain: {
              hoverBackground: 'var(--color-neutral-0)',
              activeBackground: 'var(--color-neutral-0)',
              borderColor: 'currentcolor',
              color: 'var(--color-text-primary-default)',
            },
            primary: {
              hoverBackground: 'var(--color-neutral-0)',
              activeBackground: 'var(--color-neutral-0)',
              borderColor: 'currentcolor',
              color: 'var(--color-text-primary-default)',
            },
            danger: {
              hoverBackground: 'var(--color-neutral-0)',
              activeBackground: 'var(--color-neutral-0)',
              borderColor: 'currentcolor',
              color: 'var(--color-text-danger-default)',
            },
          },
          text: {
            plain: {
              color: 'var(--color-fill-primary-default)',
              hoverBackground: 'transparent',
              activeBackground: 'transparent',
            },
            primary: {
              color: 'var(--color-fill-primary-default)',
              hoverBackground: 'transparent',
              activeBackground: 'transparent',
            },
            danger: {
              color: 'var(--color-text-danger-default)',
              hoverBackground: 'transparent',
              activeBackground: 'transparent',
            },
          },
          link: {
            color: 'var(--color-fill-primary-default)',
            hoverColor: 'var(--color-text-primary-hover)',
            activeColor: 'var(--color-text-primary-pressed)',
          },
        },
        dark: {
          root: {
            primary: {
              color: 'var(--color-text-inverse)',
              hoverColor: 'var(--color-text-inverse)',
              activeColor: 'var(--color-text-inverse)',
              background: 'var(--color-fill-primary-default)',
              hoverBackground: 'var(--color-fill-primary-hover)',
              activeBackground: 'var(--color-fill-primary-pressed)',
              borderColor: 'var(--color-fill-primary-default)',
              hoverBorderColor: 'var(--color-fill-primary-hover)',
              activeBorderColor: 'var(--color-fill-primary-pressed)',
              focusRing: {
                color: 'var(--color-focus-ring)',
              },
            },
            danger: {
              color: 'var(--color-text-danger-default)',
              hoverColor: 'var(--color-text-danger-hover)',
              activeColor: 'var(--color-text-danger-pressed)',
              background: 'var(--color-fill-danger-default)',
              hoverBackground: 'var(--color-fill-danger-hover)',
              activeBackground: 'var(--color-fill-danger-pressed)',
              borderColor: 'var(--color-fill-danger-default)',
              hoverBorderColor: 'var(--color-fill-danger-hover)',
              activeBorderColor: 'var(--color-fill-danger-pressed)',
              focusRing: {
                color: 'var(--color-danger-950)',
              },
            },
          },
          outlined: {
            plain: {
              hoverBackground: 'var(--color-neutral-0)',
              activeBackground: 'var(--color-neutral-0)',
              borderColor: 'currentcolor',
              color: 'var(--color-text-primary-default)',
            },
            primary: {
              hoverBackground: 'var(--color-neutral-0)',
              activeBackground: 'var(--color-neutral-0)',
              borderColor: 'currentcolor',
              color: 'var(--color-text-primary-default)',
            },
            danger: {
              hoverBackground: 'var(--color-neutral-0)',
              activeBackground: 'var(--color-neutral-0)',
              borderColor: 'currentcolor',
              color: 'var(--color-text-danger-default)',
            },
          },
          text: {
            plain: {
              color: 'var(--color-fill-primary-default)',
              hoverBackground: 'transparent',
              activeBackground: 'transparent',
            },
            primary: {
              color: 'var(--color-fill-primary-default)',
              hoverBackground: 'transparent',
              activeBackground: 'transparent',
            },
            danger: {
              color: 'var(--color-text-danger-default)',
              hoverBackground: 'transparent',
              activeBackground: 'transparent',
            },
          },
          link: {
            color: 'var(--color-fill-primary-default)',
            hoverColor: 'var(--color-text-primary-hover)',
            activeColor: 'var(--color-text-primary-pressed)',
          },
        },
      },
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
	margin-top: var(--checkbox-mt);
	border-width: var(--border-width);
} 

.p-checkbox.p-invalid {
	--p-checkbox-hover-border-color: var(--color-text-danger-hover);
	--p-checkbox-checked-background: var(--color-text-danger-default);
	--p-checkbox-checked-hover-background: var(--color-text-danger-hover);
	--p-checkbox-checked-hover-border-color: var(--color-text-danger-hover);
	--p-checkbox-focus-ring-color: var(--color-danger-950);
	--p-checkbox-focus-border-color: var(--color-text-danger-default);
	--p-checkbox-checked-focus-border-color: var(--color-text-danger-default);
}
			`,
      root: {
        shadow: 'none',
        borderRadius: 'var(--radius-default)',
      },
      colorScheme: {
        light: {
          root: {
            background: 'var(--color-neutral-0)',
            checkedBackground: 'var(--color-fill-primary-default)',
            checkedHoverBackground: 'var(--color-fill-primary-hover)',
            borderColor: 'var(--color-stroke-default)',
            hoverBorderColor: 'var(--color-fill-primary-hover)',
            checkedBorderColor: 'var(--color-fill-primary-default)',
            checkedHoverBorderColor: 'var(--color-fill-primary-hover)',
            invalidBorderColor: 'var(--color-text-danger-default)',
            focusBorderColor: 'var(--color-fill-primary-pressed)',
            checkedFocusBorderColor: 'var(--color-fill-primary-pressed)',
            disabledBackground: 'var(--color-fill-primary-disabled)',
            checkedDisabledBorderColor: 'var(--color-fill-primary-disabled)',
          },
          icon: {
            color: 'var(--color-text-primary)',
            disabledColor: 'var(--color-text-secondary)',
            checkedColor: 'var(--color-text-inverse)',
            checkedHoverColor: 'var(--color-text-inverse)',
          },
        },
        dark: {
          root: {
            background: 'var(--color-neutral-0)',
            checkedBackground: 'var(--color-fill-primary-default)',
            checkedHoverBackground: 'var(--color-fill-primary-hover)',
            borderColor: 'var(--color-stroke-default)',
            hoverBorderColor: 'var(--color-fill-primary-hover)',
            checkedBorderColor: 'var(--color-fill-primary-default)',
            checkedHoverBorderColor: 'var(--color-fill-primary-hover)',
            invalidBorderColor: 'var(--color-text-danger-default)',
            focusBorderColor: 'var(--color-fill-primary-pressed)',
            checkedFocusBorderColor: 'var(--color-fill-primary-pressed)',
            disabledBackground: 'var(--color-fill-primary-disabled)',
            checkedDisabledBorderColor: 'var(--color-fill-primary-disabled)',
          },
          icon: {
            color: 'var(--color-text-primary)',
            disabledColor: 'var(--color-text-secondary)',
            checkedColor: 'var(--color-text-inverse)',
            checkedHoverColor: 'var(--color-text-inverse)',
          },
        },
      },
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

.p-radiobutton-input {
	height: 200%;
	margin: -10px;
	width: 200%;
}

.p-radiobutton-box {
	margin-top: var(--radiobutton-mt);
	border-width: var(--border-width);
}

.p-radiobutton.p-invalid {
	--p-radiobutton-hover-border-color: var(--color-text-danger-hover);
	--p-radiobutton-checked-hover-border-color: var(--color-text-danger-hover);
	--p-radiobutton-checked-focus-border-color: var(--color-text-danger-default);
	--p-radiobutton-icon-checked-color: var(--color-text-danger-default);
	--p-radiobutton-icon-checked-hover-color: var(--color-text-danger-hover);
	--p-radiobutton-focus-ring-color: var(--color-danger-950);
}
			`,
      icon: {
        checkedColor: 'var(--color-text-primary-default)',
        checkedHoverColor: 'var(--color-text-primary-hover)',
        disabledColor: 'var(--color-text-secondary)',
      },
      root: {
        shadow: 'none',
        background: 'var(--color-neutral-0)',
        borderColor: 'var(--color-neutral-950)',
        hoverBorderColor: 'var(--color-fill-primary-hover)',
        focusBorderColor: 'var(--color-fill-primary-pressed)',
        checkedBackground: 'var(--color-neutral-0)',
        checkedHoverBackground: 'var(--color-neutral-0)',
        checkedBorderColor: 'var(--color-fill-primary-default)',
        checkedHoverBorderColor: 'var(--color-fill-primary-hover)',
        checkedFocusBorderColor: 'var(--color-fill-primary-pressed)',
        invalidBorderColor: 'var(--color-text-danger-default)',
        disabledBackground: 'var(--color-fill-primary-disabled)',
        checkedDisabledBorderColor: 'var(--color-fill-primary-disabled)',
      },
    },
    toggleswitch: {
      css: `
:root,
:host {
	--p-toggleswitch-width: 54px;
	--p-toggleswitch-height: 32px;
	--p-toggleswitch-handle-size: 24px;
}

@media (width > 45rem) {
	:root,
	:host {
		--p-toggleswitch-height: 30px;
		--p-toggleswitch-handle-size: 22px;
	}
}
	

.p-toggleswitch.p-disabled {
	--p-toggleswitch-border-color: var(--color-text-primary-disabled);
	--p-toggleswitch-checked-border-color: var(--color-text-primary-disabled);
	--p-toggleswitch-handle-checked-color: var(--color-text-inverse);
}

.p-toggleswitch.p-invalid {
	--p-toggleswitch-focus-ring-color: var(--color-danger-950);
	--p-toggleswitch-checked-background: var(--color-text-danger-default);
	--p-toggleswitch-handle-background: var(--color-text-danger-default);
}
			`,
      root: {
        borderWidth: 'var(--border-width)',
      },
      colorScheme: {
        light: {
          handle: {
            color: 'var(--color-text-inverse)',
            hoverColor: 'var(--color-text-inverse)',
            checkedColor: 'var(--color-text-secondary)',
            checkedHoverColor: 'var(--color-text-secondary)',
            background: 'var(--color-text-secondary)',
            hoverBackground: 'var(--color-text-secondary)',
            checkedBackground: 'var(--color-neutral-0)',
            checkedHoverBackground: 'var(--color-neutral-0)',
            disabledBackground: 'var(--color-text-secondary)',
          },
          root: {
            borderColor: 'var(--color-stroke-default)',
            hoverBorderColor: 'var(--color-fill-primary-hover)',
            invalidBorderColor: 'var(--color-text-danger-default)',
            checkedBorderColor: 'var(--color-fill-primary-default)',
            checkedHoverBorderColor: 'var(--color-fill-primary-hover)',
            background: 'var(--color-neutral-0)',
            hoverBackground: 'var(--color-neutral-0)',
            checkedBackground: 'var(--color-fill-primary-default)',
            checkedHoverBackground: 'var(--color-fill-primary-hover)',
            disabledBackground: 'var(--color-fill-primary-disabled)',
          },
        },
        dark: {
          handle: {
            color: 'var(--color-text-inverse)',
            hoverColor: 'var(--color-text-inverse)',
            checkedColor: 'var(--color-text-secondary)',
            checkedHoverColor: 'var(--color-text-secondary)',
            background: 'var(--color-text-secondary)',
            hoverBackground: 'var(--color-text-secondary)',
            checkedBackground: 'var(--color-neutral-0)',
            checkedHoverBackground: 'var(--color-neutral-0)',
            disabledBackground: 'var(--color-text-secondary)',
          },
          root: {
            borderColor: 'var(--color-stroke-default)',
            hoverBorderColor: 'var(--color-fill-primary-hover)',
            invalidBorderColor: 'var(--color-text-danger-default)',
            checkedBorderColor: 'var(--color-fill-primary-default)',
            checkedHoverBorderColor: 'var(--color-fill-primary-hover)',
            background: 'var(--color-neutral-0)',
            hoverBackground: 'var(--color-neutral-0)',
            checkedBackground: 'var(--color-fill-primary-default)',
            checkedHoverBackground: 'var(--color-fill-primary-hover)',
            disabledBackground: 'var(--color-fill-primary-disabled)',
          },
        },
      },
    },
    inputtext: {
      css: `
:root,
:host {
	--p-form-field-padding-y: 10px;
	--p-form-field-padding-x: 10px;
}

@media (width > 45rem) {
	:root,
	:host {
		--p-form-field-padding-y: 8px;
		--p-form-field-padding-x: 10px; 
	}
}

.p-inputtext {
	border-width: var(--button-border-width);
}

.p-inputtext:disabled { 
	--p-inputtext-border-color: var(--disabled-border);
}
			`,
      root: {
        shadow: 'none',
        color: 'var(--color-neutral-950)',
        borderColor: 'var(--color-neutral-950)',
        hoverBorderColor: 'var(--color-primary-600)',
        focusBorderColor: 'var(--color-primary-800)',
        placeholderColor: 'var(--color-neutral-500)',
        disabledBackground: 'var(--disabled-bg)',
        disabledColor: 'var(--disabled-text)',
        invalidBorderColor: 'var(--invalid-text)',
        invalidPlaceholderColor: 'var(--color-neutral-500)',
      },
      colorScheme: {
        light: {
          root: {
            background: 'var(--color-white)',
          },
        },
        dark: {
          root: {
            background: 'var(--color-neutral-50)',
          },
        },
      },
    },
    inputnumber: {
      css: `
.p-inputnumber-stacked .p-inputnumber-button-group { 
	inset-block-start: 2px;
	inset-inline-end: 2px;
	height: calc(100% - 4px); 
}
`,
    },
    message: {
      css: `
:root,
:host {
	--p-message-error-simple-color: var(--invalid-text);
}
`,
      icon: {
        sm: {
          size: '20px',
        },
      },
    },
  },
  semantic: {
    primary: {
      0: 'var(--color-neutral-0)',
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
      950: 'var(--color-primary-950)',
    },
    focusRing: {
      color: 'var(--color-focus-ring)',
      width: '2px',
      offset: '2px',
    },
    formField: {
      borderRadius: 'var(--radius-default)',
    },
    transitionDuration: '0',
    disabledOpacity: '1',
    colorScheme: {
      light: {
        surface: {
          0: 'var(--color-neutral-0)',
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
          950: 'var(--color-neutral-950)',
        },
      },
      dark: {
        surface: {
          0: 'var(--color-neutral-0)',
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
          950: 'var(--color-neutral-950)',
        },
      },
    },
  },
});
