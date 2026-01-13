document.addEventListener("DOMContentLoaded", () => {
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
//loader
  setTimeout(() => {
    document.body.classList.add("loaded");
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
});
