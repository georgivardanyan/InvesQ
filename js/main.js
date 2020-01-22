 $( document ).ready(function() {

   var _s = {

     bodyLanding : '#landing',
     navScroll : '#navbarscroll',
     homeNavLink  : '#navbarscroll .nav-link',

   };

   $(_s.bodyLanding).scrollspy({

     spy: scroll,
     target: '#navbarscroll',
     offset: 80,

   });

   $(_s.homeNavLink).click(function () {

     $(_s.navScroll).removeClass('show');

   });

/*   $(document).on("scroll", function(){
     if
     ($(document).scrollTop() > 86){
       $("#sticky").addClass("sticky--active");
       $('#logo').attr('src','img/logo.svg');
     }
     else
     {
       $("#sticky").removeClass("sticky--active");
       $('#logo').attr('src','img/logo-light.svg');
     }
   });*/

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

