const DB = require('../dataBase');

module.exports = {
    createUser: (userObject) => {
        DB.push(userObject);
    }
}
