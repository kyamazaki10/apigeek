define(['app/config', 'app/utils'], function(config, utils) {

    return {

        /**
         * List all email notification templates
         */
        listEmailNotificationTemplates: function(callback) {
            utils.submitRequest(utils.getUrl('monetization') + '/notification-email-templates', 'GET', null, this, callback);
        },

        /**
         * Show all email notification templates in a table
         */
        showEmailNotificationTemplates: function(data) {
            var templates = data.emailTemplates;
            var table = '';

            for (var i=0; i<templates.length; i++) {
                var template = templates[i];

                table += '<table class="table table-condensed table-bordered table-hover">';
                table += '<thead><tr><th>' + template.name + '</th></tr></thead>';
                table += '<tbody>';
                table += '<tr><td>createdDate: ' + template.createdDate + '</td></tr>';
                table += '<tr><td>updatedDate: ' + template.updatedDate + '</td></tr>';
                table += '<tr><td>id: ' + template.id + '</td></tr>';
                table += '<tr><td>subject: ' + template.subject + '</td></tr>';
                table += '<tr><td>body: ' + template.htmlImage + '</td></tr>';
                table += '</tbody></table>';
            }

            $('.results').html(table);
        }

    }

});