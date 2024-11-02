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
            }, 900); // Wait for 0.9 seconds
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
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});
