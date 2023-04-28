const   router = require('express').Router();

router.route('/')
.get((req, res) => {
    res.send({
        msg: 'It works!'
    });
});

module.exports = router;