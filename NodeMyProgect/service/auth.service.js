const db = require('../dataBase').getInstance();

module.exports = {
    createUser: async (user) => {

        const  UserModel = db.getModel('User');

        await UserModel.create(user);

    },

    isEmail: async (email) => {
        const  UserModel = db.getModel('User');

        const user =  await UserModel.findOne({where: {email: `${email}`}});

        return user;
    }
}
