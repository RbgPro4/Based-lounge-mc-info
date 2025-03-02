document.addEventListener('DOMContentLoaded', function () {
    let isConnected = true;  // Track connection status
    const errorContainer = document.getElementById("error-container");

    // Function to show an error message
    function showErrorMessage(message) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message"; // Default is error (red)
        errorMessage.innerHTML = message + '<div class="loading-bar"></div>';
        errorContainer.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.style.animation = "fadeOut 1s forwards";
            setTimeout(() => {
                errorMessage.remove();
            }, 1000);
        }, 4000);
    }

    // Function to show a success message (Connection Restored)
    function showSuccessMessage(message) {
        const successMessage = document.createElement("div");
        successMessage.className = "success-message"; // Green for success
        successMessage.innerHTML = message + '<div class="loading-bar"></div>';
        errorContainer.appendChild(successMessage);

        setTimeout(() => {
            successMessage.style.animation = "fadeOut 1s forwards";
            setTimeout(() => {
                successMessage.remove();
            }, 1000);
        }, 4000);
    }

    // Check if the connection is working
    function checkConnection() {
        fetch(window.location.href, { method: "HEAD" })
            .then(response => {
                if (!response.ok && isConnected) {
                    // Connection lost, show error message
                    isConnected = false;
                    showErrorMessage("Connection Was Lost.");
                }
            })
            .catch(() => {
                if (isConnected) {
                    // Connection lost, show error message
                    isConnected = false;
                    showErrorMessage("Connection Was Lost.");
                }
            });
    }

    // Check if the connection is restored
    function checkRestoredConnection() {
        fetch(window.location.href, { method: "HEAD" })
            .then(response => {
                if (response.ok && !isConnected) {
                    // Connection restored, show success message
                    isConnected = true;
                    showSuccessMessage("Connection Restored.");
                }
            })
            .catch(() => {
                // If server goes down again, do nothing
            });
    }

    // Poll for connection status every 5 seconds
    setInterval(checkConnection, 5000);
    setInterval(checkRestoredConnection, 5000);
});
