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

  // FEATURE 2: RESPONSIVE MOBILE NAVIGATION MENU
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      menuToggle.classList.toggle('toggle-transform');
    });
  }
});
