require(['app/monetization/reports', 'app/utils'], function(reports, utils) {

    $('.submit').on('click', function(e) {
        reports.getRevenueReport(utils.getParams(e));
    });

    // Auto-populate the from and to dates relative to the current date
    utils.populateCalendar();

});