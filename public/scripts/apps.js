require(['app/developers/apps', 'app/utils'], function(apps, utils) {

    $('.submit').on('click', function(e) {
        apps.getApps(utils.getParams(e), apps.showApps);
    });

});