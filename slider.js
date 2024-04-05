// FOR USE WITH TESTIMONIAL SLIDER
$(document).ready(function () {
    uvu.import('slider', '.responsive-slider', function () {
        $('.responsive-slider ul').slick({
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 600,
            autoplay: true,
            autoplaySpeed: 10000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick" instead of a settings object
            ]
        });
    });
});