module.exports = {
    checkIsIdValid: (req, res, next) => {
        try {
            const userId = +req.params.userId;
            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error('Not valid Id');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
