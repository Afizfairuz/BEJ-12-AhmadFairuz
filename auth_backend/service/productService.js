const ProductRepository = require("../repository/ProductRepository");

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getAllProducts() {
    const products = await this.productRepository.getAll();
    return products;
  }

  async getProductById(id) {
    const product = await this.productRepository.getById(id);
    return product;
  }

  async createProduct(productData) {
    const newProduct = await this.productRepository.create(productData);
    return newProduct;
  }

  async updateProduct(id, productData) {
    const updatedProduct = await this.productRepository.update(id, productData);
    return updatedProduct;
  }

  async deleteProduct(id) {
    const deletedProduct = await this.productRepository.delete(id);
    return deletedProduct;
  }
}

module.exports = ProductService;