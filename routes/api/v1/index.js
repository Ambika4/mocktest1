const express = require('express');

const router = express.Router();
console.log("router loaded v1")

router.use('/products',require('./products'));


module.exports = router;