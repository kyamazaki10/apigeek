var express = require('express');
var router = express.Router();

router.get('/transactions', function(request, response) {
    response.render('analytics/transactions',
        { title: 'Total Transactions' }
    )
});

module.exports = router;