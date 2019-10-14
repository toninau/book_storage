const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouterV1 = require('./routes/apiroutesV1');
const indexRouter = require('./routes/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/v1', apiRouterV1);
app.use('/', indexRouter);
app.use(express.static('public'));

app.listen(8081, () => {
  console.log('Server started, port 8081');
});
