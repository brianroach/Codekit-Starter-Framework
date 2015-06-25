$(document).ready(function() {
  var menuToggle = $('.horizontalnav #js-mobile-menu').unbind();
  $('.horizontalnav #js-navigation-menu').removeClass("show");
    
/* Uncomment this to make menu shrink on link click, for one-page designs

  $('li.nav-link').on('click', function(){
    if($(".horizontalnav .navigation-menu-button").is(":visible")  )  {
      menuToggle.trigger('click');
 } 
  }); 
  
*/

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('.horizontalnav #js-navigation-menu').slideToggle(function(){
      if($('.horizontalnav #js-navigation-menu').is(':hidden')) {
        $('.horizontalnav #js-navigation-menu').removeAttr('style');
      }
    });
  });
});
