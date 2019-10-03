const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/books/:id(\\d+)', bookController.book_id);
router.get('/books', bookController.book_advanced);

module.exports = router;
