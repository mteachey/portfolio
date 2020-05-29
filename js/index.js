function handleClickToSeeWorkExamples(){
    $('.work-buttons').on('click', '.js-toggle__button-work-all', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-example').addClass('js-toggle__display');
        //$('.example-1').addClass('js-toggle__display');  
      });   
      $('.work-buttons').on('click', '.js-toggle__button-work-apps', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-example').removeClass('js-toggle__display');
        $('.js-type-app').addClass('js-toggle__display');  
      });     
      $('.work-buttons').on('click', '.js-toggle__button-work-websites', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-example').removeClass('js-toggle__display');
        $('.js-type-website').addClass('js-toggle__display');  
      });     
      $('.work-buttons').on('click', '.js-toggle__button-work-react', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-example').removeClass('js-toggle__display');
        $('.js-type-react').addClass('js-toggle__display');  
      });     
      $('.work-buttons').on('click', '.js-toggle__button-work-fullstack', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-example').removeClass('js-toggle__display');
        $('.js-type-fullstack').addClass('js-toggle__display');  
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

$('.work-av-link[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('.blue-dots,.green-dots,.orange-dots').addClass('js-stop-animation');
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top-50,
      },
      800,
      'linear'
    )
  })

function onLoad() {   
    handleClickToSeeWorkExamples();
    MobileMenuAnimation();
    navScrollEffect();
    activeNavLinks();
};
  
$(onLoad);

 
