var express = require('express');
var router = express.Router();

router.get('/listapps', function(request, response) {
    response.render('developers/listapps',
        { title: 'List Developer Apps' }
    )
});

module.exports = router;