
    // Detect refresh using the Performance Navigation API
    if (performance.navigation.type === 1) {
        // If the page was refreshed, redirect to the checking page
        window.location.href = "../index.html";
    }
