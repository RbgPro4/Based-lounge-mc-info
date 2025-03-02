document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll(".info-detail");

  buttons.forEach((button) => {
    // Get the value of the data-custom-error attribute (true or false)
    const customErrorFlag = button.getAttribute('data-custom-error') === 'true';
    
    // Set a default message for unreachable pages
    const defaultErrorMessage = "Page Cannot Be Reached, Check Your Connection.";

    // Custom error message for when customErrorFlag is false
    const customErrorMessage = "This Page Is Currently Been Updated, Please Stay Patient!"; // Set custom message directly here

    button.addEventListener("click", function (event) {
      event.preventDefault();
      const url = this.href;

      if (customErrorFlag) {
        // If customErrorFlag is true, attempt to load the page
        fetch(url, { method: "HEAD" })
          .then((response) => {
            if (response.ok) {
              window.location.href = url; // Redirect to the page if reachable
            } else {
              showErrorMessage(defaultErrorMessage); // Show default error message if page is not reachable
            }
          })
          .catch(() => {
            showErrorMessage(defaultErrorMessage); // Show default error message if there's a fetch failure
          });
      } else {
        // If customErrorFlag is false, prevent navigation and show custom error message
        showErrorMessage(customErrorMessage); // Always show the custom message and prevent navigation
      }
    });
  });
});

// Function to show the error message
function showErrorMessage(message) {
  const errorContainer = document.getElementById('error-container'); // Ensure there's an element for showing errors
  if (errorContainer) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerHTML = message + '<div class="loading-bar"></div>';
    errorContainer.appendChild(errorMessage);

    // Fade-out after 4 seconds
    setTimeout(() => {
      errorMessage.style.animation = 'fadeOut 1s forwards';
      setTimeout(() => {
        errorMessage.remove(); // Remove error after fade-out
      }, 1000);
    }, 4000); // Delay the fade-out after the loading bar animation is complete
  }
}
