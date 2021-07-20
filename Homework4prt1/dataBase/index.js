const mysql2 = require('mysql2');

let connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'smq80986357720',
    database: 'homework'
});

module.exports = connection;
