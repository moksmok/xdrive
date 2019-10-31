

//        MOBILE NAV


const menuBtn = document.querySelector('.btn-menu-rwd');
const menuBtnClose = document.querySelector('.btn-close');
const menu = document.querySelector('.menu-navi');
const menuNav = document.querySelector('.response-menu');


menuBtn.addEventListener('click', showMenu);
menuBtnClose.addEventListener('click', hideMenu);





function showMenu(e) {
  menu.classList.add('show');
  menuNav.classList.add('show');
  menuBtn.classList.add('hide');
  menuBtnClose.classList.add('show');
  e.preventDefault();
};

function hideMenu(e) {
  menu.classList.remove('show');
  menuNav.classList.remove('show');
  menuBtn.classList.remove('hide');
  menuBtnClose.classList.remove('show');
  e.preventDefault();
}

$('.response-menu__item').click(function(e) {
  menuBtn.classList.remove('hide');
  menu.classList.remove('show');
  menuNav.classList.remove('show');
  menuBtnClose.classList.remove('show');
  e.preventDefault();
});



//      PUT CURRENT DATE TO FORM AND SET AS MINIMAL


var today = new Date().toISOString().split('T')[0];
document.getElementsByName("data_podstawienia")[0].setAttribute('min', today);
document.getElementsByName("data_zwrotu")[0].setAttribute('min', today);

document.getElementById("dateRent").valueAsDate = new Date()
document.getElementById("dateReturn").valueAsDate = new Date()


//    TIME PICKER


$('.timepicker').timepicker({
  timeFormat: 'HH:mm',
  interval: 60,
  
  defaultTime: '14',
  startTime: '08:00',
  dynamic: false,
  dropdown: true,
  scrollbar: true
});





//      SCROLL TO ELEMENT

 $('a[href^="#"]').click(function(event){
  event.preventDefault();
  var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
  //change this number to create the additional off set        
  var customoffset = 0;
  $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
});











//      SWIPER CARS


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    
    
     // If we need pagination
     pagination: {
      el: '.swiper-pagination',
    },




      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },

        800: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        
        
      }
  });





  //      VH MOBILE
  // We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});






  //      OPEN CAR DESCRIPTION ON CLICK

  let carDesc = document.querySelector('#open-desc-mustang');
  let carDesc2 = document.querySelector('#open-desc-focus');

  let carOverlay = document.querySelector('#overlay-car-mustang');
  let carOverlay2 = document.querySelector('#overlay-car-focus');

  let carOverlayClose = document.querySelector('.overlay-close');

  carDesc.addEventListener('click', function () {
    
      carOverlay.style.height = '100%';
    
  })

  carDesc2.addEventListener('click', function () {
    
    carOverlay2.style.height = '100%';

})






  
        



  




