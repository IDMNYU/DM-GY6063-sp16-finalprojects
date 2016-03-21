var $ = require('jquery-browserify');
$('document').ready(function(){
  iFrameResize();
  $('.menu').hover(function(){
    $('#sidebar').addClass('sb-shown');
  });
  $('.close').click(function(){
    $('#sidebar').removeClass('sb-shown');
  });
});