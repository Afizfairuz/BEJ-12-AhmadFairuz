class OrderHandler {
  constructor(orderService) {
    this.orderService = orderService;

    // Binding
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.updateById = this.updateById.bind(this);
    this.deleteById = this.deleteById.bind(this);
  }

  async getAll(req, res) {
    try {
      const orders = await this.orderService.getAll();
      res.status(200).json({ orders });
    } catch (err) {
      console.error("Error getting orders:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getById(req, res) {
    try {
      const orderId = req.params.id;
      const order = await this.orderService.getById(orderId);
      if (!order) {
        res.status(404).json({ message: "Order not found" });
        return;
      }
      res.status(200).json({ order });
    } catch (err) {
      console.error("Error getting order by id:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async create(req, res) {
    try {
      const newOrder = req.body;
      const createdOrder = await this.orderService.create(newOrder);
      res.status(201).json({ createdOrder });
    } catch (err) {
      console.error("Error creating order:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async updateById(req, res) {
    try {
      const orderId = req.params.id;
      const updates = req.body;
      const updatedOrder = await this.orderService.updateById(orderId, updates);
      if (!updatedOrder) {
        res.status(404).json({ message: "Order not found" });
        return;
      }
      res.status(200).json({ updatedOrder });
    } catch (err) {
      console.error("Error updating order:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async deleteById(req, res) {
    try {
      const orderId = req.params.id;
      const deletedOrder = await this.orderService.deleteById(orderId);
      if (!deletedOrder) {
        res.status(404).json({ message: "Order not found" });
        return;
      }
      res.status(200).json({ deletedOrder });
    } catch (err) {
      console.error("Error deleting order:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = OrderHandler;
