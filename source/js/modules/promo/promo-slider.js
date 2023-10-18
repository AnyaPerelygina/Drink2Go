import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const createPromoSlider = () => {
  let swiper = new Swiper('.swiper', {
    loop: false,
    speed: 1000,
    allowTouchMove: isMobile(),
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1440: {
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      slidesPerView: 1,
      centeredSlides: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return swiper;
};

export {createPromoSlider};
