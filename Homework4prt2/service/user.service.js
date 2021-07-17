const DB = require('../dataBase/users');

module.exports = {
    findUsers: () => {
        return DB;
    },

    findUserById: (userId) =>{
        return DB[userId];
    },

    deleteUser: (userId) => {
        DB.splice(userId, 1);
    },

    dataBaseLength: () => {
        return DB.length;
    }
}
