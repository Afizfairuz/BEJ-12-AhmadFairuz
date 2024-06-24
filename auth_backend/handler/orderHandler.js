class OrderHandler {
  constructor() {
    this.orderService = new OrderService();

    // Binding methods
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.addOrder = this.addOrder.bind(this);
    this.deleteOrderById = this.deleteOrderById.bind(this);
  }

  async getAll(req, res) {
    try {
      const orders = await this.orderService.getAllOrders();
      res.status(200).json({ orders });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const order = await this.orderService.getOrderById(id);
      if (order) {
        res.status(200).json({ order });
      } else {
        res.status(404).json({ message: `Order with id ${id} not found` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async addOrder(req, res) {
    const newOrder = req.body;
    try {
      const addedOrder = await this.orderService.addOrder(newOrder);
      res
        .status(201)
        .json({ message: "Order added successfully", order: addedOrder });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteOrderById(req, res) {
    const { id } = req.params;
    try {
      const deletedOrder = await this.orderService.deleteOrderById(id);
      if (deletedOrder) {
        res
          .status(200)
          .json({ message: `Order with id ${id} deleted successfully` });
      } else {
        res.status(404).json({ message: `Order with id ${id} not found` });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OrderHandler;
