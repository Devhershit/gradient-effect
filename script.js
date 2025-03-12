// Track mouse movement to update background gradient
document.addEventListener('mousemove', function(e) {
    // Calculate mouse position as percentage of viewport
    // Divide by a larger number to make movement more subtle
    const mouseX = Math.round(e.clientX / window.innerWidth * 30);
    const mouseY = Math.round(e.clientY / window.innerHeight * 30);
    
    // Update the background position based on mouse coordinates
    document.body.style.backgroundPosition = `${mouseX}% ${mouseY}%`;
});

// Handle click on h1 for glow effect
const heading = document.querySelector('h1');
heading.addEventListener('click', function() {
    this.classList.toggle('glow');
});