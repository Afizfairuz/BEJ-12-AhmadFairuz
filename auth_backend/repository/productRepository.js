const pgConn = require("../config/postgres");

class ProductRepository {
  async getAll() {
    const productList = await Product.findAll();
    return productList;
  }

  async getById(id) {
    const product = await Product.findByPk(id);
    return product;
  }

  async create(productData) {
    const newProduct = await Product.create(productData);
    return newProduct;
  }

  async update(id, productData) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error("Product not found");
    }
    await product.update(productData);
    return product;
  }

  async delete(id) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error("Product not found");
    }
    await product.destroy();
    return product;
  }
}

module.exports = ProductRepository;