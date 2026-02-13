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
	--button-text-size: 1rem;
  --button-size: 48px; 
	--button-p: 12px; 
	--button-cta-text-size: 1.125rem;
  --button-cta-size: 56px;
	--button-cta-p: 16px;
}

.p-button.p-button-outlined {
	border-width: var(--border-width);
}

.p-button.p-button-outlined:not(:disabled):hover,
.p-button.p-button-outlined:not(:disabled):active {
	border-width: var(--border-width);
}

.p-button:not(.p-button-text, .p-button-link) {
  min-height: var(--button-size);
}

.p-button-lg:not(.p-button-text, .p-button-link) {
  min-height: var(--button-cta-size);
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
	outline-color: var(--color-stroke-focus);
	outline-offset: 4px;
	outline-width: 2px;
}

@media (width > 45rem) {
	:root,
	:host {
		--button-p: 10px; 
    --button-size: 44px; 
	  --button-cta-text-size: 1.25rem;
	} 
}

.p-button.p-button-outlined:not(:disabled):hover {
	--p-button-outlined-primary-color: var(--color-text-accent-hover);
	--p-button-outlined-danger-color: var(--color-text-danger-hover);
}

.p-button.p-button-outlined:not(:disabled):active {
	--p-button-outlined-primary-color: var(--color-text-accent-pressed);
	--p-button-outlined-danger-color: var(--color-text-danger-pressed);
}

.p-button.p-button-text:not(:disabled):hover {
	--p-button-text-primary-color: var(--color-text-accent-hover);
	--p-button-text-danger-color: var(--color-text-danger-hover);
}

.p-button.p-button-text:not(:disabled):active {
	--p-button-text-primary-color: var(--color-text-accent-pressed);
	--p-button-text-danger-color: var(--color-text-danger-pressed);
}

.p-button:not(.p-button-text, .p-button-outlined):disabled {
  color: var(--color-text-accent-inverse);
  border-color: var(--color-text-accent-disabled);
  background: var(--color-text-accent-disabled);
}

.p-button:is(.p-button-text, .p-button-outlined):disabled {
  color: var(--color-text-accent-disabled);
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
        paddingY: 'var(--button-p)',
        paddingX: 'var(--button-p)',
        iconOnlyWidth: 'var(--button-size)',
        lg: {
          fontSize: 'var(--button-cta-text-size)',
          paddingY: 'var(--button-cta-p)',
          paddingX: 'var(--button-cta-p)',
          iconOnlyWidth: 'var(--button-cta-size)',
        },
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              color: 'var(--color-text-inverse)',
              hoverColor: 'var(--color-text-inverse)',
              activeColor: 'var(--color-text-inverse)',
              background: 'var(--color-text-accent-default)',
              hoverBackground: 'var(--color-text-accent-hover)',
              activeBackground: 'var(--color-text-accent-pressed)',
              borderColor: 'var(--color-text-accent-default)',
              hoverBorderColor: 'var(--color-text-accent-hover)',
              activeBorderColor: 'var(--color-text-accent-pressed)',
              focusRing: {
                color: 'var(--color-stroke-focus)',
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
                color: 'var(--color-stroke-focus-danger)',
              },
            },
          },
          outlined: {
            plain: {
              color: 'var(--color-text-accent-default)',
              hoverBackground: 'var(--color-white)',
              activeBackground: 'var(--color-white)',
              borderColor: 'currentcolor',
            },
            primary: {
              color: 'var(--color-text-accent-default)',
              hoverBackground: 'var(--color-white)',
              activeBackground: 'var(--color-white)',
              borderColor: 'currentcolor',
            },
            danger: {
              color: 'var(--color-text-danger-default)',
              hoverBackground: 'var(--color-white)',
              activeBackground: 'var(--color-white)',
              borderColor: 'currentcolor',
            },
          },
          text: {
            plain: {
              color: 'var(--color-text-accent-default)',
              hoverBackground: 'transparent',
              activeBackground: 'transparent',
            },
            primary: {
              color: 'var(--color-text-accent-default)',
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
            color: 'var(--color-text-accent-default)',
            hoverColor: 'var(--color-text-accent-hover)',
            activeColor: 'var(--color-text-accent-pressed)',
          },
        },
        dark: {
          root: {
            primary: {
              color: 'var(--color-text-inverse)',
              hoverColor: 'var(--color-text-inverse)',
              activeColor: 'var(--color-text-inverse)',
              background: 'var(--color-text-accent-default)',
              hoverBackground: 'var(--color-text-accent-hover)',
              activeBackground: 'var(--color-text-accent-pressed)',
              borderColor: 'var(--color-text-accent-default)',
              hoverBorderColor: 'var(--color-text-accent-hover)',
              activeBorderColor: 'var(--color-text-accent-pressed)',
              focusRing: {
                color: 'var(--color-stroke-focus)',
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
                color: 'var(--color-stroke-focus-danger)',
              },
            },
          },
          outlined: {
            plain: {
              color: 'var(--color-text-accent-default)',
              hoverBackground: 'var(--color-white)',
              activeBackground: 'var(--color-white)',
              borderColor: 'currentcolor',
            },
            primary: {
              color: 'var(--color-text-accent-default)',
              hoverBackground: 'var(--color-white)',
              activeBackground: 'var(--color-white)',
              borderColor: 'currentcolor',
            },
            danger: {
              color: 'var(--color-text-danger-default)',
              hoverBackground: 'var(--color-white)',
              activeBackground: 'var(--color-white)',
              borderColor: 'currentcolor',
            },
          },
          text: {
            plain: {
              color: 'var(--color-text-accent-default)',
              hoverBackground: 'transparent',
              activeBackground: 'transparent',
            },
            primary: {
              color: 'var(--color-text-accent-default)',
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
            color: 'var(--color-text-accent-default)',
            hoverColor: 'var(--color-text-accent-hover)',
            activeColor: 'var(--color-text-accent-pressed)',
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

.p-checkbox.p-disabled .p-checkbox-box {
  --p-checkbox-disabled-background: var(--color-fill-accent-disabled);
}

.p-checkbox.p-invalid {
	--p-checkbox-hover-border-color: var(--color-text-danger-hover);
	--p-checkbox-checked-background: var(--color-text-danger-default);
	--p-checkbox-checked-hover-background: var(--color-text-danger-hover);
	--p-checkbox-checked-hover-border-color: var(--color-text-danger-hover);
	--p-checkbox-focus-ring-color: var(--color-stroke-focus-danger);
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
            background: 'var(--color-white)',
            checkedBackground: 'var(--color-fill-accent-default)',
            checkedHoverBackground: 'var(--color-fill-accent-hover)',
            borderColor: 'var(--color-stroke-default)',
            hoverBorderColor: 'var(--color-stroke-hover)',
            checkedBorderColor: 'var(--color-fill-accent-default)',
            checkedHoverBorderColor: 'var(--color-fill-accent-hover)',
            invalidBorderColor: 'var(--color-text-danger-default)',
            focusBorderColor: 'var(--color-fill-accent-pressed)',
            checkedFocusBorderColor: 'var(--color-fill-accent-pressed)',
            disabledBackground: 'var(--color-white)',
            checkedDisabledBorderColor: 'var(--color-text-accent-disabled)',
          },
          icon: {
            color: 'var(--color-stroke-default)',
            disabledColor: 'var(--color-white)',
            checkedColor: 'var(--color-white)',
            checkedHoverColor: 'var(--color-white)',
          },
        },
        dark: {
          root: {
            background: 'var(--color-white)',
            checkedBackground: 'var(--color-fill-accent-default)',
            checkedHoverBackground: 'var(--color-fill-accent-hover)',
            borderColor: 'var(--color-stroke-default)',
            hoverBorderColor: 'var(--color-stroke-hover)',
            checkedBorderColor: 'var(--color-fill-accent-default)',
            checkedHoverBorderColor: 'var(--color-fill-accent-hover)',
            invalidBorderColor: 'var(--color-text-danger-default)',
            focusBorderColor: 'var(--color-fill-accent-pressed)',
            checkedFocusBorderColor: 'var(--color-fill-accent-pressed)',
            disabledBackground: 'var(--color-white)',
            checkedDisabledBorderColor: 'var(--color-text-accent-disabled)',
          },
          icon: {
            color: 'var(--color-stroke-default)',
            disabledColor: 'var(--color-white)',
            checkedColor: 'var(--color-white)',
            checkedHoverColor: 'var(--color-white)',
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
	--p-radiobutton-focus-ring-color: var(--color-stroke-focus-danger);
  --p-radiobutton-focus-border-color: var(--color-text-danger-hover);
}
			`,
      icon: {
        checkedColor: 'var(--color-fill-accent-default)',
        checkedHoverColor: 'var(--color-fill-accent-hover)',
        disabledColor: 'var(--color-fill-accent-disabled)',
      },
      root: {
        shadow: 'none',
        background: 'var(--color-white)',
        borderColor: 'var(--color-stroke-default)',
        hoverBorderColor: 'var(--color-fill-accent-hover)',
        focusBorderColor: 'var(--color-fill-accent-default)',
        checkedBackground: 'var(--color-white)',
        checkedHoverBackground: 'var(--color-white)',
        checkedBorderColor: 'var(--color-fill-accent-default)',
        checkedHoverBorderColor: 'var(--color-fill-accent-hover)',
        checkedFocusBorderColor: 'var(--color-fill-accent-default)',
        invalidBorderColor: 'var(--color-text-danger-default)',
        disabledBackground: 'var(--color-white)',
        checkedDisabledBorderColor: 'var(--color-fill-accent-disabled)',
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
      color: 'var(--color-stroke-focus)',
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
