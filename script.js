var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: -111,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".menu-close");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
