const router = require('express').Router()

router.get('/', (req, res) => {
    res.send({
        ok: true
    })
})

module.exports = {
    router, path: '/users'
}