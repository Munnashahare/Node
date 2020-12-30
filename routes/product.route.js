const express = require('express');
const router = express.Router();
const {getProducts,postProduct} = require("../controllers/product.controller")



router.get("/product/:category",getProducts);

// get as post method
router.get("/addp",postProduct)

module.exports = router;