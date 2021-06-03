$("#scrollDown").click(function () {
  $('html, body').animate({
    scrollTop: $("#context").offset().top
  }, 2000);
});
