$(function() {
    $('.header.header .menu-toogle').on('click', function() {
        if($('.header.header .menu-toogle span').hasClass('off')) {
            $('.header.header .menu-toogle span').removeClass('off').addClass('on');
            $('.menu.collapse').addClass('in');
        } else {
            $('.header.header .menu-toogle span').removeClass('on').addClass('off');
            $('.menu.collapse').removeClass('in');
        }
    });
});
