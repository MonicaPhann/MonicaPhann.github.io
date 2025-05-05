let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");

    slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;

    for (let slide of slides) {
        slide.style.display = "none";
    }

    for (let dot of dots) {
        dot.classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}



