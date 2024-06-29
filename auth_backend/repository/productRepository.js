const pgConn = require("../config/postgres");

class ProductRepository {
  constructor() {}

  async getAll() {
    const getProducts = await pgConn`select id, name, price from products`;
    return getProducts;
  }

  async insert(product) {
    const createdProduct = await pgConn`
      insert into products (name, price) values (${product.name}, ${product.price})
      returning *`; // returning the inserted product

    return createdProduct;
  }

  async updateById(id, updates) {
    const updatedProduct = await pgConn`
      update products set name = ${updates.name}, price = ${updates.price}
      where id = ${id}
      returning *`; // returning the updated product

    return updatedProduct;
  }
}

module.exports = ProductRepository;
