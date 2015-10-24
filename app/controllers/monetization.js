var express = require('express');
var router = express.Router();

router.get('/get-revenue-report', function(request, response) {
    response.render('monetization/get-revenue-report',
        { title: 'Get Revenue Report' }
    )
});

module.exports = router;