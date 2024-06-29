class ItemHandler {
  constructor(itemService) {
    this.itemService = itemService;
  }

  async getAll(req, res) {
    try {
      const items = await this.itemService.getAll();
      res.status(200).json(items);
    } catch (err) {
      console.error("Error getting items:", err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const item = await this.itemService.getById(id);
      if (!item) {
        res.status(404).json({ error: "Item not found" });
      } else {
        res.status(200).json(item);
      }
    } catch (err) {
      console.error(`Error getting item with id ${id}:`, err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async create(req, res) {
    const newItem = req.body;
    try {
      const createdItem = await this.itemService.create(newItem);
      res.status(201).json(createdItem);
    } catch (err) {
      console.error("Error creating item:", err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async updateById(req, res) {
    const { id } = req.params;
    const updates = req.body;
    try {
      const updatedItem = await this.itemService.updateById(id, updates);
      if (!updatedItem) {
        res.status(404).json({ error: "Item not found" });
      } else {
        res.status(200).json(updatedItem);
      }
    } catch (err) {
      console.error(`Error updating item with id ${id}:`, err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async deleteById(req, res) {
    const { id } = req.params;
    try {
      const deletedItem = await this.itemService.deleteById(id);
      if (!deletedItem) {
        res.status(404).json({ error: "Item not found" });
      } else {
        res.status(200).json(deletedItem);
      }
    } catch (err) {
      console.error(`Error deleting item with id ${id}:`, err);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
}

module.exports = ItemHandler;
