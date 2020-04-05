$(document).ready(function() {


});

//smooth scrolling better because rachel
$('a[href^="#"]').on('click',function () {
  var link = this.hash.substr(1);
  var section = $('*[id=' + link + ']');

  $('html,body').animate({
    scrollTop: section.offset().top - 5
  }, 800);
  return false;
});
