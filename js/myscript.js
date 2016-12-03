/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

/*jslint vars: true, devel: true*/
/*global $, jQuery, alert*/



$(window).scroll(function () {
    'use strict';

    var sticky = $('#myNavbar'),
        scroll = $(window).scrollTop(),
        navbar = $('.navbar'),
        top = $('#top');

    if (scroll > 108) {

        sticky.addClass('navbar-fixed-top');
        top.addClass('hero-fixed-padding');

    } else {

        sticky.removeClass('navbar-fixed-top');
        top.removeClass('hero-fixed-padding');

    }

});
