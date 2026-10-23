document.addEventListener('DOMContentLoaded', () => {
  
  // FEATURE 1: DYNAMIC TIMED GREETING COMPLIANCE
  const greetingElement = document.getElementById('dynamicGreeting');
  if (greetingElement) {
    const currentHour = new Date().getHours();
    let greetingText = "Good day";

    if (currentHour < 12) {
      greetingText = "Good morning";
    } else if (currentHour < 18) {
      greetingText = "Good afternoon";
    } else {
      greetingText = "Good evening";
    }
    
    greetingElement.innerHTML = `${greetingText}, I'm <span>Kusuma</span>`;
  }

  const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  function closeMenu() {
    navLinks.classList.remove("mobile-active");
    menuToggle.classList.remove("toggle-transform");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("mobile-active");

    menuToggle.classList.toggle("toggle-transform", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
}
});
