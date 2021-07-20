const connection = require('../dataBase');

module.exports = {
    getUserByEmail: (email, password) => {
        connection.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`,
            (err, results) => {
                console.log(results);
                return results
            })


    }
  // getUserByEmail: (email, password) => {
  //     const  user = DB.find(user => {
  //        return (user.email === email && user.password === password);
  //     });
  //     return user;
  // }
};
