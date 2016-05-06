// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("ready", function() {
    $('#create-tweet').on('click', function(e) {
        e.preventDefault();

        var tweetData = $('form').serialize();

        $.ajax({
            url: '/tweets',
            method: 'POST',
            dataType: 'script',
            data: tweetData
        });

        $('textarea').val('');
    });
});
