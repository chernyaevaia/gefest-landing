let Swipes = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 6,
    renderBullet: function (index, className) {
      return `<div class=${className} style="background-image:url(./img/image-${index}.png)"></div>`;
    },
  },
});

let menuBtn = document.querySelector(".header__burgerMenu");
let menuList = document.querySelector(".menu__list");
let header = document.querySelector(".header");
let menuLinks = document.querySelectorAll(".menu__link");
let menuLines = document.querySelectorAll(".menu__line");
let menu = document.querySelector(".menu");
let apartment = document.querySelector(".apartment");
let info = document.querySelector(".info");
let overlay = document.querySelector(".overlay");
let contactBtn = document.querySelector(".header__contactBtn");

menuBtn.addEventListener("click", function () {
  menuLines.forEach((e) => e.classList.toggle("active"));
  menuLinks.forEach((e) => e.classList.toggle("active"));
  menu.classList.toggle("active");
  menuList.classList.toggle("active");
  overlay.classList.toggle("active");
  header.classList.toggle("active");
  apartment.classList.toggle("active");
  info.classList.toggle("active");
  contactBtn.classList.toggle("active");
});
