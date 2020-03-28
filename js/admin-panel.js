$('#book_type').change(function (){
    var index = $(this).prop('selectedIndex');

    if (index == 1) {
        console.log("hede");
        clearOthers();
        $('#book').removeClass('d-none');
    } else if (index == 2) {
        clearOthers();
        $('#e-book').removeClass('d-none');
    } else if (index == 3) {
        clearOthers();
        $('#audiobook').removeClass('d-none');
    } else if (index == 4) {
        clearOthers();
        $('#e-book_reader').removeClass('d-none');
    } else if (index == 5) {
        clearOthers();
        $('#e-book_reader_case').removeClass('d-none');
    } else if (index == 6) {
        clearOthers();
        $('#book_case').removeClass('d-none');
    }
})



function clearOthers() {
    $('#book').addClass('d-none');
    $('#e-book').addClass('d-none');
    $('#audiobook').addClass('d-none');
    $('#e-book_reader').addClass('d-none');
    $('#e-book_reader_case').addClass('d-none');
    $('#book_case').addClass('d-none');
}