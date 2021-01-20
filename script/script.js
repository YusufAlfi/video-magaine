// navbar fixed
if ($(window).width() > 992) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('#navbar_top').addClass("navbar-fixed-top");

            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('#navbar_top').removeClass("navbar-fixed-top");

            $('body').css('padding-top', '0');
        }
    });
}



// button-scroll-to-top
var btn = $('#button-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});