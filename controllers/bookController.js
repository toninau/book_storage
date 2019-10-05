const connection = require('../connection');

const sqlSELECT = 'SELECT books.BookID, booksinfo.Title, ' +
  'booksinfo.PublicationYear, booksinfo.Author, booksinfo.ISBN, ' +
  `group_concat(genres.Name) AS 'Genres', storages.Location, storages.Storage` +
  ' FROM books ' +
  'INNER JOIN storages on storages.StorageID = books.StorageID ' +
  'INNER JOIN booksinfo on booksinfo.BookinfoID = books.BookinfoID ' +
  'INNER JOIN booksgenres on booksgenres.BookinfoID = books.BookinfoID ' +
  'INNER JOIN genres on genres.GenreID = booksgenres.GenreID ';
const sqlGROUP = 'GROUP BY books.BookID ';

// WORKS :)
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

// WORKS :)
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
          case 'author':
          case 'title':
            sql += `AND ${key} LIKE CONCAT('%', ?, '%') `;
            break;
          case 'storageID':
            sql += 'AND books.StorageID = ? ';
            break;
          case 'yearMax':
            sql += 'AND PublicationYear <= ? ';
            break;
          case 'yearMin':
            sql += 'AND PublicationYear >= ? ';
            break;
          case 'isbn':
            sql += 'AND ISBN = ? ';
            break;
          case 'genre':
            sql += 'AND genres.Name = ? ';
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

// WORKS :), ADD VALIDATION
exports.book_create_post = function(req, res) {
  const sqlSELECT = 'SELECT * FROM booksinfo WHERE ISBN = ?';
  const sqlbookinfoINSERT = 'INSERT INTO booksinfo ' +
    '(Title, PublicationYear, Author, ISBN) VALUES (?, ?, ?, ?)';
  const sqlbookINSERT = 'INSERT INTO books (BookinfoID, StorageID) ' +
    'VALUES (?,?)';
  const sqlbooksgenresINSERT = 'INSERT INTO booksgenres ' +
    '(GenreID, BookinfoID) VALUES (?, ?)';
  const sqlCheckExists = 'SELECT genres.GenreID, storages.StorageID ' +
    'FROM books ' +
    'INNER JOIN storages on storages.StorageID = books.StorageID ' +
    'INNER JOIN booksinfo on booksinfo.BookinfoID = books.BookinfoID ' +
    'INNER JOIN booksgenres on booksgenres.BookinfoID = books.BookinfoID ' +
    'INNER JOIN genres on genres.GenreID = booksgenres.GenreID ' +
    'GROUP BY genres.GenreID, storages.StorageID';
  let id = -1;
  let genreIDFound = false;
  let storageIDFound = false;

  connection.query(sqlCheckExists, (err, result) => {
    if (err) throw err;
    for (let i = 0; i < result.length; i++) {
      if (result[i].GenreID === req.body.GenreID) {
        genreIDFound = true;
      }
      if (result[i].StorageID === req.body.StorageID) {
        storageIDFound = true;
      }
      if (storageIDFound && genreIDFound) {
        break;
      }
    }
    if (storageIDFound && genreIDFound) {
      connection.query(sqlSELECT, [req.body.ISBN], (err, result) => {
        if (err) throw err;
        try {
          id = result[0].BookinfoID;
        } catch (err) {
        }
        if (id === -1) {
          connection.query(sqlbookinfoINSERT, [req.body.Title,
            req.body.PublicationYear, req.body.Author,
            req.body.ISBN], (err, result) => {
            if (err) throw err;
            id = result.insertId;
            connection.query(`${sqlbookINSERT};${sqlbooksgenresINSERT}`,
                [id, req.body.StorageID,
                  req.body.GenreID, id], (err, result) => {
                  if (err) throw err;
                  res.send(result);
                });
          });
        } else {
          connection.query(sqlbookINSERT, [id, req.body.StorageID],
              (err, result) => {
                if (err) throw err;
                res.send(result);
              });
        }
      });
    } else {
      res.status(400).send({'result': 'Something is wrong with the body'});
    }
  });
};

// WORKS :), ADD VALIDATION
exports.book_update_put = function(req, res) {
  const sql = 'UPDATE booksinfo SET Title = ?, PublicationYear = ?, ' +
    'Author = ?, ISBN = ? WHERE BookinfoID = ?';
  connection.query(sql, [req.body.Title,
    req.body.PublicationYear, req.body.Author,
    req.body.ISBN, req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'id': id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};

// WORKS :)
exports.book_delete = function(req, res) {
  const sql = 'DELETE FROM books WHERE bookID = ?';
  connection.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(404).send({'id': id, 'result': 'Not found'});
    } else {
      res.send(result);
    }
  });
};
