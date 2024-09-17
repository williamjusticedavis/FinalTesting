const router = require('express').Router();
const usersRoute = require('./usersRoute')

router.use("/users", usersRoute)

router.get('/', (req, res) => {
    res.send('Index route is working!');
})

router.post('/test', (req, res) => {
    res.send('test route is working!');
})

module.exports = router;