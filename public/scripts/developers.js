require([
    'app/developers/developers',
    'app/utils'
], function(developers, utils) {

    $('.submit').on('click', function(e) {
        e.preventDefault();

        switch(e.target.id) {
            case 'developer':
                developers.getDeveloper(utils.getParams(e));
                break;

            case 'list-apps':
                developers.getApps(utils.getParams(e), developers.showApps);
                break;
        }
    });

});