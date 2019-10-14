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
  check('Title').trim().escape().isLength({min: 1}).withMessage('Title Empty'),
  check('PublicationYear').toInt().isInt().withMessage('Not Int'),
  check('Author').trim().escape().isLength({min: 1}).withMessage('Athr empty'),
  check('ISBN').trim().escape().isLength({min: 1}).withMessage('ISBN Empty'),
  check('StorageID').toInt().isInt().withMessage('Not Int'),
  check('GenreID').toInt().isInt().withMessage('Not Int'),
], bookController.book_create_post);
router.put('/books/:id(\\d+)', [
  check('Title').trim().escape().isLength({min: 1}).withMessage('Title Empty'),
  check('PublicationYear').toInt().isInt().withMessage('Not Int'),
  check('Author').trim().escape().isLength({min: 1}).withMessage('Athr empty'),
  check('ISBN').trim().escape().isLength({min: 1}).withMessage('ISBN Empty'),
], bookController.book_update_put);
router.delete('/books/:id(\\d+)', bookController.book_delete);

// Genre routes
router.get('/genres/:id(\\d+)', genreController.genre_id_get);
router.get('/genres', genreController.genre_all_get);
router.post('/genres', [
  check('Name').trim().escape().isLength({min: 1}).withMessage('name empty'),
], genreController.genre_create_post);
router.put('/genres/:id(\\d+)', [
  check('Name').trim().escape().isLength({min: 1}).withMessage('name empty'),
], genreController.genre_update_put);
router.delete('/genres/:id(\\d+)', genreController.genre_delete);

// Storage routes
router.get('/storages/:id(\\d+)', storageController.storage_id_get);
router.get('/storages', storageController.storage_all_get);
router.post('/storages', [
  check('Storage').trim().escape().isLength({min: 1}).withMessage('name empty'),
  check('Location').trim().escape().isLength({min: 1}).withMessage('empty'),
], storageController.storage_create_post);
router.put('/storages/:id(\\d+)', [
  check('Storage').trim().escape().isLength({min: 1}).withMessage('name empty'),
  check('Location').trim().escape().isLength({min: 1}).withMessage('empty'),
], storageController.storage_update_put);
router.delete('/storages/:id(\\d+)', storageController.storage_delete);

module.exports = router;
