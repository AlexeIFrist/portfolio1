jQuery(function ($) {
    $('.gallery__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.gallery__nav',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
            }
          }
        ]
      });
      $('.gallery__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gallery__for',
        centerMode: true,
        arrows: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
            }
          }
        ]
      });
})