var A = A || {};

$(function() {

    $('.submit').click(function(e) {
        e.preventDefault();

        var data = $('.form-group');
        var params = {};

        // create object of all parameters
        for (var i=0; i<data.length; i++) {
            params[$(data[i]).children('label').attr('for')]
                = $(data[i]).children('input').val() || $(data[i]).children('select').find(':selected').val();
        }

        // call namespaced function with the above parameters
        window['A'][$('form').attr('name')][e.currentTarget.id](params);
    });

});