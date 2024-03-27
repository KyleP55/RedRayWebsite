$(document).ready( function(){
  //Get Photos



  //Load photos
  $.getJSON("JavaScript/gallery.json", function(data) {
    $.each(data, function() {
      $.each(this, function(key, value) {
        $("#gallery").append(
          "<img src=\"" + value.image + "\" alt=\"Past Work\" >"
        );
      });
    });
  });
});