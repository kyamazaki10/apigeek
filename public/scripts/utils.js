A.Utils = {

    /**
     * Submit AJAX request
     */
    submitRequest: function(url, data, callback) {
        var auth = btoa(A.Config.user + ':' + A.Config.pw);

        $.ajax({
            url: url,
            headers: {
                'Authorization' : 'Basic ' + auth,
                'Content-Type' : 'application/json'
            },
            data: data,

            // show JSON response
            success: function(data) {
                // callback function to prettify the JSON response
                if (callback) {
                    callback(data);
                }

                // show raw JSON response
                $('.result-json').html(JSON.stringify(data, null, 2));
            }
        });
    }

}