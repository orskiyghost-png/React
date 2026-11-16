EXTERNAL INTEGRATIONS — REACT

Sections (offset:line): 1 GENERAL RULE=6 | 2 USER-PROVIDED REFERENCES=19 | 3 COMPONENT DISCOVERY=36 | 4 NPM INSTALLATION=64 | 5 AUTOMATIC ADAPTATION=83 | 6 AUTOMATIC REPLACEMENT=105 | 7 FUNCTIONALITY PRESERVATION=144 | 8 DEPENDENCY MANAGEMENT=163 | 9 SECURITY=172 | 10 VALIDATION=181 | 11 FINAL REPORT=194 | 12 AUTONOMOUS EXECUTION=207


1. GENERAL RULE

The AI agent is authorized to autonomously discover, inspect, install, adapt and integrate external React components and npm packages when requested by the user.

Approved sources include:

* npm.
* ReactBits.
* Official GitHub repositories.
* Official component registries.
* Official documentation.
* User-provided source code.

2. USER-PROVIDED REFERENCES

The user may provide:

* npm package names.
* npm URLs.
* ReactBits URLs.
* GitHub repository links.
* Documentation links.
* Component names.
* Screenshots.
* Source code.

The agent must inspect the provided source and determine the correct installation method.

Do not assume every component is installed using npm install.

3. COMPONENT DISCOVERY

For ReactBits:

https://reactbits.dev/

The agent must:

1. Find the requested component.
2. Open its official documentation.
3. Inspect installation instructions.
4. Check TypeScript and CSS variants.
5. Identify dependencies.
6. Check compatibility with the project.
7. Retrieve the component using its official installation method.

Preferred methods include:

* Official shadcn-compatible registry.
* Official jsrepo integration.
* npm installation when the component is distributed as an npm package.

Example:

npx shadcn@latest add @react-bits/SplitText-TS-CSS

Use the actual component registry identifier from its documentation.

4. NPM INSTALLATION

Before installation:

* Inspect package.json.
* Identify the existing package manager.
* Check React compatibility.
* Check TypeScript compatibility.
* Check dependencies.
* Check package maintenance.
* Check licensing.
* Check security risks.

Install only necessary dependencies.

Do not upgrade unrelated packages.

Do not replace existing libraries without a reason.

5. AUTOMATIC ADAPTATION

Every external component must be adapted to the project.

Mandatory adaptations:

* Brand colors.
* Existing fonts.
* Typography.
* Backgrounds.
* Borders.
* Outlines.
* Spacing.
* Responsive behavior.
* Hover states.
* Focus states.
* Animation behavior.

Use centralized design tokens.

Do not leave the original library’s default styling when it conflicts with the project identity.

6. AUTOMATIC REPLACEMENT

The agent must be able to replace existing components with user-provided components.

Examples:

USER:
“Replace every button with this ReactBits button.”

AGENT:

* Finds all existing button implementations.
* Identifies variants and functionality.
* Installs the new component.
* Adapts it to the design system.
* Preserves click handlers and navigation.
* Replaces all applicable buttons.
* Checks every affected page.

USER:
“Replace only the Hero button.”

AGENT:

* Finds the Hero button.
* Replaces only that instance.
* Preserves its behavior.
* Leaves other buttons untouched.

USER:
“Replace all project cards with this component.”

AGENT:

* Finds all applicable project cards.
* Preserves their content and functionality.
* Adapts the replacement component.
* Updates all requested instances.

7. FUNCTIONALITY PRESERVATION

Never remove existing functionality during visual replacement.

Preserve:

* onClick handlers.
* Navigation.
* Links.
* Form submission.
* Loading states.
* Disabled states.
* Accessibility.
* Responsive behavior.

Do not blindly replace source code.

Inspect the component before modifying it.

8. DEPENDENCY MANAGEMENT

* Use the existing package manager.
* Update the lockfile.
* Avoid duplicate packages.
* Avoid unnecessary dependencies.
* Remove unused dependencies only after verifying they are no longer needed.
* Preserve existing package versions unless an update is necessary.

9. SECURITY

* Use official sources.
* Inspect unfamiliar packages.
* Avoid suspicious install scripts.
* Never expose secrets.
* Never execute unknown downloaded scripts blindly.
* Stop if significant security or licensing concerns are identified.

10. VALIDATION

After integration:

1. Run TypeScript checks.
2. Run npm run build.
3. Fix integration errors.
4. Verify imports.
5. Verify styles.
6. Verify responsive behavior.
7. Verify component functionality.
8. Verify animation cleanup when applicable.

11. FINAL REPORT

Report:

* Component installed.
* Original component replaced.
* New files created.
* Existing files modified.
* Dependencies added or removed.
* Build status.

Do not deploy to production unless explicitly requested.

12. AUTONOMOUS EXECUTION

The user should only need to describe the desired result or provide the component reference.

The agent is responsible for:

* Discovery.
* Documentation research.
* Installation.
* Adaptation.
* Integration.
* Replacement.
* Testing.

Do not make the user manually download or edit files when the available tools can perform these operations.