$(document).ready(function(){
    if($(window).scrollTop()>50)
      $('nav').addClass('scrolled');
    else
      $('nav').removeClass('scrolled');
  });
  
  $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
  });