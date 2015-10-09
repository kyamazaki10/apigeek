A.Developers = {

    url: 'https://api.enterprise.apigee.com/v1/o/' + A.Config.org + '/developers/',

    /**
     * List all of the developer's apps
     */
    listDeveloperApps: function(params, callback) {
        var callback = callback ? callback : this.prettifyApps;
        var data = {
            'expand' : params.expand
        }

        A.Utils.submitRequest(this.url + params.email + '/apps', data, callback);
    },

    /**
     * Prettify the developer apps into a table
     */
    prettifyApps: function(data) {
        var table = '';
        var apps;
        var creds;
        var product;

        // if expand is set to false
        if ($('select.expand').val() === 'false') {
            table += '<table class="table table-condensed table-bordered table-hover">';
            table += '<thead><tr><th>Apps</th></tr></thead>';
            table += '<tbody>';

            for (var i=0; i<data.length; i++) {
                table += '<tr><td>' + data[i] + '</td></tr>';
            }

            table += '</tbody></table>';

            $('.results').html(table);

        // else if expand is set to true
        } else {
            apps = data.app;

            for (var i=0; i<apps.length; i++) {
                table += '<table class="table table-condensed table-bordered table-hover">';
                table += '<thead><tr><th>';
                table += A.Utils.getKeyValue(apps[i].attributes, 'DisplayName') + ' — ';
                table += '<span class="subheader">' + apps[i].name + '</span>';
                table += '</th></tr></thead>';

                //creds = apps[i].credentials[0] || {};
                creds = apps[i].credentials;

                if (creds.length !== 0) {
                    table += '<tbody>';
                    table += '<tr><td>key: ' + creds[0].consumerKey + '</td></tr>';
                    table += '<tr><td>secret: ' + creds[0].consumerSecret + '</td></tr>';

                    product = creds[0].apiProducts;

                    if (product.length !== 0) {
                        table += '<tr><td>product: ' + product[0].apiproduct + '</td></tr>';
                        table += '<tr><td>status: ' + product[0].status + '</td></tr>';
                    }
                }

                table += '</tbody></table>';
            }

            $('.results').html(table);
        }
    }

}