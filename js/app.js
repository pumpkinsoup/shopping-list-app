$(document).ready(function () {

    $('#addItem').on('click', function () {
        var item = $('#myInput').val();
        $('#list').append('<li class="item">' + item + '<span class="delete">click here to delete</span></li>');
    })

    $(document).on('click', '.item', function () {
        $(this).toggleClass('purchased');
    })

    $(document).on('dblclick', '.item', function () {
    	$(this).remove();
    })

})
