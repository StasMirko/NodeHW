const connection = require('../dataBase');

module.exports = {

    findUsers: async () => {

        const promisePool = connection.promise();

        const [rows] = await promisePool.query('SELECT * FROM users');

        console.log(rows);
        return rows;
    },

    findUserById: async (userId) =>{

        const promisePool = connection.promise();

        const [rows] = await promisePool.query(`SELECT * FROM users WHERE id = '${userId}'`);

        console.log(rows);
        return rows;
    },

    deleteUser: async (userId) => {

        const promisePool = connection.promise();

        const [rows] = await promisePool.query(`DELETE FROM users WHERE id = '${userId}'`);

        console.log(rows);
        return rows;
    },

    dataBaseIsId: async (userId) => {

        const promisePool = connection.promise();

        const [rows] = await promisePool.query(`SELECT SUM(id) FROM users WHERE id = '${userId}'`);

        console.log(rows);
        return rows;
    }
}
