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

        A.Utils.submitRequest(this.url, data);
    }

}