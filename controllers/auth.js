const express = require("express");
const router = express.Router();

router.get('/login', function(req, res) {
    res.send('Login Page')
})


module.exports = router;