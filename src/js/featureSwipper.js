import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const featureSwiper = new Swiper('[data-feature-swiper]', {
  modules: [Pagination, Autoplay],

  loop: true,
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: false,

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 47,
      centeredSlides: false,
    },
  },

  pagination: {
    el: '[data-feature-pagination]',
    clickable: true,
  },

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
