const db = require('../dataBase').getInstance();

module.exports = {

    findUsers: async () => {

        const  UserModel = db.getModel('User');

        const users = await UserModel.findAll({});

        return users;
    }

    // findUsers: () => {
    //     return DB;
    // },
    //
    // findUserById: (userId) =>{
    //     return DB[userId];
    // },
    //
    // deleteUser: (userId) => {
    //     DB.splice(userId, 1);
    // },
    //
    // dataBaseLength: () => {
    //     return DB.length;
    // }
}
