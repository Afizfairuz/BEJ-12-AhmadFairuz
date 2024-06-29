class ItemService {
  constructor(itemRepository) {
    this.itemRepository = itemRepository;
  }

  async getAll() {
    const items = await this.itemRepository.getAll();
    return items;
  }

  async getById(id) {
    const item = await this.itemRepository.getById(id);
    return item;
  }

  async create(item) {
    const createdItem = await this.itemRepository.insert(item);
    return createdItem;
  }

  async updateById(id, updates) {
    const updatedItem = await this.itemRepository.updateById(id, updates);
    return updatedItem;
  }

  async deleteById(id) {
    const deletedItem = await this.itemRepository.deleteById(id);
    return deletedItem;
  }
}

module.exports = ItemService;
