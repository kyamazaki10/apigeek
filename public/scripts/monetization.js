require([
    'app/monetization/monetization',
    'app/utils',
    'app/config'
], function(monetization, utils, config) {

    $('.submit').on('click', function(e) {
        e.preventDefault();

        switch(e.target.id) {
            case 'developer-accepted-rate-plans':
                monetization.getDeveloperAcceptedRatePlans(utils.getParams(e), monetization.showDeveloperAcceptedRatePlans);
                break;

            case 'revenue-report':
                monetization.getRevenueReport(utils.getParams(e));
                break;

            case 'list-email-notification-templates':
                monetization.getEmailNotificationTemplates(monetization.showEmailNotificationTemplates);
        }
    });

    // Auto-populate the from and to dates relative to the current date
    utils.populateCalendar();

    // Auto-populate the org name
    $('input.organization').val(config.org);

});