var randomColor = function(){
  var colors = Array("green", "blue", "yellow", "black"), idx;
  idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
}

$(document).ready(function() {

  $('#header span').mouseenter(function(){
    $(this).css("color",randomColor);
  }).on('mouseleave',function(){
    $(this).css('color', '#ddd')
  })

});
