$(function () {
  
  // All carousels

  if($(window).width() < 577){
    $('.priority-carousel > .priority-group').removeClass('row');
    $('.bonus-carousel > .bonus-group').removeClass('row');
  }else{
    $('.priority-carousel > .priority-group').addClass('row');
    $('.bonus-carousel > .bonus-group').addClass('row');
  }
  const init = $(window).width() < 577 ? true : false
  const priorityCarousel = new Swiper('.priority-carousel', {
    init: init,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
  const bonusCarousel = new Swiper('.bonus-carousel', {
    init: init,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  
  const clientCarousel = new Swiper('.client-carousel.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' из ' +
          '<span class="' + totalClass + '"></span>'
      },
    },
    
  });

  if( $(window).width() < 768 ){ 
    $('.menu-hamburger').on('click', function () {
      $('header').toggleClass('opened');
    })
  }

  $('.footer-top-box .footer-item > span').on('click', function () {
    $(this).parent().toggleClass('opened');
    $(this).parent().siblings().removeClass('opened');
  })

})