var express = require('express');
var router = express.Router();

router.get('/transactions', function(request, response) {
    response.render('analytics/transactions',
        { title: 'API Transactions (by Developer)' }
    )
});

module.exports = router;