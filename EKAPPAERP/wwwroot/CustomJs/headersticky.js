
    var header = $('#header .navbar');
    var headerHeight = header.outerHeight();

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > headerHeight) {
            header.addClass('sticky');
        } else {
            header.removeClass('sticky');
        }
    });
