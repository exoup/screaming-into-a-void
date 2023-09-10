const router = require("express").Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        example: 'example'
    });
});

module.exports = router;