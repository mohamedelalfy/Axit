$(function () {
  "use strict";
  $(window).scroll(function () {
    var navbar = $(".navbar");
    if ($(window).scrollTop() >= navbar.height() ? navbar.addClass("scrolled") : navbar.removeClass("scrolled")) ;
  });
  // Tabs
  $(".tabs li").click(function () {
    // Add active class to active link
    $(this).addClass("active").siblings().removeClass("active");
    // Hide all divs on click
    $(".tabs .tabs-content > div").hide();
    //show div
    $('.' + $(this).data("class")).show();
  });

  $("#axit-nav ul li a").click(function () {
		$("html, body").animate({
			scrollTop : $("#" + $(this).data("vale")).offset().top
		}, 1000);
  });
  
});