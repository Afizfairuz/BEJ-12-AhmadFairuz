class ProductRepository {
  constructor() {
    this.products = [];
  }

  getList() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  updateProduct(id, updateData) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updateData };
    }
  }

  deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}

module.exports = ProductRepository;
