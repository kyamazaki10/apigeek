define(['app/config'], function(config) {

    return {

        /**
         * Submit AJAX request
         */
        submitRequest: function(url, type, data, context, callback) {
            var auth = btoa(config.user + ':' + config.pw);
            var data = (type === 'GET') ? data : JSON.stringify(data);

            return $.ajax({
                url: url,
                type: type,
                headers: {
                    'Authorization' : 'Basic ' + auth,
                    'Content-Type' : 'application/json'
                },
                data: data,

                // show response
                success: function(data, textStatus, jqxhr) {
                    var contentType = jqxhr.getResponseHeader('Content-Type');

                    if (contentType === 'application/octet-stream') {
                        $('.result-raw').html(data);
                    } else {
                        $('.result-raw').html(JSON.stringify(data, null, 2));
                    }

                    if (callback) {
                        callback(data, context);
                    }
                }
            });
        },

        /**
         * Returns an object of all input and select values
         */
        getParams: function(e) {
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
        },

        /**
         * Select the from and to dates relative to the current date
         */
        populateCalendar: function() {
            var today = new Date();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var year = today.getYear();

            $('select.fromMonth option[value=' + (month - 1) + ']').prop('selected', true);
            $('select.fromDay option[value=' + day + ']').prop('selected', true);
            $('select.fromYear option[value=' + year + ']').prop('selected', true);

            $('select.toMonth option[value=' + month + ']').prop('selected', true);
            $('select.toDay option[value=' + day + ']').prop('selected', true);
            $('select.toYear option[value=' + year + ']').prop('selected', true);
        }

    }

});