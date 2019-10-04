const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const bookController = require('../controllers/bookController');
const genreController = require('../controllers/genreController');
const storageController = require('../controllers/storageController');

// Book routes
router.get('/books/:id(\\d+)', bookController.book_id_get);
router.get('/books', bookController.book_advanced_get);
router.post('/books', bookController.book_create_post);
router.put('/books/:id(\\d+)', bookController.book_update_put);
router.delete('/books/:id(\\d+)', bookController.book_delete);

// Genre routes
router.get('/genres', genreController.genre_all_get);

// Storage routes
router.get('/storages', storageController.storage_all_get);

module.exports = router;
