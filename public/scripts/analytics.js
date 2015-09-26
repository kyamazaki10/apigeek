A.Analytics = {

    url: 'https://api.enterprise.apigee.com/v1/o/' + A.Config.org + '/environments/' + A.Config.env + '/stats/apis',

    /**
     * Get total transactions for a single developer by API proxy
     */
    getTransactions: function(params) {
        var data = {
            'select' : 'sum(message_count)',
            'timeRange' : '09/01/2015 00:00~09/30/2015 23:59',
            'timeUnit' : 'day',
            'filter' : '(developer_email eq \'' + params.email + '\')'
        };

        A.Utils.submitRequest(this.url, data, this.prettifyTransactions);
    },

    /**
     * Prettifying the transactions into a table
     */
    prettifyTransactions: function(data) {
        var proxies = data.environments[0].dimensions;
        var thead = '';
        var tbody = '';
        var date = [];
        var values;

        // loop through each proxy
        for (var i=0; i<proxies.length; i++) {
            // store the proxy name
            thead += '<th>' + proxies[i].name + '</th>';

            // the values are a single array of all the dates and the transaction
            // count (for that single proxy) for that specific date
            values = proxies[i].metrics[0].values;

            // each date gets its own array for easy generation of html markup
            for (var j=0; j<values.length; j++) {
                date[j] = date[j] || [];

                // push the proxy's transaction count into each date's array
                date[j].push([values[j].value]);
            }
        }

        // loop through the each date's array
        for (var k=0; k<date.length; k++) {
            tbody += '<tr>';

            for (var l=0; l<date[k].length; l++) {
                tbody += '<td>' + date[k][l] + '</td>';
            }

            tbody += '</tr>';
        }

        $('thead').html(thead);
        $('tbody').html(tbody);
    }

}