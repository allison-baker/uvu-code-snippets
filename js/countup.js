// countup
uvu.import('countup', '.countup', function () {
    $('.countup').each(function (i) {
        // reset count
        var isDecimal = $(this).text().includes('.'),
            decimal = isDecimal ? 2 : 0,
            num = isDecimal ? parseFloat($(this).text()) : parseInt($(this).text()),
            del = parseInt($(this).attr('data-count-delay') ? $(this).attr('data-count-delay') : 0);

        // set the countup to happen when scrolled into view
        if ($(this).hasClass("noScroll")) {
            var opts = {
                useEasing: true
            },
                dur = $(this).attr('data-count-duration') ? $(this).attr('data-count-duration') : 3,
                cup = new CountUp(this, 0, num, decimal, dur, opts).start();
        } else {
            $(this).scrollClass({
                delay: del,
                threshold: 50,
                callback: function (el) {
                    var opts = {
                        useEasing: true
                    },
                        dur = $(this).attr('data-count-duration') ? $(this).attr('data-count-duration') : 3,
                        cup = new CountUp(this, 0, num, decimal, dur, opts).start();
                }
            });
        }
    });
});