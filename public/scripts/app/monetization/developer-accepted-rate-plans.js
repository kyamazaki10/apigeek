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