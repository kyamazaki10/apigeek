require(['app/monetization/monetization', 'app/utils'], function(monetization, utils) {

    $('.submit').on('click', function(e) {
        switch(e.target.id) {
            case 'get-developer-accepted-rate-plans':
                monetization.getDeveloperAcceptedRatePlans(utils.getParams(e), monetization.showDeveloperAcceptedRatePlans);
                break;
            case 'get-revenue-report':
                monetization.getRevenueReport(utils.getParams(e));
                break;
        }
    });

    // Auto-populate the from and to dates relative to the current date
    utils.populateCalendar();

});