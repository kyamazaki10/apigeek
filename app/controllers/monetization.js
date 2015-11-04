var express = require('express');
var router = express.Router();

router.get('/get-developer-accepted-rate-plans', function(request, response) {
    response.render('monetization/developer-accepted-rate-plans',
        { title: 'Get Developer Accepted Rate Plans' }
    )
});

router.get('/get-revenue-report', function(request, response) {
    response.render('monetization/revenue-report',
        { title: 'Get Revenue Report' }
    )
});

module.exports = router;