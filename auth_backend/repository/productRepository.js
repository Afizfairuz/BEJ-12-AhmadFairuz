const pgConn = require('../config/postgres')
  

class ProductRepository {
  constructor() { }

  async getAll() {
    const getProducts = await pgConn`select id, name, price, from products`;
    return getProducts;
  }

  // Menambahkan produk baru
  insert(product) {
    this.products.push(product);
    return product;
  }
}

module.exports = ProductRepository;
