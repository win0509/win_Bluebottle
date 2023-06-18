//Overlay Menu
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const overlayMenu = document.querySelector('.overlay');

menuIcon.addEventListener('click', function (){
    overlayMenu.classList.add('on');
});

closeIcon.addEventListener('click', function(){
    overlayMenu.classList.remove('on');
});


//Coffee Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
   // pagination: {
     // el: ".swiper-pagination",
      //clickable: true,
   // },
   autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

//AOS
//AOS.init();
