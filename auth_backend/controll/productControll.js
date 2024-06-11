const ProductService = require("../services/productService");

class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async getProductList(req, res, next) {
    try {
      const products = await this.productService.getList();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    const productId = req.params.id;
    try {
      const product = await this.productService.getProductById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req, res, next) {
    const productData = req.body;
    try {
      const newProduct = await this.productService.createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    const productId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedProduct = await this.productService.updateProduct(
        productId,
        updatedData
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    const productId = req.params.id;
    try {
      await this.productService.deleteProduct(productId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
