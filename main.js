//hide-show nav-bar while scrolling
let lastScrollY = window.scrollY;
let scrollTimeout; // Timer variable
let isScrollingDown = false; // Flag to check if scrolling down

window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    
    // Check if scrolling down
    if (window.scrollY > lastScrollY) {
        if (!isScrollingDown) {
            isScrollingDown = true;
            // Start timer if beginning to scroll down
            scrollTimeout = setTimeout(() => {
                navbar.classList.add("hidden-nav");
            }, 400); // Wait for 0.4 seconds
        }
    } else {
        // Scrolling up or staying in place
        isScrollingDown = false;
        clearTimeout(scrollTimeout); // Reset timer if direction changes
        navbar.classList.remove("hidden-nav"); // Show navbar
    }
    
    lastScrollY = window.scrollY;
});

// Dark mode toggle button
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change icon between sun and moon
    const icon = toggleButton.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        switchTechStackLogos('dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        switchTechStackLogos('light');
    }
});

// Function to switch tech stack logos based on mode
function switchTechStackLogos(mode) {
    const techLogos = document.querySelectorAll('.tech-logo');
    techLogos.forEach(logo => {
        logo.src = logo.getAttribute(mode === 'dark' ? 'data-dark' : 'data-light');
    });
}

//navbar magnetic effect
  const navbarTitle = document.querySelector('.navbar-title');

  document.addEventListener('mousemove', (event) => {
    // Get the position of the mouse
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get the position of the navbar title
    const rect = navbarTitle.getBoundingClientRect();
    const titleX = rect.left + rect.width / 2;
    const titleY = rect.top + rect.height / 2;

    // Calculate distance between mouse and title
    const distanceX = mouseX - titleX;
    const distanceY = mouseY - titleY;

    // Define the maximum distance for the effect to apply
    const maxDistance = 100;

    // Only apply the effect if within the range
    if (Math.abs(distanceX) < maxDistance && Math.abs(distanceY) < maxDistance) {
      // Scale the effect based on proximity
      const pullFactor = 0.2; // Adjust this factor to control strength of effect
      navbarTitle.style.transform = `translate(${distanceX * pullFactor}px, ${distanceY * pullFactor}px)`;
    } else {
      // Reset to original position if out of range
      navbarTitle.style.transform = 'translate(0, 0)';
    }
  });
