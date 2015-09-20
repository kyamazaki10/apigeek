var express = require('express');
var router = express.Router();

router.use('/analytics', require('./analytics'));

router.get('/', function(request, response) {
    response.render('index',
        { title: 'Apigee Support Application' }
    )
});

module.exports = router;