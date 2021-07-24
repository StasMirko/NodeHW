const db = require('../dataBase').getInstance();

module.exports = {
    createUser: async (user) => {

        const  UserModel = db.getModel('User');

        await UserModel.create(user);

    }
}
