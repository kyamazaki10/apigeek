define(['app/config', 'app/utils'], function(config, utils) {

    return {

        /**
         * Get developer attributes
         */
        getDeveloper: function(params) {
            utils.submitRequest(utils.getUrl('developers') + params.email, 'GET');
        }

    }

});