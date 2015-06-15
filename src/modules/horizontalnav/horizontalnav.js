$(document).ready(function () {
    var menuToggle = $('#js-mobile-menu').unbind();
    
    $('#js-navigation-menu').removeClass("show");

    menuToggle.on('click', function (e) {
        e.preventDefault();
        $('#js-navigation-menu').slideToggle("fast", function () {
            if ($('#js-navigation-menu').is(':hidden')) {
                $('#js-navigation-menu').removeAttr('style');
            }
        });
    });
    
/*   

UNCOMMENT THIS FOR SINGLE-PAGE NAV, SO A CLICK ON A NAV LINK IN DROPDOWN MODE MAKES THE MENU SHRINK UP 
    
    var navLink = $('.nav-link').unbind();
    
    navLink.on('click', function (e) {
        e.preventDefault();
        
      if ($('#js-mobile-menu').css('display') === 'block') {
        
        $('#js-navigation-menu').slideToggle();
          
      }
    });
*/

});