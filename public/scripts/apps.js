require(['app/developers/apps', 'app/utils'], function(apps, utils) {

    $('.submit').on('click', function(e) {
        switch(e.target.id) {
            case 'get-developer':
                apps.getDeveloper(utils.getParams(e));
                break;
            case 'list-apps':
                apps.getApps(utils.getParams(e), apps.showApps);
                break;
        }
    });

});