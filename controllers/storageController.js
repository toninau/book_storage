const connection = require('../connection');

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
