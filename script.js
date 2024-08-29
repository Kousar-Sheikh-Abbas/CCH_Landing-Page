let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    document.querySelector('.text-content').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 3000); // Change every 3 seconds
