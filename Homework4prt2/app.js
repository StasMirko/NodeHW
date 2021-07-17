const express = require('express');

const app = express();

const apiRouter = require('./router/api.router');

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/', apiRouter);

app.listen(5000, () => {
    console.log('Listen port 5000');
});
