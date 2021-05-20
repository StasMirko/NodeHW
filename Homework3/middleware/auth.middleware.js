module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const {email, password, preferL} = req.body;
            if (!email || !password) {
                throw new Error('Some filed is empty')
            }

            if (password.length < 5) {
                throw new Error('Too weak password')
            }

            next();

        } catch (e) {
            res.status(400).json(e.message);
        }
}
};
