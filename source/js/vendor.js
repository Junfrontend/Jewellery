import Swiper from './vendor.js';

var swiper = swiper = new window.Swiper('.swiper-container', {
  loop: true,
  slidesPerGroup: 2,
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  centeredSlidesBounds: true,
  slidesOffsetBefore: -546,

  pagination: {
    el: document.querySelector('.catalog__pagination'),
    clickable: 'true',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  navigation: {
    nextEl: '.slider-control__right-arrow',
    prevEl: '.slider-control__left-arrow',
  },

  breakpoints: {
    319: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesOffsetBefore: -94,
      pagination: {
        el: document.querySelector('.catalog__pagination'),
        clickable: 'true',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '<span>of</span>' + '<span class="' + totalClass + '"></span>';
        },
      },
    },
    450: {
      slidesOffsetBefore: -80,
      pagination: {
        el: document.querySelector('.catalog__pagination'),
        clickable: 'true',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '<span>of</span>' + '<span class="' + totalClass + '"></span>';
        },
      },
    },
    550: {
      slidesOffsetBefore: -60,
      spaceBetween: 40,
      pagination: {
        el: document.querySelector('.catalog__pagination'),
        clickable: 'true',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '<span>of</span>' + '<span class="' + totalClass + '"></span>';
        },
      },
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesOffsetBefore: -222,
    },
    1023: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      slidesOffsetBefore: -470,
      spaceBetween: 23,

    },
    1365: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      slidesOffsetBefore: -546,
      spaceBetween: 25,
    },
  },
});

var swiperCat = swiper = new window.Swiper('.swiper-container--item-page', {
  loop: true,
  slidesPerGroup: 2,
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
  centeredSlidesBounds: true,
  slidesOffsetBefore: -540,

  pagination: {
    el: document.querySelector('.catalog__pagination'),
    clickable: 'true',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  navigation: {
    nextEl: '.slider-control__right-arrow',
    prevEl: '.slider-control__left-arrow',
  },

  breakpoints: {
    319: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesOffsetBefore: -94,
      pagination: {
        el: document.querySelector('.catalog__pagination'),
        clickable: 'true',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + '<span>of</span>' + '<span class="' + totalClass + '"></span>';
        },
      },
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesOffsetBefore: -221,
    },
    1023: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      slidesOffsetBefore: -420,
      spaceBetween: 23,
    },
    1365: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      slidesOffsetBefore: -540,
      spaceBetween: 30,
    },
  },
});


if (Swiper) {
  document.querySelector('.slider-control__right-arrow').addEventListener(('click'), function () {
    swiper.slideNext();
    swiperCat.slideNext();
  });
}
