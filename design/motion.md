MOTION SYSTEM — REACT

1. ANIMATION PHILOSOPHY

Animations must enhance the design, not distract from it.

Visual direction:

* Smooth.
* Controlled.
* Editorial.
* Minimal.
* Purposeful.

Do not animate everything.

2. GSAP

Official documentation:

https://gsap.com/docs/v3/

Approved tools:

* GSAP Core.
* ScrollTrigger.
* SplitText.
* Flip.
* Timeline.
* Stagger.
* @gsap/react.

Use GSAP for:

* Scroll-driven reveals.
* Editorial text animations.
* Coordinated section transitions.
* Complex interactive sequences.
* Layout transitions.

Use @gsap/react and useGSAP() for React integration.

3. MOTION TOKENS

export const motion = {
  duration: {
    fast: 0.25,
    normal: 0.55,
    slow: 0.85,
    reveal: 1.0,
  },
  ease: {
    standard: "power2.out",
    smooth: "power3.out",
    editorial: "power4.out",
  },
  stagger: {
    text: 0.035,
    elements: 0.08,
  },
};

These are defaults, not mandatory values for every animation.

4. GSAP RULES

* Prefer transform and opacity.
* Avoid unnecessary layout animations.
* Avoid excessive blur.
* Avoid excessive scroll pinning.
* Avoid permanent animation loops.
* Clean up ScrollTriggers.
* Clean up event listeners.
* Use one coordinated animation architecture.

5. LENIS

Official documentation:

https://github.com/darkroomengineering/lenis

Lenis is an optional smooth-scroll layer.

Rules:

* Initialize only once.
* Synchronize with GSAP ScrollTrigger.
* Use the official GSAP ticker integration.
* Do not create multiple animation loops.
* Clean up all listeners.
* Preserve anchor navigation.
* Keep native-feeling touch scrolling.

Desktop may use smooth scrolling.

Mobile should prioritize native touch scrolling and performance.

The application must work without Lenis.

6. REACTBITS ANIMATIONS

Official website:

https://reactbits.dev/

Use ReactBits selectively for:

* SplitText.
* BlurText.
* FadeContent.
* AnimatedContent.
* Magnet.
* SpotlightCard.
* Other relevant lightweight components.

Do not install every available effect.

Inspect implementation and dependencies first.

Adapt every animation to the existing design system.

7. ANIMATION CLEANUP

Every animation must have proper lifecycle management.

* Remove event listeners.
* Kill unnecessary ScrollTriggers.
* Revert GSAP contexts.
* Destroy Lenis instances.
* Prevent duplicate initialization.

8. REDUCED MOTION

Respect prefers-reduced-motion.

Disable nonessential movement and scroll effects when reduced motion is requested.

All content must remain accessible without animations.