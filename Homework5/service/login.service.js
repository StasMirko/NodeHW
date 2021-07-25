const db = require('../dataBase').getInstance();

module.exports = {

    getUserByEmail: async (email) => {

    const  UserModel = db.getModel('User');

    const user = await UserModel.findOne({where: {email: `${email}`}});

    return user;
}

  // getUserByEmail: (email, password) => {
  //     const  user = DB.find(user => {
  //        return (user.email === email && user.password === password);
  //     });
  //     return user;
  // }
};
