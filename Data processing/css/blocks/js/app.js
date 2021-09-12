$(function () {

    const headerContent = $('.header__content');
    const header = $('.header')
    const navToggle = $('#navToggle');

    let intro = $('.intro');
    let introH, scrollPos;

    /* Toggle for nav */

    navToggle.on('click', function (event) {
        event.preventDefault();
        headerContent.toggleClass('show');
    })


    /* Fixed header */
    function checkScroll(introH, scrollPos) {
        if (scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }

    $(window).on('scroll load resize', function () {
        introH = intro.innerHeight() / 2;
        scrollPos = $(this).scrollTop();

        checkScroll(introH, scrollPos)
    });
})