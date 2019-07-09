// $('#national-parks-toggle').click(function() {
//     $('#national-parks').hide();
// });
// $('#state-parks-texas-toggle').click(function() {
//     $('#state-parks-texas').hide();
// });

// $('#national-parks-toggle').click(function() {
//     $('#national-parks').show();
// });
//
// $('#state-parks-texas-toggle').click(function() {
//     $('#state-parks-texas').show();
// });












// $('#national-parks-toggle').click(function() {
//     $('#national-parks').toggle();
// });
// $('#state-parks-texas-toggle').click(function() {
//     $('#state-parks-texas').toggle();
// });






















$('#national-parks-toggle').click(function() {
    $('#national-parks').slideUp(1500);
});

$('#state-parks-texas-toggle').click(function() {
     $('#state-parks-texas').fadeToggle(2500, function() {
         $(this).parent().append("<h1>it gone</h1>");
     });
});



















$(document).on('keyup', function(e) {
    var keyPress = e.key;
    switch(keyPress){
        case("ArrowUp"):
            $( ".grand-daughter" ).animate({ "bottom": "+=25px" }, "fast" );
            break;
        case("ArrowDown"):
            $( ".grand-daughter" ).animate({ "bottom": "-=25px" }, "fast" );
            break;
        case("ArrowLeft"):
            $(".grand-daughter").animate({ "left": "-=25px" }, "fast" );
            break;
        case("ArrowRight"):
            $(".grand-daughter").animate({"left": "+=25px"}, "fast");
            break;
        default:
            break;
    }
});