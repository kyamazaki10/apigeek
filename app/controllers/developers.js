var express = require('express');
var router = express.Router();

router.get('/list-apps', function(request, response) {
    response.render('developers/list-apps',
        { title: 'List Developer Apps' }
    )
});

module.exports = router;