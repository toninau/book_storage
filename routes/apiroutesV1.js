const express = require('express');
const {check} = require('express-validator');
// eslint-disable-next-line new-cap
const router = express.Router();
const bookController = require('../controllers/bookController');
const genreController = require('../controllers/genreController');
const storageController = require('../controllers/storageController');

// Book routes
router.get('/books/:id(\\d+)', bookController.book_id_get);
router.get('/books', bookController.book_advanced_get);
router.post('/books', [
  check('Title').isLength({min: 1}).trim().escape().withMessage('Title Empty'),
  check('PublicationYear').toInt().isInt().withMessage('Not Int'),
  check('Author').isLength({min: 1}).trim().escape().withMessage('Athr empty'),
  check('ISBN').isLength({min: 1}).trim().escape().withMessage('ISBN Empty'),
  check('StorageID').toInt().isInt().withMessage('Not Int'),
  check('GenreID').toInt().isInt().withMessage('Not Int'),
], bookController.book_create_post);
router.put('/books/:id(\\d+)', bookController.book_update_put);
router.delete('/books/:id(\\d+)', bookController.book_delete);

// Genre routes
router.get('/genres', genreController.genre_all_get);
router.post('/genres', genreController.genre_create_post);
router.put('/genres/:id(\\d+)', genreController.genre_update_put);
router.delete('/genres/:id(\\d+)', genreController.genre_delete);

// Storage routes
router.get('/storages', storageController.storage_all_get);
router.post('/storages', storageController.storage_create_post);
router.put('/storages/:id(\\d+)', storageController.storage_update_put);
router.delete('/storages/:id(\\d+)', storageController.storage_delete);

module.exports = router;
