var $ = require('jquery-browserify');
var p5 = require('p5');

$('document').ready(function(){
  var inactivityTime; //time the ui waits until it resets itself
  iFrameResize();
  $('.index-link').click(function(e){
    $('#sidebar').addClass('sb-shown');
  });
  $('.forward-link').click(function(e){
    e.preventDefault();
    $('#forward').addClass('shown');
  });
  $('.close').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#sidebar').removeClass('sb-shown');
    $('#forward').removeClass('shown');
  });
  $('.proj-link a').click(function(e){
    e.preventDefault();
    var src = $(this).attr('href');
    $('iframe').attr('src', src);
    $('h1').removeClass('title-shown');
    $('#sidebar').removeClass('sb-shown');
  });

  function showRefreshHint(mousePos){
    // if the mouse is in the zone, do it!
    if (mousePos < 400) {
       if ($('#menu').hasClass('shown')){
          return;
       }
       else{
         $('#menu').addClass('shown');
       }
    }
    else if ($('#menu').hasClass('shown')){
      $('#menu').removeClass('shown');
     }
  }
  function resetTimer() {
    clearTimeout(inactivityTime);
    inactivityTime = setTimeout(logout, 3000);
  }
  function logout() {
    if ($('#menu').hasClass('shown')) {
      $('#menu').removeClass('shown');
    }
  }
  var sketch = function (p){
    p.setup = function(){
      p.noCanvas();
      resetTimer();
    };
    p.mouseMoved = function(){
      resetTimer();
      showRefreshHint(p.mouseY);
    };
  };
  var myP5 = new p5(sketch);
});