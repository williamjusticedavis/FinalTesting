const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Index route is working!');
})

router.get('/test', (req, res) => {
    res.send('test route is working!');
})

module.exports = router;