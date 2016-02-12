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
        }

    }

});