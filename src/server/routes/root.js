const router = require("express").Router();

router.get('/', (req, res, next) => {
    try {
        res.render('index', {
            title: 'Hello, example'
        });
    }
    catch (e) {
        next(e);
    };
});

module.exports = router;