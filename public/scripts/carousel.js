// swiper logic
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//animate slides on hover
$(".swiper-slide").hover(( event) => {
  $(event.currentTarget).children('.slide-img').toggleClass("slide-img-hover slide-img-inactive");
});

$(".swiper-slide").hover(( event) => {
    $(event.currentTarget).children('.slider-info-box').children('.slider-info-box-inner').toggleClass("slider-info-box-active slider-info-box-inactive");
  });
  