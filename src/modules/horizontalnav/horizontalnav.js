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
    
 

// TODO Javascript for menu to shrink when nav links are clicked, for single-page layouts


});