const express = require('express');
const { getUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/get/:id', getUser);
router.get('/list', getAllUsers);

module.exports = router;
