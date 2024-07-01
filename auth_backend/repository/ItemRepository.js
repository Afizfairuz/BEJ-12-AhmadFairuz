const { Item } = require("../../models/item");

class ItemRepository {
  constructor() {
    this.Item = Item;
  }

  async getAllItems() {
    return await this.Item.findAll();
  }

  async getItemById(id) {
    return await this.Item.findByPk(id);
  }

  async createItem(itemData) {
    return await this.Item.create(itemData);
  }

  async updateItem(id, itemData) {
    const item = await this.Item.findByPk(id);
    if (!item) {
      throw new Error("Item not found");
    }
    return await item.update(itemData);
  }

  async deleteItem(id) {
    const item = await this.Item.findByPk(id);
    if (!item) {
      throw new Error("Item not found");
    }
    await item.destroy();
    return true;
  }
}

module.exports = ItemRepository;
