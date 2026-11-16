PERFORMANCE SYSTEM — REACT

1. PRIORITY

Performance is more important than decorative effects.

The website must remain responsive on older smartphones and low-end devices.

Target: stable, smooth interaction, aiming for 60 FPS where hardware permits.

2. RENDERING

* Avoid unnecessary React re-renders.
* Avoid unnecessary state updates.
* Keep component trees efficient.
* Avoid excessive DOM elements.
* Lazy-load noncritical content.
* Use code splitting when beneficial.
* Avoid unnecessary dependencies.

3. IMAGES

* Use WebP or AVIF when appropriate.
* Provide responsive image sizes.
* Lazy-load below-the-fold images.
* Define width and height.
* Prevent layout shifts.
* Avoid loading oversized images on mobile.

4. VIDEO

* Avoid autoplaying multiple videos simultaneously.
* Pause videos outside the viewport.
* Use optimized video formats.
* Avoid unnecessary background videos on mobile.
* Provide fallback imagery.

5. ANIMATIONS

Prefer:

* CSS transitions.
* transform.
* opacity.
* IntersectionObserver.

Avoid:

* Heavy blur animations.
* Excessive box-shadow animations.
* Unnecessary WebGL.
* Excessive particles.
* Permanent JavaScript animation loops.
* Expensive layout recalculations.

6. MOBILE

Older iPhones must remain usable.

Reduce or disable:

* Cursor effects.
* Heavy particle systems.
* Complex pinned sections.
* Unnecessary background animations.
* Expensive visual filters.
* Excessive animation stagger.

Preserve native touch scrolling.

7. TESTING

After meaningful performance changes:

* Run production build.
* Inspect bundle size when possible.
* Check layout shifts.
* Check image loading.
* Check scrolling responsiveness.
* Check reduced-motion behavior.

Never sacrifice basic functionality for performance optimizations.