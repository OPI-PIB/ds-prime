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
      0: 'var(--color-white)',
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
      0: 'var(--color-white)',
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
	--button-cta-text-size: 1.125rem;
  --button-cta-size: 56px;
  --button-small-size: 36px;
  --button-padding-x: 22px;
  --button-padding-y: 0;
  --button-sm-padding-x: 4px;
  --button-sm-padding-y: 0;
  --button-lg-padding-x: 28px;
  --button-lg-padding-y: 0;
  --button-fab-padding-x: 10px;
  --button-fab-lg-padding-x: 16px;
}

.p-button:not(.p-button-text, .p-button-link) {
  min-height: var(--button-size);
}

.p-button-sm:not(.p-button-text, .p-button-link) {
  min-height: var(--button-small-size);
}

.p-button-lg:not(.p-button-text, .p-button-link) {
  min-height: var(--button-cta-size);
}

.p-button-icon-only {
  --p-button-padding-x: 0;
  --p-button-sm-padding-x: 0;
  --p-button-lg-padding-x: 0;
}

.p-button:is(.p-button-text, .p-button-link) {
  --p-button-icon-only-width: auto;
  --p-button-lg-icon-only-width: auto;
  --p-button-padding-x: 0;
  --p-button-sm-padding-x: 0;
  --p-button-lg-padding-x: 0;
}

@media (width > 45rem) {
	:root,
	:host { 
    --button-size: 44px;
	  --button-cta-text-size: 1.25rem;
    --button-small-size: 32px;
	}
}

.p-button.p-button-outlined {
	border-width: var(--border-width);
}

.p-button.p-button-outlined:not(:disabled):hover,
.p-button.p-button-outlined:not(:disabled):active {
	border-width: var(--border-width);
}

.p-button-link:not(:disabled) .p-button-label,
.p-button-text:not(:disabled):hover {
	text-decoration-line: var(--link-text-decoration);
	text-decoration-skip-ink: auto;
	text-decoration-style: solid;
	text-underline-offset: 25%;
	text-underline-position: from-font;
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

.p-button-fab {
  --p-button-padding-x: var(--button-fab-padding-x); 
  --p-button-lg-padding-x: var(--button-fab-lg-padding-x); 
}
			`,
      root: {
        label: {
          fontWeight: 'var(--button-font-weight)',
        },
        borderRadius: 'var(--radius-default)',
        paddingY: 'var(--button-padding-y)',
        paddingX: 'var(--button-padding-x)',
        iconOnlyWidth: 'var(--button-size)',
        sm: {
          fontSize: 'var(--button-text-size)',
          paddingY: 'var(--button-sm-padding-y)',
          paddingX: 'var(--button-sm-padding-x)',
          iconOnlyWidth: 'var(--button-small-size)',
        },
        lg: {
          fontSize: 'var(--button-cta-text-size)',
          paddingY: 'var(--button-lg-padding-y)',
          paddingX: 'var(--button-lg-padding-x)',
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
            secondary: {
              color: 'var(--color-text-inverse)',
              hoverColor: 'var(--color-text-inverse)',
              activeColor: 'var(--color-text-inverse)',
              background: 'var(--color-fill-utility-default)',
              hoverBackground: 'var(--color-fill-utility-hover)',
              activeBackground: 'var(--color-fill-utility-pressed)',
              borderColor: 'var(--color-fill-utility-default)',
              hoverBorderColor: 'var(--color-fill-utility-hover)',
              activeBorderColor: 'var(--color-fill-utility-pressed)',
              focusRing: {
                color: 'var(--color-stroke-focus)',
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
            secondary: {
              color: 'var(--color-text-secondary)',
              hoverBackground: 'transparent',
              activeBackground: 'transparent',
            },
          },
          link: {
            color: 'var(--color-text-link-default)',
            hoverColor: 'var(--color-text-link-hover)',
            activeColor: 'var(--color-text-link-pressed)',
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
            color: 'var(--color-text-link-default)',
            hoverColor: 'var(--color-text-link-hover)',
            activeColor: 'var(--color-text-link-pressed)',
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

.p-checkbox.p-checkbox-checked.p-disabled .p-checkbox-box {
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
      root: {
        shadow: 'none',
      },
      colorScheme: {
        light: {
          root: {
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
          icon: {
            checkedColor: 'var(--color-fill-accent-default)',
            checkedHoverColor: 'var(--color-fill-accent-hover)',
            disabledColor: 'var(--color-fill-accent-disabled)',
          },
        },
        dark: {
          root: {
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
          icon: {
            checkedColor: 'var(--color-fill-accent-default)',
            checkedHoverColor: 'var(--color-fill-accent-hover)',
            disabledColor: 'var(--color-fill-accent-disabled)',
          },
        },
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

.p-toggleswitch:not(.p-toggleswitch-checked) .p-toggleswitch-handle:empty {
  transform: scale(.7)
}

.p-toggleswitch.p-disabled {
	--p-toggleswitch-border-color: var(--color-stroke-disabled);
	--p-toggleswitch-checked-border-color: var(--color-stroke-disabled);
	--p-toggleswitch-handle-checked-color: var(--color-text-inverse);
}

.p-toggleswitch.p-invalid {
  --p-toggleswitch-hover-border-color: var(--color-text-danger-hover);
  --p-toggleswitch-handle-hover-background: var(--color-text-danger-hover);
	--p-toggleswitch-focus-ring-color: var(--color-stroke-focus-danger);
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
            checkedColor: 'var(--color-stroke-default)',
            checkedHoverColor: 'var(--color-stroke-default)',
            background: 'var(--color-stroke-default)',
            hoverBackground: 'var(--color-stroke-default)',
            checkedBackground: 'var(--color-white)',
            checkedHoverBackground: 'var(--color-white)',
            disabledBackground: 'var(--color-fill-accent-disabled)',
          },
          root: {
            borderColor: 'var(--color-stroke-default)',
            hoverBorderColor: 'var(--color-fill-accent-hover)',
            invalidBorderColor: 'var(--color-text-danger-default)',
            checkedBorderColor: 'var(--color-fill-accent-default)',
            checkedHoverBorderColor: 'var(--color-fill-accent-hover)',
            background: 'var(--color-white)',
            hoverBackground: 'var(--color-white)',
            checkedBackground: 'var(--color-fill-accent-default)',
            checkedHoverBackground: 'var(--color-fill-accent-hover)',
            disabledBackground: 'var(--color-white)',
          },
        },
        dark: {
          handle: {
            color: 'var(--color-text-inverse)',
            hoverColor: 'var(--color-text-inverse)',
            checkedColor: 'var(--color-stroke-default)',
            checkedHoverColor: 'var(--color-stroke-default)',
            background: 'var(--color-stroke-default)',
            hoverBackground: 'var(--color-stroke-default)',
            checkedBackground: 'var(--color-white)',
            checkedHoverBackground: 'var(--color-white)',
            disabledBackground: 'var(--color-stroke-default)',
          },
          root: {
            borderColor: 'var(--color-stroke-default)',
            hoverBorderColor: 'var(--color-fill-accent-hover)',
            invalidBorderColor: 'var(--color-text-danger-default)',
            checkedBorderColor: 'var(--color-fill-accent-default)',
            checkedHoverBorderColor: 'var(--color-fill-accent-hover)',
            background: 'var(--color-white)',
            hoverBackground: 'var(--color-white)',
            checkedBackground: 'var(--color-fill-accent-default)',
            checkedHoverBackground: 'var(--color-fill-accent-hover)',
            disabledBackground: 'var(--color-fill-accent-disabled)',
          },
        },
      },
    },
    divider: {
      colorScheme: {
        light: {
          root: {
            borderColor: 'var(--color-stroke-light)',
          },
        },
        dark: {
          root: {
            borderColor: 'var(--color-stroke-light)',
          },
        },
      },
    },
    tabs: {
      css: `
.p-tablist.w-full .p-tab {
  flex-grow: 1;
  text-align: center;
}

.p-tablist-tab-list {
  gap: var(--p-tabs-tab-gap);
}

.p-tab.p-disabled {
  --p-tabs-tab-color: var(--color-text-disabled);
}

.p-tab-active {
  --p-tabs-tab-font-weight: var(--font-weight-semibold);
  --p-tabs-tab-border-width: 0 0 4px 0;
}
`,
      colorScheme: {
        light: {
          tablist: {
            borderWidth: '0',
          },
          tab: {
            color: 'var(--color-neutral-600)',
            hoverColor: 'var(--color-neutral-950)',
            activeColor: 'var(--color-neutral-950)',
            fontWeight: 'var(--font-weight-regular)',
            activeBorderColor: 'var(--color-stroke-active)',
            borderWidth: '0 0 2px 0',
            gap: '3px',
            margin: '0',
            padding: '.5rem 1.125rem',
            borderColor: 'var(--color-stroke-default)',
            hoverBorderColor: 'var(--color-stroke-default)',
          },
        },
      },
    },
    badge: {
      root: {
        borderRadius: 'var(--radius-full)',
      },
      colorScheme: {
        light: {
          primary: {
            background: 'var(--color-text-danger-default)',
            color: 'var(--color-fill-danger-default)',
          },
          contrast: {
            background: 'var(--color-fill-danger-default)',
            color: 'var(--color-text-danger-default)',
          },
        },
        dark: {
          primary: {
            background: 'var(--color-text-danger-default)',
            color: 'var(--color-fill-danger-default)',
          },
          contrast: {
            background: 'var(--color-fill-danger-default)',
            color: 'var(--color-text-danger-default)',
          },
        },
      },
    },
    tag: {
      css: `
.p-tag-orange {
  --p-tag-primary-color: var(--color-orange-text);
  --p-tag-primary-background: var(--color-orange-bg);
}
.p-tag-lime {
  --p-tag-primary-color: var(--color-lime-text);
  --p-tag-primary-background: var(--color-lime-bg);
}
.p-tag-teal {
  --p-tag-primary-color: var(--color-teal-text);
  --p-tag-primary-background: var(--color-teal-bg);
}
.p-tag-cyan {
  --p-tag-primary-color: var(--color-cyan-text);
  --p-tag-primary-background: var(--color-cyan-bg);
}
.p-tag-indigo {
  --p-tag-primary-color: var(--color-indigo-text);
  --p-tag-primary-background: var(--color-indigo-bg);
}
.p-tag-violet {
  --p-tag-primary-color: var(--color-violet-text);
  --p-tag-primary-background: var(--color-violet-bg);
}
.p-tag-purple {
  --p-tag-primary-color: var(--color-purple-text);
  --p-tag-primary-background: var(--color-purple-bg);
}
.p-tag-fuchsia {
  --p-tag-primary-color: var(--color-fuchsia-text);
  --p-tag-primary-background: var(--color-fuchsia-bg);
}
.p-tag-pink {
  --p-tag-primary-color: var(--color-pink-text);
  --p-tag-primary-background: var(--color-pink-bg);
}
      `,
      root: {
        fontSize: '0.875rem',
        fontWeight: 'var(--font-weight-regular)',
      },
      icon: {
        size: '1.2em',
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
      0: 'var(--color-white)',
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
          0: 'var(--color-white)',
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
          0: 'var(--color-white)',
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
