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
    
    //smooth scroll try
    
    var hashTagActive = "";
    $(".scroll").click(function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 2000, 'swing');
            hashTagActive = this.hash;
        }
    });


});