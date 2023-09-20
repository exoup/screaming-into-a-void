const router = require("express").Router();

router.get('/', (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    };
});

module.exports = router;