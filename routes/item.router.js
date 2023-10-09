const Router = require('express')
const router = new Router()
const itemController = require('../controller/item.controller')
const {body} = require('express-validator');

router.get('/items/', itemController.getItems);
router.get('/items/:id', itemController.getItem);
router.put('/items/', [
    body('id').trim().notEmpty(),
    body('name').trim().notEmpty(),
    body('description').trim().notEmpty(),
    body('category').trim().notEmpty(),
    body('cost').trim().notEmpty()
], itemController.updateItem);
router.post('/items/', [
    body('name').trim().notEmpty().isLength({min: 3, max: 30}),
    body('description').trim().notEmpty().isLength({min: 3, max: 100}),
    body('category').trim().notEmpty().isLength({min: 3, max: 30}),
    body('cost').trim().notEmpty().isLength({min: 1, max: 17})
],itemController.addItem);
router.delete('/items/:id', itemController.deleteItem);
module.exports = router
