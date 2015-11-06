define(['app/config', 'app/utils'], function(config, utils) {

    return {

        url: 'https://api.enterprise.apigee.com/v1/mint/organizations/' + config.org,

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

            utils.submitRequest(this.url + '/revenue-reports', 'POST', data);
        }

    }

});