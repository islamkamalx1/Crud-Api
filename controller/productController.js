const productModel = require("../model/productModel");

const all_product_get = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const single_product_get = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const create_product_post = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const single_product_put = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndUpdate(id, req.body);

    // PRODUCT CANNOT UPDATED
    if (!product) {
      return res.status(404).json(`we cannot find any product with id ${id}`);
    }

    const updatedProduct = await productModel.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const remove_product_delete = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json(`we cannot find any product with id ${id}`);
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  all_product_get,
  single_product_get,
  single_product_put,
  create_product_post,
  remove_product_delete,
};
