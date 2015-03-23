$(document).ready(function () {

    $('#addItem').on('click', function () {
        var item = $('#myInput').val();
        $('#list').append('<li class="item">' + item + '</li>');
    })

    $(document).on('click', '.item', function () {
        $(this).toggleClass('purchased');
    })

})