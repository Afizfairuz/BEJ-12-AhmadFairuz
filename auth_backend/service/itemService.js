const ItemRepository = require("../repository/ItemRepository");

class ItemService {
  constructor(itemRepository) {
    this.itemRepository = itemRepository;
  }

  async getAllItems() {
    try {
      return await this.itemRepository.getAllItems();
    } catch (error) {
      throw new Error(`Failed to fetch items: ${error.message}`);
    }
  }

  async getItemById(id) {
    try {
      return await this.itemRepository.getItemById(id);
    } catch (error) {
      throw new Error(`Failed to fetch item: ${error.message}`);
    }
  }

  async createItem(itemData) {
    try {
      return await this.itemRepository.createItem(itemData);
    } catch (error) {
      throw new Error(`Failed to create item: ${error.message}`);
    }
  }

  async updateItem(id, itemData) {
    try {
      return await this.itemRepository.updateItem(id, itemData);
    } catch (error) {
      throw new Error(`Failed to update item: ${error.message}`);
    }
  }

  async deleteItem(id) {
    try {
      return await this.itemRepository.deleteItem(id);
    } catch (error) {
      throw new Error(`Failed to delete item: ${error.message}`);
    }
  }
}

module.exports = ItemService;
