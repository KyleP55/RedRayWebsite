$(document).ready( function(){
  $.getJSON("JavaScript/services.json", function(data) {
    $.each(data, function() {
      $.each(this, function(key, value) {
        $("#services").append(
          "<div class=\"subService\">" +
          "<img src=\"" + value.image + "\" alt=\"" + value.name + " picture\" class=\"medImage\"><br>" +
          "<p><b>" + value.name + "</b></p></div>" 
        );
      });
    });
  });
});