var A = A || {};

$(function() {

    $('.submit').click(function(e) {
        e.preventDefault();

        var target = e.currentTarget;
        var ns = $(target).parents('form').attr('name');
        var data = $(target).siblings('.form-group');
        var params = {};

        // create object of all parameters
        for (var i = 0; i < data.length; i++) {
            params[data.children('label').attr('for')] = data.children('input').val();
        }

        // call function with the above parameters
        window['A'][ns][target.id](params);
    });

});