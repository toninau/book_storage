const path = require('path');

exports.frontpage = function(req, res) {
  res.sendFile(path.join(__dirname, '../test.html'));
};
