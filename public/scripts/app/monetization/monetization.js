define(['app/config', 'app/utils'], function(config, utils) {

    return {

        /**
         * Get the revenue report
         */
        getRevenueReport: function(params) {
            var data = {
                'fromDate' : params.fromYear + '-' + params.fromMonth + '-' + params.fromDay,
                'toDate' : params.toYear + '-' + params.toMonth + '-' + params.toDay,
                'showTxDetail' : true,
                'showSummary' : true,
                'transactionTypes' : [
                    'PURCHASE',
                    'CHARGE',
                    'REFUND',
                    'CREDIT',
                    'SETUPFEES',
                    'TERMINATIONFEES',
                    'RECURRINGFEES'
                ],
                'devCriteria' : [{
                    'id' : params.email,
                    'orgId' : config.org
                }],
                'currencyOption' : 'LOCAL',
                'groupBy' : [
                    'PACKAGE',
                    'PRODUCT',
                    'DEVELOPER',
                    'APPLICATION'
                ]
            };

            utils.submitRequest(utils.getUrl('monetization') + '/revenue-reports', 'POST', data);
        },

        /**
         * List all email notification templates
         */
        getEmailNotificationTemplates: function(callback) {
            utils.submitRequest(utils.getUrl('monetization') + '/notification-email-templates', 'GET', null, this, callback);
        },

        /**
         * Get all the developer's accepted rate plans
         */
        getDeveloperAcceptedRatePlans: function(params, callback) {
            utils.submitRequest(utils.getUrl('monetization') + '/developers/' + params.email + '/developer-accepted-rateplans', 'GET', null, this, callback);
        },

        /**
         * Show all email notification templates in a table
         */
        showEmailNotificationTemplates: function(data) {
            var templates = data.emailTemplates;
            var table = '';

            for (var i=0; i<templates.length; i++) {
                var template = templates[i];

                table += '<table class="table table-condensed table-bordered table-hover">';
                table += '<thead><tr><th>' + template.name + '</th></tr></thead>';
                table += '<tbody>';
                table += '<tr><td>createdDate: ' + template.createdDate + '</td></tr>';
                table += '<tr><td>updatedDate: ' + template.updatedDate + '</td></tr>';
                table += '<tr><td>id: ' + template.id + '</td></tr>';
                table += '<tr><td>subject: ' + template.subject + '</td></tr>';
                table += '<tr><td>body: ' + template.htmlImage + '</td></tr>';
                table += '</tbody></table>';
            }

            $('.results').html(table);
        },

        /**
         * Show the developer's accepted rate plans in a table
         */
        showDeveloperAcceptedRatePlans: function(data) {
            var records = data.totalRecords;

            if (records !== 0) {
                var table = '';
                var plan;

                for (var i=0; i<records; i++) {
                    plan = data.developerRatePlan[i];

                    table += '<table class="table table-condensed table-bordered table-hover">';
                    table += '<thead><tr><th>' + plan.ratePlan.id + '</th></tr></thead>';
                    table += '<tbody>';
                    table += '<tr><td>created: ' + plan.created + '</td></tr>';
                    table += '<tr><td>startDate: ' + plan.startDate + '</td></tr>';
                    table += '<tr><td>endDate: ' + plan.endDate + '</td></tr>';
                    table += '</tbody></table>';
                }

                $('.results').html(table);
            }
        }

    }

});