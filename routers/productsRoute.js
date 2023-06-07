const express = require("express");
const productController = require("../controller/productController");
const router = express.Router();

// **** GET ALL PRODUCTS FROM DB ****
router.get("/", productController.all_product_get);

// **** GET SINGLE PRODUCTS FROM DB BY ID ****
router.get("/:id", productController.single_product_get);

// **** CREATE PRODUCT AND SAVE TO DB ********
router.post("/", productController.create_product_post);

// **** UPDATE SINGLE PRODUCTS FROM DB BY ID ****
router.put("/:id", productController.single_product_put);

// **** DELETE SINGLE PRODUCT FROM DB BY ID ****
router.delete("/:id", productController.remove_product_delete);

module.exports = router;
