jQuery(document).ready(function() {

   var _s = {

     navScroll : '#navbarscroll',
     homeNavLink  : '#navbarscroll .nav-link',
     homeSelect  : '#investmentAmount',
     scrollTop : '.back-to-top',

   };

   $(_s.homeNavLink).click(function () {

     $(_s.navScroll).removeClass('show');

   });

    $(_s.scrollTop).click(function (e) {

      e.preventDefault();

      $('html,body').animate({
        scrollTop: 0
      }, 300);

      return false;
    });

   $(_s.homeSelect).niceSelect();

  $(".p-invest").owlCarousel({

    loop: false,
    nav: false,
    responsive: {
      0: {
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 1,
        stagePadding: 15,
        margin: 15,
        dots: true
      },
      500: {
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 2,
        stagePadding: 15,
        margin: 15,
        dots: true
      },
      772: {
        items: 2,
        stagePadding: 62,
        margin: 15,
        dots: false
      },
      992: {
        items: 3,
        stagePadding: 124,
        margin: 30,
        dots: false
      }
    }
  });

     $(".media-carousel").owlCarousel({

          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          margin: 30,
          loop: false,
          nav: false,
          dots: true,
          responsive:{
              0:{
                items: 2,
                //stagePadding: 0,
              },
              500:{
                items: 6,
                //stagePadding: 0,
              }
          }
     });
 });

