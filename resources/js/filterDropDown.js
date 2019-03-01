$(document).ready(function() {
  $(".down").click(function() {
    if ($(".myForm form").is(":hidden")) {
      $(".myForm form").stop().slideDown("medium");
      $(".myForm form").animate({
        opacity: 1.0
      }, 500, function() {
        //none
      });
      $(".down").html("Hide Filters <br /> <i class=\"fa fa-angle-double-up\"></i>");
    } else {
      $(".myForm form").animate({
        opacity: 0.0
      }, 500, function() {
        //none
      });
      $(".myForm form").slideUp("medium");
      $(".down").html("Show Filters <br /> <i class=\"fa fa-angle-double-down\"></i>");
    }
  });
});
