let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides;
    document.querySelector('.carousel-images').style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

window.onload = function() {
    showSlide(currentIndex);
};

