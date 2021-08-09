const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const {PORT} = require('./config')


const app = express();

const apiRouter = require('./router/api.router');

const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use('/', apiRouter);

app.use('*', (err,req, res, next) => {
    let message = err.message
    if (err.parent){
        message = err.parent.sqlMessage
    }

    res
        .status(err.status || 400)
        .json({
            message,
            code: err.customCode
        })
})

app.listen(PORT, () => {
    console.log(`Listen port ${PORT}`);
});

process.on("unhandledRejection", reason => {
    console.log(reason);

    process.exit(0)
})
