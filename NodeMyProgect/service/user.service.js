const db = require('../dataBase').getInstance();

module.exports = {

    findUsers: async () => {

        const  UserModel = db.getModel('User');

        const users = await UserModel.findAll({});

        return users;
    },

    findUserById: async (userId) => {

        const  UserModel = db.getModel('User');

        const user = await UserModel.findOne({where: {id: `${userId}`}});

        return user;
    },

    deleteUser: async (userId) => {

        const  UserModel = db.getModel('User');

        const user = await UserModel.destroy({where: {id: `${userId}`}});

        return user;
    },

    isUserId: async (userId) => {

        const  UserModel = db.getModel('User');

        const user = await UserModel.findOne({where: {id: `${userId}`}});

        return user;
    },

    updateUser: async (Email, Password, newEmail, newPassword) => {
        const  UserModel = db.getModel('User');

        const user = await UserModel.update({email: `${newEmail}`, password: `${newPassword}`},
            {where: {email: `${Email}`, password: `${Password}`}});

        return user;
    },

    findUserByEmail: async (email) => {

        const  UserModel = db.getModel('User');

        const user = await UserModel.findOne({where: {email: `${email}`}});

        return user;
    }
}
