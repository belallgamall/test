document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".toggle-menu");
  var nav = document.querySelector("header .container nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    nav.classList.toggle("open");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && nav.classList.contains("open")) {
      nav.classList.remove("open");
    }
  });

  // Close menu when tapping any nav link (mobile/touch)
  var navLinks = document.querySelectorAll("header .container nav .nav-bar a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav.classList.contains("open")) nav.classList.remove("open");
    });
  });
});
