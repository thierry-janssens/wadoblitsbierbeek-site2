/* ================================================================
   Karateclub Wado Blits Bierbeek — main.js
   ================================================================ */

(function () {
  "use strict";

  /* ---- Mobile nav toggle ---------------------------------------- */
  const toggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    // Close on link click (mobile)
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- Active nav link ------------------------------------------ */
  (function setActiveNav() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__links a").forEach(function (a) {
      const href = a.getAttribute("href").split("/").pop();
      if (href === current || (current === "" && href === "index.html")) {
        a.classList.add("active");
      }
    });
  })();

  /* ---- Scroll-reveal animation ---------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Contact form (Formspree) --------------------------------- */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const success = document.getElementById("form-success");
      const originalText = btn.textContent;
      btn.textContent = "Verzenden…";
      btn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          form.reset();
          if (success) success.style.display = "block";
        } else {
          alert("Er is een fout opgetreden. Probeer later opnieuw of contacteer ons via e-mail.");
        }
      } catch {
        alert("Er is een fout opgetreden. Controleer uw verbinding.");
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

  /* ---- Smooth scroll for anchor links --------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = document.querySelector(".nav") ? document.querySelector(".nav").offsetHeight : 0;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset - 16, behavior: "smooth" });
      }
    });
  });
})();
