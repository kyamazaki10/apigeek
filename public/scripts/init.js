var A = A || {};

$(function() {

    $('.submit').click(function(e) {
        var target = e.currentTarget;
        var ns = $(target).parents('form').attr('name');
        var data = $(target).siblings('.form-group');
        var params = [];
        var param;

        // create array of all parameters
        for (var i = 0; i < data.length; i++) {
            param = {};
            param[data.children('label').attr('for')] = data.children('input').val();

            params.push(param);
        }

        // call function with the above parameters
        window['A'][ns][target.id](params);
    });

});