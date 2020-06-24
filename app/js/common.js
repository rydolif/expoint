$(function() {

//-------------------------скорость якоря---------------------------------------
  $(".click").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');
  });


//-------------------------------slider---------------------------------------
  var swiper = new Swiper('.services__slider', {
    slidesPerView: 3,
    spaceBetween: 15,
    pagination: {
      el: '.services__pagination',
      clickable: true,
    },
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
    }
  });

});
