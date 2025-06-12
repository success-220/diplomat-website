document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu_btn');
    const closeBtn = document.getElementById('close_btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
      menu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      menu.classList.remove('active');
    });

    // Swiper Initialization
    var swiper = new Swiper(".heroSwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true
    });

    var swiper2 = new Swiper(".heroSwiper2", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true
    });
  });

