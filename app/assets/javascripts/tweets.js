// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('ready', function() {

    $('#create-tweet').on('click', function(e) {
        e.preventDefault();

        var tweetData = $('form').serialize();

        $.ajax({
            url: '/tweets',
            method: 'POST',
            dataType: 'html',
            data: tweetData,
            success: function(data_return) {
                $('.tweets').prepend(data_return);
                $('textarea').val('');
            }
        });
    });











});















// $('#create-tweet').on('click', function(e) {
//     e.preventDefault();
//
//     var tweetData = $('form').serialize();
//
//     $.ajax({
//         url: '/tweets',
//         method: 'POST',
//         dataType: 'html',
//         data: tweetData,
//         success: function(data) {
//             if ( data ) {
//                 $('.tweets').prepend(data);
//             }
//         }
//     });
// });
