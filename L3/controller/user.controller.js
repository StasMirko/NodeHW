module.exports = {

    getAllUsers: (req, res) => {
        res.json('Hello from controller!!!');
    },

    getSingleUser: (req, res) => {
        res.json(req.params);
    },

    createUser: (req, res) => {
        res.json('User is created!!!');
    }

};
