/* ============================================================
   TECTUM ROOFING — main.js
   Small vanilla-JS enhancements only. No dependencies.
   - Mobile nav toggle
   - Nav submenu (Domestic Roofing)
   - Sticky-header shadow on scroll
   - Scroll-reveal for .reveal elements
   - Demo contact-form handler (no backend)
   - Auto year in footer
   ============================================================ */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // Close the menu after tapping a link (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        closeSubs();
      }
    });
  }

  /* ---- Nav submenu (Domestic Roofing) ----
     Desktop: CSS opens it on hover/focus; the caret button is a
     keyboard/touch fallback. Mobile: caret is the only opener. */
  var subToggles = document.querySelectorAll(".nav__sub-toggle");
  Array.prototype.forEach.call(subToggles, function (btn) {
    var item = btn.closest(".nav__item");
    if (!item) { return; }
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Hide domestic roofing services" : "Show domestic roofing services");
    });
  });

  var closeSubs = function () {
    Array.prototype.forEach.call(subToggles, function (btn) {
      var item = btn.closest(".nav__item");
      if (item) { item.classList.remove("is-open"); }
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "Show domestic roofing services");
    });
  };

  // Escape closes any open submenu; clicking outside the nav does too.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeSubs(); }
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav__item--has-sub")) { closeSubs(); }
  });

  /* ---- Sticky header shadow ---- */
  var header = document.getElementById("siteHeader");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  var io = null;
  if ("IntersectionObserver" in window && revealEls.length) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: show everything
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Landing straight on an anchor (e.g. domestic-roofing.html#leadwork)
     jumps the page before the observer's first pass, which left the
     section blank until the visitor scrolled. This sweeps anything
     already on screen and reveals it. */
  var revealInView = function () {
    Array.prototype.forEach.call(document.querySelectorAll(".reveal"), function (el) {
      if (el.classList.contains("is-visible")) { return; }
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("is-visible");
        if (io) { io.unobserve(el); }
      }
    });
  };
  window.addEventListener("load", revealInView);
  window.addEventListener("hashchange", function () { setTimeout(revealInView, 80); });

  /* The observer can also miss elements that fly past during a long
     smooth scroll, so sweep on scroll too (rAF-throttled, and it
     unhooks itself once everything has been revealed). */
  var sweeping = false;
  var onScrollReveal = function () {
    if (sweeping) { return; }
    sweeping = true;
    window.requestAnimationFrame(function () {
      sweeping = false;
      revealInView();
      if (!document.querySelector(".reveal:not(.is-visible)")) {
        window.removeEventListener("scroll", onScrollReveal);
      }
    });
  };
  window.addEventListener("scroll", onScrollReveal, { passive: true });

  revealInView();

  /* ---- Demo contact form (no backend) ----
     PLACEHOLDER: wire this to a real handler (e.g. Formspree,
     Netlify Forms, or a mailto/endpoint) before going live. */
  var form = document.getElementById("quoteForm");
  var note = document.getElementById("formNote");
  if (form && note) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      note.hidden = false;
      note.textContent =
        "Thanks — this is a demo form with no backend connected yet. " +
        "In the meantime, please call 01372 613023 or message us on WhatsApp at 07762 204033.";
      form.reset();
      note.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
