document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  let loadedCount = 0;
  let hasError = false;

  images.forEach(img => {
    img.onload = function() {
      loadedCount++;
      if (loadedCount === images.length && !hasError) {
        hideLoadingError(); // Hide the error if all images are loaded successfully
      }
    };

    img.onerror = function() {
      hasError = true;
      setTimeout(() => showErrorMessage("Some Elements Failed To Load, Please Refresh The Page"), 3500); // Delay error message
    };
  });

  function hideLoadingError() {
    const loadingError = document.getElementById('loadingError');
  }
});

// Show error message function
function showErrorMessage(message) {
  const errorContainer = document.getElementById('error-container');  // Use the same error container for both types of errors

  // Create the error message element
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error-message';
  errorMessage.innerHTML = message + '<div class="loading-bar"></div>';

  errorContainer.appendChild(errorMessage); // Add error message to container

  // Fade-out after 4 seconds
  setTimeout(() => {
    errorMessage.style.animation = 'fadeOut 1s forwards';
    setTimeout(() => {
      errorMessage.remove(); // Remove error after fade-out
    }, 1000);
  }, 4000); // Delay the fade-out after the loading bar animation is complete
}
