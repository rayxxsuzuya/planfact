let slides = document.querySelectorAll('.slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 6000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1) % slides.length;
  slides[currentSlide].className = 'slide active';
}

for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener('click', function(e) {
    if(e.target.classList.contains('request-btn') || e.target.classList.contains('rate-btn')) {
      return false;
    } else {
      slides[currentSlide].className = 'slide';
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className = 'slide active';
    }
  });
}