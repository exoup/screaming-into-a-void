const router = require("express").Router();

module.exports = (public) => {

    router.get('/', (req, res, next) => {
        try {
        }
        catch (e) {
            next(e);
        };
    });

    router.get('/about', (req, res, next) => {
        try {
            res.sendFile(`${public}/index.html`);
        }
        catch (e) {
            next(e);
        };
    });

    return router;

}

// module.exports = router;