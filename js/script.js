const burgerBtn = document.querySelector(".burger-btn");
const burgerMenuList = document.querySelector(".menu__list");
const button = document.querySelector(".button");
const burgerMenuBg = document.querySelector(".menu__bg");
const burgerMenu = document.querySelector(".menu");
const menuLink = document.querySelectorAll(".menu__link");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("menu_active");
  burgerMenuBg.classList.toggle("menu__bg_active");
  burgerMenuList.classList.toggle("menu__list_active");
  button.classList.toggle("button_active");
  burgerBtn.classList.toggle("burger-btn_active");
});

[].forEach.call(menuLink,function(el){
  el.addEventListener('click', function (e) {
    burgerMenu.classList.remove("menu_active");
    burgerMenuBg.classList.remove("menu__bg_active");
    burgerMenuList.classList.remove("menu__list_active");
    button.classList.remove("button_active");
    burgerBtn.classList.remove("burger-btn_active");
  })
});

new Swiper('.offers-slider',{
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  slidesPerView: 3.3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  breakpoints:{
    1000:{
      slidesPerView: 3.3,
    },
    900:{
      slidesPerView: 3,
    },
    769:{
      slidesPerView: 2.5,
    },
    540:{
      slidesPerView: 4.2,
    },
    450:{
      slidesPerView: 3.2,
    },
    370:{
      slidesPerView: 2.5,
    },
    100:{
      slidesPerView: 2,
    },
  },
})