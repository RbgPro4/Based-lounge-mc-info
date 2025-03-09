// Add this JavaScript in a separate script file or inline on your page

// Function to close the pop-up message
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active"); // Remove the "active" class to fade out the pop-up
  }
  
  // Show the pop-up message when the page loads
  window.onload = function() {
    const popup = document.getElementById("popup");
    popup.classList.add("active"); // Add the "active" class to fade in the pop-up
  };
  