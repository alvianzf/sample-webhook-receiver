const router = require('express').Router();

router.get('/', (req, res) => {
    return res.json({message: 'OK'});
});


router.post('/webhooks', (req, res) => {
    console.log(req.body);

    return res.json(req.body);
})

module.exports = router;