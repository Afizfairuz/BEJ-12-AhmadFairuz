const { Item } = require('../../models/item')

class ItemRepository {
  constructor() {}

  async getAll() {
    const getItems =
      await pgConn`SELECT id, name, description, price, stock FROM items`;
    return getItems;
  }

  async getById(id) {
    const getItem = await pgConn`
      SELECT id, name, description, price, stock
      FROM items
      WHERE id = ${id}`;
    return getItem;
  }

  async insert(item) {
    console.log("Data yang akan disimpan:", item);
    const createdItem = await pgConn`
      INSERT INTO items (name, description, price, stock)
      VALUES (${item.name}, ${item.description}, ${item.price}, ${item.stock})
      RETURNING *`;

    return createdItem;
  }

  async updateById(id, updates) {
    const updatedItem = await pgConn`
      UPDATE items
      SET name = ${updates.name}, description = ${updates.description}, price = ${updates.price}, stock = ${updates.stock}
      WHERE id = ${id}
      RETURNING *`;

    return updatedItem;
  }

  async deleteById(id) {
    const deletedItem = await pgConn`
      DELETE FROM items
      WHERE id = ${id}
      RETURNING *`;

    return deletedItem;
  }
}

module.exports = ItemRepository;
