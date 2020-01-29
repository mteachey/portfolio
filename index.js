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

/*function checkSize(){
    let property = $(".mobile-menu-icon-container").css("display");
    console.log(`this is the property ${property}`);
    if ($(".mobile-menu-icon-container").css("display") == "block" ){
        $('.mobile-menu-icon-container').on('click',function(event) {
            $(this).toggleClass('change');  
            $('nav').toggleClass('mobile-nav');
        });   
        $('nav').on('click', function(event) {
            $('.mobile-menu-icon-container').removeClass('change');  
            $('nav').toggleClass('mobile-nav');
        });       
        console.log('MManimation ran');
    }
    console.log('checkSize ran');
}
*/

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
    //caches a jQuery object containing the header element
    var header = $(".header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.removeClass('no-scroll-header').addClass('scroll-header');
        } else {
            header.removeClass("scroll-header").addClass('no-scroll-header');
        }
    });
}



function onLoad() {   
    handleClickToSeeWorkExamples();
    MobileMenuAnimation();
  //  checkSize();
   // $(window).resize(checkSize);
    navScrollEffect();
   ;
   activeNavLinks();
  }
  
  // when the page loads, call `handleQuiz`
  $(onLoad);

 
