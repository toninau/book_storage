const connection = require('../connection');

const sqlSELECT = 'SELECT books.BookID, booksinfo.Title, ' +
  'booksinfo.PublicationYear, booksinfo.Author, booksinfo.ISBN, ' +
  `group_concat(genres.Name) AS 'Genres', storages.Location, storages.Storage `+
  'FROM books ' +
  'INNER JOIN storages on storages.StorageID = books.StorageID ' +
  'INNER JOIN booksinfo on booksinfo.BookinfoID = books.BookinfoID ' +
  'INNER JOIN booksgenres on booksgenres.BookinfoID = books.BookinfoID ' +
  'INNER JOIN genres on genres.GenreID = booksgenres.GenreID ';
const sqlGROUP = 'GROUP BY books.BookID ';

exports.book_id_get = function(req, res) {
  const id = req.params.id;
  const sql = `${sqlSELECT} WHERE books.BookID = ? ${sqlGROUP}`;
  connection.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'id': id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};

exports.book_advanced_get = function(req, res) {
  // URL query empty -> get all books
  const sqlParams = [];
  let sql = sqlSELECT;
  let success = true;
  if (Object.keys(req.query).length === 0) {
    connection.query(sql + sqlGROUP, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } else {
    // Create needed SQL query based on req query
    sql += 'WHERE 1=1 ';
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
            break;
          default:
            success = false;
            break;
        }
        sqlParams.push(req.query[key]);
      }
    }
    if (success) {
      connection.query(sql + sqlGROUP, sqlParams, (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
          res.status(404).send({'result': 'Not found'});
        } else {
          res.send(result);
        }
      });
    } else {
      res.status(400).send({'result': 'Something is wrong with the query'});
    }
  }
};

exports.book_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED');
};

exports.book_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED');
};

exports.book_delete = function(req, res) {
  res.send('NOT IMPLEMENTED');
};
