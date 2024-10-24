const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { validateItem } = require('../middlewares/validateItems');


//Create
router.post('/items', validateItem, itemController.createItem);

//Read
router.get('/items', itemController.getAllItem);

//update
router.put('/items/:id', validateItem, itemController.updateItem);

//delete
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
