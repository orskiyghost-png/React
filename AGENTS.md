AGENT INSTRUCTIONS — REACT

Project: React
Stack: React + TypeScript + Vite

1. MAIN RULE

Before a task, identify which documents it needs. Read only those.
All documentation lives in /design/ and nowhere else.

* Never load all design documentation by default.
* Never reread unchanged documentation during the same task.
* Do not reproduce documentation in reasoning or responses.
* Do not copy whole documentation files into prompts or source code.
* Keep documentation concise and free of duplication.
* Follow existing project architecture.
* Each design file starts with `Sections (offset:line): ...`. Read only the needed range with offset/limit, not the whole file.

2. DOCUMENTATION ROUTING

| Task | Read |
| --- | --- |
| Colors, fonts, typography, spacing | design/tokens.md |
| Buttons, cards, menus, UI elements | design/tokens.md, design/components.md |
| New or replacement components | design/tokens.md, design/components.md, design/integrations.md |
| GSAP animations | design/motion.md, design/performance.md |
| Lenis scrolling | design/motion.md, design/performance.md |
| ReactBits components | design/tokens.md, design/components.md, design/integrations.md |
| npm packages | design/integrations.md |
| Performance optimization | design/performance.md |
| Responsive design | design/tokens.md, design/performance.md |
| General development | relevant sections only |

A task that spans areas reads all documents for those areas.

3. DESIGN AUTHORITY

Priority order:

1. User’s explicit instructions.
2. design/tokens.md — brand identity.
3. design/components.md — interface rules.
4. design/motion.md — animation rules.
5. design/performance.md — technical performance.
6. design/integrations.md — external packages and components.

Do not independently invent a new design system.

4. AUTONOMOUS DEVELOPMENT

When the user provides a component name, npm package, URL, GitHub repository, ReactBits component or visual reference:

* Identify the requested component.
* Inspect its official documentation.
* Check compatibility and dependencies.
* Retrieve or install the component.
* Adapt it to the existing design system.
* Integrate it at the exact location requested.
* Replace existing components when explicitly requested.
* Preserve existing functionality.
* Test the result.

Do not stop after explaining how the user could install something.

Perform the implementation yourself when the required tools and permissions are available.

5. REPLACEMENT RULES

Follow the exact scope of the user’s request.

Examples:

* “Replace all buttons” means all applicable buttons across the application.
* “Replace the Hero button” means only the Hero button.
* “Replace all project cards” means all applicable project cards.
* “Add this animation to the title” means only the specified title.

Inspect every affected instance.

Preserve existing click handlers, navigation, accessibility, loading states and business logic.

6. PROJECT SAFETY

* Do not rewrite working architecture unnecessarily.
* Do not delete unrelated files.
* Do not modify production settings without permission.
* Do not expose secrets.
* Do not install suspicious dependencies.
* Do not deploy to production without explicit permission.

7. VALIDATION

After implementation:

* Run available TypeScript checks.
* Run npm run build.
* Fix errors caused by your changes.
* Verify affected components.
* Verify responsive behavior.
* Verify animation cleanup when applicable.

Report:

* What changed.
* Which files changed.
* Which packages were installed.
* Whether the build passed.

8. FINAL RULE

Work autonomously.

The user describes the desired result, not the implementation steps.

Inspect, decide, implement, adapt, test and report.

Do not ask the user to perform manual installation or code editing when you can complete it yourself.
