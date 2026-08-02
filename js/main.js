/* ============================================================================
   main.js — the only JavaScript on the site. The site works perfectly even
   with JavaScript disabled; this file only adds two comfort features:

     1. The hamburger menu on phones (opens/closes the navigation).
     2. A gentle fade-in of sections as they scroll into view
        (skipped automatically if the visitor prefers reduced motion).

   You should not need to edit this file for day-to-day updates.
   ============================================================================ */

(function () {
  "use strict";

  /* ------------------------------------------------------------
     1. Mobile navigation toggle
     ------------------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      // aria-expanded tells screen readers whether the menu is open.
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ------------------------------------------------------------
     2. Scroll-reveal animation
     Elements marked with class="reveal" start slightly faded and
     slide up when they first enter the screen.
     ------------------------------------------------------------ */
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealElements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    // Show everything immediately — no animation.
    revealElements.forEach(function (el) { el.classList.add("visible"); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once, then stop watching
          }
        });
      },
      { threshold: 0.08 } // trigger when ~8% of the element is visible
    );
    revealElements.forEach(function (el) { observer.observe(el); });
  }
})();
