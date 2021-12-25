//----open-close----------//
$('.navbar-toggler').on('click', function(){
  $(this).toggleClass('menu-open');
});
//----------------------------//



$(function(){
    SyntaxHighlight.all();
         });
  $(window).load(function(){
    $('.flexslider').flexslider({
    animation: "slide",
      start: function(slider){
    $('body').removeClass('loading');   
    }
       }); 
       });

