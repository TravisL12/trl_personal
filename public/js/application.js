function letterColor(element, newColor){
  var fadeTime = 200;
  return $(element).animate({color: newColor}, fadeTime, 'linear')
}

var randomColor = function(){
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function letterClick(element){
  var letter      = element.innerText.toLowerCase();
  var indexLetter = $( "#name_backing span" ).index(element) + 1;
  var leadLetter  = indexLetter < 7 ? 'f' : indexLetter === 14 ? 'l2' : 'l';
  return $(".letter_" + leadLetter + letter)
}

$(document).ready(function() {

  var origColor = $('#name_backing span').css('color');
  $('#name_backing span').on({
    mouseenter: function(){
      letterColor(this, randomColor()).css('cursor','pointer')},
    mouseleave: function(){
      letterColor(this, origColor)}
    });

  //Display the clicked letter
  $('#name_backing span').click(function(){
    $("[class^='letter_']").css('display', 'none')
    letterClick(this).fadeIn('slow')
  })

});
