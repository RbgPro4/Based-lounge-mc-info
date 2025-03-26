const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// Remove menuToggle reference since we're not using a button
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
});


// Touch swipe detection
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
    touchEndX = e.touches[0].clientX;
});

document.addEventListener("touchend", () => {
    // If swipe started from the left edge (within 50px) and moved right (50px threshold)
    if (touchStartX < 150 && touchEndX > touchStartX + 50) {
        sidebar.classList.add("open");
        overlay.classList.add("active");
    }
});