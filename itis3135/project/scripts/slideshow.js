document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.remove('is-active-slide');
      });
      slides[index].classList.add('is-active-slide');
    };
  
    document.querySelector('.prev').addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    document.querySelector('.next').addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    showSlide(currentSlide);
  });
  
  