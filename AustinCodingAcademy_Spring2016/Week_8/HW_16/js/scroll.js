$(document).ready(function(){

    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll >= 0) {
            
            $('.my_top').addClass('animated fadeIn');
            
            $('for_real').addClass('animated pulse infinite');
        }
        
    });
    // Four Items Function
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 25) {
            
            $('.real_stuff').addClass('animated rotateIn');
            $('.real_stuff').removeClass('hide_me');
            
            $('.1_startrek').addClass('animated fadeInRightBig');
            $('.1_startrek').removeClass('hide_me');
        
            
            $('.3_startrek').addClass('animated fadeInLeftBig');
            $('.3_startrek').removeClass('hide_me');
            
            $('.2_startrek').addClass('animated fadeInUpBig');
            $('.2_startrek').removeClass('hide_me');
        }
        
    });
    
        $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 80) {
            
            $('.for_real').addClass('animated fadeIn');
            
            $('.for_real').removeClass('hide_me');
        }
    });
});