// FOR CAPSTONE POSTS
$(document).ready(function () {
    uvu.import('slider', '.capstone-slider', function () {
        $('.capstone-slider ul').slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 600,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
});