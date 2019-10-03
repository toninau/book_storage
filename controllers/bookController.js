const connection = require('../connection');

exports.book_id = function(req, res) {
  const id = req.params.id;
  const sql = 'SELECT * FROM books WHERE BookID = ?';
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'id': id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};

exports.book_advanced = function(req, res) {
  // URL query empty -> get all books
  const sqlparams = [];
  if (Object.keys(req.query).length === 0) {
    const sql = 'SELECT * FROM books';
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } else {
    // Create needed query based on keys
    let sql = 'SELECT * FROM books WHERE 1=1 ';
    for (const key in req.query) {
      if (req.query.hasOwnProperty(key)) {
        switch (key) {
          case 'title':
            sql += `AND Title LIKE CONCAT('%', ?, '%') `;
            break;
          case 'storageID':
            sql += 'AND StorageID = ? ';
            break;
          case 'yearMax':
            sql += 'AND PublicationYear <= ? ';
            break;
          case 'yearMin':
            sql += 'AND PublicationYear >= ? ';
        }
        sqlparams.push(req.query[key]);
      }
    }
    console.log(sqlparams);
    console.log(sql);
    connection.query(sql, sqlparams, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).send({'result': 'Not found'});
      } else {
        res.send(result);
      }
    });
  }
};
