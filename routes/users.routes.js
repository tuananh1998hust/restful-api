const express = require('express');
const router = express.Router();

// Users Controller 
const usersController = require('../controller/users.controller');

// get all users
// get api/users
router.get('/', usersController.getUsers);

// create new users
// post api/users
router.post('/', usersController.postUser);

// delete a users
// delete api/users/:id
router.delete('/:id', usersController.deleteUser);

module.exports = router;