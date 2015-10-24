require(['app/developers/apps', 'app/analytics/transactions', 'app/utils'], function(apps, trx, utils) {

    $('.submit').on('click', function(e) {
        trx.getTransactions(utils.getParams(e), trx.showTransactions);
    });

    // Auto-populate the from and to dates relative to the current date
    utils.populateCalendar();

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