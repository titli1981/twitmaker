// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
   console.log("hello");
    $('#new_tweet').submit(function( event ) {
     console.log("hello");
      event.preventDefault();

      $.ajax({
          url: '/tweets',
          method:'POST' ,
          dataType:'json',
          //.serialize converts the form data into string
        //   data:$("#new_tweet").serialize()// a way to send the form data to the server
      }).done(function(responseData){
          console.log(responseData);
            var listItem = $('<li class="tweet">')
            listItem.html(responseData.message)
            $('.tweets').prepend(listItem)

     }).fail(function(){
         console.log("The request has failed")
     });

     $('#tweet_message').val("")

    });


});
