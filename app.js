
//load express
const express = require('express');
const app = express();

//load bodyparser
const bp = require('body-parser');
app.use(bp.urlencoded());
app.use(bp.json());

//load ejs
app.set('view engine', 'ejs');

//load route
require('./route/route')(app);


app.listen(3000, () => {
    console.log('Running on :3000');
});
