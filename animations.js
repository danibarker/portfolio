
    // bounce animation
    
    // $(function() {
    // $(".navbut[href]").on('click', function(e) {
    // e.preventDefault();
    // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-180}, 300, 'swing');
    // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-210}, 100, 'linear');
    // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-180}, 100, 'linear');
    // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-190}, 100, 'linear');
    // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-180}, 100, 'linear');
    // });
    // });
    // fade animation
    $(document).ready(function() {

    
    $(window).scroll( function(){
        
        
        $(".fades").each( function(i){
            console.log(); 
            let bottom_of_object = $(this).offset().top + $(this).outerHeight();
            let top_of_window = $(window).scrollTop();
            let bottom_of_window = $(window).scrollTop()+$(window).height();
            let top_of_object = $(this).offset().top;
            console.log(top_of_window ,top_of_object,bottom_of_object,bottom_of_window);
            
            if( (top_of_window > bottom_of_object || top_of_object > bottom_of_window) && $(this).hasClass("fadein")){
                
                $(this).removeClass('fadein');
                $(this).addClass('fadeout')
                    
            } 
            
            else if (top_of_window < bottom_of_object && top_of_object < bottom_of_window && $(this).hasClass("fadeout")){
                $(this).removeClass('fadeout');
                $(this).addClass('fadein');
            }
            
        });

        if ($(window).scrollTop() > $('#nav').offset().top) {
            $('#nav').removeClass('fadein');
            $('#nav').addClass('fadeout');
            $('#navside').removeClass('fadeout');
            $('#navside').addClass('fadein');
        } else {
            $('#navside').removeClass('fadein');
            $('#navside').addClass('fadeout');
            $('#nav').removeClass('fadeout');
            $('#nav').addClass('fadein');
        }
        
    
    });
    
});
