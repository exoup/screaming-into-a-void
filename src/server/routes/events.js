const router = require("express").Router();

router.get('/get', (req, res, next) => {
    try {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
    } catch (e) {
        next(e);
    };
});

router.post('/send', (req, res, next) => {
    try {
        console.log(req.body);
    } catch (e) {
        next(e);
    };
});

module.exports = router;