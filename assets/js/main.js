/* ============================================================
   TECTUM ROOFING — main.js
   Small vanilla-JS enhancements only. No dependencies.
   - Mobile nav toggle
   - Sticky-header shadow on scroll
   - Scroll-reveal for .reveal elements
   - Enquiry form, posted to Formspree over fetch
   - Site video (autoplay unless reduced motion)
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
      }
    });
  }

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

  /* ---- Enquiry form (Formspree) ----
     The form has a real action/method, so it still works with JavaScript
     off — it just posts and lands on Formspree's own page. With JS we
     send it over fetch instead, so the visitor stays put and gets an
     inline confirmation. */
  var form = document.getElementById("quoteForm");
  var note = document.getElementById("formNote");
  if (form && note) {
    var button = form.querySelector('button[type="submit"]');
    var buttonText = button ? button.textContent : "";

    var say = function (message, ok) {
      note.hidden = false;
      note.textContent = message;
      note.classList.toggle("form-note--error", !ok);
      note.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // The form carries novalidate, so nothing is shown unless we ask for it
      if (!form.checkValidity()) { form.reportValidity(); return; }

      if (button) { button.disabled = true; button.textContent = "Sending\u2026"; }
      note.hidden = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          say("Thanks — your message has been sent. We'll get back to you shortly. " +
              "If it's urgent, call 01372 613023 or message us on WhatsApp at 07762 204033.", true);
        } else {
          return response.json().then(function (data) {
            var detail = data && data.errors ? data.errors.map(function (x) { return x.message; }).join(", ") : "";
            say("Sorry — your message didn't send. " + (detail ? detail + ". " : "") +
                "Please call 01372 613023 or email info@tectum-roofing.co.uk.", false);
          });
        }
      }).catch(function () {
        say("Sorry — your message didn't send, which may be a connection problem. " +
            "Please call 01372 613023 or email info@tectum-roofing.co.uk.", false);
      }).then(function () {
        if (button) { button.disabled = false; button.textContent = buttonText; }
      });
    });
  }

  /* ---- Site video ----
     No autoplay attribute in the HTML, so the default is a still poster.
     We start it here only if the visitor hasn't asked for reduced motion,
     and only once it's actually on screen — no point pulling 2.5 MB for
     something nobody scrolls to. */
  var video = document.querySelector(".intro__video");
  if (video && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var startVideo = function () {
      video.preload = "auto";
      video.muted = true;               // required for autoplay to be allowed
      var p = video.play();
      if (p && p.catch) { p.catch(function () { /* browser blocked it; poster stays */ }); }
    };
    if ("IntersectionObserver" in window) {
      var vo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { startVideo(); vo.unobserve(entry.target); }
        });
      }, { threshold: 0.25 });
      vo.observe(video);
    } else {
      startVideo();
    }
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
