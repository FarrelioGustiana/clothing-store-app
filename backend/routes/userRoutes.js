const express = require('express');
const { 
    createUser,
    loginUser,
    getProfile,
    deleteUser,
    refreshToken
} = require('@controllers/userController.js');
const { validateAuth } = require('@middlewares/authMiddleware.js');
const { validateUserInput } = require('@middlewares/validationMiddleware.js');

const router = express.Router();

// Auth routes
router.post('/register', validateUserInput, createUser);
router.post('/login', validateUserInput, loginUser);
router.post('/refresh-token', refreshToken);

// Protected routes (require authentication)
router.get('/profile', validateAuth, getProfile);
router.delete('/account', validateAuth, deleteUser);

module.exports = router;