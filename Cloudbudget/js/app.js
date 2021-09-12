$(function () {
    const headerSelect = $('#selectId');
    const langIcon = $('.header__localization-icon img')[0];
    const langIconNames = ['eu.svg', 'ru.svg'];
    const rawIconPath = langIcon.src.slice(0, -6);

    const hamburger = $('.hamburger');
    const headerContent = $('.header__content');
    const headerNav = $('.header__nav');

    let intro = $('.intro');
    let header = $('.header');
    let introH, scrollPos;

    function changeLangIcon () {
        const currentIndex = headerSelect[0].selectedIndex;
        langIcon.src = rawIconPath + langIconNames[currentIndex];
    }

    headerSelect.on('change', changeLangIcon);

    hamburger.on('click', function () {
        event.preventDefault();
        console.log(headerNav)
        hamburger.toggleClass('is-active');
        headerNav.toggleClass('show');
        headerContent.toggleClass('show');
    });

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