$(document).ready(function() {
    $( "#shown" ).hide();
    $( "#in" ).hide();
    $( "#slid-down" ).hide();
    $( "#show" ).click(function(){
        $( "#shown" ).show();
    });
    $( "#hide" ).click(function(){
        $( "#hidden" ).hide();
    });
    $( "#toggle" ).click(function(){
        $( "#toggled" ).toggle();
    });
    $( "#slide-up" ).click(function(){
        $( "#slid-up" ).slideUp();
    });
    $( "#slide-down" ).click(function(){
        $( "#slid-down" ).slideDown();
    });
    $( "#slide-toggle" ).click(function(){
        $( "#slide-toggled" ).slideToggle();
    });
    $( "#fade-in" ).click(function(){
        $( "#in" ).fadeIn();
    });
    $( "#fade-out" ).click(function(){
        $( "#out" ).fadeOut();
    });
    $( "#add-class" ).click(function(){
        $( "#add-class" ).addClass("blue");
    });
    $( "#before" ).click(function(){
        $( "#insert-before" ).before("<p>This is before</p>");
    });
    $( "#after" ).click(function(){
        $( "#insert-after" ).after("<p>This is after</p>");
    });
    $( "#append" ).click(function(){
        $( "#append-to" ).append("<p>This is append</p>");
    });
    $( "#html" ).click(function(){
        alert($( "#html" ).html());
    });
    $( "#attr" ).click(function(){
        alert($( "#attr" ).attr());
    });
    $( "#val" ).click(function(){
        alert($( "#val" ).val());
    });
    $( "#text" ).click(function(){
        alert($( "#text" ).text());
    });
    $( "#data" ).click(function(){
        alert($( "#data" ).data());
    });
});