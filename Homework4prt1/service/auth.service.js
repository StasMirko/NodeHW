const DB = require('../dataBase/users');

module.exports = {
    createUser: (userObject) => {
        DB.push(userObject);
    }
}
