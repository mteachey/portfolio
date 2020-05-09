function handleClickToSeeWorkExamples(){
    $('.mobile-buttons').on('click', '.js-toggle__mobile-button-work-1', function(event) {
        $('.js-toggle__mobile-button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-example').removeClass('js-toggle__display');
        $('.example-1').toggleClass('js-toggle__display');  
      });   
      $('.mobile-buttons').on('click', '.js-toggle__mobile-button-work-2', function(event) {
        $('.js-toggle__mobile-button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-example').removeClass('js-toggle__display');
        $('.example-2').toggleClass('js-toggle__display');  
      });     
      $('.mobile-buttons').on('click', '.js-toggle__mobile-button-work-3', function(event) {
        $('.js-toggle__mobile-button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-example').removeClass('js-toggle__display');
        $('.example-3').toggleClass('js-toggle__display');  
      });     
      
}

function MobileMenuAnimation(){
        
    $('.mobile-menu-icon-container').on('click',function(event) {
        $(this).toggleClass('change');  
        $('nav').toggleClass('mobile-nav');
    });   
    $('nav').on('click', function(event) {
        $('.mobile-menu-icon-container').removeClass('change');  
        $('nav').removeClass('mobile-nav');
    });        

}


function activeNavLinks(){
    $('.nav-link').on('click', function(event) {
        $('.nav-link').removeClass('link-active') ;
        $(this).addClass('link-active') ;
      });   
}

function navScrollEffect() {
    var header = $(".header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 30) {
            header.removeClass('no-scroll-header').addClass('scroll-header');
        } else {
            header.removeClass("scroll-header").addClass('no-scroll-header');
        }
        if (scroll >= 450) {
            $(".blue-dots, .green-dots, .orange-dots").addClass('no-animation');
        } else {
            $(".blue-dots, .green-dots, .orange-dots").removeClass('no-animation')
        }

    });

    
   
}



function onLoad() {   
    handleClickToSeeWorkExamples();
    MobileMenuAnimation();

    navScrollEffect();
   ;
   activeNavLinks();
  }
  
  $(onLoad);

 
