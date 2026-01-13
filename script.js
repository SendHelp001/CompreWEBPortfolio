document.addEventListener("DOMContentLoaded", () => {
  window.onload = function () {
    window.scrollTo(0, 0);
  };
  document.body.style.overflow = "hidden";

  //nav links
  const navLinks = document.querySelectorAll(".nav-contents a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  //logo scroll to top
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  //burgir
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector(".nav-contents ul");

  if (menuIcon && navMenu) {
    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  //loader
  setTimeout(() => {
    document.body.classList.add("loaded");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      const loader = document.getElementById("loader-wrapper");
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.display = "none";
        loader.remove();
      } else {
        console.warn("element not found during removal.");
      }
    }, 500);
  }, 3500);
  // Initialize AOS
  AOS.init({
    duration: 1200, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
  });
});
