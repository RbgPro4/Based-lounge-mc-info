// Select all images that should be expandable
const images = document.querySelectorAll('.expandable-img');
const imgOverlay = document.getElementById('overlay-popup-image'); // Overlay container
const expandedImg = document.getElementById('expandedImg');
const prevBtn = document.getElementById('prevBtn'); // Previous button
const nextBtn = document.getElementById('nextBtn'); // Next button
const loader = document.createElement('div'); // Create loader dynamically

loader.classList.add('loading-spinner');
imgOverlay.appendChild(loader); // Add loader to the overlay

let imgArray = []; // Stores current container's images
let currentIndex = 0; // Track current image index

// Open the image in the overlay
images.forEach(img => {
    img.addEventListener('click', function () {
        const imgData = this.getAttribute('data-images');

        if (!imgData) {
            console.error("Missing data-images attribute on image:", this);
            return;
        }

        imgArray = JSON.parse(imgData); // Convert JSON string to array
        currentIndex = imgArray.indexOf(this.src); // Find index of clicked image

        if (currentIndex === -1) {
            console.error("Image not found in data-images array:", this.src);
            return;
        }

        updateImage(); // Update the displayed image
        imgOverlay.classList.add('show'); // Show the overlay
    });
});

// Function to update displayed image with smooth transition
function updateImage() {
    expandedImg.classList.add("blurred"); // Apply blur effect while loading
    loader.style.display = "block"; // Show loader

    const newImg = new Image();
    newImg.src = imgArray[currentIndex];

    newImg.onload = function () {
        expandedImg.src = newImg.src; // Switch image only when fully loaded
        expandedImg.classList.remove("blurred"); // Remove blur
        loader.style.display = "none"; // Hide loader
    };
}

// Next Image
nextBtn.addEventListener('click', function () {
    if (imgArray.length === 0) return;
    currentIndex = (currentIndex + 1) % imgArray.length; // Loop back to first image
    updateImage();
});

// Previous Image
prevBtn.addEventListener('click', function () {
    if (imgArray.length === 0) return;
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length; // Loop back to last image
    updateImage();
});

// Close the overlay when clicking outside the image
imgOverlay.addEventListener('click', function (event) {
    if (event.target === imgOverlay) {
        imgOverlay.classList.remove('show'); // Hide the overlay
    }
});