const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.post('/users/', userController.addUser);
router.delete('/users/', userController.deleteUser);
module.exports = router