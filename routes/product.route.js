const express = require('express');
const router = express.Router();
const controller = require("../controllers/product.controller")



router.get("/product/:category",controller.getProducts);

// get as post method
router.post("/send",controller.postProduct)
//updating product
router.put("/product/update/:id", controller.putProduct);
//deleting product by using id
router.delete("/product/delete/:id", controller.deleteProduct);

module.exports = router;