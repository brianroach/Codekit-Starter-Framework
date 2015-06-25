$(document).ready(function() {
  var menuToggle = $('.horizontalnavlogo #js-mobile-menu').unbind();
  $('.horizontalnavlogo #js-navigation-menu').removeClass("show");
    
/* Uncomment this to make menu shrink on link click, for one-page designs

  $('li.nav-link').on('click', function(){
    if($(".horixontalnavlogo .navigation-menu-button").is(":visible")  )  {
      menuToggle.trigger('click');
 } 
  }); 
  
*/

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('.horizontalnavlogo #js-navigation-menu').slideToggle(function(){
      if($('.horizontalnavlogo #js-navigation-menu').is(':hidden')) {
        $('.horizontalnavlogo #js-navigation-menu').removeAttr('style');
      }
    });
  });
});
