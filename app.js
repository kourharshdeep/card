const images = ["photo3.jpeg", "photo2.jpeg", "photo1.jpeg", "photo4.jpeg"]; // Add your image paths here
let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Cycle through images
  sliderImage.src = images[currentIndex];
}

// Change the image every 3 seconds
setInterval(changeImage, 3000);