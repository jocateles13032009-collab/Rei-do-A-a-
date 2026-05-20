document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;

    // Função para mudar o slide (botões prev/next)
    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    };

    // Função para ir direto a um slide (dots)
    window.currentSlide = function (n) {
        showSlides(slideIndex = n);
    };

function showSlides(n) {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");

        if (!slides.length || !dots.length) return;

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    showSlides(slideIndex);

    // Troca automática a cada 5 segundos
    setInterval(function () {
        slideIndex++;
        showSlides(slideIndex);
    }, 5000);
});