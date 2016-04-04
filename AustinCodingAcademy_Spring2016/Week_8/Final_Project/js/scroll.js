$(document).ready(function(){
    
$(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 100) {
            
            $('.the_encounter').addClass('animated fadeIn');
            
            $('.the_encounter').removeClass('hide_me');
            
        }
        
    });

});
    
   