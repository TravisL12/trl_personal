$(document).ready(function() {

  $('#name_backing span').mouseenter(function(){

    $(this).fadeTo('slow', 0.5);
  }).on('mouseleave',function(){
    $(this).fadeTo('slow', 1.0)
  })

});
