
document.addEventListener("DOMContentLoaded", () => {
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
