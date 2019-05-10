const express = require('express');
const router = express.Router();


router.use('/dependencies', require('./dependencies/dependencies.controller.js'))
module.exports = router