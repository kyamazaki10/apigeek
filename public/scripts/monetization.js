require([
    'app/monetization/developer-accepted-rate-plans',
    'app/monetization/email-notification-templates',
    'app/monetization/revenue-report',
    'app/utils',
    'app/config'
], function(rateplans, templates, reports, utils, config) {

    $('.submit').on('click', function(e) {
        e.preventDefault();

        switch(e.target.id) {
            case 'developer-accepted-rate-plans':
                rateplans.getDeveloperAcceptedRatePlans(utils.getParams(e), rateplans.showDeveloperAcceptedRatePlans);
                break;

            case 'revenue-report':
                reports.getRevenueReport(utils.getParams(e));
                break;

            case 'list-email-notification-templates':
                templates.listEmailNotificationTemplates(templates.showEmailNotificationTemplates);
        }
    });

    // Auto-populate the from and to dates relative to the current date
    utils.populateCalendar();

    // Auto-populate the org name
    $('input.organization').val(config.org);

});