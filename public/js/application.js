function letterColor(element, newColor){
  var fadeTime = 200;
  return $(element).animate({color: newColor}, fadeTime, 'linear')
};

var randomColor = function(){
  // var otherColors = Array('#447180', '#D4f4ff', '#88e1ff', '#6a7a80', '#6db4cc'), color;
  // color = Math.floor(Math.random() * otherColors.length);
  // return otherColors[color]
  return "#" + Math.floor(Math.random()*16777215).toString(16);
};

function letterClick(element){
  var letter      = element.innerText.toLowerCase();
  var indexLetter = $( ".header .fullname li" ).index(element) + 1;
  var leadLetter  = indexLetter < 7 ? 'f' : indexLetter === 14 ? 'l2' : 'l';
  return $.get("letters/" + leadLetter + letter, { letter: (leadLetter + letter) }, function(data){
   $('.container').html(data);
 });
};

$(document).ready(function() {

  //Change letter color
  var origColor = $('.header .fullname li').css('color');
  $('.header .fullname li').on({
    mouseenter: function(){
     letterColor(this, randomColor()).css('cursor','pointer')},
     mouseleave: function(){
       letterColor(this, origColor)}
     });

  //Display the clicked letter
  $('.header .fullname li').click(function(){
    letterClick(this);
  });

  //Sidebar icon wiggle
  $('.media_icon').hover(function(){
    $(this).ClassyWiggle('start', { limit: 25, degrees: [-4, -8, -12, -8, -4, 0, 4, 8, 12, 8, 4, 0] });
  },function(){
    $(this).ClassyWiggle('stop');
  });

});
