function handleClickToSeeWorkExamples(){
    $('.js-toggle-buttons-container').on('click', '.js-toggle__button-work-all', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-container__example').addClass('js-toggle__display');
        //$('.example-1').addClass('js-toggle__display');  
      });   
      $('.js-toggle-buttons-container').on('click', '.js-toggle__button-work-apps', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-container__example').removeClass('js-toggle__display');
        $('.js-type-app').addClass('js-toggle__display');  
      });     
      $('.js-toggle-buttons-container').on('click', '.js-toggle__button-work-websites', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-container__example').removeClass('js-toggle__display');
        $('.js-type-website').addClass('js-toggle__display');  
      });     
      $('.js-toggle-buttons-container').on('click', '.js-toggle__button-work-react', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-container__example').removeClass('js-toggle__display');
        $('.js-type-react').addClass('js-toggle__display');  
      });     
      $('.js-toggle-buttons-container').on('click', '.js-toggle__button-work-fullstack', function(event) {
        $('.js-toggle__button-work').removeClass('button-active') ;
        $(this).addClass('button-active') ;
        $('.work-container__example').removeClass('js-toggle__display');
        $('.js-type-fullstack').addClass('js-toggle__display');  
      });     
      
}

function MobileMenuAnimation(){        
    $('.header__mobile-menu-icon-container').on('click',function(event) {
        $(this).toggleClass('change');  
        $('.nav').toggleClass('mobile-nav');
    });   
    $('.nav').on('click', function(event) {
        $('.header__mobile-menu-icon-container').removeClass('change');  
        $('.nav').removeClass('mobile-nav');
    });        
}


function activeNavLinks(){
    $('.nav__list-item--home').on('click', function(event) {
        $('.nav__list-item').removeClass('link-active') ;
        $(this).addClass('link-active') ;
      });   
    $('.js-active--home').on('click',function(event){
      $('.nav__list-item').removeClass('link-active');
      $('.nav__list-item--home-link').addClass('link-active')
    });
    $('.js-active--contact').on('click',function(event){
      $('.nav__list-item').removeClass('link-active');
      $('.nav__list-item--contact-link').addClass('link-active')
    })
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

$('.js-smooth-scroll[href*="#"]').on('click', function(e) {
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

/**********cursor animation***********/

// set the starting position of the cursor outside of the screen
let clientX = -300;
let clientY = -300;
const innerCursor = document.querySelector(".cursor--small");
const outerCursor = document.querySelector(".cursor--large");
const borderCursor = document.querySelector(".cursor--border");


const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  
  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    
    outerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    borderCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};


const initHovers = () => {

  $(".js-change-cursor").hover(function () {
   // $(this).toggleClass("js-nav__list-item--hover");
    $('.cursor--large').toggleClass("js-cursor--hover");
    $('.cursor--border').toggleClass("js-cursor--hover");
    $('.cursor--small').toggleClass("js-cursor--small-get-bigger");
  });

};


function onLoad() {   
    handleClickToSeeWorkExamples();
    MobileMenuAnimation();
    navScrollEffect();
    activeNavLinks();
    initCursor();
    initHovers();
};
  
$(onLoad);

 
