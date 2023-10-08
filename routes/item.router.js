const Router = require('express')
const router = new Router()
const itemController = require('../controller/item.controller')
const {body} = require('express-validator');

router.get('/items/', itemController.getItems);
router.get('/items/:id', itemController.getItem);
router.put('/items/', [
    body('id').trim().notEmpty(),
    body('name').trim().notEmpty()
], itemController.updateItem);
router.post('/items/', [
    body('name').trim().notEmpty().isLength({min: 3, max: 30})
],itemController.addItem);
router.delete('/items/:id', itemController.deleteItem);
module.exports = router
