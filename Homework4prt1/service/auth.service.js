const connection = require('../dataBase');

module.exports = {

    createUser: (email, password, preferL) => {
        connection.query(`INSERT INTO users (email, password, preferL) VALUES 
    ('${email}', '${password}', '${preferL}' )`,
            (err, results) => {
                console.log(results);
            })
    }
}
