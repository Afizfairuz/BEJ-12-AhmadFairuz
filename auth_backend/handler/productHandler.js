const ProductService = require("../service/productService");

class ProductHandler {
  constructor() {
    this.productService = new ProductService();
  }

  async getAll(req, res) {
    try {
      const products = await this.productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const product = await this.productService.getProductById(id);
      if (!product) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.json(product);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    const productData = req.body;
    try {
      const newProduct = await this.productService.createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateById(req, res) {
    const { id } = req.params;
    const productData = req.body;
    try {
      const updatedProduct = await this.productService.updateProduct(
        id,
        productData
      );
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const deletedProduct = await this.productService.deleteProduct(id);
      res.json(deletedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = ProductHandler;