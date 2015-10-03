A.Developers = {

    url: 'https://api.enterprise.apigee.com/v1/o/' + A.Config.org + '/developers/',

    /**
     * List all of the developer's apps
     */
    listDeveloperApps: function(params) {
        var data = {
            'expand' : params.expand
        }

        A.Utils.submitRequest(this.url + params.email + '/apps', data);
    }

}