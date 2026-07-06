(function () {
  "use strict";

  /* ---------- Año dinámico en el footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav: sombra/borde al hacer scroll ---------- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (window.scrollY > 12) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("navMobile");

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    mobileMenu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- Revelado al hacer scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
