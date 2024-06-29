const pgConn = require("../config/postgres");

class ItemRepository {
  constructor() {}

  async getAll() {
    const getItems = await pgConn`select id, name, quantity, price from items`;
    return getItems;
  }

  async getById(id) {
    const getItem =
      await pgConn`select id, name, quantity, price from items where id = ${id}`;
    return getItem;
  }

  async insert(item) {
    const createdItem = await pgConn`
      insert into items (name, quantity, price)
      values (${item.name}, ${item.quantity}, ${item.price})
      returning *`; // returning the inserted item

    return createdItem;
  }

  async updateById(id, updates) {
    const updatedItem = await pgConn`
      update items set name = ${updates.name}, quantity = ${updates.quantity}, price = ${updates.price}
      where id = ${id}
      returning *`; // returning the updated item

    return updatedItem;
  }

  async deleteById(id) {
    const deletedItem = await pgConn`
      delete from items
      where id = ${id}
      returning *`; // returning the deleted item

    return deletedItem;
  }
}

module.exports = ItemRepository;
