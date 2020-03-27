$(function () {

    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots:true,
        autoplay:3000,
        
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]

        
    });
    
    $('.btn__menu').on('click',function(){
        $('.menu__list') .slideToggle();

    });
 
});

