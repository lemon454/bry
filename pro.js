document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#features').scrollIntoView({
        behavior: 'smooth'
    });
});
const circles = document.querySelectorAll(".color-circle");
const heroImg = document.querySelector(".hero-image");

circles.forEach(circle => {
    circle.addEventListener("click", () => {
        const color = circle.getAttribute("data-color");
        const newImg = circle.getAttribute("data-img");

        heroImg.src = newImg;

        heroImg.style.filter = `drop-shadow(0 0 12px ${color})`;
    });
});

