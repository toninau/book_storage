const connection = require('../connection');
const {validationResult} = require('express-validator');

exports.genre_all_get = function(req, res) {
  const sql = 'SELECT * FROM genres';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};

exports.genre_id_get = function(req, res) {
  const sql = 'SELECT * FROM genres WHERE GenreID = ?';
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'id': req.params.id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};

exports.genre_create_post = function(req, res) {
  const sql = 'INSERT INTO genres (genres.Name) VALUES (?)';
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('ERRORS');
    console.log(errors);
    res.status(422).json({errors: errors.array()});
  } else {
    connection.query(sql, [req.body.Name], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  }
};

exports.genre_update_put = function(req, res) {
  const sql = 'UPDATE genres SET Name = ? WHERE GenreID = ?';
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('ERRORS');
    console.log(errors);
    res.status(422).json({errors: errors.array()});
  } else {
    connection.query(sql, [req.body.Name, req.params.id], (err, result) => {
      if (err) throw err;
      if (result.length === 0 || result.affectedRows == 0) {
        res.status(404).send({'id': req.params.id, 'result': 'Not found'});
      } else {
        res.send(result);
      }
    });
  }
};

exports.genre_delete = function(req, res) {
  const sql = 'DELETE FROM booksgenres WHERE GenreID = ?;' +
    'DELETE FROM genres WHERE GenreID = ?';
  connection.query(sql, [req.params.id, req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length === 0 || result[1].affectedRows == 0) {
      res.status(404).send({'id': req.params.id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};
