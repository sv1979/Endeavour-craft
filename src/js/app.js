window.Popper = require('popper.js');
window.$ = window.jQuery = require('jquery');

import Swiper from 'swiper';
import AOS from 'aos';
import mixitup from 'mixitup';
import 'aos/dist/aos.css';
import 'swiper/css/swiper.css';

AOS.init();

$(document).ready(function () {

    var includeDiv = $("#include");
    $(window).on('hashchange', function () {
        var href = location.hash.slice(1) + ".html";
        includeDiv.load('include/' + href);
    });

    $('[data-popup-open]').on('mouseover', function (event) {
        event.preventDefault();
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);


    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function (event) {

        event.preventDefault();

        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
    });

    if($('.filter-container').length) {
        var mixer = mixitup('.filter-container');
    }
});

$(document).ready(function () {
    var otherLinks = $('.desktop-links a').not('.dropbtn');
    function loadHome() {
        // $('#tab-wrapper').load("includes/homeowner.html");
        $('.menubox').hide();
        $('.menubox:first-child').show()
    }

    function removeFade() {
        $('.pseudo-fade').removeClass('fade-in');
    }

    function emptyDiv() {
        $('.menubox').hide()
    }

    AOS.init();

    $('.dropbtn').on('click', function () {
        loadHome();
        $('.popup').fadeIn();
    });

    $('#tab-wrapper').on('click', ".image-link", function () {
        var page = $(this).attr("data-sub-open");

        function loadPage() {
            $('#tab-wrapper').load("includes/" + page + ".html");
            $(`.menubox#${page}`).show()
        }
        $('.pseudo-fade').addClass('fade-in');
        setTimeout(emptyDiv, 300);
        setTimeout(removeFade, 330);
        setTimeout(loadPage, 330);
    });

    $('#tab-wrapper').on('click', ".back", function (event) {
        $('.pseudo-fade').addClass('fade-in');
        setTimeout(emptyDiv, 300);
        setTimeout(removeFade, 330);
        setTimeout(loadHome, 330);
    });

    $('#tab-wrapper').on('click', ".popup-close", function (event) {
        $('.popup').fadeOut();
    });

    $(otherLinks).on('mouseover', function (event) {
        $('.popup').fadeOut();
    });


    $('.close-form').on('click', function (event) {
        $('.popup').fadeOut();
    });

    $(window).on('resize', function () {
        var win = $(this);
        if (win.width() <= 1201) {
            $('.popup').hide();
        }
    });

});

$(document).ready(function () {

    $('.mobile_head > span').click(function (e) {
        let slug = $(e.currentTarget).data('slug');
        $(`[data-menu="${slug}"]`).fadeIn(350);
    });

    $(".select > span").click(function () {
        $(this).parents('.mobile_body').fadeOut();
    });

    $(".sub-menu > li").click(function () {
        var activeMenu = $(this).attr("rel");
        $("#" + activeMenu).fadeIn();
    });

    $('.down .down-menu li:first').hide();

    $('.down').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.down-menu').slideToggle(300);
    });

    $('.down').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.down-menu').slideUp(300);
    });

    $('.down .down-menu li').click(function () {
        $(this).parents('.down').find('span').text($(this).text());
        $(this).parents('.down').find('input').attr('value', $(this).html());
        $('.down .down-menu li').show();
        $(this).hide();
    });

});


$(function () {
    $('.toggle-nav').click(function () {

        $('body').toggleClass('show-nav');

        if ($("body").hasClass("show-nav")) {
            $('.nav-icon').addClass('active');
            $('.mobile-header').removeClass('scroll');
        } else {
            $('.nav-icon').removeClass('active');
            $('.mobile-header').addClass('scroll');
        }
    });

    $(window).on('resize', function () {
        var win = $(this);
        if (win.width() >= 1200) {
            $('body').removeClass('show-nav');
        }
    });

    $('.desktop-nav').mouseover(function () {
        $('.desktop-nav li .active').addClass('acd');
    });

    $('.desktop-nav li a').mouseout(function () {
        $('.desktop-nav li .active').removeClass('acd');
    });

});

$(document).ready(function () {

    $(".tab_content:first").show();
    $(".tform_content:first").show();

    $(".tabs input").on('click', function () {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        var checked = $(this).attr("checked");
        $(checked).removeClass("active");
        $(this).addClass("active");

    });

    $(".tform input").on('click', function () {

        $(".tform_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        var checked = $(this).attr("checked");
        $(checked).removeClass("active");
        $(this).addClass("active");

    });

});

$(document).ready(function () {

    $(window).on('load', function () {
        $(".video-thumbnail iframe").hide();
    });

    $(".play").on('click', function (event) {
        $(this).fadeOut();
        $(".video-thumbnail .thumbnail").fadeOut(500);
        $(".video-thumbnail iframe").delay(400).fadeIn(300);
        $(".video-thumbnail iframe")[0].src += "&autoplay=1";
        event.preventDefault();
    });

});

$(document).ready(function () {

    var accordion_head = $('.accordion > li > a'),
        accordion_body = $('.accordion li > .sub-menu, .last-sub-menu');

    accordion_head.on('click', function (event) {

        event.preventDefault();
        if ($(this).attr('class') != 'active') {
            accordion_body.slideUp('normal');
            $(this).next().stop(true, true).slideToggle('normal');
            accordion_head.removeClass('active');
            $(this).addClass('active');
        } else {
            accordion_body.slideUp('normal');
            accordion_head.removeClass('active');
        }
        // if ($(this).attr('class') != 'active') {
        //   accordion_body.hide();
        //   accordion_head.hide();
        //   $(this).next().stop(true, true).toggle('normal');
        //   accordion_head.removeClass('active');
        //   $(this).addClass('active');
        // } else {
        //   accordion_body.hide();
        //   accordion_head.show();
        //   $(this).removeClass('active');
        // }
    });

});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    direction: 'vertical',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});

var galleryThumbsTwo = new Swiper('.gallery-thumbs-desktop', {
    spaceBetween: 25,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var galleryTopTwo = new Swiper('.gallery-desktop', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbsTwo,
    },
});
