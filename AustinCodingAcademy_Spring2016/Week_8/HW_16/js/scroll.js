$(document).ready(function(){

    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 10) {
            
            $('.my_top').addClass('animated fadeIn')
        }
        
    });
    // Four Items Function
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 0) {
            
            $('#real_stuff').addClass('animated fadeInDownBig');
            $('#').removeClass('hide_me');
            
            $('.1_startrek').addClass('animated fadeInRightBig');
            $('#my_2').removeClass('hide_me');
            
            $('.3_startrek').addClass('animated fadeInLeftBig');
            $('#my_3').removeClass('hide_me');
            
            $('.2_startrek').addClass('animated fadeInUpBig');
            $('#my_4').removeClass('hide_me');
        }
        
    });
    
});