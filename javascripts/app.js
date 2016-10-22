var main = function() {
  "use strict";

  var toDos = [
    "Get Groceries",
    "Eat vegetables",
    "Hang out with Jane",
    "Do a little dance",
    "Blow bubbles"
    ];
  
  $(".tabs a span").toArray().forEach(function(element) {
    var $element = $(element);
    

    $(element).on("click", function() {
      var $content;
      var $input;
      var $button;
      var i;

    $(".tabs a span").removeClass("active");
    $element.addClass("active");
    $("main .content").empty();


    if ($element.parent().is(":nth-child(1)")) {
      $content = $("<ul>");
      for(i = toDos.length-1; i >= 0; i--) {
        $content.append($("<li>").text(toDos[i]));
       }
 } else if ($element.parent().is(":nth-child(2)")) {
     $content = $("<ul>");
     toDos.forEach(function (todo) {
       $content.append($("<li>").text(todo));
     });
 } else if ($element.parent().is(":nth-child(3)")) {
     $input = $("<input>"),
     $button = $("<button>").text("+");

     $button.on("click", function () {
       if ($input.val() !== "") {
          toDos.push($input.val());
	  $input.val("");
	}
   });

   $content = $("<div>").append($input, $button);

   }

   $("main .content").append($content);
     
     return false;

   });

 });
   
   $(".tabs a:first-child span").trigger("click");

};

$(document).ready(main);

