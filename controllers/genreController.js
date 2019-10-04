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
