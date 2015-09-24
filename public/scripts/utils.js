A.Utils = {

    /**
     * Submit AJAX request
     */
    submitRequest: function(url, data) {
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
                $('.result-json').html(JSON.stringify(data, null, 2));
            }
        })
    }

}