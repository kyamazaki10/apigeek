define(['app/config', 'app/utils'], function(config, utils) {

    return {

        url: 'https://api.enterprise.apigee.com/v1/o/' + config.org + '/developers/',

        /**
         * Get all of the developer's apps
         */
        getApps: function(params, callback) {
            var data = {
                'expand' : params.expand
            }

            utils.submitRequest(this.url + params.email + '/apps', data, this, callback);
        },

        /**
         * Get developer attributes
         */
        getDeveloper: function(params, callback) {
            utils.submitRequest(this.url + params.email, null, this, callback);
        },

        /**
         * Show the developer apps in a table
         */
        showApps: function(data) {
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
                    table += utils.getKeyValue(apps[i].attributes, 'DisplayName') + ' — ';
                    table += '<span class="subheader">' + apps[i].name + '</span>';
                    table += '</th></tr></thead>';

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

});