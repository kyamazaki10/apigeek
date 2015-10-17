define(['app/config'], function(config) {

    return {

        /**
         * Submit AJAX request
         */
        submitRequest: function(url, data, context, callback) {
            var auth = btoa(config.user + ':' + config.pw);

            return $.ajax({
                url: url,
                headers: {
                    'Authorization' : 'Basic ' + auth,
                    'Content-Type' : 'application/json'
                },
                data: data,

                // show JSON response
                success: function(data) {
                    if (callback) {
                        callback(data, context);
                    }

                    // show raw JSON response
                    $('.result-json').html(JSON.stringify(data, null, 2));
                }
            });
        },

        /**
         * Returns an object of all input and select values
         */
        getParams: function(e) {
            e.preventDefault();

            var data = $('.form-group');
            var params = {};

            // create object of all parameters
            for (var i=0; i<data.length; i++) {
                params[$(data[i]).children('label').attr('for')]
                    = $(data[i]).children('input').val() || $(data[i]).children('select').find(':selected').val();
            }

            return params;
        },

        /**
         * Returns the value of an object within an array based on its key
         */
        getKeyValue: function(array, key) {
            var result = $.grep(array, function(e) {
                return e.name === key;
            });

            return (result.length !== 0) ? result[0].value : '';
        }

    }

});