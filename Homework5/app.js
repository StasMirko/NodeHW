const express = require('express');

const app = express();

const apiRouter = require('./router/api.router');

const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/', apiRouter);

app.use('*', (err,req, res, next) => {
    res
        .status(err.status || 400)
        .json({
            message: err.message,
            code: err.customCode
        })
})

app.listen(5000, () => {
    console.log('Listen port 5000');
});

process.on("unhandledRejection", reason => {
    console.log(reason);

    process.exit(0)
})
