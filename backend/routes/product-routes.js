const express = require('express');
const { check } = require('express-validator');

const productControllers = require('../controllers/product-controllers');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.get('/', productControllers.getProducts);

router.post('/', productControllers.createProduct);


module.exports = router;