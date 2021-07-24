const db = require('../dataBase').getInstance();

module.exports = {

    getUserByEmail: async (email, password) => {

    const  UserModel = db.getModel('User');

    const user = await UserModel.findOne({where: {email: `${email}`, password: `${password}`}});

    return user;
}

  // getUserByEmail: (email, password) => {
  //     const  user = DB.find(user => {
  //        return (user.email === email && user.password === password);
  //     });
  //     return user;
  // }
};
