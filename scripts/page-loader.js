// script.js

// Function to show the loader
function showLoader() {
  const loader = document.getElementById("loader");
  loader.style.display = "flex"; // Show the loader
}

// Function to fade out the loader
function fadeOutLoader() {
  const loader = document.getElementById("loader");
  loader.style.transition = "opacity 0.5s"; // Add a transition effect for opacity
  loader.style.opacity = "0"; // Set opacity to 0 to start fading out
  setTimeout(() => {
      loader.style.display = "none"; // Hide the loader after fading out
  }, 500); // Wait for the same duration as the transition (0.5s) before hiding the loader
}

// Call the showLoader function when the page starts loading
showLoader();

// Call the fadeOutLoader function when the page is fully loaded
window.addEventListener('load', () => {
  setTimeout(fadeOutLoader, 1000); // Fade out the loader after 1 second
});


