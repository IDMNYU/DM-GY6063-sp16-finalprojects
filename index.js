var $ = require('jquery-browserify');
$('document').ready(function(){
  iFrameResize();
  $('.menu').hover(function(){
    $('#sidebar').addClass('sb-shown');
  });
  $('.close').click(function(e){
    e.stopPropagation();
    $('#sidebar').removeClass('sb-shown');
  });
  $('.proj-link a').click(function(e){
    e.preventDefault();
    var src = $(this).attr('href');
    $('iframe').attr('src', src);
    $('h1').removeClass('title-shown');
    $('#sidebar').removeClass('sb-shown');    
  });
});