$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#dog").append("<li>bark!</li>");
  });
  $("button#meow").click(function() {
    $("ul#cat").append("<li>meow!</li>");
  });

  $("li").click(function() {
    $(this).remove();
  });
});
