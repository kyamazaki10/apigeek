require([
    'app/developers/developer',
    'app/developers/list-apps',
    'app/utils'
], function(developer, apps, utils) {

    $('.submit').on('click', function(e) {
        e.preventDefault();

        switch(e.target.id) {
            case 'developer':
                developer.getDeveloper(utils.getParams(e));
                break;

            case 'list-apps':
                apps.getApps(utils.getParams(e), apps.showApps);
                break;
        }
    });

});