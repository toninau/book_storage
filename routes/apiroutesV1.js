const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/books/:id(\\d+)', bookController.book_id_get);
router.get('/books', bookController.book_advanced_get);
router.post('/books', bookController.book_create_post);
router.put('/books/:id(\\d+)', bookController.book_update_put);
router.delete('/books/:id(\\d+)', bookController.book_delete);

module.exports = router;
