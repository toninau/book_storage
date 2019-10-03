const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.frontpage);

module.exports = router;
