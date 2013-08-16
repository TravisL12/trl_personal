var randomColor = function(){
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

$(document).ready(function() {

  var origColor = $('#name_backing span').css('color');
  var fadeTime = 200;

  $('#name_backing span').mouseenter(function(){
    $(this).animate({color: randomColor()}, fadeTime, 'linear').css('cursor','pointer');
  }).on('mouseleave', function(){
    $(this).animate({color: origColor}, fadeTime, 'linear')
  });

  $('#name_backing span').click(function(){
    var letter = this.innerText.toLowerCase();
    var count = $(this).prevAll('span').length + 1;
    var leadLetter = (count < 7) ? 'f' : 'l';
    var leadLetter = (count === 14) ? 'l2' : leadLetter;

    $("[class^='letter_']").css('display', 'none')
    $(".letter_" + leadLetter + letter).fadeIn('slow')

  })

});
