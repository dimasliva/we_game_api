const {body} = require('express-validator');

const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
const taskController = require('../controller/task.controller')

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/', [
    body('id').trim().notEmpty(),
    body('name').trim().notEmpty(),
    body('money').trim().notEmpty(),
    body('weight').trim().notEmpty(),
    body('age').trim().notEmpty(),
    body('energy').trim().notEmpty(),
    body('health').trim().notEmpty(),
    body('hungry').trim().notEmpty(),
    body('power').trim().notEmpty(),
    body('intellect').trim().notEmpty(),
    body('lucky').trim().notEmpty(),
    body('dirty').trim().notEmpty(),
    body('drivecategory').trim().notEmpty(),
    body('profession').trim().notEmpty(),
    body('created_at').trim().notEmpty()
    ],
    userController.updateUser);
router.post('/users/', [
    body('id').trim().notEmpty(),
    body('name').trim().notEmpty()
], userController.addUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTask);
router.put('/tasks/', taskController.updateTask);
router.post('/tasks/', taskController.addTask);
router.delete('/tasks/:id', taskController.deleteTask);
module.exports = router