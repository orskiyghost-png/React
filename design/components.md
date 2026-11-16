COMPONENT SYSTEM — REACT

Sections (offset:line): 1 GENERAL RULES=6 | 2 BUTTONS=17 | 3 LINKS=52 | 4 CARDS=59 | 5 NAVIGATION=73 | 6 ICONS=85 | 7 COMPONENT REPLACEMENT=93 | 8 COMPONENT QUALITY=110


1. GENERAL RULES

All reusable UI components must follow:

* design/tokens.md
* This document.

Prefer shared reusable components over duplicated implementations.

Before creating a component, inspect whether an equivalent component already exists.

2. BUTTONS

Buttons must use a shared reusable component.

Supported variants:

Primary

* Scarlet red background.
* White text.
* Scarlet red border.

Secondary

* White background.
* Scarlet red text.
* Scarlet red border.

Minimal

* Transparent background.
* Scarlet red text.
* Minimal interaction indicator.

Every button must support:

* Default.
* Hover.
* Active.
* Focus.
* Disabled.
* Loading when necessary.

Preserve all existing event handlers and navigation behavior.

3. LINKS

* Use scarlet red.
* Keep interactions consistent.
* Preserve accessible focus states.
* Avoid excessive decorative effects.

4. CARDS

Use editorial layouts instead of generic card templates.

Project cards should prioritize:

* Large imagery.
* Project title.
* Supporting information.
* Clear interaction.
* Consistent spacing.

Avoid unnecessary shadows and rounded corners.

5. NAVIGATION

Navigation must be minimal, responsive and accessible.

Support:

* Desktop navigation.
* Mobile navigation.
* Keyboard interaction.
* Clear active states.
* Smooth but lightweight transitions.

6. ICONS

Use a consistent icon family.

All icons must follow the brand palette.

Avoid mixing unrelated icon styles.

7. COMPONENT REPLACEMENT

When the user provides a new component:

1. Find the existing component.
2. Identify all its instances.
3. Inspect its functionality.
4. Retrieve or install the replacement.
5. Adapt its appearance.
6. Preserve existing functionality.
7. Replace only the requested instances.
8. Check every affected page.

If the user requests replacing all buttons, update all applicable buttons throughout the application.

Do not leave old implementations unnecessarily.

8. COMPONENT QUALITY

Every component must:

* Be responsive.
* Be accessible.
* Use design tokens.
* Avoid unnecessary dependencies.
* Avoid unnecessary re-renders.
* Preserve existing application behavior.

External components must never look visually disconnected from the rest of the website.