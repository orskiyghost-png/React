DESIGN TOKENS — REACT

Version: 1.0

This file defines the visual identity of the entire React project.

All components must follow these tokens.

1. COLOR PALETTE

Primary background: WHITE.

Primary brand color: BRIGHT SCARLET RED.

:root {
  /* Brand */
  --color-primary: #EF3347;
  --color-background: #FFFFFF;
  /* Text */
  --color-text: #EF3347;
  --color-text-secondary: #EF3347;
  --color-text-muted: #EF3347;
  /* Surfaces */
  --color-surface: #FFFFFF;
  --color-surface-hover: #FFF5F5;
  /* Borders */
  --color-border: #EF3347;
  --color-border-subtle: #EF3347;
  /* Interactive */
  --color-accent: #EF3347;
  --color-button: #EF3347;
  --color-button-text: #FFFFFF;
  /* States */
  --color-focus: #EF3347;
  --color-selection: #EF3347;
  --color-selection-text: #FFFFFF;
}

Color rules

* White is the primary background.
* Bright scarlet red is the primary text color.
* Bright scarlet red is used for borders, outlines and icons.
* Buttons use scarlet red and white.
* Avoid unrelated colors.
* Do not introduce random gradients.
* Photographs and videos retain their natural colors.
* External components must be recolored to match the brand.

Never change the brand palette without explicit user permission.

2. TYPOGRAPHY

Use the font already present in the project.

Before modifying typography, inspect existing font files and CSS declarations.

Never replace the established font without permission.

:root {
  --font-primary: /* existing project font */;
  --text-display: clamp(3rem, 9vw, 8rem);
  --text-h1: clamp(2.5rem, 7vw, 6rem);
  --text-h2: clamp(2rem, 5vw, 4rem);
  --text-h3: clamp(1.5rem, 3vw, 2.5rem);
  --text-body: clamp(1rem, 1.5vw, 1.35rem);
  --text-caption: 0.875rem;
}

Typography principles:

* Large editorial headings.
* Expressive but readable typography.
* Consistent font weights.
* Responsive font sizes.
* Controlled line heights.
* No arbitrary font substitutions.

3. SPACING

:root {
  --container-width: 1440px;
  --page-gutter: clamp(20px, 4vw, 64px);
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
}

Use consistent spacing throughout the application.

4. LAYOUT

Visual direction:

* Editorial.
* Experimental.
* Minimal.
* Asymmetric.
* Typography-focused.

Use:

* Generous whitespace.
* Large imagery.
* Thin red dividers.
* Strong visual hierarchy.
* Intentional asymmetry.
* Clean navigation.

Avoid generic SaaS layouts and unnecessary rounded cards.

5. RESPONSIVE TYPOGRAPHY

Use CSS clamp() and responsive layouts.

Mobile must preserve the same visual identity while simplifying complex compositions.

Prevent:

* Horizontal overflow.
* Clipped headings.
* Overlapping elements.
* Unreadable text.

6. DESIGN CONSISTENCY

All components, including externally installed components, must use these tokens.

Do not introduce local arbitrary colors or fonts.

If a component has its own design system, adapt it to these tokens rather than changing the project identity.