$(function() {

    /**
     * Select the from and to dates relative to the current date
     */
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getYear();

    $('select.fromMonth option[value=' + (month - 1) + ']').prop('selected', true);
    $('select.fromDay option[value=' + day + ']').prop('selected', true);
    $('select.fromYear option[value=' + year + ']').prop('selected', true);

    $('select.toMonth option[value=' + month + ']').prop('selected', true);
    $('select.toDay option[value=' + day + ']').prop('selected', true);
    $('select.toYear option[value=' + year + ']').prop('selected', true);

});