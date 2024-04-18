import Swiper from 'swiper/swiper-bundle';
export const clientWidth = document.body.clientWidth;
export let brandSwiper;
if (clientWidth < 768) {
  brandSwiper = new Swiper('.brands-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
  });
}
export let equipmentSwiper;
if (clientWidth < 768) {
  equipmentSwiper = new Swiper('.equipments-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
  });
}
export let priceSwiper;
if (clientWidth < 768) {
  priceSwiper = new Swiper('.prices-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 15,
  });
}
