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

// header Stiky
// const navBar = document.querySelector('.nav-bar')
// const scrY = window.screenTop;

// window.addEventListener("scroll", () => {
//   if(scrY > 0){
//     navBar.setAttribute("style", "background : transparent; transition: .5s;")
//   }else{
//     navBar.setAttribute("style", "background : #01A1DD;");
//   }
// });


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

  // insta Hover
  // const instaImg = document.querySelectorAll('.insta-img img');
  // const instaIcon = document.querySelector('.insta-icon')
  // console.log(instaImg);
  // console.log(instaIcon);
  // instaImg.forEach((img) => function() {
  //   img.addEventListener('mouseover',function (){
  //     instaIcon.classList.add('on');
      
  //   });
  // });


//AOS
AOS.init();
