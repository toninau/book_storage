const connection = require('../connection');

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

exports.genre_create_post = function(req, res) {
  const sql = 'INSERT INTO genres (genres.Name) VALUES (?)';
  connection.query(sql, [req.body.Name], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

exports.genre_update_put = function(req, res) {
  const sql = 'UPDATE genres SET Name = ? WHERE GenreID = ?';
  connection.query(sql, [req.body.Name, req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'id': id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};

exports.genre_delete = function(req, res) {
  const sql = 'DELETE FROM genres WHERE GenreID = ?';
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'id': id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};
