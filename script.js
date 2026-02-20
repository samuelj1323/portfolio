document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initScrollHeader();
  initMobileMenu();
  initScrollReveal();

  if (document.querySelector("#project-filters")) {
    initProjectFilters();
  }
});

function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const toggleIcon = toggleBtn?.querySelector("i");
  if (!toggleBtn || !toggleIcon) return;

  function applyTheme(isDark) {
    document.body.classList.toggle("light-mode", !isDark);
    toggleIcon.classList.toggle("fa-moon", isDark);
    toggleIcon.classList.toggle("fa-sun", !isDark);
    localStorage.setItem("darkMode", isDark);
  }

  toggleBtn.addEventListener("click", () => {
    const currentlyDark = !document.body.classList.contains("light-mode");
    applyTheme(!currentlyDark);
  });

  const saved = localStorage.getItem("darkMode");
  applyTheme(saved !== null ? saved === "true" : true);
}

function initScrollHeader() {
  const header = document.querySelector("header");
  if (!header) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle("scrolled", window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

function initScrollReveal() {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReduced) return;

  const elements = document.querySelectorAll(".reveal-up");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

function initProjectFilters() {
  const container = document.getElementById("project-filters");
  const cards = document.querySelectorAll(".project-card");
  if (!container || !cards.length) return;

  const techSet = new Set();
  cards.forEach((card) => {
    const techs = card.dataset.tech;
    if (techs) {
      techs.split(",").forEach((t) => techSet.add(t.trim()));
    }
  });

  container.innerHTML = '<button class="active" data-filter="all">All</button>';
  techSet.forEach((tech) => {
    if (tech) {
      const btn = document.createElement("button");
      btn.dataset.filter = tech;
      btn.textContent = tech;
      container.appendChild(btn);
    }
  });

  container.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    container
      .querySelectorAll("button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    cards.forEach((card) => {
      const match =
        filter === "all" || (card.dataset.tech && card.dataset.tech.includes(filter));
      card.style.display = match ? "" : "none";
    });
  });
}
