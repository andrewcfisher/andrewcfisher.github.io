$(document).ready(function () {

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll > 100) {

            $('.the_encounter').addClass('animated fadeIn');
            $('.the_encounter').removeClass('hide_me');


        }

    });

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll > 290) {

            $('.second_p').addClass('animated fadeIn');
            $('.second_p').removeClass('hide_me');

        }

    });

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll > 1800) {

            $('#sensitive').addClass('animated fadeIn');
            $('#sensitive').removeClass('hide_me');


        }

    });

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll > 1900) {
            $('#intention').addClass('animated fadeIn');
            $('#intention').removeClass('hide_me');

        }

    });


});