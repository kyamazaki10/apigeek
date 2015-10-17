require(['app/developers/apps', 'app/analytics/transactions', 'app/utils'], function(apps, trx, utils) {

    $('.submit').on('click', function(e) {
        trx.getTransactions(utils.getParams(e), trx.showTransactions);
    });

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

    /**
     * Retrieve the developer's apps when the email input loses focus
     */
    var email = $('input.email');
    var params;

    email.blur(function() {
        params = {
            'email' : email.val(),
            'expand' : 'false'
        };

        $('select.app').find('option:gt(0)').remove();

        apps.getApps(params, trx.listApps);
    });

});