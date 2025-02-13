const User = require('../models/userModel');

exports.getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id, { attributes: ['id', 'name', 'email'] });
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
