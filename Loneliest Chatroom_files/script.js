$(document).ready(function() {

  $('#new-message-button').click(function(event) {
    var message = $("#new-message-body").val();
    var author = ["Me", "Myself", "I"];
  });

  $('#new-message-button').click(function(event) {
    var message = $("#new-message-body").val();
    console.log(message);
    var author = ["Me", "Myself", "I"];
    // var selection_box =("<li class='message'><a class='delete' href='#'>Delete</a><h3 class='author'></h3><p class='message-body'></p><span class='timestamp'></span></li>");

    $('#conversation').append("<p><li class='message'><a class='delete' href='#'>Delete</a><h3 class='author'>Me</h3><p class='message-body'>" + message + "</p><span class='timestamp'></span></li></p>");
    $("#new-message-body").val("");
    console.log("conversation")

    $('#conversation').on("click", '.delete', function(event) {
      $(this).parent('li').remove();
      // $('.message').remove();
    });
  });
});
