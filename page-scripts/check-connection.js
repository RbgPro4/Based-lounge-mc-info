document.addEventListener('DOMContentLoaded', function () {
    let isConnected = true;  // Track connection status
    const errorContainer = document.getElementById("error-container");
    const connectionText = document.getElementById("connectiontext");
    let ping = "--";  // Initial ping value
    
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

// Check if the connection is working and update ping
function checkConnection() {
    const startTime = Date.now();  // Record the start time

    fetch(window.location.href, { method: "HEAD" })
        .then(response => {
            const endTime = Date.now();  // Record the end time
            ping = endTime - startTime;  // Calculate the ping (ms)

            // Determine the connection status based on ping
            let connectionStatus = "Good";
            let statusColor = "#00e029";  // Default color (green)

            if (ping > 200) {
                connectionStatus = "Bad";
                statusColor = "rgb(243, 41, 41)";  // Red for bad connection
            } else if (ping > 150) {
                connectionStatus = "Weak";
                statusColor = "rgb(240, 155, 29)";  // Yellow-orange for weak connection
            }

            if (!response.ok && isConnected) {
                // Connection lost, reset ping to "--" and show error message
                isConnected = false;
                ping = "--";
                connectionText.innerHTML = `Connection: <span style='color: red;'>Disconnected</span><br>Ping: ${ping}`;
                showErrorMessage("Connection Was Lost.");
            } else if (response.ok && !isConnected) {
                // Connection restored, show success message and update ping
                isConnected = true;
                connectionText.innerHTML = `Connection: <span style='color: ${statusColor};'>${connectionStatus}</span><br>Ping: ${ping} ms`;
                showSuccessMessage("Connection Restored.");
            } else {
                // Connection is good, update ping and status
                connectionText.innerHTML = `Connection: <span style='color: ${statusColor};'>${connectionStatus}</span><br>Ping: ${ping} ms`;
            }
        })
        .catch(() => {
            if (isConnected) {
                // Connection lost, reset ping to "--" and show error message
                isConnected = false;
                ping = "--";
                connectionText.innerHTML = `Connection: <span style='color: red;'>Disconnected</span><br>Ping: ${ping}`;
                showErrorMessage("Connection Was Lost.");
            }
        });
}

    // Initial check when the page loads (with 5-second delay)
    setTimeout(checkConnection, 5000);  // Wait for 5 seconds before starting

    // Check connection status every 8 seconds
    setInterval(checkConnection, 8000);
});
