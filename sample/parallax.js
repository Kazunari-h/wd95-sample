$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('.parallax-wrapper').each(function () {
        var targetPosition =
            $(this).offset().top;
        if (topWindow > targetPosition -
            windowHeight + 100) {
            $(this).addClass("fadeIn");
        }
    });
});