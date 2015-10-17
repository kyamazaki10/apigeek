define(['app/config', 'app/utils'], function(config, utils) {

    return {

        url: 'https://api.enterprise.apigee.com/v1/o/' + config.org + '/environments/' + config.env + '/stats/apis',

        /**
         * Get total transactions for a single developer by API proxy
         */
        getTransactions: function(params, callback) {
            var self = this;
            var from = params.fromMonth + '/' + params.fromDay + '/' + params.fromYear;
            var to = params.toMonth + '/' + params.toDay + '/' + params.toYear;

            var filter = '(developer_email eq \'' + params.email + '\')';
            var app = params.app;

            if (app !== 'all') {
                filter += ' and (developer_app eq \'' + app + '\')';
            }

            var data = {
                'select' : 'sum(message_count)',
                'timeRange' : from + ' 00:00~' + to + ' 23:59',
                'timeUnit' : 'day',
                'filter' : filter
            };

            utils.submitRequest(this.url, data, this, callback);
        },

        /**
         * Show the transactions in a table
         */
        showTransactions: function(data, self) {
            var proxies = data.environments[0].dimensions;
            var table = '';
            var totals = [];
            var dates = [];
            var values;

            table += '<table class="table table-condensed table-bordered table-hover analytics">';
            table += '<thead><tr>';
            table += '<th></th>';

            // alphabetize the array by proxy name
            proxies = self.alphabetize(proxies);

            // loop through each proxy
            for (var i=0; i<proxies.length; i++) {
                // display the proxy name in the table header
                table += '<th>' + proxies[i].name + '</th>';

                // the values are a single array of all the dates and the transaction
                // count (for that single proxy) for that specific date
                values = proxies[i].metrics[0].values;

                // calculate the total transactions for each proxy
                totals[i] = totals[i] || [];
                totals[i] = self.calculateTotals(values);

                // each date gets its own array for easy generation of html markup
                for (var j=0; j<values.length; j++) {
                    dates[j] = dates[j] || [];

                    // push the proxy's transaction count into each date's array
                    dates[j].push(Math.round([values[j].value]));
                }
            }

            table += '</tr></thead>';
            table += '<tbody>';

            // loop through each date's array backwards so the transaction counts will
            // be displayed in chronological order
            for (var k=dates.length-1; k>=0; k--) {
                table += '<tr>';
                table += '<td class="date">' + self.formatDate(values[k].timestamp) + '</td>';

                for (var l=0; l<dates[k].length; l++) {
                    table += '<td>' + dates[k][l] + '</td>';
                }

                table += '</tr>';
            }

            // display the totals for each proxy
            table += self.appendTotals(totals);
            table += '</tbody></table>';

            $('.results').html(table);
        },

        /**
         * List the apps in the Select menu
         */
        listApps: function(apps) {
            for (var i=0; i<apps.length; i++) {
                $('select.app').append('<option>' + apps[i] + '</option>');
            }
        },

        /**
         * Alphabetize the columns
         */
        alphabetize: function(array) {
            var sortA;
            var sortB;

            array.sort(function(a, b) {
                sortA = a.name;
                sortB = b.name;

                return (sortA < sortB) ? -1 : (sortA > sortB) ? 1 : 0;
            });

            return array;
        },

        /**
         * Calculate the totals for each column
         */
        calculateTotals: function(values) {
            var total = 0;

            for (var i=0; i<values.length; i++) {
                total = total + parseInt(values[i].value);
            }

            return total;
        },

        /**
         * Append the totals for each column to the table
         */
        appendTotals: function(totals) {
            var html = '<tr class="totals">';
            html += '<td>TOTALS:</td>';

            for (var i=0; i<totals.length; i++) {
                html += '<td class="totals">' + totals[i] + '</td>';
            }

            html += '</tr>';

            return html;
        },

        /**
         * Format the date
         */
        formatDate: function(timestamp) {
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var date = new Date(timestamp);

            return months[date.getUTCMonth()] + '-' + date.getUTCDate();
        }

    }

});