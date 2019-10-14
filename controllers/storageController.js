const connection = require('../connection');
const {validationResult} = require('express-validator');

exports.storage_all_get = function(req, res) {
  const sql = 'SELECT * FROM storages';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};

exports.storage_id_get = function(req, res) {
  const sql = 'SELECT * FROM storages WHERE StorageID = ?';
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'id': req.params.id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};

exports.storage_create_post = function(req, res) {
  const sql = 'INSERT INTO storages (Storage, Location) VALUES (?, ?)';
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('ERRORS');
    console.log(errors);
    res.status(422).json({errors: errors.array()});
  } else {
    connection.query(sql, [req.body.Storage,
      req.body.Location], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  }
};

exports.storage_update_put = function(req, res) {
  const sql = 'UPDATE storages SET Storage = ?, Location = ? ' +
    'WHERE StorageID = ?';
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('ERRORS');
    console.log(errors);
    res.status(422).json({errors: errors.array()});
  } else {
    connection.query(sql, [req.body.Storage, req.body.Location,
      req.params.id], (err, result) => {
      if (err) throw err;
      if (result.length === 0 || result.affectedRows == 0) {
        res.status(404).send({'id': req.params.id, 'result': 'Not found'});
      } else {
        res.send(result);
      }
    });
  }
};

exports.storage_delete = function(req, res) {
  const sql = 'DELETE FROM books WHERE StorageID = ?;' +
    'DELETE FROM storages WHERE StorageID = ?';
  connection.query(sql, [req.params.id, req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length === 0 || result[1].affectedRows == 0) {
      res.status(404).send({'id': req.params.id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};
