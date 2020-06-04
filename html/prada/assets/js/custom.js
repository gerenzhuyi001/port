<<<<<<< HEAD
var swiper = new Swiper('#banner .swiper-container');
=======
var swiper = new Swiper('#banner .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
      enabled: true,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
>>>>>>> a3fcdae1c73b6f32539264d0ac1d28959667d67f
