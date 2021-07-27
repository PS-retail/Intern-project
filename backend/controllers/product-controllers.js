const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Product = require("../models/product");

const getProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find({});
  } catch (err) {
    const error = new HttpError("Fetching products failed.", 500);
    return next(error);
  }

  res.json({ products: products.map((product) => product.toObject({ getters: true })) });
};

const createProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, type } = req.body;

  let existingProduct;
  try {
    existingProduct = await Product.findOne({ name: name });
  } catch (err) {
    const error = new HttpError(
      "Creating Product Failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingProduct) {
    const error = new HttpError(
      "Product exists already!",
      422
    );
    return next(error);
  }

  const createdProduct = new Product({
    name,
    type,
  });

  try {
    await createdProduct.save();
  } catch (err) {
    const error = new HttpError(
      "Creating product failed, please try again later.",
      500
    );
    return next(error);
  }

  res
    .status(201)
    .json({
      user: createdProduct.toObject({ getters: true }),
      message: "Creation Successfull",
    });
};

exports.getProducts = getProducts;
exports.createProduct = createProduct;
