const DB = require('../dataBase');

module.exports = {
  getUserByEmail: (email, password) => {
      const  user = DB.find(user => {
         return (user.email === email && user.password === password);
      });
      return user;
  }
};
