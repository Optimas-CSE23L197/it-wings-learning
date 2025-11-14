export const defaultSwiper = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
  breakpoints: {
    640: { slidesPerView: 1 }, // Mobile
    768: { slidesPerView: 2 }, // Tablet
    1024: { slidesPerView: 4 }, // Desktop
  },
};
