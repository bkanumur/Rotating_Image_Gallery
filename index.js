const imageContainer = document.querySelector(".image-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let rotation = 0;
let autoRotate;

function updateGallery() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;
  autoRotate = setTimeout(() => {
    rotation -= 45; // Rotate automatically every 3 seconds
    updateGallery();
  }, 3000);
}

// Navigation button functionality
prevButton.addEventListener("click", () => {
  rotation += 45; // Rotate counter-clockwise
  clearTimeout(autoRotate); // Reset auto-rotation timer
  updateGallery();
});

nextButton.addEventListener("click", () => {
  rotation -= 45; // Rotate clockwise
  clearTimeout(autoRotate); // Reset auto-rotation timer
  updateGallery();
});

// Pause rotation on hover
imageContainer.addEventListener("mouseover", () => clearTimeout(autoRotate));
imageContainer.addEventListener("mouseleave", updateGallery);

// Start the gallery
updateGallery();