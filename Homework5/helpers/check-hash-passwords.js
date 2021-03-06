const bcrypt = require('bcrypt');

module.exports = async (hashedPassword, password) => {
    const isPasswordEquals = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordEquals) {
        throw new Error('User is not exist');
    }
}
