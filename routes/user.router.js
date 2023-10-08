const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
const taskController = require('../controller/task.controller')

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/', userController.updateUser);
router.post('/users/', userController.addUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/items/', userController.getUsers);
router.get('/items/:id', userController.getUser);
router.put('/items/', userController.updateUser);
router.post('/items/', userController.addUser);
router.delete('/items/:id', userController.deleteUser);

router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTask);
router.put('/tasks/', taskController.updateTask);
router.post('/tasks/', taskController.addTask);
router.delete('/tasks/:id', taskController.deleteTask);
module.exports = router