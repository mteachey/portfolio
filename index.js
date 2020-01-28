function handleClicToSeeWorkExamples(){
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
      
}
function handleMobileMenuAnimation(){
    $('.mobile-menu-icon-container').on('click',function(event) {
        $(this).toggleClass('change');  
        $('nav').toggleClass('mobile-nav');
      });   
      $('nav').on('click',function(event) {
        $(this).toggleClass('change');  
        $('nav').toggleClass('mobile-nav');
      });   
      
      
}

function onLoad() {   
    handleClicToSeeWorkExamples();
    handleMobileMenuAnimation();
  }
  
  // when the page loads, call `handleQuiz`
  $(onLoad);

