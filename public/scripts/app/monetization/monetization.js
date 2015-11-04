define(['app/config', 'app/utils'], function(config, utils) {

    return {

        url: 'https://api.enterprise.apigee.com/v1/mint/organizations/' + config.org,

        /**
         * Get all the developer's accepted rate plans
         */
        getDeveloperAcceptedRatePlans: function(params, callback) {
            utils.submitRequest(this.url + '/developers/' + params.email + '/developer-accepted-rateplans', 'GET', null, this, callback);
        },

        /**
         * Get the Revenue Report
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

            utils.submitRequest(this.url + '/revenue-reports', 'POST', data);
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