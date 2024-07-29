const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define user routes

router.post('/SignInUser', userController.signin);
router.post('/SignUpUser', userController.signup);

module.exports = router;
