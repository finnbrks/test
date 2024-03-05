let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

showSlides(); // Display initial slide

// Optionally, you can add automatic slideshow functionality
// setInterval(() => { plusSlides(1); }, 5000); // Change slide every 5 seconds
