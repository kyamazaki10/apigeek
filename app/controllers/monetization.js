var express = require('express');
var router = express.Router();

router.get('/developer-accepted-rate-plans', function(request, response) {
    response.render('monetization/developer-accepted-rate-plans',
        { title: 'Accepted Rate Plans (by Developer)' }
    )
});

router.get('/revenue-report', function(request, response) {
    response.render('monetization/revenue-report',
        { title: 'Revenue Report (by Developer)' }
    )
});

router.get('/list-email-notification-templates', function(request, response) {
    response.render('monetization/email-notification-templates',
        { title: 'List Email Notification Templates' }
    )
});

module.exports = router;