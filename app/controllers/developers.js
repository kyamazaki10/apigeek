var express = require('express');
var router = express.Router();

router.get('/get-developer', function(request, response) {
    response.render('developers/get-developer',
        { title: 'Get Developer' }
    )
});

router.get('/list-apps', function(request, response) {
    response.render('developers/list-apps',
        { title: 'List Developer Apps' }
    )
});

module.exports = router;