'use strict';

let express = require('express');
let app = express();

// let publicRouter = express.Router();
//
// app.use('/', publicRouter);

app.use(express.static('./public'));

app.listen(8080, () => {
  console.log('listening on 8080');
});
