// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing theme toggle");
  const toggleBtn = document.getElementById("theme-toggle");
  const toggleIcon = toggleBtn ? toggleBtn.querySelector("i") : null;

  console.log("Toggle button found:", !!toggleBtn);

  // Function to update icon based on current theme
  function updateThemeIcon(isDark) {
    if (toggleIcon) {
      console.log("Updating icon to:", isDark ? "moon" : "sun");
      if (isDark) {
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
      } else {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
      }
    }
  }

  // Function to update theme
  function setTheme(isDark) {
    console.log("Setting theme to:", isDark ? "dark" : "light");
    if (isDark) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
    localStorage.setItem("darkMode", isDark);
    updateThemeIcon(isDark);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const isDark = document.body.classList.contains("light-mode")
        ? false
        : true;
      console.log("Current mode before toggle:", isDark ? "dark" : "light");
      setTheme(!isDark); // Toggle the current state
    });
  }

  // Check saved preference
  const savedDarkMode = localStorage.getItem("darkMode");
  console.log("Saved dark mode preference:", savedDarkMode);

  if (savedDarkMode !== null) {
    setTheme(savedDarkMode === "true");
  } else {
    // Default to dark mode if no preference is saved
    setTheme(true);
  }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId !== "#") {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});

// Project Filter by Technology
function setupProjectFilters() {
  // Get all technologies from projects
  const techSet = new Set();
  document.querySelectorAll(".project p strong").forEach((tech) => {
    if (tech.textContent.startsWith("Technologies used:")) {
      tech.textContent
        .replace("Technologies used:", "")
        .split(",")
        .map((t) => t.trim())
        .forEach((t) => techSet.add(t));
    }
  });

  // Create filter buttons
  const filterContainer = document.createElement("div");
  filterContainer.className = "filter-buttons";
  filterContainer.innerHTML =
    '<button class="active" data-filter="all">All</button>';

  techSet.forEach((tech) => {
    if (tech) {
      filterContainer.innerHTML += `<button data-filter="${tech}">${tech}</button>`;
    }
  });

  // Insert before projects
  const projectsHeading = document.querySelector("#projects h1");
  if (projectsHeading) {
    const projectsContainer = projectsHeading.nextElementSibling;
    if (projectsContainer) {
      projectsContainer.parentNode.insertBefore(
        filterContainer,
        projectsContainer.nextSibling
      );

      // Add filter functionality
      document.querySelectorAll(".filter-buttons button").forEach((btn) => {
        btn.addEventListener("click", () => {
          const filter = btn.dataset.filter;

          document
            .querySelectorAll(".filter-buttons button")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          document.querySelectorAll(".project").forEach((project) => {
            if (filter === "all") {
              project.style.display = "block";
            } else {
              const techElement = project.querySelector("p strong");
              if (techElement && techElement.textContent) {
                const techs = techElement.textContent;
                project.style.display = techs.includes(filter)
                  ? "block"
                  : "none";
              }
            }
          });
        });
      });
    }
  }
}

// Typing Animation for Welcome Message
function setupTypingEffect() {
  const element = document.querySelector(".animated-heading");
  if (!element) return;

  const text = element.textContent;
  element.innerHTML = '<span class="cursor">|</span>';

  let i = 0;
  const speed = 100;

  function typeWriter() {
    if (i < text.length) {
      element.innerHTML =
        text.substring(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // Remove cursor after typing is complete
      setTimeout(() => {
        element.innerHTML = text;
      }, 1000);
    }
  }

  typeWriter();
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// Run page-specific scripts
document.addEventListener("DOMContentLoaded", () => {
  // Run on projects page only
  if (document.querySelector("#projects")) {
    setupProjectFilters();
  }

  // Run on home page
  if (document.querySelector("#about")) {
    setupTypingEffect();
  }
});
